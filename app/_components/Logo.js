import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

function Logo({ onNavigate = null }) {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        src={logo}
        height="120"
        width="120"
        quality={100}
        alt="The Wild Oasis logo"
        onClick={onNavigate}
      />

      {/* <span className="text-primary-100 text-xl font-semibold">
        شركة الاتحاد للشحن
      </span> */}
    </Link>
  );
}

export default Logo;
