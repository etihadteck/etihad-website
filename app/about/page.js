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
          <p className="text-xl sm:text-2xl md:text-3xl/snug">
            تأسست شركة الاتحاد للشحن في عام 2011، ويقع مقرها الرئيسي في الصين.
            وهي إحدى شركات مجموعة بن ناجي التجارية والخدمات اللوجستية. تُقدم
            الشركة خدمات الشحن الجزئي والكلي من الصين إلى المملكة العربية
            السعودية واليمن، وتوفر حلولاً مرنة وآمنة لتلبية احتياجات التجار
            وأصحاب الأعمال والمتاجر الإلكترونية. نحرص على تقديم حلول شحن مخصصة
            تأخذ بعين الاعتبار طبيعة الشحنات والوجهات المستهدفة، مع مطابقة
            متطلبات الأعمال المحددة من حيث السرعة، وتحمّل التكاليف، والموثوقية.
            نسعى إلى اختيار الطريق التجاري الأنسب لكل شحنة، بما يضمن وصول
            البضائع بأمان وفي الوقت المحدد إلى العملاء الدوليين.
          </p>
        </>

        <OurServices />

        <WhyChooseUs />
      </div>
    </main>
  );
}
