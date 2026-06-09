'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { about, gallery, restaurant } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden surface-light">
      {/* decorative */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-px grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Images */}
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-luxe">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="(max-width:1024px) 100vw, 28rem"
                className="object-cover"
              />
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute -bottom-8 -right-2 w-52 overflow-hidden rounded-2xl border-4 border-cream shadow-luxe sm:right-8 lg:-right-10"
          >
            <div className="relative aspect-square">
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                sizes="13rem"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Est. badge */}
          <div className="absolute -left-3 top-8 hidden rounded-2xl border border-gold/25 bg-forest p-4 text-center text-cream shadow-gold sm:block">
            <p className="font-serif text-3xl font-bold text-gold-400">{restaurant.rating}</p>
            <p className="text-[10px] uppercase tracking-widest text-cream/60">Rated</p>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" /> {about.kicker}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="heading-serif mt-4 text-3xl sm:text-4xl md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          {about.body.map((p, i) => (
            <Reveal key={i} delay={2 + i}>
              <p className="mt-5 text-base leading-relaxed text-forest-700/75 md:text-lg">{p}</p>
            </Reveal>
          ))}

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={4 + i}>
                <div className="flex items-start gap-4 rounded-2xl border border-forest/8 bg-cream-100 p-4 shadow-card transition-transform hover:-translate-y-1">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-forest">{v.title}</p>
                    <p className="mt-0.5 text-sm leading-snug text-forest-700/65">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
