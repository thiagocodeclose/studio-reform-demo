// @ts-nocheck
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { GlobalWidgets } from '@/components/GlobalWidgets';
import { JsonLd } from '@/components/JsonLd';
import { getGarrison365Config, buildCssVars } from '@/lib/garrison365-config';
import { SiteDataProvider } from '@/components/SiteDataProvider';

import { Garrison365LivePreview } from '@/components/Garrison365LivePreview';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studio-reform-demo.vercel.app';

const DEFAULT_TITLE = 'Studio Reform | Pilates Reformer & Barre · Austin, TX';
const DEFAULT_DESC = "Austin's premier Pilates reformer & barre studio. Science-backed, precision-driven training for a leaner, longer, stronger body. First class free.";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getGarrison365Config();
  const title = config?.seo?.title || DEFAULT_TITLE;
  const description = config?.seo?.description || DEFAULT_DESC;
  const gymName = config?.gym?.name || 'Studio Reform';
  return {
    metadataBase: new URL(BASE_URL),
    title: { default: title, template: `%s | ${gymName} Austin` },
    description,
    keywords: ['pilates austin tx', 'reformer pilates austin', 'barre austin', 'pilates studio austin', 'sculpt class austin', 'pilates guadalupe', 'studio reform', 'pilates near me austin'],
    openGraph: {
      type: 'website', locale: 'en_US', url: BASE_URL, siteName: gymName,
      title, description,
      images: [{ url: config?.seo?.og_image || 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&h=630&fit=crop&q=85', width: 1200, height: 630, alt: `${gymName} Austin — Pilates & Barre` }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
    alternates: { canonical: BASE_URL },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getGarrison365Config();
  const cssVars = buildCssVars(config?.brand);
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={cssVars}>
      <head>
        <JsonLd />
      </head>
      <body>
        <Garrison365LivePreview />
        <SiteDataProvider config={config}>
          <main id="main-content">{children}</main>
          <GlobalWidgets />
        </SiteDataProvider>
      </body>
    </html>
  );
}
