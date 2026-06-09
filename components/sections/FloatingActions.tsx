'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, MessageCircle, Share2, ArrowUp, Check, CalendarCheck } from 'lucide-react';
import { restaurant, links } from '@/lib/data';

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const share = async () => {
    const data = {
      title: restaurant.name,
      text: `${restaurant.name} — pure-veg dining in Daryaganj, rated ${restaurant.rating}★`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      /* cancelled */
    }
  };

  return (
    <>
      {/* Desktop / tablet floating column */}
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-3 md:flex">
        <AnimatePresence>
          {show && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={share}
          aria-label="Share restaurant"
          className="grid h-12 w-12 place-items-center rounded-full bg-cream text-forest shadow-luxe transition-transform hover:-translate-y-0.5"
        >
          {shared ? <Check className="h-5 w-5 text-green-600" /> : <Share2 className="h-5 w-5" />}
        </button>

        <a
          href={links.tel}
          aria-label="Call now"
          className="grid h-12 w-12 place-items-center rounded-full bg-gold-sheen text-forest-700 shadow-gold transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-5 w-5" />
        </a>

        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <MessageCircle className="relative h-6 w-6" />
        </a>
      </div>

      {/* Sticky mobile CTA bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: 'spring', damping: 22 }}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/95 px-3 py-2.5 backdrop-blur-lg md:hidden"
        style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href={links.tel}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-forest/8 py-2.5 text-sm font-semibold text-forest"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> Chat
          </a>
          <a
            href="#reserve"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gold-sheen py-2.5 text-sm font-semibold text-forest-700"
          >
            <CalendarCheck className="h-4 w-4" /> Book
          </a>
        </div>
      </motion.div>
    </>
  );
}
