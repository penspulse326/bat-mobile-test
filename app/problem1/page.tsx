import Problem1 from '@/modules/Problem1';

function Problem1Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center gap-4 p-24">
      <h1 className="text-2xl">第 1 題</h1>
      <p>寫一個函式計算下列公式之總和： 1+2-3+4-5+6-.....+ 或 - N</p>
      <hr className="w-full border-gray-500" />
      <Problem1 />
      <p className="text-center text-sm">
        計算說明：
        <br /> N 為奇數時的規律：總合為： -(N/2) + 1 <br />N
        為偶數時的規律，總合為： N/2 + 2
      </p>
    </main>
  );
}

export default Problem1Page;
