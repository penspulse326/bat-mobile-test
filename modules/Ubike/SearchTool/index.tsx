import InputSearch from '@/components/Input/InputSearch';
import CitySelect from '@/components/Select';
import CheckStation from '../CheckStation';

function SearchTool() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
        <CitySelect />
        <InputSearch />
      </div>
      <CheckStation />
    </div>
  );
}

export default SearchTool;
