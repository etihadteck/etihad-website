// import { Geist, Geist_Mono } from 'next/font/google';
import Header from './_components/Header';
import ScrollToTop from './_components/ScrollToTop';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | شركة التحاد',
    default: 'شركة التحاد للشحن',
  },
  description: `
نحن في شركة الاتحاد نُقدم خدمات الشحن الجزئي من الصين إلى المملكة العربية السعودية بخبرة وكفاءة، ونلبي احتياجات التجار وأصحاب الأعمال والمتاجر الإلكترونية عبر حلول مرنة وآمنة.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`bg-primary-950 text-primary-100 relative flex min-h-screen flex-col antialiased`}
      >
        <Header />

        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-md md:max-w-2xl lg:max-w-7xl">
            {children}
          </main>
        </div>

        <div className="hidden max-md:block">
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
