'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Flame, Plus, X, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealGroup, itemVariants } from '@/components/ui/Reveal';
import { popularDishes, links, type Dish } from '@/lib/data';
import { formatINR, cn } from '@/lib/utils';

const VegMark = () => (
  <span className="grid h-4 w-4 place-items-center rounded-[3px] border border-green-600">
    <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
  </span>
);

export function PopularDishes() {
  const [active, setActive] = useState<Dish | null>(null);

  return (
    <section id="dishes" className="section surface-tint">
      <div className="container-px">
        <SectionHeading
          kicker="Signature Plates"
          title={<>Popular dishes our guests adore</>}
          subtitle="Hand-picked favourites that define the Aarohi table — fresh, generous and full of flavour."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularDishes.map((dish) => (
            <motion.article
              key={dish.name}
              variants={itemVariants}
              className="group card-luxe overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {dish.image && (
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {dish.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-gold-sheen px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-forest-700 shadow">
                    {dish.badge}
                  </span>
                )}
                <span className="absolute right-3 top-3 rounded-md bg-cream/90 p-1">
                  <VegMark />
                </span>

                <button
                  onClick={() => setActive(dish)}
                  className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-cream text-forest opacity-0 shadow-card transition-all duration-300 hover:bg-gold hover:text-forest-700 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-label={`Quick view ${dish.name}`}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold leading-tight text-forest">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 font-semibold text-gold-600">
                    {formatINR(dish.price)}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-snug text-forest-700/65">
                  {dish.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-forest-700/50">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                  <span>Guest favourite</span>
                  {dish.spicy && (
                    <>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1 text-ember-500">
                        <Flame className="h-3.5 w-3.5" /> Spicy
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center">
          <a href="#menu" className="btn-primary">
            Explore the full menu
          </a>
        </div>
      </div>

      {/* Quick view modal */}
      <AnimatePresence>
        {active && <QuickView dish={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function QuickView({ dish, onClose }: { dish: Dish; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] grid place-items-center bg-forest-900/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream-100 shadow-luxe"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-cream/90 text-forest shadow hover:bg-cream"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        {dish.image && (
          <div className="relative aspect-video">
            <Image src={dish.image} alt={dish.name} fill sizes="28rem" className="object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2">
            <VegMark />
            {dish.badge && (
              <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-bold uppercase text-gold-600">
                {dish.badge}
              </span>
            )}
          </div>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-forest">{dish.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-forest-700/70">{dish.description}</p>
          <div className="mt-5 flex items-center justify-between">
            <span className="font-serif text-2xl font-bold text-gold-600">
              {formatINR(dish.price)}
            </span>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('btn-primary')}
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
