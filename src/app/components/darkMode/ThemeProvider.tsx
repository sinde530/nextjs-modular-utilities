'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {/* 초기 로딩 시 깜빡임 방지 */}
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}>
        {children}
      </div>
    </NextThemesProvider>
  );
}
