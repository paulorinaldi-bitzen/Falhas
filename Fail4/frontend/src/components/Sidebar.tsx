import { Search, BarChart3, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const location = useLocation();
  
  const menuItems = [
    { id: 'users', label: 'Buscar Usuários', icon: Search, path: '/users' },
    { id: 'reports', label: 'Relatórios', icon: BarChart3, path: '/reports' },
    { id: 'settings', label: 'Configurações', icon: Settings, path: '/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/users') {
      return location.pathname === '/' || location.pathname === '/users';
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-64 bg-dark-card dark:bg-dark-card bg-light-card border-r border-dark-border dark:border-dark-border border-light-border flex flex-col`}
      >
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => onClose?.()}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-dark-muted dark:text-dark-muted text-light-muted hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input hover:text-dark-text dark:hover:text-dark-text hover:text-light-text'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
