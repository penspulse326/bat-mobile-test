import district from '../constants/district';
import { UbikeDataType } from '../constants/types';

export const getCities = (): string[] => {
  const city = Object.keys(district);
  return city;
};

export const getDistricts = (city: string): string[] => {
  const districts = Object.keys(district[city as keyof typeof district]);
  return districts;
};

export const getFilteredUbikeData = (
  data: UbikeDataType[],
  selectedDistricts: string[],
): UbikeDataType[] => {
  // filter data
  let ubikeData: UbikeDataType[] = [];

  for (let i = 0; i < selectedDistricts.length; i++) {
    if (selectedDistricts[i] === '全部勾選') {
      ubikeData = data!;
      break;
    }
    ubikeData.push(
      ...(data?.filter(
        ({ sarea }: UbikeDataType) => sarea === selectedDistricts[i],
      ) || []),
    );
  }

  return ubikeData;
};
