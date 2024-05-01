import { NextRequest, NextResponse } from 'next/server';

import { fakeUbikeData } from '@/common/constants/fakeData';

type ParamsType = {
  city: string;
};

export const GET = async (
  _: NextRequest,
  { params }: { params: ParamsType },
) => {
  const { city } = params;

  try {
    if (city === '臺北市') {
      const res = await fetch(process.env.BASE_URL!);
      const data = await res.json();

      return new NextResponse(JSON.stringify(data), { status: 200 });
    }
    return new NextResponse(JSON.stringify(fakeUbikeData), { status: 200 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
};
