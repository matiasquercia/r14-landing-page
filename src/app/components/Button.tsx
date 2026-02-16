import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl transition-all duration-300 font-black uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background relative overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_25px_rgba(0,212,230,0.25)] hover:shadow-[0_0_40px_rgba(0,212,230,0.4)] hover:scale-105',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_25px_rgba(8,145,178,0.25)] hover:shadow-[0_0_40px_rgba(8,145,178,0.4)] hover:scale-105',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-[0_0_15px_rgba(0,212,230,0.2)] hover:shadow-[0_0_30px_rgba(0,212,230,0.35)]',
    ghost: 'text-foreground hover:bg-white/10 hover:text-accent',
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-12 py-5 text-base',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Animated background gradient on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
