import TopNavigationTab from '@/components/common/TopNavigationTab';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavigationTab />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
