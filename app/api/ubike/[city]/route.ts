import { NextRequest, NextResponse } from 'next/server';

type ParamsType = {
  city: string;
};

export const GET = async (
  _: NextRequest,
  { params }: { params: ParamsType },
) => {
  const { city } = params;

  try {
    if (city === 'taipei') {
      const res = await fetch(process.env.BASE_URL!);
      const data = await res.json();

      return new NextResponse(JSON.stringify(data), { status: 200 });
    }
    return new NextResponse('Error', { status: 404 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
};
