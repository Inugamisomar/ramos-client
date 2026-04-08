import { Link } from 'react-router-dom';

const Button = ({ children, to, className = '', ...props }) => {
  // Shared Tailwind classes for the button look
  const baseStyle = "inline-block rounded-full border-2 border-zinc-900 px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-zinc-50";
  
  // If a 'to' prop is passed, render a React Router Link
  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${className}`} {...props}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, render a standard HTML button
  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;