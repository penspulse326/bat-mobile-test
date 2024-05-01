'use client';

import { useState } from 'react';
import Icon from './icon';
import { UbikeDataType } from '@/common/constants/types';
import { getUbikeDataByName } from '@/common/helper/getCityData';

type PropsType = {
  data: UbikeDataType[] | null;
  onChange: (data: UbikeDataType[]) => void;
};

function InputSearch({ data, onChange }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<UbikeDataType[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const newData = getUbikeDataByName(data || [], searchTerm);

    setSearchResult(newData);
    setSearchValue(searchTerm);
    setIsOpen(true);
    onChange(newData);
  };

  const handleListClick = (sna: string) => {
    const searchTerm = sna.split('_')[1];
    const newData = getUbikeDataByName(data || [], searchTerm);

    setSearchValue(searchTerm);
    setIsOpen(false);
    onChange(newData);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <label
      htmlFor="input-search"
      className="relative flex h-10 w-[311px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px] sm:w-[50%] lg:w-[277px]"
    >
      <input
        type="text"
        id="input-search"
        placeholder="搜尋站點"
        value={searchValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={handleBlur}
        className="w-full bg-transparent text-lg outline-none"
      />
      <div className="mx-2 w-[18px] flex-shrink-0">
        <Icon isSelected={searchValue !== ''} />
      </div>
      {isOpen && searchResult?.length !== 0 && (
        <ul
          tabIndex={-1}
          onBlur={() => setIsOpen(false)}
          className="absolute left-0 top-[100%] z-10 mt-3 flex max-h-[500px] w-full flex-col overflow-y-scroll rounded-lg bg-grey-light py-2 text-left"
        >
          {searchResult?.map(({ sno, sna }: UbikeDataType) => (
            <li
              key={sno}
              onClick={() => handleListClick(sna)}
              className="cursor-pointer px-4 py-2 hover:bg-grey-dark hover:text-white"
            >
              {sna.split('_')[1]}
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}

export default InputSearch;
