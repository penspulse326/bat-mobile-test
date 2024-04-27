import district from '../constants/district';

export const getCities = (): string[] => {
  const city = Object.keys(district);
  return city;
};

export const getDistricts = (city: string): string[] => {
  const districts = Object.keys(district[city as keyof typeof district]);
  return districts;
};
