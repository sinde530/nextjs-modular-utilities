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
      <div
        className={`transition-colors duration-500 ease-in-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </NextThemesProvider>
  );
}
