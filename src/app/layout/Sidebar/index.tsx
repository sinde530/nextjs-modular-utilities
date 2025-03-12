import { AnimatePresence, motion } from 'framer-motion';
import { FolderKanban, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarOpenProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarOpenProps) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0, x: -300 }}
            animate={{ width: 280, x: 0 }}
            exit={{ width: 0, x: -300 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={'fixed top-16 bottom-0 left-0 z-30 w-[280px] border-r bg-backgroundPrimary'}
          >
            <div className="h-full py-4">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
                <SidebarNav />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarNav() {
  return (
    <div className="space-y-1">
      <NavItem href="/" icon={<Home size={22} />}>
        Home
      </NavItem>

      <NavItem href="/products" icon={<FolderKanban size={22} />}>
        Products
      </NavItem>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function NavItem({ href, icon, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium bg-backgroundPrimary transition-all hover:bg-borderColor ${
        isActive ? 'bg-borderColor text-textPrimary' : 'text-textSecondary'
      }`}
    >
      {icon} <p>{children}</p>
    </Link>
  );
}
