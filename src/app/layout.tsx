import './globals.css';
import Header from '@/components/common/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans">
      <Header />
      <main className="pt-[80px] px-4">{children}</main>
      </body>
    </html>
  );
}