# Aarohi Veg Restaurant — Premium Website

A production-ready, SEO-optimised, conversion-focused website for **Aarohi Veg Restaurant**, Daryaganj, New Delhi. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Deploy to **Vercel** (recommended) in one click, or any Node host.

## Tech stack

- **Next.js 14** (App Router, Server Components, file-based SEO metadata)
- **TypeScript** (strict)
- **Tailwind CSS** with a custom luxury palette (deep green / gold / cream / warm orange)
- **Framer Motion** for scroll reveals, counters, modals and micro-interactions
- **lucide-react** icons

## Sections

Hero · Trust metrics · About · Why guests love us · Popular dishes (quick-view) · Full searchable/filterable menu · Masonry gallery + lightbox · Reviews (filter + carousel) · Review insights dashboard · Order online · Location + map · Table reservation · Google review CTA · FAQ · Contact · Footer · Floating WhatsApp/Call/Share + sticky mobile CTA.

## SEO

- Per-page metadata, Open Graph + Twitter cards (dynamic OG image via `app/opengraph-image.tsx`)
- JSON-LD: `Restaurant` + `LocalBusiness`, `AggregateRating`, `Review`, `FAQPage`, `BreadcrumbList` (`components/Schema.tsx`)
- `robots.ts` + `sitemap.ts`
- Targets: *best veg restaurant in Daryaganj, pure veg restaurant near me, North/South Indian restaurant Delhi*.

## ⚠️ Data provenance — read before launch

All copy lives in **`lib/data.ts`** (single source of truth).

**✅ Verified from public research (June 2026):** name, pure-veg positioning, full address & pincode, phone `+91 99112 75551`, **4.9** rating, magicpin listing + real store photos, cuisines (North Indian / South Indian / Chinese), ~₹800 for two.

**⚠️ Representative (clearly flagged in code) — replace with live data:**
- **Menu items & prices** — realistic, on-brand placeholders.
- **Review quotes & reviewer names** — synthesised from the 4.9★ sentiment themes; individual review text was not publicly extractable.
- **Review-insight scores, "why guests love us" percentages, FAQs** — illustrative.
- **Opening hours** — set to a sensible 8 AM–11 PM daily (magicpin showed only a partial snapshot). Confirm and update.
- **Social / order links** — Instagram, Facebook, Swiggy, Zomato point to platform homes/search. Replace with exact store URLs.

These are intentional, labelled placeholders so the site is fully functional today — not facts presented as verified.

## 10-minute content-swap checklist

1. `lib/data.ts` → real `dishes`, `reviews`, `hours`, `social` links, `email`.
2. Replace the magicpin hot-linked photos: download owner-supplied images into `/public` and update `gallery`/`heroImage` (avoids any third-party hot-link blocking). `next.config.mjs` already allow-lists `img.magicpin.com`, `lh3.googleusercontent.com`, `images.unsplash.com`.
3. `SITE_URL` in `lib/data.ts` → your real domain (feeds canonical, OG, sitemap, schema).
4. Wire the reservation form to email/WhatsApp/CRM (currently a front-end demo with a WhatsApp hand-off). See `components/sections/Reservation.tsx`.
5. Add the real Google review `place_id` to `social.googleReview`.

## Project structure

```
app/            layout (SEO), page, opengraph-image, robots, sitemap, globals.css
components/
  Schema.tsx    JSON-LD structured data
  sections/     one file per page section
  ui/           Reveal, Counter, SectionHeading, Icon
lib/            data.ts (content), utils.ts, useOpenStatus.ts
public/         favicon.svg
```

## Performance & accessibility

- `next/image` with AVIF/WebP, lazy loading, responsive `sizes`.
- `next/font` (Playfair Display + Inter) with `display: swap`.
- Reduced-motion support, keyboard-navigable lightbox, focus-visible rings, semantic landmarks, ARIA labels.
