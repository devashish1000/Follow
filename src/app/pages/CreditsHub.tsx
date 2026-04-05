import React from 'react';
import { useNavigate } from 'react-router';
import { PageContainer } from '../components/PageContainer';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { useAppContext } from '../Store';
import { Coins, CheckCircle2 } from 'lucide-react';

const PACKS = [
  { id: 1, amount: 5, price: '$7.99', popular: true },
  { id: 2, amount: 15, price: '$19.99', popular: false },
];

export default function CreditsHub() {
  const navigate = useNavigate();
  const { credits } = useAppContext();
  
  const isZero = credits === 0;

  return (
    <PageContainer className="pt-6 pb-[120px] bg-[#F6F2EA]">
      <div className="flex flex-col gap-6 mt-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div>
          <h1 className="text-[24px] leading-[30px] font-semibold text-[#1C1917] tracking-tight">
            Credits
          </h1>
          <p className="text-[14px] leading-[20px] text-[#57534E] mt-1 pr-6">
            Fuel your applications without subscriptions.
          </p>
        </div>

        {/* Balance Card */}
        <div className={`relative rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border overflow-hidden ${
          isZero ? 'bg-white border-red-500/20' : 'bg-[#1C1917] border-black/10'
        }`}>
          <div className="flex items-center justify-between z-10 relative">
            <div>
              <p className={`text-[14px] font-medium leading-[18px] ${isZero ? 'text-[#57534E]' : 'text-white/80'}`}>
                Current Balance
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Coins className={isZero ? "text-red-500" : "text-[#C7A35A]"} size={28} strokeWidth={2.2} />
                <p className={`text-[32px] font-semibold tracking-tight ${isZero ? 'text-[#1C1917]' : 'text-white'}`}>
                  {credits}
                </p>
              </div>
            </div>
            
            {isZero && (
              <div className="bg-red-50 text-red-600 text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Empty
              </div>
            )}
          </div>
        </div>

        {/* Purchase Cards */}
        <div className="flex flex-col gap-4 mt-2">
          <h2 className="text-[17px] font-semibold text-[#1C1917]">Refill Balance</h2>
          <div className="flex gap-3">
            {PACKS.map(pack => (
              <Card key={pack.id} className={`flex-1 relative cursor-pointer border hover:border-[#0F766E]/30 transition-colors bg-white ${pack.popular ? 'ring-2 ring-[#0F766E]/10' : ''}`}>
                <CardContent className="p-4 pt-5 pb-5 flex flex-col items-center gap-2 text-center">
                  {pack.popular && (
                    <div className="absolute -top-3 bg-[#0F766E] text-white text-[10px] font-bold px-2 py-0.5 rounded-[8px] uppercase tracking-wide">
                      Popular
                    </div>
                  )}
                  <span className="text-[17px] font-semibold text-[#1C1917]">{pack.amount} Credits</span>
                  <span className="text-[15px] font-medium text-[#57534E]">{pack.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="ghost" className="text-[#0F766E] text-[14px]" onClick={() => navigate('/paywall')}>
            View all packages
          </Button>
        </div>

        {/* How credits work */}
        <div className="mt-4">
          <h2 className="text-[17px] font-semibold text-[#1C1917] mb-3">How it works</h2>
          <ul className="flex flex-col gap-3 bg-white p-5 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-black/[0.08]">
            <li className="flex items-start gap-2 text-[14px] text-[#57534E] leading-[20px]">
              <CheckCircle2 size={18} className="text-[#C7A35A] shrink-0 mt-[1px]" />
              <span className="text-[#1C1917] font-medium">1 credit = 1 tailored resume</span> for a specific job application.
            </li>
            <li className="flex items-start gap-2 text-[14px] text-[#57534E] leading-[20px]">
              <CheckCircle2 size={18} className="text-[#C7A35A] shrink-0 mt-[1px]" />
              No monthly subscription. Only pay when you need an edge.
            </li>
            <li className="flex items-start gap-2 text-[14px] text-[#57534E] leading-[20px]">
              <CheckCircle2 size={18} className="text-[#C7A35A] shrink-0 mt-[1px]" />
              Credits never expire.
            </li>
          </ul>
        </div>

      </div>
    </PageContainer>
  );
}
