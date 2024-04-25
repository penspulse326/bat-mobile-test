import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link
      href="/ubike"
      className="mr-8 h-16 w-16 flex-shrink-0 2xl:mr-[60px] 2xl:h-24 2xl:w-24"
    >
      <Image
        src="/logo-ubike.svg"
        alt="logo"
        width={95}
        height={95}
        priority
        className="h-full w-full object-cover"
      />
    </Link>
  );
}

export default Logo;
