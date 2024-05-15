'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SelectDistrict from '../SelectDistrict';

import { UbikeDataType } from '@/common/constants/types';
import {
  getDistricts,
  getUbikeDataByDistrict,
} from '@/common/helper/getCityData';
import { BannerImage } from '@/components/BannerImage';
import InputSearch from '@/components/Input/InputSearch';
import Select from '@/components/Select';
import Table from '@/components/Table';

type PropsType = {
  city: string | null;
  data: UbikeDataType[] | null;
};

function SearchTool({ city, data }: PropsType) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState(city || '');
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(
    city ? ['全部勾選', ...getDistricts(city)] : [],
  );
  const [ubikeData, setUbikedData] = useState<UbikeDataType[] | null>(
    data ? getUbikeDataByDistrict(data, selectedDistricts) : [],
  );

  const handleSelectCity = (value: string) => {
    setSelectedCity(value);
  };

  const handleToggleDistrict = (name: string, checked: boolean) => {
    if (name === '全部勾選' && checked) {
      setSelectedDistricts(['全部勾選', ...getDistricts(selectedCity)]);
      return;
    }

    if (name === '全部勾選' && !checked) {
      setSelectedDistricts([]);
      return;
    }

    setSelectedDistricts((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name),
    );
  };

  useEffect(() => {
    if (selectedCity) {
      router.push(`/ubike?city=${selectedCity}`);
      setSelectedDistricts(['全部勾選', ...getDistricts(selectedCity)]);
      setUbikedData(getUbikeDataByDistrict(data!, selectedDistricts));
    }
  }, [selectedCity, data]);

  useEffect(() => {
    setUbikedData(getUbikeDataByDistrict(data!, selectedDistricts));
  }, [selectedDistricts]);

  return (
    <div className="mx-8 2xl:mx-[124px]">
      <h1 className="my-8 text-lg font-bold text-primary lg:text-2xl">
        站點資訊
      </h1>
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Select value={selectedCity} onChange={handleSelectCity} />
            <InputSearch
              data={data}
              onChange={(newData: UbikeDataType[]) => setUbikedData(newData)}
            />
          </div>
          <SelectDistrict
            city={selectedCity}
            value={selectedDistricts}
            onChange={handleToggleDistrict}
          />
        </div>
        <BannerImage />
      </div>
      <div className="my-6">
        {city && selectedDistricts.length !== 0 && (
          <Table city={selectedCity} data={ubikeData} />
        )}
      </div>
    </div>
  );
}

export default SearchTool;
