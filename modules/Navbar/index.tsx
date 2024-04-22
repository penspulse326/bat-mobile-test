import BtnCamera from '@/components/Buttons/BtnCamera';
import BtnMenu from '@/components/Buttons/BtnMenu';

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-400 px-4 py-2">
      <BtnMenu />
      <BtnCamera />
    </nav>
  );
}

export default Navbar;
