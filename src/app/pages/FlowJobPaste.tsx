import React from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { TextArea } from '../components/ui/Input';
import { useAppContext } from '../Store';
import { ArrowLeft, Lock } from 'lucide-react';

export default function FlowJobPaste() {
  const navigate = useNavigate();
  const { flowData, setFlowData } = useAppContext();

  const handleNext = () => {
    if (flowData.jobDescription.trim().length > 10) {
      navigate('/flow/resume');
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
          <div className="h-full bg-[#0F766E] w-1/3 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-8 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-32">
        <div>
          <h1 className="text-[24px] leading-[30px] font-semibold text-[#1C1917] tracking-tight">
            Paste the Job Description
          </h1>
          <p className="text-[15px] leading-[22px] text-[#57534E] mt-2">
            Copy everything from the responsibilities to the requirements.
          </p>
        </div>

        <TextArea 
          placeholder="e.g. Seeking a Senior Product Designer to lead end-to-end design for our mobile application..."
          value={flowData.jobDescription}
          onChange={(e) => setFlowData({ jobDescription: e.target.value })}
          className="h-[280px] bg-[#F6F2EA]/50 focus:bg-white resize-none text-[15px] leading-[24px]"
        />

        {/* Trust Line */}
        <div className="flex items-center gap-2 mt-2 px-1">
          <Lock size={14} className="text-[#A8A29E]" />
          <span className="text-[13px] text-[#A8A29E] leading-[18px]">
            Your paste is only used once to process your resume, then forgotten.
          </span>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-5 pb-8 bg-gradient-to-t from-white via-white/95 to-transparent z-40 max-w-[393px] mx-auto">
        <Button 
          onClick={handleNext} 
          disabled={flowData.jobDescription.trim().length < 10}
          className="w-full h-[56px] text-[16px]"
        >
          Next Step
        </Button>
      </div>
    </PageContainer>
  );
}
