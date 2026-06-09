'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { restaurant } from '@/lib/data';

export function ReviewCTA() {
  return (
    <section className="surface-light py-12">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gold-sheen px-6 py-12 text-center text-forest-700 shadow-gold md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0E3B2E_1px,transparent_0)] [background-size:24px_24px]" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="mx-auto mb-5 flex justify-center gap-1"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-forest text-forest" />
                ))}
              </motion.div>
              <h2 className="heading-serif text-3xl text-forest-700 md:text-4xl">
                Enjoyed your experience? Leave us a review!
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-forest-700/80">
                Your kind words help more food-loving families in Delhi discover Aarohi. It takes just
                a minute — and it means the world to us.
              </p>
              <a
                href={restaurant.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-luxe transition-transform hover:-translate-y-0.5"
              >
                Write a Google Review <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
