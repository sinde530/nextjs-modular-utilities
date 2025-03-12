import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart,
  ChevronDown,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
            className={
              'fixed top-16 bottom-0 left-0 z-30 w-[280px] border-r border-borderColor bg-backgroundPrimary'
            }
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

      <NavGroup
        title="Management"
        icon={<Users size={22} />}
        items={[
          { href: '/users', label: 'Users', icon: <Users size={18} /> },
          { href: '/products', label: 'Products', icon: <ShoppingCart size={18} /> },
          { href: '/orders', label: 'Orders', icon: <FileText size={18} /> },
        ]}
      />

      <NavGroup
        title="Analytics"
        icon={<BarChart size={22} />}
        items={[
          {
            href: '/analytics/overview',
            label: 'Overview',
            icon: <BarChart size={17} />,
          },
          { href: '/analytics/reports', label: 'Reports', icon: <FileText size={18} /> },
        ]}
      />

      <NavItem href="/settings" icon={<Settings size={22} />}>
        Settings
      </NavItem>

      <NavItem href="/help" icon={<HelpCircle size={22} />}>
        Help & Support
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

interface NavGroupProps {
  title: string;
  icon: React.ReactNode;
  items: {
    href: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

function NavGroup({ title, icon, items }: NavGroupProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = items.some((item) => pathname === item.href);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all cursor-pointer hover:bg-borderColor ${
          isActive ? 'bg-borderColor text-textPrimary' : 'text-textSecondary'
        }`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <p>{title}</p>
        </div>
        {open ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-6 pt-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium bg-backgroundPrimary transition-all hover:bg-borderColor
                    ${
                      pathname === item.href
                        ? 'bg-borderColor text-textPrimary'
                        : 'text-textSecondary'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
