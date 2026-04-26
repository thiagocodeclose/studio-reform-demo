import { studio } from '@/lib/site-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studio-reform-demo.vercel.app';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HealthClub', 'SportsActivityLocation', 'LocalBusiness'],
        '@id': `${BASE_URL}/#business`,
        name: studio.name,
        description: "Austin's premier Pilates reformer and barre studio. Science-backed precision training.",
        url: BASE_URL,
        telephone: studio.phone,
        email: studio.email,
        priceRange: '$$$',
        image: ['https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&h=630&fit=crop&q=85'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: studio.address.street,
          addressLocality: studio.address.city,
          addressRegion: studio.address.state,
          postalCode: studio.address.zip,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 30.2924,
          longitude: -97.7442,
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '05:30', closes: '20:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '17:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '16:00' },
        ],
        sameAs: Object.values(studio.social).filter(Boolean),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '312',
          bestRating: '5',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Classes & Memberships',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Classical Reformer Pilates' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Barre Fusion' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hot Sculpt' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mat Flow' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stretch & Recovery' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: studio.name,
        publisher: { '@id': `${BASE_URL}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
