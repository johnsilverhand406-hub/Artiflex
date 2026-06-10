import React from 'react';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center">
      <div className="w-full max-w-screen-md bg-bg min-h-screen border-x border-border relative flex flex-col">
        <main className="flex-1 w-full pb-28 pt-4 px-4 sm:px-6 overflow-y-auto no-scrollbar">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;