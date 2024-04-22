import Problem2 from '@/modules/Problem2';
import Link from 'next/link';

function Problem1Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center gap-4 p-24">
      <h1 className="text-2xl">第 2 題</h1>
      <Link href="/" className="font-bold text-blue-500">
        上一頁
      </Link>
      <p className="text-center">
        抽抽樂總共有五種獎項, 1,2 獎各只有一個, 3 獎有 2 個，4 獎有 5 個，5 獎有
        11 個， <br /> 請寫出一個程式可以「隨機」的取得「不重複」的禮物， 且：
      </p>
      <ul>
        <li>● 1 獎中獎機率為 0.1%</li>
        <li>● 2 獎中獎機率為 2.3%</li>
        <li>● 3 獎中獎機率為 13%</li>
        <li>● 4 獎中獎機率為 18%</li>
        <li>● 5 獎中獎機率為 25%</li>
      </ul>
      <hr className="w-full border-gray-500" />
      <Problem2 />
    </main>
  );
}

export default Problem1Page;
