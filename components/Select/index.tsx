import { useRef, useState } from 'react';
import { getCities } from '@/common/helper/getCityData';
import Icon from './Icon';
import List from './List';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};

const cities = getCities();

function Select({ value, onChange }: PropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(value || '選擇縣市');
  const [searchResult, setSearchResult] = useState<string[]>(cities);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    if (searchTerm === '') {
      inputRef.current?.blur();
      setSearchValue('選擇縣市');
      setIsOpen(false);
      onChange('');

      return;
    }

    const filteredCities = cities.filter((city: string) =>
      city.includes(searchTerm),
    );

    setSearchValue(searchTerm);
    setSearchResult(filteredCities);
    setIsOpen(true);
  };

  const handleListClick = (city: string) => {
    setSearchValue(city);
    setIsOpen(false);
    onChange(city);
  };

  return (
    <div
      tabIndex={-1}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      className="relative flex h-10 w-[311px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px] text-lg sm:w-[50%] lg:w-[175px]"
    >
      <input
        type="text"
        ref={inputRef}
        value={searchValue}
        onChange={handleInputChange}
        className={`${searchValue === '選擇縣市' ? 'text-grey' : 'text-grey-dark'} w-full bg-transparent font-medium outline-none`}
      />
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <Icon isSelected={value === ''} />
      </button>
      {isOpen && <List data={searchResult} onChange={handleListClick} />}
    </div>
  );
}

export default Select;
