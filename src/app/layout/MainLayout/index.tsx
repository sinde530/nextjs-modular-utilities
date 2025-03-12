'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMobile } from '@/hooks/useMobile';
import Header from '../Header';
import Sidebar from '../Sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [pathname, isMobile]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} />
        <main className="flex-1 overflow-y-auto pt-16 px-4 bg-backgroundSecondary justify-center">
          {children}
        </main>
      </div>
    </div>
  );
}
