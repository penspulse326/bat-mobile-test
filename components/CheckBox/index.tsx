import Image from 'next/image';

function CheckBox() {
  return (
    <button type="button">
      <Image src="/icon-check.svg" alt="check box" width={24} height={24} />
    </button>
  );
}

export default CheckBox;
