import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Mascot } from '../components/Mascot';
import { Button } from '../components/ui/Button';

export default function Onboarding2() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'original' | 'rewritten'>('rewritten');

  return (
    <PageContainer className="justify-between h-full pt-8 pb-12">
      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-[28px] leading-[34px] font-semibold text-[#1C1917] tracking-tight">
          A tighter match to the job posting.
        </h1>

        {/* Compact Proof Section */}
        <div className="bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-[20px] p-4 flex flex-col gap-4">
          <div className="flex bg-[#F6F2EA] rounded-[12px] p-1">
            <button 
              className={`flex-1 text-[13px] font-medium leading-[18px] py-1.5 rounded-[10px] transition-colors ${tab === 'original' ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#1C1917]' : 'text-[#57534E]'}`}
              onClick={() => setTab('original')}
            >
              Original
            </button>
            <button 
              className={`flex-1 text-[13px] font-medium leading-[18px] py-1.5 rounded-[10px] transition-colors ${tab === 'rewritten' ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#1C1917]' : 'text-[#57534E]'}`}
              onClick={() => setTab('rewritten')}
            >
              Rewritten
            </button>
          </div>

          <div className="min-h-[100px] text-[15px] leading-[22px] text-[#57534E]">
            {tab === 'original' ? (
              <p>Responsible for managing cross-functional teams to deliver software features on time.</p>
            ) : (
              <p className="text-[#1C1917]">Led a 12-person cross-functional team, accelerating feature delivery by 30% through agile sprint planning.</p>
            )}
          </div>
        </div>

        {/* Mascot & Bubble */}
        <div className="flex items-end gap-3 mt-4 h-[120px]">
          <Mascot className="w-[100px] h-[100px] shrink-0" />
          <div className="relative bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-[20px] rounded-bl-[4px] px-4 py-3 mb-6 flex-1 max-w-[200px]">
            <p className="text-[14px] font-medium leading-[20px] text-[#1C1917]">
              Easily review and export your polished accomplishments.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Section */}
      <div className="flex flex-col gap-5 mt-auto pb-4 pt-6">
        {/* Pager Dots */}
        <div className="flex justify-center gap-2 mb-2">
          <div className="w-[8px] h-[8px] rounded-full bg-black/10" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#0F766E]" />
          <div className="w-[8px] h-[8px] rounded-full bg-black/10" />
        </div>

        <Button onClick={() => navigate('/onboarding/3')} className="w-full">
          Continue
        </Button>
        <Button variant="ghost" size="sm" onClick={() => navigate('/home')} className="mx-auto text-[14px]">
          Skip
        </Button>
      </div>
    </PageContainer>
  );
}
