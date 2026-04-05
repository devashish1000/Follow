import React from 'react';
import { PageContainer } from '../components/PageContainer';
import { useAppContext } from '../Store';
import { Mascot } from '../components/Mascot';
import { Card, CardContent } from '../components/ui/Card';
import { FileText, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

export default function HistoryPage() {
  const { history } = useAppContext();

  return (
    <PageContainer className="pt-6 pb-[120px] bg-[#F6F2EA]">
      <div className="flex flex-col gap-6 mt-8">
        <div>
          <h1 className="text-[24px] leading-[30px] font-semibold text-[#1C1917] tracking-tight">
            History
          </h1>
          <p className="text-[14px] leading-[20px] text-[#57534E] mt-1 pr-6">
            Review your tailored resumes for past applications.
          </p>
        </div>

        {history.length === 0 ? (
          <div className="flex flex-col items-center gap-6 mt-16 max-w-[280px] mx-auto text-center">
            <Mascot className="w-[120px] h-[120px]" />
            <h2 className="text-[17px] leading-[22px] font-semibold text-[#1C1917]">
              No tailored resumes yet
            </h2>
            <p className="text-[15px] leading-[22px] text-[#57534E]">
              Once you start matching your resume to job descriptions, they'll appear here for easy access.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {history.map(item => (
              <Card key={item.id} className="cursor-pointer hover:border-[#0F766E]/50 transition-colors bg-white">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#F6F2EA] w-[44px] h-[44px] rounded-[14px] flex items-center justify-center shrink-0">
                      <FileText size={20} className="text-[#0F766E]" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#1C1917] truncate max-w-[180px]">
                        {item.jobTitle}
                      </h3>
                      <p className="text-[12px] text-[#57534E] mt-0.5">
                        {format(new Date(item.date), 'MMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-[#A8A29E]" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
}
