'use client';

import { useState } from 'react';
import { headerItems } from '@/data/header';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeaderItem() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleHover = (menu: string) => setActiveMenu(menu);
  const handleLeave = () => setActiveMenu(null);

  return (
    <div className="hidden md:flex items-center gap-1">
      {headerItems.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => handleHover(item.name)}
          onMouseLeave={handleLeave}
        >
          <button className="px-4 py-2 font-medium text-[16px] hover:bg-borderColor hover:rounded-md cursor-pointer">
            {item.name}
          </button>

          <motion.div
            className="absolute left-0 top-full w-[500px] bg-backgroundPrimary shadow-lg rounded-md"
            initial={{
              opacity: 0,
              x:
                activeMenu === item.name
                  ? 0
                  : item.id < headerItems.findIndex((header) => header.name === activeMenu)
                  ? -20
                  : 20,
            }}
            animate={{
              opacity: activeMenu === item.name ? 1 : 0,
              x:
                activeMenu === item.name
                  ? 0
                  : item.id < headerItems.findIndex((header) => header.name === activeMenu)
                  ? -20
                  : 20,
            }}
            exit={{
              opacity: 0,
              x:
                activeMenu === item.name
                  ? 0
                  : item.id < headerItems.findIndex((header) => header.name === activeMenu)
                  ? -20
                  : 20,
            }}
            transition={{ duration: 0.3 }}
            style={{ display: activeMenu === item.name ? 'block' : 'none' }}
          >
            <div className="grid grid-cols-2 gap-2 p-2 border-borderColor rounded-md border">
              {item.menu.map((menuItem) => (
                <Link
                  key={menuItem.id}
                  href={menuItem.path}
                  className="block p-2 hover:bg-borderColor rounded-md h-[80px]"
                >
                  <p className="text-[14px] text-textPrimary">{menuItem.title}</p>
                  <p className="text-[14px] text-textSecondary line-clamp-2">
                    {menuItem.description}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
