import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { useAppContext } from '../Store';
import { Copy, Save, Sparkles, ChevronLeft } from 'lucide-react';
import { toast, Toaster } from 'sonner';

export default function FlowResults() {
  const navigate = useNavigate();
  const { flowData, credits, addHistory, resetFlow } = useAppContext();
  const [tab, setTab] = useState<'original' | 'rewritten'>('rewritten');
  const [hasSaved, setHasSaved] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(flowData.rewrittenText || '');
    toast.success('Copied to clipboard!');
  };

  const handleSave = () => {
    if (hasSaved) {
      navigate('/home');
      return;
    }
    
    addHistory({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      jobTitle: flowData.jobDescription.split(' ').slice(0, 3).join(' ') + '...', // Mock title
      originalText: flowData.originalText || '',
      rewrittenText: flowData.rewrittenText || '',
    });
    setHasSaved(true);
    toast.success('Saved to History');
    setTimeout(() => {
      resetFlow();
      navigate('/home');
    }, 1500);
  };

  return (
    <PageContainer className="h-full pt-6 pb-[140px] flex flex-col relative bg-[#F6F2EA]">
      <Toaster position="top-center" />
      
      {/* Top Nav */}
      <div className="flex items-center gap-3 mt-6">
        <button onClick={() => navigate('/home')} className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-black/5 transition-colors text-[#1C1917]">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[20px] leading-[26px] font-semibold text-[#1C1917] tracking-tight">
          Comparison
        </h1>
      </div>

      <div className="flex flex-col gap-5 mt-6 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Compact Proof Section */}
        <div className="bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-[20px] p-5 flex flex-col gap-4 min-h-[400px]">
          <div className="flex bg-[#F6F2EA] rounded-[12px] p-1 shadow-inner">
            <button 
              className={`flex-1 text-[14px] font-medium leading-[20px] py-2 rounded-[10px] transition-colors ${tab === 'original' ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-[#1C1917]' : 'text-[#57534E]'}`}
              onClick={() => setTab('original')}
            >
              Original Resume
            </button>
            <button 
              className={`flex-1 text-[14px] font-medium leading-[20px] py-2 rounded-[10px] transition-colors ${tab === 'rewritten' ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-[#0F766E]' : 'text-[#57534E]'}`}
              onClick={() => setTab('rewritten')}
            >
              Tailored Match
            </button>
          </div>

          <div className="text-[15px] leading-[24px] text-[#57534E] whitespace-pre-wrap flex-1 mt-2 pr-2">
            {tab === 'original' ? flowData.originalText : (
              <span className="text-[#1C1917] font-medium">{flowData.rewrittenText}</span>
            )}
          </div>
        </div>

      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-5 pb-8 bg-white/90 backdrop-blur-md border-t border-black/[0.08] shadow-[0_-16px_48px_rgba(0,0,0,0.08)] z-40 max-w-[393px] mx-auto">
        <div className="flex gap-3 mb-4">
          <Button onClick={handleCopy} variant="secondary" className="flex-1 text-[14px] bg-[#F6F2EA] text-[#1C1917] hover:bg-black/5 shadow-none border border-black/10">
            <Copy size={18} className="mr-2" />
            Copy
          </Button>
          <Button onClick={handleSave} className="flex-1 text-[14px]">
            <Save size={18} className="mr-2" />
            {hasSaved ? 'Saved' : 'Save'}
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          disabled={credits === 0} 
          onClick={() => navigate('/flow/job')}
          className="w-full text-[#0F766E] font-semibold flex items-center gap-2"
        >
          <Sparkles size={18} />
          Refine (Cost: 1 Credit)
        </Button>
      </div>
    </PageContainer>
  );
}
