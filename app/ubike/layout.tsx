import Navbar from '@/modules/Ubike/Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-grey-dark min-h-[100dvh] bg-white">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
