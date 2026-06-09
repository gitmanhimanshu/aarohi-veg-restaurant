'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Phone, MessageCircle, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { restaurant, links, heroImage } from '@/lib/data';
import { useOpenStatus } from '@/lib/useOpenStatus';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const open = useOpenStatus();

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Aarohi Veg Restaurant signature vegetarian spread"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-radial opacity-[0.92]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/70" />
        {/* decorative gold orbits */}
        <div className="absolute -right-40 top-1/4 h-[36rem] w-[36rem] animate-spin-slow rounded-full border border-gold/10" />
        <div className="absolute -left-52 bottom-0 h-[40rem] w-[40rem] animate-spin-slow rounded-full border border-gold/5" />
      </div>

      <div className="container-px relative grid w-full grid-cols-1 items-center gap-12 pt-28 pb-20 lg:grid-cols-12 lg:pt-24">
        {/* Left copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="flex items-center gap-1 text-gold-400">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-bold text-cream">{restaurant.rating}</span>
            </span>
            <span className="h-3 w-px bg-cream/20" />
            <span className="text-sm text-cream/80">
              {restaurant.reviewCount}+ reviews · 100% Pure Veg
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="heading-serif text-balance text-4xl text-cream sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Authentic Vegetarian
            <br />
            Delights in the <span className="gold-text">Heart of Delhi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            {restaurant.subTagline} North Indian, South Indian &amp; Indo-Chinese —
            freshly made, family-friendly, and easy on the wallet.
          </motion.p>

          {/* Meta chips */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Chip icon={<MapPin className="h-4 w-4" />} text="Daryaganj, New Delhi" />
            <Chip
              icon={<Clock className="h-4 w-4" />}
              text={open.label}
              dot={open.isOpen ? 'open' : 'closed'}
            />
            <Chip icon={<UtensilsCrossed className="h-4 w-4" />} text="Dine-in · Takeaway" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#reserve" className="btn-gold">
              Reserve a Table <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#order" className="btn-white">
              Order Online
            </a>
            <a href={links.tel} className="btn-ghost border-cream/25 text-cream hover:bg-white/10">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-cream/25 text-cream hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right floating cards */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="relative mx-auto h-[30rem] w-[24rem]"
          >
            <div className="absolute inset-0 rotate-3 rounded-[2.5rem] border border-gold/20 bg-white/5 backdrop-blur-sm" />
            <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-luxe">
              <Image
                src={heroImage}
                alt="Pure veg thali at Aarohi"
                fill
                sizes="24rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
            </div>

            {/* Floating rating card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-10 w-44 rounded-2xl border border-gold/20 bg-cream/95 p-4 shadow-luxe backdrop-blur"
            >
              <div className="flex items-center gap-1 text-gold-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1 font-serif text-2xl font-bold text-forest">{restaurant.rating} / 5</p>
              <p className="text-xs text-forest-700/60">{restaurant.reviewCount}+ delighted guests</p>
            </motion.div>

            {/* Floating veg badge */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-6 bottom-12 w-40 rounded-2xl border border-forest/10 bg-cream/95 p-4 shadow-luxe backdrop-blur"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg border-2 border-green-600">
                <span className="h-3 w-3 rounded-full bg-green-600" />
              </div>
              <p className="mt-2 font-serif text-lg font-bold text-forest">100% Veg</p>
              <p className="text-xs text-forest-700/60">Pure vegetarian kitchen</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/30 pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </span>
      </motion.div>
    </section>
  );
}

function Chip({
  icon,
  text,
  dot,
}: {
  icon: React.ReactNode;
  text: string;
  dot?: 'open' | 'closed';
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/5 px-3.5 py-2 text-sm text-cream/85 backdrop-blur-md">
      <span className="text-gold-400">{icon}</span>
      {dot && (
        <span
          className={`h-2 w-2 rounded-full ${
            dot === 'open' ? 'bg-green-400' : 'bg-ember-400'
          } ${dot === 'open' ? 'animate-pulse' : ''}`}
        />
      )}
      {text}
    </span>
  );
}
