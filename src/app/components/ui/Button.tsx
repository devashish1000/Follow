import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'motion/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'icon';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', loading, children, disabled, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]/35 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#0F766E] text-white hover:bg-[#0D635D]",
      secondary: "bg-[#C7A35A] text-white hover:bg-[#A9894A]",
      ghost: "bg-transparent text-[#57534E] hover:bg-black/5",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      default: "h-[48px] px-6 text-[14px] leading-[20px] rounded-[14px]",
      sm: "h-[40px] px-4 text-[13px] rounded-[12px]",
      icon: "h-[44px] w-[44px] rounded-[14px]",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
        transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
