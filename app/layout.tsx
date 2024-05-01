import { Noto_Sans_TC } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const notoSans = Noto_Sans_TC({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Page',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
