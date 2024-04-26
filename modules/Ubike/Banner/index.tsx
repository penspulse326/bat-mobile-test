import InputSearch from '@/components/Inputs/InputSearch';
import CitySelect from '@/components/Selects/CitySelect';
import { BannerImage } from './data';

function Banner() {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
        <CitySelect />
        <InputSearch />
      </div>
      <BannerImage />
    </div>
  );
}

export default Banner;
