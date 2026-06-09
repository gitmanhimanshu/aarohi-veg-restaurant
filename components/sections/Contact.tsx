'use client';

import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { restaurant, links } from '@/lib/data';

export function Contact() {
  const cards = [
    {
      icon: Phone,
      label: 'Call us',
      value: restaurant.phoneDisplay,
      href: links.tel,
      action: 'Tap to call',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: restaurant.phoneDisplay,
      href: links.whatsapp,
      action: 'Message us',
    },
    {
      icon: Mail,
      label: 'Email',
      value: restaurant.email,
      href: `mailto:${restaurant.email}`,
      action: 'Send an email',
    },
    {
      icon: Navigation,
      label: 'Directions',
      value: 'Daryaganj, New Delhi',
      href: links.directions,
      action: 'Open in Maps',
    },
  ];

  return (
    <section id="contact" className="section bg-cream">
      <div className="container-px">
        <SectionHeading
          kicker="Contact Us"
          title={<>We&apos;d love to hear from you</>}
          subtitle="Reservations, large groups, feedback or just a craving — reach out any time."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-forest/8 bg-cream-100 p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-luxe"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest text-gold-400 transition-transform group-hover:scale-110">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs uppercase tracking-wide text-forest-700/50">{c.label}</p>
                  <p className="mt-1 font-semibold text-forest">{c.value}</p>
                  <p className="mt-3 text-sm font-medium text-gold-600">{c.action} →</p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Hours + address panel */}
          <Reveal delay={1}>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-forest-radial p-7 text-cream shadow-luxe md:p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold-400" />
                <div>
                  <p className="font-semibold">Visit us</p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">{restaurant.addressFull}</p>
                </div>
              </div>

              <div className="h-px bg-cream/10" />

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-gold-400" />
                <div className="w-full">
                  <p className="font-semibold">Opening hours</p>
                  <div className="mt-3 flex flex-col gap-1.5 text-sm text-cream/70">
                    <Row day="Monday – Friday" time="8:00 AM – 11:00 PM" />
                    <Row day="Saturday – Sunday" time="8:00 AM – 11:00 PM" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-cream/10" />

              <div>
                <p className="mb-3 font-semibold">Follow us</p>
                <div className="flex gap-3">
                  <Social href={restaurant.social.instagram} icon={Instagram} label="Instagram" />
                  <Social href={restaurant.social.facebook} icon={Facebook} label="Facebook" />
                  <Social href={restaurant.social.magicpin} icon={MapPin} label="magicpin" />
                </div>
              </div>

              <a href="#reserve" className="btn-gold mt-auto">
                Reserve a Table
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ day, time }: { day: string; time: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{day}</span>
      <span className="font-medium text-cream/90">{time}</span>
    </div>
  );
}

function Social({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Instagram;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 bg-white/5 text-cream/80 transition-colors hover:border-gold/40 hover:bg-gold/10 hover:text-gold-400"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
