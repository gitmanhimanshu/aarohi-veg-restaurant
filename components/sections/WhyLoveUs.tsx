'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealGroup, itemVariants } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { lovePoints, lovedDishes } from '@/lib/data';
import { Quote } from 'lucide-react';

export function WhyLoveUs() {
  return (
    <section className="section relative overflow-hidden bg-forest text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:28px_28px]" />
      </div>
      <div className="container-px relative">
        <SectionHeading
          light
          kicker="Why Guests Love Us"
          title={<>What keeps Daryaganj coming back</>}
          subtitle="A look at the themes our guests mention most across Google, magicpin & in person."
        />

        {/* Stat cards */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lovePoints.map((p) => (
            <motion.div
              key={p.label}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-white/5 p-7 transition-colors hover:border-gold/30"
            >
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-400">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <p className="font-serif text-4xl font-bold text-gold-400">{p.stat}</p>
              <p className="mt-2 text-sm leading-snug text-cream/70">{p.label}</p>
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </RevealGroup>

        {/* Most-loved dishes ribbon */}
        <Reveal delay={2}>
          <div className="mt-12 rounded-3xl border border-cream/10 bg-white/5 p-7 md:p-9">
            <div className="flex items-center gap-3">
              <Quote className="h-6 w-6 shrink-0 text-gold-400" />
              <p className="text-sm font-semibold uppercase tracking-widest text-cream/60">
                Most-loved on the menu
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {lovedDishes.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-400 transition-colors hover:bg-gold/20"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
