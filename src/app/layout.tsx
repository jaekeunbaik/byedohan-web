// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';
import Header from '@/components/common/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans">
      <Header />
        <nav className="p-4 bg-gray-100 dark:bg-gray-800 flex gap-4">
          <Link href="/">홈</Link>
          <Link href="/about">소개</Link>
          <Link href="/contact">연락처</Link>
        </nav>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}