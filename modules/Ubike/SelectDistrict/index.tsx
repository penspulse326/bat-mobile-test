import district from '@/common/constants/district';
import CheckBox from '@/components/CheckBox';

type PropsType = {
  city: string;
  districts: string[];
  onChange: (name: string, checked: boolean) => void;
};

function SelectDistrict({ city, onChange }: PropsType) {
  const districts = city
    ? Object.keys(district[city as keyof typeof district])
    : [];

  return (
    <div className="mt-6 flex max-w-[468px] flex-wrap gap-x-6 gap-y-4">
      {city && (
        <>
          <div className="w-full">
            <CheckBox initialChecked onChange={onChange}>
              全部勾選
            </CheckBox>
          </div>
          <ul className="flex max-w-[468px] flex-wrap gap-x-4 gap-y-4 lg:gap-x-6">
            {districts.map((name: string) => (
              <CheckBox
                key={name}
                onChange={onChange}
                initialChecked={districts.includes(name)}
              >
                {name}
              </CheckBox>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SelectDistrict;
