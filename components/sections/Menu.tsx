'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Flame, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { dishes, menuCategories, type MenuCategory } from '@/lib/data';
import { formatINR, cn } from '@/lib/utils';

const VegMark = () => (
  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-[3px] border border-green-600">
    <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
  </span>
);

type Tab = 'All' | MenuCategory;

export function Menu() {
  const [tab, setTab] = useState<Tab>('All');
  const [query, setQuery] = useState('');
  const [spicyOnly, setSpicyOnly] = useState(false);

  const tabs: Tab[] = ['All', ...menuCategories];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter((d) => {
      const okTab = tab === 'All' || d.category === tab;
      const okQuery =
        !q || d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q);
      const okSpicy = !spicyOnly || d.spicy;
      return okTab && okQuery && okSpicy;
    });
  }, [tab, query, spicyOnly]);

  // group by category for display when on "All"
  const grouped = useMemo(() => {
    const map = new Map<MenuCategory, typeof filtered>();
    filtered.forEach((d) => {
      map.set(d.category, [...(map.get(d.category) ?? []), d]);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <section id="menu" className="section bg-cream">
      <div className="container-px">
        <SectionHeading
          kicker="The Full Menu"
          title={<>Everything on the Aarohi table</>}
          subtitle="Search, filter and explore our complete pure-veg spread — from morning breakfast to late-night dessert."
        />

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-700/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="w-full rounded-full border border-forest/15 bg-cream-100 py-3 pl-11 pr-10 text-sm text-forest shadow-sm outline-none transition-colors placeholder:text-forest-700/40 focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-700/40 hover:text-forest"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Spicy filter */}
          <button
            onClick={() => setSpicyOnly((v) => !v)}
            className={cn(
              'inline-flex items-center gap-2 self-start rounded-full border px-4 py-2.5 text-sm font-medium transition-colors lg:self-auto',
              spicyOnly
                ? 'border-ember-500 bg-ember-500 text-cream'
                : 'border-forest/15 bg-cream-100 text-forest-700/70 hover:border-ember-400'
            )}
          >
            <Flame className="h-4 w-4" /> Spicy only
          </button>
        </div>

        {/* Tabs */}
        <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all',
                tab === t
                  ? 'bg-forest text-cream shadow-card'
                  : 'bg-cream-200 text-forest-700/70 hover:bg-forest/10'
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-10 min-h-[12rem]">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-forest-700/50">
              No dishes match “{query}”. Try another search.
            </p>
          ) : (
            <AnimatePresence mode="popLayout">
              {grouped.map(([cat, items]) => (
                <motion.div
                  key={cat}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-10"
                >
                  <h3 className="mb-5 flex items-center gap-3 font-serif text-xl font-semibold text-forest">
                    {cat}
                    <span className="gold-rule flex-1" />
                    <span className="text-sm font-normal text-forest-700/40">
                      {items.length}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
                    {items.map((d) => (
                      <motion.div
                        layout
                        key={d.name}
                        className="group flex items-start gap-3 border-b border-dashed border-forest/10 pb-5"
                      >
                        <VegMark />
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <h4 className="font-medium text-forest">
                              {d.name}
                              {d.spicy && (
                                <Flame className="ml-1.5 inline h-3.5 w-3.5 text-ember-500" />
                              )}
                              {d.badge && (
                                <span className="ml-2 align-middle text-[10px] font-bold uppercase tracking-wide text-gold-600">
                                  {d.badge}
                                </span>
                              )}
                            </h4>
                            <span className="shrink-0 font-semibold text-forest">
                              {formatINR(d.price)}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-snug text-forest-700/60">
                            {d.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        <p className="mt-2 text-center text-xs text-forest-700/40">
          Prices are indicative and inclusive of taxes where applicable. Menu subject to seasonal availability.
        </p>
      </div>
    </section>
  );
}
