'use client';

import { Counter } from '@/components/ui/Counter';
import { Reveal, RevealGroup, itemVariants } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { trustMetrics, trustBadges } from '@/lib/data';
import { motion } from 'framer-motion';

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-px bg-forest text-cream">
      <div className="container-px py-14 md:py-16">
        {/* Counters */}
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {trustMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i} className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-400 md:text-5xl">
                <Counter value={m.value} decimals={m.decimals} suffix={m.suffix} />
              </p>
              <p className="mx-auto mt-2 max-w-[10rem] text-xs uppercase tracking-wider text-cream/60 md:text-sm">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Badges */}
        <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((b) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream/10 bg-white/5 p-5 text-center transition-colors hover:border-gold/30 hover:bg-white/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-400 transition-transform group-hover:scale-110">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-cream">{b.title}</p>
                <p className="mt-1 text-xs leading-snug text-cream/55">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
