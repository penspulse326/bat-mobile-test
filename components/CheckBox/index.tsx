import { useEffect, useState } from 'react';

import IconChecked from './IconChecked';
import IconUnchecked from './IconUnchecked';

type PropsType = {
  initialChecked: boolean;
  children: string;
  onChange: (name: string, checked: boolean) => void;
};

function CheckBox({ initialChecked, children, onChange }: PropsType) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange(children, !isChecked);
  };

  useEffect(() => {
    setIsChecked(initialChecked);
  }, [initialChecked]);

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center gap-1 text-nowrap lg:gap-3 lg:text-lg"
    >
      {isChecked ? <IconChecked /> : <IconUnchecked />}
      <span>{children}</span>
    </button>
  );
}

export default CheckBox;
