import Link from 'next/link';

const links = [
  { name: '使用說明', href: '/ubike?tab=guide' },
  { name: '收費方式', href: '/ubike?tab=pricing' },
  { name: '站點資訊', href: '/ubike?tab=locations' },
  { name: '最新消息', href: '/ubike?tab=news' },
  { name: '活動專區', href: '/ubike?tab=events' },
];

function LinkGroup() {
  return (
    <div className="absolute left-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col items-start justify-between bg-primary p-8 sm:items-center lg:relative lg:top-0 lg:h-auto lg:flex-row lg:bg-transparent">
      <ul className="flex flex-col items-start gap-8 font-medium sm:items-center lg:flex-row 2xl:gap-10">
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className="text-white duration-300  hover:text-secondary lg:text-secondary lg:hover:text-primary"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/ubike"
        className="rounded-full bg-white px-6 py-[10px] text-primary lg:bg-primary lg:text-white"
      >
        登入
      </Link>
    </div>
  );
}

export default LinkGroup;
