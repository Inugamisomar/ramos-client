import { NavLink } from 'react-router-dom';
import myLogo from '../assets/liogaming.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) => [
  'rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300',
  isActive
    ? 'bg-white text-black shadow-md' // Makes the active page button white with black text
    : 'text-zinc-400 hover:text-white hover:bg-zinc-800', // Dim text that turns white and dark gray on hover
].join(' ');

const NavBar = () => {
  return (
    // Changed bg-white to bg-black/90, and the border to a dark gray
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 group">
          
          <img 
            src={myLogo} 
            alt="Leo Gaming Logo" 
            className="h-12 w-auto transition-transform group-hover:scale-105" 
          />
          
          {/* Changed text-zinc-900 to text-white so it shows up on the black background */}
          <div className="space-y-0.5">
            <p className="text-xl font-black tracking-tight text-white">LEO<span className="text-zinc-500 font-light">GAMING</span></p>
          </div>

        </NavLink>
        
        {/* Changed the pill container to a very dark gray (zinc-900) with a dark border */}
        <nav className="hidden items-center gap-2 md:flex bg-zinc-900 p-1 rounded-full border border-zinc-800">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;