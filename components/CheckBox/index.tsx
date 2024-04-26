'use client';

import { useState } from 'react';
import IconChecked from './IconChecked';
import IconUnchecked from './IconUnchecked';

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsChecked(!isChecked)}
      className="flex items-center gap-3 text-lg"
    >
      {isChecked ? <IconChecked /> : <IconUnchecked />}
      <span>只看有貨</span>
    </button>
  );
}

export default CheckBox;
