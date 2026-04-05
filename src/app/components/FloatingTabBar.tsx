import React from 'react';
import { NavLink } from 'react-router';
import { Home, Clock, Coins } from 'lucide-react';
import { cn } from './ui/Button';

export function FloatingTabBar({ className }: { className?: string }) {
  return (
    <div className={cn("fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none", className)}>
      <nav className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-black/[0.08] rounded-[28px] p-2 flex items-center gap-2">
        <TabItem to="/home" icon={Home} label="Home" />
        <TabItem to="/history" icon={Clock} label="History" />
        <TabItem to="/credits" icon={Coins} label="Credits" />
      </nav>
    </div>
  );
}

function TabItem({ to, icon: Icon, label }: { to: string, icon: React.ElementType, label: string }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex flex-col items-center justify-center w-[64px] h-[52px] rounded-[20px] transition-colors gap-1",
        isActive ? "bg-[#F6F2EA] text-[#0F766E]" : "text-[#A8A29E] hover:text-[#57534E]"
      )}
    >
      <Icon size={22} strokeWidth={2.2} />
      <span className="text-[10px] font-medium leading-none">{label}</span>
    </NavLink>
  );
}
