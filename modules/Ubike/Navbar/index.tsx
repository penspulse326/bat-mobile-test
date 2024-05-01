'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import LinkGroup from './LinkGroup';
import BtnMenu from './BtnMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#EBEBEB] bg-white">
      <div className="container mx-auto">
        <div className="mx-8 flex h-[72px] items-center justify-between 2xl:mx-[124px] 2xl:h-[105px] 2xl:text-lg">
          <Logo />
          <BtnMenu isOpen={isOpen} onClick={handleMenuClick} />
          {/* links group for lg */}
          <div className="hidden w-full lg:block">
            <LinkGroup />
          </div>
        </div>
        {/* links group for mobile */}
        <div className="lg:hidden">{isOpen && <LinkGroup />}</div>
      </div>
    </nav>
  );
}

export default Navbar;
