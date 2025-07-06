'use client';

import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import Navigation from '@/app/_components/Navigation';
import Logo from './Logo';

function HamBurg() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Regular navigation for xs and above */}
      <div className="xs:block hidden">
        <Navigation />
      </div>

      {/* Burger menu only for xs screens */}
      <div className="xs:hidden block">
        <button
          className="text-grey-500 text-2xl"
          aria-label="Open menu"
          onClick={() => setIsSidebarOpen(true)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div className="xs:hidden fixed inset-0 z-50 flex h-lvh items-center justify-center">
          {/* Overlay with blur */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-xl transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
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
