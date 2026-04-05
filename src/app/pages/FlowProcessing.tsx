import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { useAppContext } from '../Store';
import { Mascot } from '../components/Mascot';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function FlowProcessing() {
  const navigate = useNavigate();
  const { deductCredit, setFlowData, flowData } = useAppContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake processing progress
    const duration = 3000; // 3 seconds total
    const interval = 50; // update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        finishProcessing();
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const finishProcessing = () => {
    const success = deductCredit();
    if (success) {
      // Create mock rewritten text based on real resume length
      const mockRewritten = `[Optimized for Job Requirements]\n\n${flowData.resume.split('\n').map((line, i) => i === 0 ? line + " (Tailored)" : line).join('\n')}\n\n-> Highlighted leadership & impact metrics aligned with the target role.`;
      
      setFlowData({
        originalText: flowData.resume,
        rewrittenText: mockRewritten
      });
      navigate('/flow/results', { replace: true });
    } else {
      // Navigate to credits if none
      navigate('/paywall', { replace: true });
    }
  };

  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <PageContainer className="h-full pt-12 pb-12 flex flex-col justify-center items-center relative bg-[#F6F2EA]">
      <div className="flex flex-col items-center gap-8 max-w-[280px] w-full text-center">
        {/* Mascot */}
        <Mascot className="w-[120px] h-[120px]" />
        
        <div>
          <h1 className="text-[24px] leading-[30px] font-semibold text-[#1C1917] tracking-tight flex items-center gap-3 justify-center">
            <Loader2 className="animate-spin text-[#0F766E]" size={24} />
            Analyzing Match
          </h1>
          <p className="text-[15px] leading-[22px] text-[#57534E] mt-3">
            Noa is mapping your experience to the job requirements...
          </p>
        </div>

        {/* Determinate Progress Bar */}
        <div className="w-full bg-black/10 h-[6px] rounded-full overflow-hidden mt-2">
          <motion.div 
            className="h-full bg-[#0F766E] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-6">
         <Button variant="ghost" className="w-full text-[#A8A29E] hover:text-[#57534E]" onClick={handleCancel}>
           Cancel
         </Button>
      </div>
    </PageContainer>
  );
}
