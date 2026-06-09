import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Star } from 'lucide-react';
import { restaurant, navLinks, links, menuCategories } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-forest-700 text-cream/70">
      <div className="container-px py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-forest text-lg font-serif font-bold text-gold">
                आ
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-cream">Aarohi</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  Veg Restaurant
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Pure-vegetarian North Indian, South Indian &amp; Indo-Chinese in the heart of Daryaganj,
              New Delhi. Fresh, family-friendly and full of flavour.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-semibold text-cream">{restaurant.rating}</span>
              <span className="text-cream/50">· {restaurant.reviewCount}+ reviews</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold-400">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#reserve" className="transition-colors hover:text-gold-400">
                  Reserve a Table
                </a>
              </li>
              <li>
                <a href="#order" className="transition-colors hover:text-gold-400">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Our Menu</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {menuCategories.map((c) => (
                <li key={c}>
                  <a href="#menu" className="transition-colors hover:text-gold-400">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Reach Us</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{restaurant.addressFull}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={links.tel} className="hover:text-gold-400">
                  {restaurant.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${restaurant.email}`} className="hover:text-gold-400">
                  {restaurant.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-400" />
                <span>Open daily · 8 AM – 11 PM</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 hover:border-gold/40 hover:text-gold-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 hover:border-gold/40 hover:text-gold-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-center text-xs text-cream/50 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
          <p>
            Pure Vegetarian · Daryaganj, New Delhi · Crafted with care for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
