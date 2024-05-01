import Image from 'next/image';

function BtnSubmitMessage() {
  return (
    <button type="button" className="h-6 w-6 flex-shrink-0">
      <Image
        src="/icon-input-message.svg"
        alt="button to open menu"
        width={24}
        height={24}
      />
    </button>
  );
}

export default BtnSubmitMessage;
