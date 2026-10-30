import type { Metadata } from 'next';
import { Noto_Kufi_Arabic, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-arabic',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-latin',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://othvm-website.vercel.app';

export const metadata: Metadata = {
  title: 'OTHVM — اخلّي التكنولوجيا تشتغل ليك',
  description: 'OTHVM علامة تجارية مستقلة تقدم حلول تكنولوجية عملية: أتمتة، ربط أنظمة، أدوات مخصصة، ومنتجات رقمية للتعلم.',
  keywords: ['OTHVM', 'تكنولوجيا', 'أتمتة', 'ذكاء اصطناعي', 'AI', 'حلول تقنية', 'عربي'],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  icons: {
    icon: '/logo/OTHVM.png',
    apple: '/logo/OTHVM.png',
  },
  openGraph: {
    title: 'OTHVM — اخلّي التكنولوجيا تشتغل ليك',
    description: 'حلول تكنولوجية عملية للشركات والأفراد.',
    url: BASE_URL,
    siteName: 'OTHVM',
    locale: 'ar_EG',
    type: 'website',
    images: [{ url: `${BASE_URL}/logo/OTHVM.png`, width: 800, height: 800, alt: 'OTHVM Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@othvmai',
    title: 'OTHVM',
    description: 'حلول تكنولوجية عملية للشركات والأفراد.',
    images: [`${BASE_URL}/logo/OTHVM.png`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufi.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body style={{ fontFamily: 'var(--font-arabic), sans-serif' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
