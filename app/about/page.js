import Image from 'next/image';
import bg from '@/public/bg.png';
import OurServices from '../_components/OurServices';
import WhyChooseUs from '../_components/WhyChooseUs';

export default function Page() {
  return (
    <main className="mt-8">
      <Image
        src={bg}
        fill
        placeholder="blur"
        className="object-cover object-top"
        quality={90}
        alt="Worldwide shipping company"
      />

      <div className="relative z-10 space-y-16 text-center md:text-right">
        <>
          <h1 className="bg-accent-700 rounded-lg px-6 py-3 pb-6 text-center text-2xl font-bold text-white md:w-fit md:text-end md:text-4xl lg:text-5xl">
            مـن نحـن
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl">
            نحن <span className="text-accent-500">شركة التحاد</span> للشحن
            العالمية المتخصصة في توفير{' '}
            <span className="text-accent-500">خدمات الشحن الجزئي</span> من الصين
            إلى المملكة العربية السعودية. نقدم{' '}
            <span className="text-accent-500">حلول شحن مرنة وآمنة</span> لتلبية
            احتياجات <span className="">التجار</span> وأصحاب{' '}
            <span className="">الأعمال</span> و{' '}
            <span className="">المتاجر</span> الإلكترونية.
          </p>
        </>

        <OurServices />

        <WhyChooseUs />
      </div>
    </main>
  );
}
