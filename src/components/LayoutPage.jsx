import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <NavBar />
      <main className="mx-auto max-w-6xl pt-24 pb-12">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;