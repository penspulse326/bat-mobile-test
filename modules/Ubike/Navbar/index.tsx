import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="border-b border-[#EBEBEB]">
      <div className="container mx-auto">
        <div className="mx-[124px] flex h-[105px] items-center justify-between">
          <section className="flex">
            <Link href="/ubike" className="mr-[60px] h-[95px] w-[95px]">
              <Image
                src="/logo-ubike.svg"
                alt="logo"
                width={95}
                height={95}
                className="object-cover"
              />
            </Link>
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/ubike"
                  className="text-secondary hover:text-primary text-lg font-medium duration-300"
                >
                  使用說明
                </Link>
              </li>
              <li>
                <Link
                  href="/ubike"
                  className="text-secondary hover:text-primary text-lg font-medium duration-300"
                >
                  收費方式
                </Link>
              </li>
              <li>
                <Link
                  href="/ubike"
                  className="text-secondary hover:text-primary text-lg font-medium duration-300"
                >
                  站點資訊
                </Link>
              </li>
              <li>
                <Link
                  href="/ubike"
                  className="text-secondary hover:text-primary text-lg font-medium duration-300"
                >
                  最新消息
                </Link>
              </li>
              <li>
                <Link
                  href="/ubike"
                  className="text-secondary hover:text-primary text-lg font-medium duration-300"
                >
                  活動專區
                </Link>
              </li>
            </ul>
          </section>
          <Link
            href="/ubike"
            className="bg-primary hover:bg-secondary rounded-full px-6 py-[10px] text-lg text-white duration-300"
          >
            登入
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
