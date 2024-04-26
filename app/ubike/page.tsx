import { BannerImage } from '@/components/BannerImage';
import SearchTool from '@/modules/Ubike/SearchTool';

function UbikePage() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mx-8 2xl:mx-[124px]">
          <h1 className="my-8 text-lg font-bold text-primary lg:text-2xl">
            站點資訊
          </h1>
          <div className="flex flex-col justify-between lg:flex-row">
            <SearchTool />
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UbikePage;
