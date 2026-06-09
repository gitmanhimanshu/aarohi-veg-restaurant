'use client';

import { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Train, Car, Clock, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { restaurant, links } from '@/lib/data';

const nearby = [
  { icon: Train, label: 'Delhi Gate Metro (Violet Line)', detail: '~1.2 km · 5 min drive' },
  { icon: Train, label: 'Chawri Bazaar Metro (Yellow Line)', detail: '~1.8 km · 7 min drive' },
  { icon: Car, label: 'Street & paid parking nearby', detail: 'Along Netaji Subhash Marg' },
  { icon: MapPin, label: 'Near Golcha Cinema & Delite Cinema', detail: 'Central Daryaganj landmark' },
];

export function Location() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(restaurant.addressFull);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="location" className="section bg-cream-200/60">
      <div className="container-px">
        <SectionHeading
          kicker="Find Us"
          title={<>In the heart of Daryaganj</>}
          subtitle="Easy to reach by metro, auto or car — right on Netaji Subhash Marg."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <Reveal className="overflow-hidden rounded-3xl border border-forest/10 shadow-card">
            <div className="relative h-[22rem] w-full lg:h-full lg:min-h-[26rem]">
              <iframe
                title="Aarohi Veg Restaurant location map"
                src={links.mapEmbed}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={1} className="flex flex-col gap-5">
            <div className="card-luxe p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-gold-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-forest">Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-forest-700/70">
                    {restaurant.address.line1}, {restaurant.address.line2},
                    <br />
                    {restaurant.address.city}, {restaurant.address.state} {restaurant.address.pincode}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
                <button onClick={copy} className="btn-ghost">
                  {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy Address'}
                </button>
              </div>
            </div>

            {/* Quick contact row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href={links.tel} className="card-luxe flex items-center gap-3 p-5 transition-transform hover:-translate-y-1">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-forest-700/50">Call us</p>
                  <p className="text-sm font-semibold text-forest">{restaurant.phoneDisplay}</p>
                </div>
              </a>
              <div className="card-luxe flex items-center gap-3 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-forest-700/50">Open daily</p>
                  <p className="text-sm font-semibold text-forest">8:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Nearby / connectivity */}
            <div className="card-luxe p-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-forest-700/60">
                Getting here
              </p>
              <ul className="flex flex-col gap-4">
                {nearby.map((n) => (
                  <li key={n.label} className="flex items-start gap-3">
                    <n.icon className="mt-0.5 h-5 w-5 shrink-0 text-forest/50" />
                    <div>
                      <p className="text-sm font-medium text-forest">{n.label}</p>
                      <p className="text-xs text-forest-700/55">{n.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
