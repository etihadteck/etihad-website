'use client';

import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import Navigation from '@/app/_components/Navigation';
import Logo from './Logo';

function HamBurg() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Regular navigation for md and above */}
      <div className="hidden md:block">
        <Navigation />
      </div>

      {/* Burger menu only for md screens */}
      <div className="block md:hidden">
        <button
          className="text-grey-500 text-2xl"
          aria-label="Open menu"
          onClick={() => setIsSidebarOpen(true)}
        >
          <HiMenu className="text-accent-700 h-10 w-10 sm:h-12 sm:w-12" />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex h-lvh items-center justify-center md:hidden">
          {/* Overlay with blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xl transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
            style={{ WebkitBackdropFilter: 'blur(24px)' }}
          />

          <aside
            className="animate-slide-in-right relative mx-auto flex w-4/5 max-w-xs flex-col items-center gap-8 p-6"
            style={{ minWidth: 260 }}
          >
            <Logo onNavigate={() => setIsSidebarOpen(false)} />
            <div className="mt-24">
              <Navigation onNavigate={() => setIsSidebarOpen(false)} />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default HamBurg;
