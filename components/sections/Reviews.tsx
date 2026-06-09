'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { reviews, restaurant } from '@/lib/data';
import { cn } from '@/lib/utils';

const sourceColor: Record<string, string> = {
  Google: 'bg-[#4285F4]/10 text-[#4285F4]',
  magicpin: 'bg-ember-500/10 text-ember-600',
  Zomato: 'bg-[#E23744]/10 text-[#E23744]',
  'Walk-in': 'bg-forest/10 text-forest',
};

export function Reviews() {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState<string>('All');

  const sources = ['All', 'Google', 'magicpin', 'Zomato', 'Walk-in'];
  const list = filter === 'All' ? reviews : reviews.filter((r) => r.source === filter);
  const perPage = 3;
  const pages = Math.max(1, Math.ceil(list.length / perPage));
  const safePage = Math.min(page, pages - 1);
  const visible = list.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <section id="reviews" className="section surface-light">
      <div className="container-px">
        <SectionHeading
          kicker="Guest Reviews"
          title={
            <>
              Loved by <span className="gold-text">{restaurant.reviewCount}+</span> diners
            </>
          }
          subtitle="Real sentiment from across Google, magicpin, Zomato and our walk-in guests."
        />

        {/* Average banner */}
        <Reveal>
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 rounded-3xl border border-gold/20 bg-gold/5 px-6 py-6 sm:flex-row sm:justify-center sm:gap-6">
            <div className="text-center">
              <p className="font-serif text-5xl font-bold text-forest">{restaurant.rating}</p>
              <div className="mt-1 flex justify-center gap-0.5 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="hidden h-12 w-px bg-gold/30 sm:block" />
            <p className="max-w-xs text-center text-sm text-forest-700/70 sm:text-left">
              Rated <strong className="text-forest">{restaurant.rating}/5</strong> across{' '}
              {restaurant.reviewCount}+ reviews — among the highest-rated pure-veg spots in Daryaganj.
            </p>
          </div>
        </Reveal>

        {/* Source filter */}
        <div className="no-scrollbar mt-8 flex justify-start gap-2 overflow-x-auto sm:justify-center">
          {sources.map((s) => (
            <button
              key={s}
              onClick={() => {
                setFilter(s);
                setPage(0);
              }}
              className={cn(
                'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors',
                filter === s
                  ? 'bg-forest text-cream'
                  : 'bg-cream-200 text-forest-700/70 hover:bg-forest/10'
              )}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 min-h-[20rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${safePage}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {visible.map((r) => (
                <article
                  key={r.name + r.date}
                  className="flex flex-col rounded-3xl border border-forest/8 bg-cream-100 p-6 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-gold/40" />
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-1 text-[11px] font-semibold',
                        sourceColor[r.source]
                      )}
                    >
                      {r.source}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-0.5 text-gold-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
                    “{r.text}”
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-forest/5 px-2.5 py-0.5 text-[11px] text-forest-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 border-t border-forest/8 pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-sm font-bold text-gold-400">
                      {r.initial}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-forest">{r.name}</p>
                      <p className="text-xs text-forest-700/50">{r.date}</p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pager */}
        {pages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => (p - 1 + pages) % pages)}
              className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 text-forest hover:bg-forest/5"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === safePage ? 'w-6 bg-gold' : 'w-2 bg-forest/20'
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p + 1) % pages)}
              className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 text-forest hover:bg-forest/5"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
