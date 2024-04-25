import Image from 'next/image';

function BtnCamera() {
  return (
    <button type="button">
      <Image
        src="/icon-camera.svg"
        alt="button to call camera app"
        width={24}
        height={24}
      />
    </button>
  );
}

export default BtnCamera;
