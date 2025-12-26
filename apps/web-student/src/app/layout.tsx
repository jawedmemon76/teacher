import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://student.ac.pk'),
  title: {
    default: 'Student Portal | coaching.ac.pk',
    template: '%s | student.ac.pk',
  },
  description: 'Access courses, past papers, mock tests, and track your learning progress. Your personalized learning dashboard.',
  keywords: [
    'student portal',
    'online learning',
    'courses',
    'past papers',
    'mock tests',
    'exam prep',
    'Pakistan education',
  ],
  authors: [{ name: 'coaching.ac.pk' }],
  creator: 'coaching.ac.pk',
  publisher: 'coaching.ac.pk',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://student.ac.pk',
    siteName: 'student.ac.pk',
    title: 'Student Portal | coaching.ac.pk',
    description: 'Access courses, past papers, mock tests, and track your learning progress.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'student.ac.pk',
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
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1d4ed8' },
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
