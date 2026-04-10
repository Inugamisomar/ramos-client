import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from "./Footer";

const LayoutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans">
      <NavBar />
      
      <main className="mx-auto max-w-7xl pt-24">
        <Outlet />
      </main>

      <Footer />  
    </div>
  );
};

export default LayoutPage;