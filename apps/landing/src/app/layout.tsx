import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://coaching.ac.pk'),
  title: {
    default: 'coaching.ac.pk — Pakistan\'s Premier Exam Prep Platform',
    template: '%s | coaching.ac.pk',
  },
  description: 'From basic literacy to MDCAT — comprehensive courses, 50,000+ past papers, mock tests, and expert guidance. Pakistan\'s most trusted education platform.',
  keywords: [
    'Pakistan education',
    'exam preparation',
    'past papers',
    'MDCAT',
    'matric',
    'intermediate',
    'O levels',
    'A levels',
    'online learning',
    'coaching',
    'tuition',
  ],
  authors: [{ name: 'coaching.ac.pk' }],
  creator: 'coaching.ac.pk',
  publisher: 'coaching.ac.pk',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://coaching.ac.pk',
    siteName: 'coaching.ac.pk',
    title: 'coaching.ac.pk — Pakistan\'s Premier Exam Prep Platform',
    description: 'From basic literacy to MDCAT — comprehensive courses, 50,000+ past papers, mock tests, and expert guidance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'coaching.ac.pk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'coaching.ac.pk — Pakistan\'s Premier Exam Prep Platform',
    description: 'From basic literacy to MDCAT — comprehensive courses, past papers, and expert guidance.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#065f46' },
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
