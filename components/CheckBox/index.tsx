import { useState } from 'react';
import IconChecked from './IconChecked';
import IconUnchecked from './IconUnchecked';

type PropsType = {
  children: string;
};

function CheckBox({ children }: PropsType) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsChecked(!isChecked)}
      className="flex items-center gap-3 text-nowrap text-lg"
    >
      {isChecked ? <IconChecked /> : <IconUnchecked />}
      <span>{children}</span>
    </button>
  );
}

export default CheckBox;
