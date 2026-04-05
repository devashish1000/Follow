import React from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Mascot } from '../components/Mascot';
import { Button } from '../components/ui/Button';

export default function Onboarding1() {
  const navigate = useNavigate();

  return (
    <PageContainer className="justify-between h-full pt-8 pb-12">
      {/* Top Section */}
      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-[28px] leading-[34px] font-semibold text-[#1C1917] tracking-tight">
          Walk into your next interview with confidence.
        </h1>
        <p className="text-[15px] leading-[22px] text-[#57534E]">
          Tailor your resume precisely for the role you want. Stand out and tell a clearer story.
        </p>

        {/* Mascot & Bubble (<= 18% viewport height roughly) */}
        <div className="flex items-end gap-3 mt-10 h-[120px]">
          <Mascot className="w-[100px] h-[100px] shrink-0" />
          <div className="relative bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-[20px] rounded-bl-[4px] px-4 py-3 mb-6 flex-1 max-w-[200px]">
            <p className="text-[14px] font-medium leading-[20px] text-[#1C1917]">
              You'll see changes side-by-side before you pay.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Section */}
      <div className="flex flex-col gap-5 mt-auto pb-4 pt-10">
        {/* Pager Dots */}
        <div className="flex justify-center gap-2 mb-2">
          <div className="w-[8px] h-[8px] rounded-full bg-[#0F766E]" />
          <div className="w-[8px] h-[8px] rounded-full bg-black/10" />
          <div className="w-[8px] h-[8px] rounded-full bg-black/10" />
        </div>

        <Button onClick={() => navigate('/onboarding/2')} className="w-full">
          Continue
        </Button>
        
        <Button variant="ghost" size="sm" onClick={() => navigate('/home')} className="mx-auto text-[14px]">
          Skip
        </Button>
      </div>
    </PageContainer>
  );
}
