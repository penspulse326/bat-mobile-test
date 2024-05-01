import { useRef, useState } from 'react';

import Icon from './Icon';
import List from './List';

import { getCities } from '@/common/helper/getCityData';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};

const cities = getCities();

function Select({ value, onChange }: PropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(value || '');
  const [searchResult, setSearchResult] = useState<string[]>(cities);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    const filteredCities = cities.filter((city: string) =>
      city.includes(searchTerm),
    );

    // 當過濾後的陣列不為 0，表示該搜尋字串命中，可以直接呼叫 onChange
    if (filteredCities.length !== 0) {
      onChange(filteredCities[0]);
    }

    setSearchValue(searchTerm);
    setSearchResult(filteredCities);
    setIsOpen(true);
  };

  const handleListClick = (city: string) => {
    setSearchValue(city);
    setIsOpen(false);
    onChange(city);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="relative flex h-10 w-[311px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px] text-lg sm:w-[50%] lg:w-[175px]">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={handleBlur}
        placeholder="選擇縣市"
        className="w-full bg-transparent font-medium text-grey-dark outline-none"
      />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={handleBlur}
      >
        <Icon isSelected={value !== ''} />
      </button>
      {isOpen && (
        <List
          data={searchResult}
          onChange={handleListClick}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Select;
