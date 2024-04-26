import InputSearch from '@/components/Input/InputSearch';
import CitySelect from '@/components/Select';
import { BannerImage } from './data';
import CheckBox from '@/components/CheckBox';

function Banner() {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
          <CitySelect />
          <InputSearch />
        </div>
        <div className="mt-4">
          <CheckBox />
        </div>
      </div>
      <BannerImage />
    </div>
  );
}

export default Banner;
