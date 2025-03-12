'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMobile } from '@/hooks/useMobile';
import Header from '../Header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
        {/* <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> */}
        <main className="flex-1 overflow-y-auto pt-16 bg-backgroundPrimary">{children}</main>
      </div>
    </div>
  );
}
