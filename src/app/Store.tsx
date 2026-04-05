import React, { createContext, useContext, useState } from 'react';

type FlowData = {
  jobDescription: string;
  resume: string;
  originalText?: string;
  rewrittenText?: string;
};

type HistoryItem = {
  id: string;
  date: string;
  jobTitle: string;
  originalText: string;
  rewrittenText: string;
};

type AppState = {
  credits: number;
  history: HistoryItem[];
  flowData: FlowData;
  setCredits: (c: number) => void;
  addHistory: (item: HistoryItem) => void;
  setFlowData: (data: Partial<FlowData>) => void;
  resetFlow: () => void;
  deductCredit: () => boolean;
};

const AppContext = createContext<AppState | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [credits, setCredits] = useState(3);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [flowData, setFlowDataState] = useState<FlowData>({ jobDescription: '', resume: '' });

  const setFlowData = (data: Partial<FlowData>) => setFlowDataState(prev => ({ ...prev, ...data }));
  
  const resetFlow = () => setFlowDataState({ jobDescription: '', resume: '' });

  const deductCredit = () => {
    if (credits > 0) {
      setCredits(c => c - 1);
      return true;
    }
    return false;
  };

  const addHistory = (item: HistoryItem) => {
    setHistory(prev => [item, ...prev]);
  };

  return (
    <AppContext.Provider value={{ credits, history, flowData, setCredits, addHistory, setFlowData, resetFlow, deductCredit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
