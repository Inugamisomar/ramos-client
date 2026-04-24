import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from "./Footer";

const LayoutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-gradient-to-br from-[#071e22] via-[#0b2a30] to-[#071e22] text-white min-h-screen">
      <NavBar />
      
      <main className="mx-auto max-w-7xl pt-24">
        <Outlet />
      </main>

      <Footer />  
    </div>
  );
};

export default LayoutPage;