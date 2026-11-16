import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  isSidebarOpen?: boolean;
}

export default function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
    setShowDropdown(false);
  };

  return (
    <header className="h-16 bg-dark-card border-b border-dark-border dark:bg-dark-card dark:border-dark-border bg-light-card border-light-border flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4 md:gap-8">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input transition-colors"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? (
            <X className="w-5 h-5 text-dark-text dark:text-dark-text text-light-text" />
          ) : (
            <Menu className="w-5 h-5 text-dark-text dark:text-dark-text text-light-text" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <img src="/favicon.jpg" alt="Bitzen" className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-bold text-dark-text dark:text-dark-text text-light-text">bitzen</span>
        </div>
        <span className="hidden md:block text-dark-muted dark:text-dark-muted text-light-muted text-sm">Não Inviabilize Suporte</span>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input transition-colors"
            title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-dark-text dark:text-dark-text text-light-text" />
            ) : (
              <Moon className="w-5 h-5 text-dark-text dark:text-dark-text text-light-text" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 text-dark-text dark:text-dark-text text-light-text hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">PR</span>
              </div>
              <span className="hidden sm:block text-sm font-medium">Paulo Ricardo</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-dark-text dark:text-dark-text text-light-text hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input transition-colors">
                  Perfil
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-dark-text dark:text-dark-text text-light-text hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input transition-colors">
                  Configurações
                </a>
                <hr className="my-2 border-dark-border dark:border-dark-border border-light-border" />
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input transition-colors"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
