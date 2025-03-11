'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
              onClick={() => setTheme('dark')}
              className="text-[14px] text-textPrimary p-2 hover:bg-borderColor rounded-md cursor-pointer justify-center flex"
            >
              Dark Mode
            </div>

            <div
              onClick={() => setTheme('light')}
              className="text-[14px] text-textPrimary p-2 hover:bg-borderColor rounded-md cursor-pointer justify-center flex"
            >
              Light Mode
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
