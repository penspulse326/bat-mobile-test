import Image from 'next/image';

function CitySelect() {
  return (
    <button
      type="button"
      className="relative flex h-10 w-[175px] items-center justify-between rounded-lg bg-grey-light px-4 py-[10px]"
    >
      {/* 注意文字粗體 */}
      <span>台北市</span>
      <Image
        src="/icon-arrow-down.svg"
        alt="arrow down"
        priority
        width={18}
        height={18}
      />
      <ul className="absolute left-0 top-[100%] mt-3 flex w-full flex-col gap-4 rounded-lg bg-grey-light p-4 text-left">
        <li>台北市</li>
        <li>台北市</li>
        <li>台北市</li>
        <li>台北市</li>
      </ul>
    </button>
  );
}

export default CitySelect;
