function Problem1Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center gap-4 p-24">
      <h1 className="text-2xl">第 1 題</h1>
      <p>寫一個函式計算下列公式之總和： 1+2-3+4-5+6-.....+ 或 - N</p>
      <div className="h-[1px] w-full bg-gray-500" />
      請輸入 N 後按下 Enter 或輸入按鈕進行計算
      <div className="flex">
        <input type="text" className="p-2" />
        <button type="button" className="ml-2 bg-white px-2 py-1">
          計算
        </button>
      </div>
    </main>
  );
}

export default Problem1Page;
