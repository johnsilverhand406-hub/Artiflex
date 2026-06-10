import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { House, Layers, Truck, User } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { path: "/", icon: House, label: "Главная" },
  { path: "/services", icon: Layers, label: "Услуги" },
  { path: "/delivery", icon: Truck, label: "Доставка" },
  { path: "/contacts", icon: User, label: "Контакты" }
];

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-screen-md pointer-events-auto">
        <div className="bg-surface/80 backdrop-blur-xl border-t border-border pb-[env(safe-area-inset-bottom)]">
          <div className="flex justify-between items-center px-6 py-3 pb-5 md:pb-3">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/services' && location.pathname.startsWith('/services'));
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center justify-center space-y-1 w-16 group transition-all duration-200 ease-in-out active:scale-95 outline-none"
                >
                  <div className={`
                    relative p-1.5 rounded-xl transition-all duration-300
                    ${isActive ? 'bg-surface-2 text-text' : 'text-muted group-hover:text-text'}
                  `}>
                    <Icon strokeWidth={isActive ? 2.5 : 2} size={24} />
                  </div>
                  <span className={`
                    text-[10px] font-medium tracking-wide transition-colors duration-200
                    ${isActive ? 'text-text' : 'text-muted'}
                  `}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;