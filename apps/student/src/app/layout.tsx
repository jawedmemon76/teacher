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
    default: 'Student Portal | teacher.ac.pk',
    template: '%s | Student Portal | teacher.ac.pk',
  },
  description: 'Access your courses, take quizzes, and track your progress on teacher.ac.pk',
  keywords: ['education', 'learning', 'student portal', 'courses', 'exams', 'Pakistan'],
  metadataBase: new URL('https://learn.teacher.ac.pk'),
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://learn.teacher.ac.pk',
    siteName: 'teacher.ac.pk Student Portal',
    title: 'Student Portal | teacher.ac.pk',
    description: 'Access your courses, take quizzes, and track your progress',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1d4ed8' },
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

