import { Button } from '@/components/ui/button';

const TopNavigationTab = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
        {/* 로고 */}
        <div className="text-2xl font-semibold text-gray-900">ByeDoHan</div>

        {/* 데스크탑 메뉴 */}
        <nav className="flex gap-8">
          <Button variant="ghost" className="text-gray-700 hover:text-black text-base">
            홈
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-black text-base">
            소개
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-black text-base">
            문의
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default TopNavigationTab;
