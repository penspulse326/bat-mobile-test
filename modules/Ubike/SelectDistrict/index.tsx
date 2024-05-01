import { getDistricts } from '@/common/helper/getCityData';
import CheckBox from '@/components/CheckBox';

type PropsType = {
  city: string;
  value: string[];
  onChange: (name: string, checked: boolean) => void;
};

function SelectDistrict({ city, value, onChange }: PropsType) {
  const districtData = city ? getDistricts(city) : [];

  if (!city) return <></>;

  return (
    <div className="mt-6 flex max-w-[468px] flex-wrap gap-x-6 gap-y-4">
      <div className="w-full">
        <CheckBox initialChecked onChange={onChange}>
          全部勾選
        </CheckBox>
      </div>
      <ul className="flex max-w-[468px] flex-wrap gap-x-4 gap-y-4 lg:gap-x-6">
        {districtData.map((name: string) => (
          <CheckBox
            key={name}
            onChange={onChange}
            initialChecked={value.includes(name)}
          >
            {name}
          </CheckBox>
        ))}
      </ul>
    </div>
  );
}

export default SelectDistrict;
