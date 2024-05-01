import { useEffect, useRef } from 'react';

type PropsType = {
  data: string[];
  onChange: (value: string) => void;
  onClose: () => void;
};

function List({ data, onChange, onClose }: PropsType) {
  if (data.length === 0) return null;
  return (
    <ul
      tabIndex={-1}
      onBlur={() => onClose()}
      className="absolute left-0 top-[100%] z-10 mt-3 flex max-h-[500px] w-full flex-col overflow-y-scroll rounded-lg bg-grey-light py-2 text-left"
    >
      {data?.map((city: string) => (
        <li
          key={city}
          onClick={() => onChange(city)}
          className="cursor-pointer px-4 py-2 hover:bg-grey-dark hover:text-white"
        >
          {city}
        </li>
      ))}
    </ul>
  );
}

export default List;
