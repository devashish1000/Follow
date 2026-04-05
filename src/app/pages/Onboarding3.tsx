import React from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { Coins, CheckCircle2 } from 'lucide-react';

export default function Onboarding3() {
  const navigate = useNavigate();

  return (
    <PageContainer className="justify-between h-full pt-8 pb-12">
      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-[28px] leading-[34px] font-semibold text-[#1C1917] tracking-tight">
          Clear, simple pricing.
        </h1>
        <p className="text-[15px] leading-[22px] text-[#57534E]">
          No subscriptions. Only pay when you need an edge for that next big role.
        </p>

        {/* Unlock Framing / Value Prop */}
        <div className="bg-white border border-[#C7A35A]/30 shadow-[0_8px_24px_rgba(199,163,90,0.15)] rounded-[20px] p-5 mt-6 flex flex-col gap-4">
          <div className="w-[44px] h-[44px] bg-[#F6F2EA] rounded-[12px] flex items-center justify-center">
             <Coins className="text-[#C7A35A]" size={24} strokeWidth={2.2} />
          </div>
          <div>
            <h2 className="text-[17px] leading-[22px] font-semibold text-[#1C1917]">
              1 Credit = 1 Full Rewrite
            </h2>
            <p className="text-[14px] leading-[20px] text-[#57534E] mt-1">
              For any specific job application.
            </p>
          </div>

          <div className="h-[1px] bg-black/5 my-2"></div>
          
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-[14px] text-[#57534E] leading-[20px]">
              <CheckCircle2 size={18} className="text-[#0F766E] shrink-0 mt-[1px]" />
              Compare differences instantly
            </li>
            <li className="flex items-start gap-2 text-[14px] text-[#57534E] leading-[20px]">
              <CheckCircle2 size={18} className="text-[#0F766E] shrink-0 mt-[1px]" />
              Export straight to your clipboard
            </li>
            <li className="flex items-start gap-2 text-[14px] text-[#57534E] leading-[20px]">
              <CheckCircle2 size={18} className="text-[#0F766E] shrink-0 mt-[1px]" />
              Save to History for later
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sticky Section */}
      <div className="flex flex-col gap-5 mt-auto pb-4 pt-10">
        {/* Pager Dots */}
        <div className="flex justify-center gap-2 mb-2">
          <div className="w-[8px] h-[8px] rounded-full bg-black/10" />
          <div className="w-[8px] h-[8px] rounded-full bg-black/10" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#0F766E]" />
        </div>

        <Button onClick={() => navigate('/paywall')} className="w-full">
          Get Started
        </Button>
        <Button variant="ghost" size="sm" onClick={() => navigate('/home')} className="mx-auto text-[14px]">
          Skip for now
        </Button>
      </div>
    </PageContainer>
  );
}
