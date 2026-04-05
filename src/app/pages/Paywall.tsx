import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { Coins } from 'lucide-react';

const PACKS = [
  { id: 1, amount: 1, price: '$1.99', popular: false },
  { id: 2, amount: 5, price: '$7.99', popular: true, savings: '20% off' },
  { id: 3, amount: 15, price: '$19.99', popular: false, savings: '33% off' },
  { id: 4, amount: 50, price: '$49.99', popular: false, savings: '50% off' },
];

export default function Paywall() {
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState(2);

  const selected = PACKS.find(p => p.id === selectedPack);

  return (
    <PageContainer className="justify-between h-full pt-8 pb-12">
      <div className="flex flex-col gap-6 mt-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-[140px]">
        <h1 className="text-[28px] leading-[34px] font-semibold text-[#1C1917] tracking-tight">
          Fuel your next move.
        </h1>
        <p className="text-[15px] leading-[22px] text-[#57534E]">
          Secure credits for each job you're applying for.
        </p>

        {/* Tiers List */}
        <div className="flex flex-col gap-4 mt-6">
          {PACKS.map(pack => (
            <button
              key={pack.id}
              onClick={() => setSelectedPack(pack.id)}
              className={`relative bg-white border rounded-[20px] p-5 flex items-center justify-between text-left transition-all ${
                selectedPack === pack.id
                  ? 'border-[#0F766E] shadow-[0_8px_24px_rgba(15,118,110,0.15)] ring-2 ring-[#0F766E]/30'
                  : 'border-black/[0.08] shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:border-black/20'
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C7A35A] text-white text-[12px] font-bold px-3 py-1 rounded-[10px] uppercase tracking-wide whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Coins className={selectedPack === pack.id ? "text-[#C7A35A]" : "text-[#A8A29E]"} size={20} />
                  <span className="text-[17px] font-semibold text-[#1C1917]">{pack.amount} {pack.amount === 1 ? 'Credit' : 'Credits'}</span>
                </div>
                {pack.savings && (
                  <span className="text-[13px] text-[#0F766E] font-medium ml-7">{pack.savings}</span>
                )}
              </div>
              <span className="text-[20px] font-semibold tabular-nums text-[#1C1917]">
                {pack.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-5 pb-8 bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/95 to-transparent z-40 max-w-[393px] mx-auto">
        <Button onClick={() => navigate('/home')} className="w-full h-[52px] text-[15px]">
          Purchase {selected?.amount} Credits
        </Button>
        
        <Button variant="ghost" size="sm" onClick={() => navigate('/home')} className="w-full mt-4 text-[14px]">
          Skip, I'll buy later
        </Button>
      </div>
    </PageContainer>
  );
}
