'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, restaurant, links } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream/90 shadow-[0_8px_30px_-12px_rgba(14,59,46,0.25)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3" aria-label={restaurant.name}>
          <span
            className={cn(
              'grid h-10 w-10 place-items-center rounded-full border text-lg font-serif font-bold transition-colors md:h-11 md:w-11',
              scrolled
                ? 'border-gold/40 bg-forest text-gold'
                : 'border-gold/40 bg-forest/90 text-gold'
            )}
          >
            आ
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-lg font-semibold tracking-tight transition-colors md:text-xl',
                scrolled ? 'text-forest' : 'text-cream'
              )}
            >
              Aarohi
            </span>
            <span
              className={cn(
                'text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors',
                scrolled ? 'text-gold-600' : 'text-gold-400'
              )}
            >
              Veg Restaurant
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-forest-700/80 hover:bg-forest/5 hover:text-forest'
                    : 'text-cream/80 hover:bg-white/10 hover:text-cream'
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <span
            className={cn(
              'hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold xl:inline-flex',
              scrolled ? 'bg-gold/15 text-gold-600' : 'bg-white/10 text-gold-400'
            )}
          >
            <Star className="h-4 w-4 fill-current" /> {restaurant.rating}
          </span>
          <a href={links.tel} className="btn-ghost !px-4 !py-2">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a href="#reserve" className="btn-gold !px-5 !py-2.5">
            Reserve Table
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={cn(
            'grid h-11 w-11 place-items-center rounded-full transition-colors md:hidden',
            scrolled ? 'text-forest hover:bg-forest/5' : 'text-cream hover:bg-white/10'
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full mx-3 mt-2 overflow-hidden rounded-3xl border border-forest/10 bg-cream-100 p-4 shadow-luxe md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-forest-700 hover:bg-forest/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href={links.tel} className="btn-ghost" onClick={() => setOpen(false)}>
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="#reserve" className="btn-gold" onClick={() => setOpen(false)}>
                Reserve
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
