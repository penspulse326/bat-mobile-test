import Image from 'next/image';
import InputSearch from '@/components/Inputs/InputSearch';
import CitySelect from '@/components/Selects/CitySelect';

function Banner() {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
        <CitySelect />
        <InputSearch />
      </div>
      <div className="relative mx-10 hidden w-full max-w-[502px] self-end lg:block 2xl:mx-[72px]">
        <Image
          src="/banner.png"
          alt="bike"
          sizes="100vw"
          width={502}
          height={172}
          priority={false}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
