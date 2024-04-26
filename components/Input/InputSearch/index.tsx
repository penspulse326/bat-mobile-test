'use client';

import { useState } from 'react';
import Icon from './icon';

function InputSearch() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <label
      htmlFor="input-search"
      className="relative flex h-10 w-[311px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px] sm:w-[50%] lg:w-[277px]"
    >
      <input
        type="text"
        id="input-search"
        placeholder="搜尋站點"
        className="w-full bg-transparent text-lg outline-none"
      />
      <div className="mx-2 w-[18px] flex-shrink-0">
        <Icon />
      </div>
      {isOpen && (
        <ul className="absolute left-0 top-[100%] mt-3 flex w-full flex-col gap-4 rounded-lg bg-grey-light p-4 text-left">
          <li>台北市</li>
          <li>台北市</li>
          <li>台北市</li>
          <li>台北市</li>
        </ul>
      )}
    </label>
  );
}

export default InputSearch;
