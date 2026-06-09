'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { reviewInsights } from '@/lib/data';

const overall =
  reviewInsights.reduce((s, r) => s + r.score, 0) / reviewInsights.length;

export function ReviewInsights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section relative overflow-hidden bg-forest text-cream">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-px relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* Left: dial */}
        <div className="lg:col-span-5">
          <SectionHeading
            light
            align="left"
            kicker="Review Insights"
            title={<>The numbers behind the love</>}
            subtitle="An at-a-glance sentiment breakdown synthesised from our public ratings and recurring guest feedback."
          />

          <Reveal delay={3}>
            <div className="mt-8 inline-flex items-center gap-5 rounded-3xl border border-cream/10 bg-white/5 p-6">
              <div className="relative grid h-28 w-28 place-items-center">
                <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(251,247,239,0.12)" strokeWidth="10" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#C8A04B"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    animate={
                      inView
                        ? { strokeDashoffset: 2 * Math.PI * 52 * (1 - overall / 5) }
                        : {}
                    }
                    transition={{ duration: 1.6, ease: 'easeOut' }}
                  />
                </svg>
                <span className="absolute font-serif text-2xl font-bold text-gold-400">
                  <Counter value={overall} decimals={1} />
                </span>
              </div>
              <div ref={ref}>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                  <TrendingUp className="h-4 w-4" /> Overall sentiment
                </p>
                <p className="mt-1 max-w-[12rem] text-sm text-cream/65">
                  An exceptional <strong className="text-cream">{overall.toFixed(1)}/5</strong>{' '}
                  composite across every quality dimension.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: bars */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
            {reviewInsights.map((r, i) => (
              <div key={r.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-cream/85">{r.label}</span>
                  <span className="font-serif text-sm font-bold text-gold-400">
                    {r.score.toFixed(1)}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(r.score / 5) * 100}%` } : {}}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gold-sheen"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
