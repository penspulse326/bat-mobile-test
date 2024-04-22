import CompDescBox from '@/modules/CompDescBox';
import Link from 'next/link';

function Problem3Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center gap-4 p-24">
      <h1 className="text-2xl">第 3 題</h1>
      <Link href="/" className="font-bold text-blue-500">
        上一頁
      </Link>
      <h2 className="text-xl font-bold">聊天室 元件規劃</h2>
      <div className="w-full rounded-md bg-white px-12 py-8">
        <CompDescBox />
      </div>
    </main>
  );
}

export default Problem3Page;
