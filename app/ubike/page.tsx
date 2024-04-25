import Image from 'next/image';

function UbikePage() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mx-8 2xl:mx-[124px]">
          <h1 className="my-8 text-2xl font-bold text-primary">站點資訊</h1>
          <div className="flex items-end">
            <div>123</div>
            <div className="relative w-full max-w-[502px]">
              <Image
                src="/banner.png"
                alt="bike"
                sizes="100vw"
                width={502}
                height={172}
                priority={false}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UbikePage;
