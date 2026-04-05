import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router";
import { AppProvider } from "./Store";
import { FloatingTabBar } from "./components/FloatingTabBar";

// Pages
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Paywall from "./pages/Paywall";
import Home from "./pages/Home";
import HistoryPage from "./pages/History";
import CreditsHub from "./pages/CreditsHub";
import FlowJobPaste from "./pages/FlowJobPaste";
import FlowResumePaste from "./pages/FlowResumePaste";
import FlowProcessing from "./pages/FlowProcessing";
import FlowResults from "./pages/FlowResults";

function AppShell() {
  const location = useLocation();
  const showTabs = ["/home", "/history", "/credits"].includes(location.pathname);

  return (
    <AppProvider>
      <div className="flex items-center justify-center min-h-screen bg-neutral-900 font-sans">
        {/* Device Wrapper */}
        <div className="relative w-full max-w-[393px] h-[100dvh] sm:h-[852px] bg-[#F6F2EA] sm:rounded-[44px] overflow-hidden shadow-2xl flex flex-col ring-8 ring-neutral-800">
          {/* Status bar spacer */}
          <div className="h-12 shrink-0 pointer-events-none z-50 flex items-center justify-between px-6">
            <span className="text-xs font-semibold text-black/80">9:41</span>
            <div className="flex gap-1.5 items-center">
               <div className="w-4 h-3 bg-black/80 rounded-[2px]"></div>
               <div className="w-3 h-3 bg-black/80 rounded-full"></div>
               <div className="w-5 h-3 bg-black/80 rounded-[2px]"></div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8">
            <Outlet />
          </div>

          {showTabs && <FloatingTabBar />}

          {/* Home indicator spacer */}
          <div className="absolute bottom-1 w-[134px] h-[5px] bg-black/80 rounded-full left-1/2 -translate-x-1/2 pointer-events-none z-50"></div>
        </div>
      </div>
    </AppProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppShell,
    children: [
      { index: true, element: <Navigate to="/onboarding/1" replace /> },
      { path: "onboarding/1", Component: Onboarding1 },
      { path: "onboarding/2", Component: Onboarding2 },
      { path: "onboarding/3", Component: Onboarding3 },
      { path: "paywall", Component: Paywall },
      { path: "home", Component: Home },
      { path: "history", Component: HistoryPage },
      { path: "credits", Component: CreditsHub },
      { path: "flow/job", Component: FlowJobPaste },
      { path: "flow/resume", Component: FlowResumePaste },
      { path: "flow/processing", Component: FlowProcessing },
      { path: "flow/results", Component: FlowResults },
    ],
  },
]);
