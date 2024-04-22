'use client';

import prizes from '@/common/constants/prizes';
import { PrizeListType } from '@/common/constants/types';
import raffle from '@/common/helper/raffle';
import { useState } from 'react';

function Problem2() {
  const [prizeList, setPrizeList] = useState<PrizeListType>(prizes);
  const [raffleLog, setRaffleLog] = useState<string[]>([]);
  const [raffleMessage, setRaffleMessage] = useState<string>('');

  const handleRaffle = () => {
    const { message, newList, name } = raffle(prizeList);
    setPrizeList(newList);
    setRaffleMessage(message);
    setRaffleLog((prev) => [...prev, name]);
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
      <h2 className="text-2xl">{raffleMessage}</h2>
      <section className="mt-4 flex gap-12 text-center">
        <div>
          <h3 className="mb-4 text-xl font-bold">剩下獎項</h3>
          <ul>
            {Object.values(prizeList).map(({ name, amount }) => (
              <li key={name}>
                {name}: {amount} 個
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[200px] w-1 bg-gray-300" />
        <div>
          <h3 className="mb-4 text-xl font-bold">抽獎紀錄</h3>
          <ul className="h-[200px] overflow-y-scroll pr-4">
            {raffleLog.map((award, index) => (
              <li key={`${index + 1}-${award}`}>
                第 {index + 1} 次: {award}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Problem2;
