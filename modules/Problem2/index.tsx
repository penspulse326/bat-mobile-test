'use client';

import prizes from '@/common/constants/prizes';
import { PrizeListType } from '@/common/constants/types';
import raffle from '@/common/helper/raffle';
import { useState } from 'react';

function Problem2() {
  const [prizeList, setPrizeList] = useState<PrizeListType>(prizes);
  const [raffleLog, setRaffleLog] = useState<string[]>([]);

  const handleRaffle = () => {
    const result = raffle(prizeList);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      請按下方 抽獎 按鈕進行抽獎
      <button
        type="button"
        onClick={handleRaffle}
        className="ml-2 bg-white px-2 py-1"
      >
        抽獎
      </button>
      <h2 className="text-2xl">您本次抽中的獎項</h2>
      <section className="mt-4 flex gap-12">
        <div className="text-center">
          <h3 className="text-xl font-bold">剩下獎項</h3>
          <ul>
            {Object.values(prizeList).map(({ name, amount }) => (
              <li key={name}>
                {name}: {amount} 個
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1 bg-gray-300" />
        <div>
          <h3 className="font-bold">抽獎紀錄</h3>
        </div>
      </section>
    </div>
  );
}

export default Problem2;
