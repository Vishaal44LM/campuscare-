import { ReactNode } from 'react';
import { Header } from './Header';
import campusBg from '@/assets/campus-bg.jpg';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${campusBg})` }}
      />
      <div className="relative z-10">
        <Header />
        <main className="container py-6 md:py-8">
          {children}
        </main>
      </div>
    </div>
  );
};
