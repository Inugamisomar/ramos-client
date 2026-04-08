import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const LayoutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans">
      <NavBar />
      
      {/* Add pt-24 here to push everything down below the fixed Navbar */}
      <main className="mx-auto max-w-7xl pt-24"> 
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;