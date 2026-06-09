import { restaurant, faqs, reviews, SITE_URL } from '@/lib/data';

/**
 * JSON-LD structured data: Restaurant + LocalBusiness, FAQPage, and
 * aggregate + individual Reviews. Improves local SEO & rich results.
 */
export function Schema() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#restaurant`,
    name: restaurant.name,
    description:
      'Pure vegetarian restaurant in Daryaganj, New Delhi serving North Indian, South Indian and Indo-Chinese cuisine. Family-friendly dine-in and takeaway.',
    servesCuisine: ['North Indian', 'South Indian', 'Chinese', 'Vegetarian'],
    priceRange: '₹₹',
    url: SITE_URL,
    telephone: restaurant.phone,
    image: [restaurant.social.googleMaps],
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address.line1,
      addressLocality: 'Daryaganj, New Delhi',
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '23:00',
    },
    acceptsReservations: true,
    menu: `${SITE_URL}/#menu`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: restaurant.rating,
      reviewCount: restaurant.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.slice(0, 4).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Menu', item: `${SITE_URL}/#menu` },
      { '@type': 'ListItem', position: 3, name: 'Reserve', item: `${SITE_URL}/#reserve` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
