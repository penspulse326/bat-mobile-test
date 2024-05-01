import BtnCamera from '@/components/Button/BtnCamera';
import BtnMenu from '@/components/Button/BtnMenu';

function Navbar() {
  return (
    <nav className="flex h-12 items-center justify-between border-b border-slate-400 bg-slate-100 px-4 py-2">
      <BtnMenu />
      <BtnCamera />
    </nav>
  );
}

export default Navbar;
