import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://othvm-website.vercel.app';

export const metadata: Metadata = {
  title: 'OTHVM | اخلّي التكنولوجيا تشتغل ليك — حلول ذكية وأتمتة متقدمة',
  description: 'OTHVM علامة تكنولوجية مستقلة يقودها عثمان محمد، متخصصة في أتمتة العمليات، حلول الذكاء الاصطناعي، وربط الأنظمة للشركات والأفراد.',
  keywords: ['OTHVM', 'عثمان محمد', 'تكنولوجيا', 'أتمتة', 'ذكاء اصطناعي', 'AI', 'Shopify', 'Web Development', 'Python', 'حلول برمجية'],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  icons: {
    icon: '/logo/OTHVM.png',
    apple: '/logo/OTHVM.png',
  },
  openGraph: {
    title: 'OTHVM | اخلّي التكنولوجيا تشتغل ليك',
    description: 'حلول تكنولوجية عملية، أتمتة متقدمة، وأنظمة ذكاء اصطناعي للشركات الطموحة.',
    url: BASE_URL,
    siteName: 'OTHVM',
    locale: 'ar_EG',
    type: 'website',
    images: [{ url: `${BASE_URL}/logo/OTHVM.png`, width: 800, height: 800, alt: 'OTHVM Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@othvmai',
    title: 'OTHVM | اخلّي التكنولوجيا تشتغل ليك',
    description: 'حلول تكنولوجية عملية، أتمتة متقدمة، وأنظمة ذكاء اصطناعي للشركات الطموحة.',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
