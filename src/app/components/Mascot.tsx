import React from 'react';

interface MascotProps {
  className?: string;
}

export function Mascot({ className = "w-24 h-24" }: MascotProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#3D3835" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Ear Tufts */}
        <path d="M 30 30 L 20 10 L 40 25 Z" fill="#F0E8DC" />
        <path d="M 70 30 L 80 10 L 60 25 Z" fill="#F0E8DC" />

        {/* Head/Body Fusion - Pear shape */}
        <path d="M 50 15 C 25 15, 15 35, 15 55 C 15 80, 25 90, 50 90 C 75 90, 85 80, 85 55 C 85 35, 75 15, 50 15 Z" fill="#F0E8DC" />
        
        {/* Belly circle */}
        <circle cx="50" cy="65" r="20" stroke="#3D3835" />

        {/* Wings - Half circles flush to body */}
        <path d="M 15 55 C 5 55, 5 80, 25 85" />
        <path d="M 85 55 C 95 55, 95 80, 75 85" />

        {/* Eyes */}
        <circle cx="36" cy="40" r="10" fill="#FFFFFF" />
        <circle cx="64" cy="40" r="10" fill="#FFFFFF" />
        
        {/* Pupils */}
        <circle cx="36" cy="40" r="2.5" fill="#3D3835" stroke="none" />
        <circle cx="64" cy="40" r="2.5" fill="#3D3835" stroke="none" />
        
        {/* Spectacles (Optional thin curved arc) - using 1.5px stroke to differentiate slightly */}
        <path d="M 26 40 A 10 10 0 0 1 46 40" strokeWidth="1.5" />
        <path d="M 54 40 A 10 10 0 0 1 74 40" strokeWidth="1.5" />
        <line x1="46" y1="40" x2="54" y2="40" strokeWidth="1.5" />

        {/* Beak */}
        <polygon points="45,46 55,46 50,56" fill="#C7A35A" />

        {/* Feet */}
        <path d="M 40 90 L 40 95 M 35 95 L 45 95" />
        <path d="M 60 90 L 60 95 M 55 95 L 65 95" />

        {/* Briefcase (Signature prop - held in front chest/side) */}
        <rect x="52" y="58" width="28" height="18" rx="4" fill="#3D3835" stroke="none" />
        <path d="M 60 58 C 60 53, 72 53, 72 58" stroke="#3D3835" strokeWidth="2" />
        {/* Briefcase latch notch */}
        <line x1="66" y1="58" x2="66" y2="62" stroke="#F0E8DC" strokeWidth="2" />
      </g>
    </svg>
  );
}
