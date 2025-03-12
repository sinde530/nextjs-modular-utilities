import Link from 'next/link';
import SidebarToggle from '../../components/Toggle/SidebarToggle';
import HeaderItem from '@/app/HeaderItem';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Bell, Moon, Search, User, X } from 'lucide-react';
import { ThemeToggle } from '@/app/components/darkMode/ThemeToggle';

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export default function Header({ toggleSidebar, sidebarOpen }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    }

    if (themeMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [themeMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-backgroundPrimary border-borderColor z-40 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <SidebarToggle toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <Link href={'/'} className="font-bold text-xl">
            KSE.DEV
          </Link>

          <HeaderItem />
        </div>

        <div className="flex items-center gap-2">
          <AnimatePresence>
            {searchOpen ? (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '300px', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative items-center flex"
              >
                <input
                  placeholder="Search..."
                  className="w-full p-2 rounded-md border-[1px] h-[38px] border-borderColor focus:outline-none focus:ring-borderColor focus:border-[2px]"
                  autoFocus
                />
                <div
                  className="absolute right-0 top-0 hover:bg-borderColor hover:rounded-md cursor-pointer p-2"
                  onClick={() => setSearchOpen(false)}
                >
                  <X size={22} />
                </div>
              </motion.div>
            ) : (
              <div
                onClick={() => setSearchOpen(true)}
                className="hover:bg-borderColor hover:rounded-md cursor-pointer flex p-2"
              >
                <Search size={22} />
              </div>
            )}
          </AnimatePresence>

          <div className="hover:bg-borderColor hover:rounded-md cursor-pointer flex p-2">
            <Bell size={22} />
          </div>

          <div className="relative" ref={themeMenuRef}>
            <div
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="hover:bg-borderColor hover:rounded-md cursor-pointer flex p-2 relative"
            >
              <Moon size={22} />
            </div>

            <AnimatePresence>
              {themeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full right-0 rounded-md shadow-lg"
                >
                  <ThemeToggle closeMenu={() => setThemeMenuOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hover:bg-borderColor hover:rounded-md cursor-pointer flex p-2">
            <User size={22} />
          </div>
        </div>
      </div>
    </header>
  );
}
