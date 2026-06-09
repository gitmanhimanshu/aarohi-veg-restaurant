import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Schema } from '@/components/Schema';
import { SITE_URL, restaurant } from '@/lib/data';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const title = 'Aarohi Veg Restaurant | Best Pure Veg Restaurant in Daryaganj, Delhi';
const description =
  'Aarohi Veg Restaurant, Daryaganj — the best pure vegetarian restaurant in Old Delhi. North Indian, South Indian & Indo-Chinese, family dining, 4.9★ rated. Reserve a table or order online today.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | Aarohi Veg Restaurant',
  },
  description,
  applicationName: restaurant.name,
  keywords: [
    'Best Veg Restaurant in Daryaganj',
    'Vegetarian Restaurant Delhi',
    'Family Restaurant Daryaganj',
    'North Indian Restaurant Delhi',
    'South Indian Restaurant Delhi',
    'Pure Veg Restaurant Near Me',
    'Aarohi Veg Restaurant',
    'Restaurant Netaji Subhash Marg',
    'Veg dining Old Delhi',
  ],
  authors: [{ name: restaurant.name }],
  creator: restaurant.name,
  publisher: restaurant.name,
  alternates: { canonical: SITE_URL },
  category: 'restaurant',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: restaurant.name,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#BE3A2B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Schema />
        {children}
      </body>
    </html>
  );
}
