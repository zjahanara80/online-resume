import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Zeynab Jahan Ara",
    template: "%s | Zeynab Jahan Ara",
  },
  description:
    "Zeynab Jahan Ara's personal website.",
  keywords: [
    "Zeynab Jahan Ara",
    'data scientist',
    'machine learning',
    'full-stack developer',
    'engineer',
    'portfolio',
  ],
  authors: [{ name: "Zeynab Jahan Ara" }],
  creator: "Zeynab Jahan Ara",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: "Zeynab Jahan Ara",
    title: "Zeynab Jahan Ara",
    description: 'FrontEnd Developer',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: "Zeynab Jahan Ara",
      },
    ],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
