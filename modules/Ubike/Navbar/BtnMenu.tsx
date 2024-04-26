import Image from 'next/image';

type PropsType = {
  isOpen: boolean;
  onClick: () => void;
};

function BtnMenu({ isOpen, onClick }: PropsType) {
  const imgSrc = isOpen ? '/icon-close.svg' : '/icon-menu.svg';
  return (
    <button type="button" className="lg:hidden" onClick={onClick}>
      <Image src={imgSrc} alt="menu" width={24} height={24} />
    </button>
  );
}

export default BtnMenu;
