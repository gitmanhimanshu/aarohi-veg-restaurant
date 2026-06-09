'use client';

import { Phone, MessageCircle, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { restaurant, links } from '@/lib/data';

const channels = [
  {
    name: 'Swiggy',
    desc: 'Order for delivery on Swiggy',
    href: 'https://www.swiggy.com/',
    cls: 'from-[#FC8019] to-[#E0712E]',
    icon: ShoppingBag,
    note: 'Search “Aarohi Veg, Daryaganj”',
  },
  {
    name: 'Zomato',
    desc: 'Delivery & dining on Zomato',
    href: restaurant.social.magicpin,
    cls: 'from-[#E23744] to-[#C75E21]',
    icon: ShoppingBag,
    note: 'Search “Aarohi Veg, Daryaganj”',
  },
  {
    name: 'WhatsApp Order',
    desc: 'Message us your order directly',
    href: links.whatsapp,
    cls: 'from-[#25D366] to-[#1B9E4B]',
    icon: MessageCircle,
    note: 'Fastest for takeaway',
  },
  {
    name: 'Call to Order',
    desc: restaurant.phoneDisplay,
    href: links.tel,
    cls: 'from-forest-500 to-forest-700',
    icon: Phone,
    note: 'Speak to us directly',
  },
];

export function OrderOnline() {
  return (
    <section id="order" className="section bg-cream">
      <div className="container-px">
        <SectionHeading
          kicker="Order Online"
          title={<>Craving Aarohi? Order in minutes</>}
          subtitle="Choose your favourite way to get our pure-veg food delivered or ready for pickup."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-forest/8 bg-cream-100 p-6 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-luxe"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.cls} text-white shadow`}
                >
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-forest">{c.name}</h3>
                <p className="mt-1 text-sm text-forest-700/65">{c.desc}</p>
                <p className="mt-4 text-xs text-forest-700/45">{c.note}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">
                  Order now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-forest-700/40">
          Aggregator links open the platform&apos;s search — the owner can replace these with the exact
          Swiggy/Zomato store URLs once live.
        </p>
      </div>
    </section>
  );
}
