import React from 'react';
import { cn } from './Button';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helper, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && <label className="text-[14px] font-medium text-[#1C1917] leading-[20px]">{label}</label>}
        <input
          ref={ref}
          className={cn(
            "flex h-[44px] w-full rounded-[14px] border border-black/10 bg-white px-3 py-2 text-[15px] ring-offset-white placeholder:text-[#A8A29E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]/35 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-red-500 focus-visible:ring-red-500/35",
            className
          )}
          {...props}
        />
        {helper && !error && <span className="text-[13px] text-[#57534E] mt-1">{helper}</span>}
        {error && <span className="text-[13px] text-red-600 mt-1">{error}</span>}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, helper, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && <label className="text-[14px] font-medium text-[#1C1917] leading-[20px]">{label}</label>}
        <textarea
          ref={ref}
          className={cn(
            "flex min-h-[120px] w-full rounded-[14px] border border-black/10 bg-white px-3 py-3 text-[15px] ring-offset-white placeholder:text-[#A8A29E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]/35 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
            error && "border-red-500 focus-visible:ring-red-500/35",
            className
          )}
          {...props}
        />
        {helper && !error && <span className="text-[13px] text-[#57534E] mt-1">{helper}</span>}
        {error && <span className="text-[13px] text-red-600 mt-1">{error}</span>}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";
