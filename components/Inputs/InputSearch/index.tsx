'use client';

import { useState } from 'react';

function InputSearch() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="輸入內容"
        className="relative flex h-10 w-[277px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px] outline-none"
      />
      {isOpen && (
        <ul className="absolute left-0 top-[100%] mt-3 flex w-full flex-col gap-4 rounded-lg bg-grey-light p-4 text-left">
          <li>台北市</li>
          <li>台北市</li>
          <li>台北市</li>
          <li>台北市</li>
        </ul>
      )}
    </div>
  );
}

export default InputSearch;
