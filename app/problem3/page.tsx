import Link from 'next/link';

function Problem1Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center gap-4 p-24">
      <h1 className="text-2xl">第 3 題</h1>
      <Link href="/" className="font-bold text-blue-500">
        上一頁
      </Link>
    </main>
  );
}

export default Problem1Page;
