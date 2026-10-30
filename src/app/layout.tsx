import type { Metadata } from 'next';
import './globals.css';

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
    title: 'OTHVM — اخلّي التكنولوجيا تشتغل ليك',
    description: 'حلول تكنولوجية عملية للشركات والأفراد.',
    images: [`${BASE_URL}/logo/OTHVM.png`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
