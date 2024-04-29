'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import InputSearch from '@/components/Input/InputSearch';
import Select from '@/components/Select';
import { BannerImage } from '@/components/BannerImage';
import Table from '@/components/Table';
import SelectDistrict from '../SelectDistrict';
import { UbikeDataType } from '@/common/constants/types';
import district from '@/common/constants/district';
import { getDistricts } from '@/common/helper/getCityData';

type PropsType = {
  city: string | null;
  data: UbikeDataType[] | null;
};

function SearchTool({ city, data }: PropsType) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState(city || '');
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(() => {
    if (city) {
      return ['全部勾選', ...getDistricts(city)];
    } else {
      return [];
    }
  });

  const handleSelectCity = (value: string) => {
    setSelectedCity(value);
  };

  const handleToggleDistrict = (name: string, checked: boolean) => {
    if (name === '全部勾選') {
      checked
        ? setSelectedDistricts(['全部勾選', ...getDistricts(selectedCity)])
        : setSelectedDistricts([]);
      return;
    }

    setSelectedDistricts((prev) => {
      if (checked) {
        return [...prev, name];
      } else {
        return prev.filter((item) => item !== name);
      }
    });
  };

  console.log(selectedCity, selectedDistricts);

  useEffect(() => {
    if (selectedCity) {
      router.push(`/ubike?city=${selectedCity}`);
    }
  }, [selectedCity]);

  return (
    <div className="mx-8 2xl:mx-[124px]">
      <h1 className="my-8 text-lg font-bold text-primary lg:text-2xl">
        站點資訊
      </h1>
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Select value={selectedCity} onChange={handleSelectCity} />
            <InputSearch />
          </div>
          <SelectDistrict
            city={selectedCity}
            selectedDistricts={selectedDistricts}
            onChange={handleToggleDistrict}
          />
        </div>
        <BannerImage />
      </div>
      <div className="my-6">
        {city && selectedDistricts.length !== 0 && (
          <Table city={selectedCity} data={data} />
        )}
      </div>
    </div>
  );
}

export default SearchTool;
