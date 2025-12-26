import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://teacher.ac.pk'),
  title: {
    default: 'Teacher Portal | coaching.ac.pk',
    template: '%s | teacher.ac.pk',
  },
  description: 'Create courses, manage students, build question banks, and grow your teaching business. Join Pakistan\'s largest educator community.',
  keywords: [
    'teacher portal',
    'create courses',
    'online teaching',
    'educator platform',
    'question bank',
    'teaching tools',
    'Pakistan teachers',
  ],
  authors: [{ name: 'coaching.ac.pk' }],
  creator: 'coaching.ac.pk',
  publisher: 'coaching.ac.pk',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://teacher.ac.pk',
    siteName: 'teacher.ac.pk',
    title: 'Teacher Portal | coaching.ac.pk',
    description: 'Create courses, manage students, and grow your teaching business.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'teacher.ac.pk',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8b5cf6' },
    { media: '(prefers-color-scheme: dark)', color: '#6d28d9' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
