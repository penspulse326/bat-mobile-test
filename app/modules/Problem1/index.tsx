'use client';

import calculateSum from '@/app/common/helper/calculateSum';
import { useRef, useState } from 'react';

function Problem1() {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);
  const [spentTime, setSpentTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const lastValueRef = useRef(0);

  const handleCalulate = () => {
    // 例外排除
    if (!value || value <= 0) {
      setErrorMessage('請輸入正整數');
      return;
    }

    // 初始化
    setErrorMessage('');
    lastValueRef.current = value;

    // 計算
    const { result, totalSpentTime } = calculateSum(value);

    setSum(result);
    setSpentTime(totalSpentTime);
    setValue(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      請輸入 N 後按下 Enter 或輸入按鈕進行計算
      <div className="flex">
        <input
          type="number"
          className="p-2"
          value={value || ''}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          onKeyDown={(e) => e.key === 'Enter' && handleCalulate()}
        />
        <button
          type="button"
          className="ml-2 bg-white px-2 py-1"
          onClick={handleCalulate}
        >
          計算
        </button>
      </div>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <div>
        N 為 {lastValueRef.current}，總合為：{sum}
      </div>
      <div>共花費：{spentTime} 毫秒</div>
    </div>
  );
}

export default Problem1;
