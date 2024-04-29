import { useState } from 'react';
import { getCities } from '@/common/helper/getCityData';
import Icon from './Icon';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};

function Select({ value, onChange }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const cities = getCities();

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex h-10 w-[311px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px] text-lg sm:w-[50%] lg:w-[175px]"
    >
      <span className={`${value ? 'text-grey-dark' : 'text-grey'} font-medium`}>
        {value || '選擇縣市'}
      </span>
      <Icon isSelected={value === ''} />
      {isOpen && (
        <ul className="absolute left-0 top-[100%] z-10 mt-3 flex max-h-[500px] w-full flex-col overflow-y-scroll rounded-lg bg-grey-light py-2 text-left">
          {cities.map((city: string) => (
            <li
              key={city}
              onClick={() => onChange(city)}
              className="px-4 py-2 hover:bg-grey-dark hover:text-white"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
}

export default Select;
