import { PanelRightClose, X } from 'lucide-react';

interface SidebarToggleProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export default function SidebarToggle({ toggleSidebar, sidebarOpen }: SidebarToggleProps) {
  return (
    <div
      className="p-2 hover:bg-borderColor hover:rounded-md cursor-pointer"
      onClick={toggleSidebar}
    >
      {sidebarOpen ? (
        <X size={22} aria-label="Close" className="cursor-pointer" />
      ) : (
        <PanelRightClose size={22} aria-label="Open" />
      )}
    </div>
  );
}
