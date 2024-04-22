import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center p-24">
      <h1 className="text-4xl font-bold">蝙蝠移動測驗試題 - 前端組 - 陳文信</h1>
      <ul className="mt-12 w-full text-center">
        <li>
          第 1 題：{' '}
          <Link href="/problem1" className="font-bold text-blue-500">
            連結
          </Link>
        </li>
        <li>
          第 2 題：{' '}
          <Link href="/problem2" className="font-bold text-blue-500">
            連結
          </Link>
        </li>
      </ul>
    </main>
  );
}
