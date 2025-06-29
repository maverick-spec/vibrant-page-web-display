
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '@/components/ui/scroll-progress';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
