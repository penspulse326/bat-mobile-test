import Image from 'next/image';

function BannerImage() {
  return (
    <div className="relative mx-10 mt-[72px] hidden w-full max-w-[502px] lg:block 2xl:mx-[72px]">
      <Image
        src="/banner.png"
        alt="bike"
        sizes="100vw"
        width={502}
        height={172}
        priority
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

export { BannerImage };
