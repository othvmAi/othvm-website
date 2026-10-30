import type { Metadata } from 'next';
import { Noto_Kufi_Arabic, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  variable: '--font-noto-kufi',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://othvm-website.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'OTHVM — اخلّي التكنولوجيا تشتغل ليك',
  description: 'OTHVM علامة تجارية مستقلة تقدم حلول تكنولوجية عملية: أتمتة، ربط أنظمة، أدوات مخصصة، ومنتجات رقمية للتعلم.',
  keywords: ['OTHVM', 'تكنولوجيا', 'أتمتة', 'ذكاء اصطناعي', 'AI', 'حلول تقنية', 'عربي'],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'OTHVM',
    description: 'حلول تكنولوجية عملية للشركات والأفراد.',
    url: BASE_URL,
    siteName: 'OTHVM',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/logo/OTHVM.png`,
        width: 800,
        height: 800,
        alt: 'OTHVM Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@othvmai',
    title: 'OTHVM',
    description: 'حلول تكنولوجية عملية للشركات والأفراد.',
    images: [`${BASE_URL}/logo/OTHVM.png`],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo/OTHVM.png',
    apple: '/logo/OTHVM.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufiArabic.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body className="font-arabic bg-brand-dark text-white selection:bg-brand-purple/30 selection:text-white antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
