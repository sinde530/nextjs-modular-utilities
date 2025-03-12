'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeMenuOpenProps {
  closeMenu: () => void;
}

export function ThemeToggle({ closeMenu }: ThemeMenuOpenProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    closeMenu();
  };

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="theme-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 rounded-md shadow-lg w-[120px] py-1 px-1 z-50 bg-backgroundPrimary border-borderColor border-[1px]"
        >
          <div className="flex flex-col gap-1">
            <div
              onClick={() => handleThemeChange('dark')}
              className={`text-[14px] text-textPrimary p-2 hover:bg-borderColor rounded-md cursor-pointer flex items-center justify-between ${
                theme === 'dark' ? 'bg-borderColor' : ''
              }`}
            >
              <span>Dark Mode</span>
              <Moon size={18} />
            </div>
            <div
              onClick={() => handleThemeChange('light')}
              className={`text-[14px] text-textPrimary p-2 hover:bg-borderColor rounded-md cursor-pointer flex items-center justify-between ${
                theme === 'light' ? 'bg-borderColor' : ''
              }`}
            >
              <span>Light Mode</span>
              <Sun size={18} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
