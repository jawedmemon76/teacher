import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Teacher Portal | teacher.ac.pk',
    template: '%s | Teacher Portal | teacher.ac.pk',
  },
  description: 'Create courses, manage students, and share your expertise on teacher.ac.pk',
  keywords: ['education', 'teaching', 'instructor portal', 'courses', 'Pakistan'],
  metadataBase: new URL('https://teach.teacher.ac.pk'),
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://teach.teacher.ac.pk',
    siteName: 'teacher.ac.pk Teacher Portal',
    title: 'Teacher Portal | teacher.ac.pk',
    description: 'Create courses, manage students, and share your expertise',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#9333ea' },
    { media: '(prefers-color-scheme: dark)', color: '#7c3aed' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}

