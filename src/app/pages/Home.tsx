import React from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { useAppContext } from '../Store';
import { Coins, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const { credits, history } = useAppContext();

  return (
    <PageContainer className="pt-6 pb-24">
      <div className="flex flex-col gap-5 mt-8">
        <div>
          <h1 className="text-[24px] leading-[30px] font-semibold text-[#1C1917] tracking-tight">
            NextInterview
          </h1>
          <p className="text-[14px] leading-[20px] text-[#57534E] mt-1 pr-6">
            Tailor your resume for the role—then walk into your next interview with confidence.
          </p>
        </div>

        {/* Credits Card */}
        <button
          onClick={() => navigate('/credits')}
          className="bg-[#1C1917] rounded-[20px] p-4 flex items-center justify-between text-left active:scale-[0.98] transition-transform shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-white/10 rounded-[12px] flex items-center justify-center">
              <Coins className="text-[#C7A35A]" size={20} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-[14px] font-medium text-white/80 leading-[18px]">Your Balance</p>
              <p className="text-[17px] font-semibold text-white leading-[22px] mt-0.5">
                {credits} {credits === 1 ? 'Credit' : 'Credits'} Available
              </p>
            </div>
          </div>
          <ChevronRight className="text-white/40" size={20} />
        </button>

        {/* Primary CTA */}
        <div className="mt-4">
          <Button 
            className="w-full h-[60px] text-[16px] rounded-[16px] shadow-[0_8px_24px_rgba(15,118,110,0.25)] flex items-center gap-3 justify-center"
            onClick={() => navigate('/flow/job')}
          >
            <FileText size={20} />
            Tailor for a job
          </Button>
        </div>

        {/* Tips Section */}
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-[17px] font-semibold text-[#1C1917]">Quick Tips</h2>
          
          <Card className="bg-white">
            <CardContent className="p-4 flex gap-3 items-start">
               <div className="bg-[#0F766E]/10 w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-[#0F766E]" />
               </div>
               <div>
                  <h3 className="text-[14px] font-semibold text-[#1C1917]">Paste the full job description.</h3>
                  <p className="text-[13px] text-[#57534E] mt-1 leading-[18px]">Include the requirements section so we can match keywords exactly.</p>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* History Retention Line */}
        {history.length > 0 && (
          <div className="mt-6 border-t border-black/5 pt-6 flex justify-between items-center">
            <p className="text-[13px] text-[#57534E]">You've tailored <span className="font-semibold text-[#1C1917]">{history.length}</span> resumes so far.</p>
            <button onClick={() => navigate('/history')} className="text-[13px] font-medium text-[#0F766E] hover:underline">
              View History
            </button>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
