import Banner from '@/modules/Ubike/Banner';

function UbikePage() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mx-8 2xl:mx-[124px]">
          <h1 className="my-8 text-lg font-bold text-primary lg:text-2xl">
            站點資訊
          </h1>
          <Banner />
        </div>
      </div>
    </section>
  );
}

export default UbikePage;
