import Logo from '@/app/_components/Logo';
import HamBurg from './HamBurg';

function Header() {
  return (
    <header className="border-primary-900 sticky top-0 z-50 border-b px-8 py-5 backdrop-blur-sm lg:mt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <HamBurg />
        <Logo />
      </div>
    </header>
  );
}

export default Header;
