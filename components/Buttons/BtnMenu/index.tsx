import Image from 'next/image';

function BtnMenu() {
  return (
    <button type="button">
      <Image
        src="/icon-burger.svg"
        alt="button to open menu"
        width={24}
        height={24}
      />
    </button>
  );
}

export default BtnMenu;
