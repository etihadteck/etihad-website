import BackButton from '@/app/_components/BackButton';
import WhatsappNumber from '@/app/_components/WhatsappNumber';

function notFound() {
  return (
    <div className="bg-primary-900 flex flex-col items-center justify-center gap-16 rounded-xl px-10 py-16">
      <span className="text-4xl font-bold text-red-500">الشحنة غير موجودة</span>
      <div className="text-accent-100 flex items-center justify-center gap-2 text-xl font-medium">
        <span>الرجاء المحاولة مرة اخرى, او التواصل معنا عن طريق</span>
        <WhatsappNumber />
      </div>
      <BackButton label="الرجوع للشحنات" />
    </div>
  );
}

export default notFound;
