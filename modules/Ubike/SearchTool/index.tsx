'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import InputSearch from '@/components/Input/InputSearch';
import Select from '@/components/Select';
import { BannerImage } from '@/components/BannerImage';
import Table from '@/components/Table';
import SelectDistrict from '../SelectDistrict';
import { UbikeDataType } from '@/common/constants/types';

type PropsType = {
  data: UbikeDataType[] | null;
};

function SearchTool({ data }: PropsType) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    if (selectedCity) router.push(`/ubike?city=${selectedCity}`);
  }, [selectedCity]);

  return (
    <div className="mx-8 2xl:mx-[124px]">
      <h1 className="my-8 text-lg font-bold text-primary lg:text-2xl">
        站點資訊
      </h1>
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Select
              value={selectedCity}
              onChange={(value: string) => setSelectedCity(value)}
            />
            <InputSearch />
          </div>
          <SelectDistrict city={selectedCity} />
        </div>
        <BannerImage />
      </div>
      <div className="my-6">
        <Table city={selectedCity} data={data} />
      </div>
    </div>
  );
}

export default SearchTool;
