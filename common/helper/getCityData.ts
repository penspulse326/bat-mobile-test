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

export const getUbikeDataByDistrict = (
  data: UbikeDataType[],
  districts: string[],
): UbikeDataType[] => {
  // filter data
  let ubikeData: UbikeDataType[] = [];

  for (let i = 0; i < districts.length; i++) {
    if (districts[i] === '全部勾選') {
      ubikeData = data!;
      break;
    }
    ubikeData.push(
      ...(data?.filter(({ sarea }: UbikeDataType) => sarea === districts[i]) ||
        []),
    );
  }

  return ubikeData;
};

export const getUbikeDataByName = (
  data: UbikeDataType[],
  searchTerm: string,
) => {
  const filteredData = data?.filter(({ sna }: UbikeDataType) =>
    sna.includes(searchTerm),
  );

  return filteredData || [];
};
