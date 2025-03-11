import { PanelRightClose, X } from 'lucide-react';

interface SidebarToggleProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export default function SidebarToggle({ toggleSidebar, sidebarOpen }: SidebarToggleProps) {
  return (
    <div className="p-2 hover:bg-borderColor hover:rounded-md cursor-pointer">
      {sidebarOpen ? (
        <X size={22} onClick={toggleSidebar} aria-label="Close" className="cursor-pointer" />
      ) : (
        <PanelRightClose size={22} onClick={toggleSidebar} aria-label="Open" />
      )}
    </div>
  );
}
