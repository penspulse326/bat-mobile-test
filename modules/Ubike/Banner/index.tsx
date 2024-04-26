import InputSearch from '@/components/Input/InputSearch';
import CitySelect from '@/components/Select';
import { BannerImage } from './data';
import CheckBox from '@/components/CheckBox';

function Banner() {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
        <CitySelect />
        <InputSearch />
      </div>
      <CheckBox />
      <BannerImage />
    </div>
  );
}

export default Banner;
