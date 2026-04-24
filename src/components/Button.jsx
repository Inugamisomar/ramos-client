import { Link } from "react-router-dom";

const Button = ({ children, to, variant = "primary", className = "", ...props }) => {
  
  const base = "inline-block rounded-full px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300";

  const variants = {
    primary:
      "bg-teal-400 text-black hover:bg-teal-300 shadow-[0_0_10px_rgba(20,184,166,0.5)]",
    
    secondary:
      "border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black",

    outline:
      "border border-zinc-600 text-white hover:bg-zinc-800",
  };

  const styles = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;