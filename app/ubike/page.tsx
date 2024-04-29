import API_PATH from '@/common/constants/API_PATH';
import SearchTool from '@/modules/Ubike/SearchTool';

async function fetchUbikeData(city: string) {
  // 臺北市以外都是假資料故使用預設的 SSG 即可
  const cacheSetting = city === '臺北市' ? { next: { revalidate: 60 } } : {};

  const res = await fetch(API_PATH.CITY(city), cacheSetting);
  const data = await res.json();
  return data;
}

type PropsType = {
  searchParams?: { city: string };
};

async function UbikePage({ searchParams }: PropsType) {
  let ubikeData = null;
  const city = searchParams?.city;

  if (city) {
    try {
      const data = await fetchUbikeData(city);
      ubikeData = data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <div className="container mx-auto">
        <SearchTool data={ubikeData} />
      </div>
    </section>
  );
}

export default UbikePage;
