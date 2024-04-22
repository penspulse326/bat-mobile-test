import Image from 'next/image';

function BtnBurgerMenu() {
  return (
    <button type="button">
      <Image src="/icon-burger.svg" alt="button menu" width={24} height={24} />
    </button>
  );
}

export default BtnBurgerMenu;
