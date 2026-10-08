import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Pabrik Rak Minimarket B2B & Jasa Interior Toko | Free Desain 3D',
  description:
    'Pabrik rak minimarket langsung tangan pertama. Paket lengkap setup toko retail, free layout 3D, free ongkir Jawa-Bali, & free pasang. Konsultasi WA gratis!',
  keywords: [
    'rak minimarket',
    'pabrik rak toko b2b',
    'rak gondola supermarket',
    'setup toko retail',
    'desain layout 3d toko gratis',
    'rak minimarket jawa bali',
    'jasa interior toko kelontong modern',
    'rak toko harga pabrik'
  ],
  authors: [{ name: 'Pabrik Rak Retail Indonesia' }],
  metadataBase: new URL('https://pabrikrakminimarket.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pabrik Rak Minimarket B2B & Jasa Interior Toko | Free Desain 3D',
    description:
      'Pabrik rak minimarket langsung tangan pertama. Paket lengkap setup toko retail, free layout 3D, free ongkir Jawa-Bali, & free pasang. Konsultasi WA gratis!',
    url: 'https://pabrikrakminimarket.com',
    siteName: 'Pabrik Rak Retail Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Pabrik Rak Minimarket B2B dan Layout Interior Toko Retail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pabrik Rak Minimarket B2B & Jasa Interior Toko | Free Desain 3D',
    description:
      'Pabrik rak minimarket tangan pertama. Free layout 3D, Free ongkir Jawa-Bali & Free pasang Jateng/Jatim/DIY.',
    images: ['https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.className}>
      <head>
        {/* Schema.org Structured Data (JSON-LD) untuk B2B Manufacturer & Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pabrik Rak Minimarket B2B Indonesia",
              "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&h=630&q=80",
              "description": "Produsen langsung rak minimarket, rak gondola supermarket, dan konsultan tata letak interior 3D retail.",
              "priceRange": "$$",
              "areaServed": ["Jawa", "Bali", "Indonesia"],
              "currenciesAccepted": "IDR",
              "paymentAccepted": "Cash, Bank Transfer, Invoice B2B",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "IDR",
                "lowPrice": "450000",
                "offerCount": "100"
              }
            })
          }}
        />

        {/* Google Tag (gtag.js) - Google Ads Conversion Tracking Placeholder */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-CONVERSION_ID');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
