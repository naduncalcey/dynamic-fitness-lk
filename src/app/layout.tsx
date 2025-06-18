import type { Metadata } from "next";
import { Montserrat, Inter } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Dynamic Fitness (Pvt) Ltd | Premium Gym in Maharagama, Colombo",
  description: "Dynamic Fitness is a premium gym and fitness center in Maharagama, Colombo, Sri Lanka. We offer personal training, group classes, and state-of-the-art equipment for all fitness levels.",
  keywords: "gym, fitness center, personal training, Maharagama, Colombo, Sri Lanka, workout, fitness classes",
  authors: [{ name: "Dynamic Fitness" }],
  creator: "Dynamic Fitness",
  publisher: "Dynamic Fitness",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://dynamicfitness.lk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dynamic Fitness (Pvt) Ltd | Premium Gym in Maharagama",
    description: "Premium gym and fitness center in Maharagama, Colombo, Sri Lanka with personal training and group classes.",
    url: 'https://dynamicfitness.lk',
    siteName: 'Dynamic Fitness',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dynamic Fitness Gym',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dynamic Fitness (Pvt) Ltd | Premium Gym in Maharagama",
    description: "Premium gym and fitness center in Maharagama, Colombo, Sri Lanka",
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/Logo.svg' }
    ],
    apple: '/Logo.svg',
  },
  manifest: '/site.webmanifest',
  themeColor: '#111111',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/Logo.svg" />
        <link rel="apple-touch-icon" href="/Logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5JF162SH7J"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5JF162SH7J');
            `
          }}
        />

      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}