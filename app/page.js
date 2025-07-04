import Image from 'next/image';
import bg from '@/public/bg.png';

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        className="object-cover object-top"
        quality={90}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-center text-8xl font-bold text-white">
          شركة الاتحاد للشحن
        </h1>

        <div className="mt-16 flex flex-col gap-4">
          <p className="text-accent-400 text-center text-6xl font-bold">
            ابحث عن شحنتك
          </p>
        </div>
      </div>
    </main>
  );
}
