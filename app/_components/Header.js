'use client';

import Logo from '@/app/_components/Logo';
import HamBurg from './HamBurg';
import { useState } from 'react';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header
      className={`border-primary-900 sticky top-0 z-50 border-b px-8 py-5 lg:mt-4 ${isSidebarOpen ? '' : 'backdrop-blur-sm'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <HamBurg
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Logo />
      </div>
    </header>
  );
}

export default Header;
