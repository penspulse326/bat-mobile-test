import Image from 'next/image';

function BannerImage() {
  return (
    <div className="relative mx-10 hidden w-full max-w-[502px] self-end lg:block 2xl:mx-[72px]">
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
  );
}

export { BannerImage };
