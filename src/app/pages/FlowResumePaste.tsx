import React from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { TextArea } from '../components/ui/Input';
import { useAppContext } from '../Store';
import { ArrowLeft, Lock } from 'lucide-react';

export default function FlowResumePaste() {
  const navigate = useNavigate();
  const { flowData, setFlowData } = useAppContext();

  const handleNext = () => {
    if (flowData.resume.trim().length > 10) {
      navigate('/flow/processing');
    }
  };

  return (
    <PageContainer className="h-full pt-6 pb-24 flex flex-col justify-between relative bg-white">
      {/* Top Nav */}
      <div className="flex items-center gap-4 mt-6">
        <button onClick={() => navigate(-1)} className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-black/5 -ml-2 transition-colors">
          <ArrowLeft size={24} className="text-[#1C1917]" />
        </button>
        <div className="flex-1 h-[4px] bg-black/10 rounded-full overflow-hidden mr-4">
          <div className="h-full bg-[#0F766E] w-2/3 rounded-full transition-all duration-300" />
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-8 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-32">
        <div>
          <h1 className="text-[24px] leading-[30px] font-semibold text-[#1C1917] tracking-tight">
            Paste your current Resume
          </h1>
          <p className="text-[15px] leading-[22px] text-[#57534E] mt-2">
            Just the experience and summary text. No need to worry about formatting.
          </p>
        </div>

        <TextArea 
          placeholder="e.g. Lead Designer - Managed a team of 3 designers to deliver our flagship product..."
          value={flowData.resume}
          onChange={(e) => setFlowData({ resume: e.target.value })}
          className="h-[280px] bg-[#F6F2EA]/50 focus:bg-white resize-none text-[15px] leading-[24px]"
        />

        {/* Trust Line */}
        <div className="flex items-center gap-2 mt-2 px-1">
          <Lock size={14} className="text-[#A8A29E]" />
          <span className="text-[13px] text-[#A8A29E] leading-[18px]">
            We securely process your experience to align with the job description.
          </span>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-5 pb-8 bg-gradient-to-t from-white via-white/95 to-transparent z-40 max-w-[393px] mx-auto">
        <Button 
          onClick={handleNext} 
          disabled={flowData.resume.trim().length < 10}
          className="w-full h-[56px] text-[16px]"
        >
          Review Match
        </Button>
      </div>
    </PageContainer>
  );
}
