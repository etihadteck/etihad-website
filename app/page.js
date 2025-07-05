import Image from 'next/image';
import bg from '@/public/bg.png';
import Search from './_components/Search';

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

      <div className="relative z-10 space-y-24 text-center">
        <h1 className="text-center text-8xl font-bold text-white">
          شركة الاتحاد للشحن
        </h1>

        <Search />
      </div>
    </main>
  );
}
