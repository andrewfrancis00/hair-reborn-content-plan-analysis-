import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  List, TrendingUp, Award, DollarSign, Clapperboard, FlaskConical, Target, 
  MessageSquareText, CalendarDays, Rocket, Crosshair, CheckSquare, Magnet, Menu, X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import IndexTab from './tabs/IndexTab';
import MarketKeywords from './tabs/MarketKeywords';
import Competitors from './tabs/Competitors';
import PricingAnalysis from './tabs/PricingAnalysis';
import AdPatterns from './tabs/AdPatterns';
import Ingredients from './tabs/Ingredients';
import GapsOpportunities from './tabs/GapsOpportunities';
import AdIdeas from './tabs/AdIdeas';
import ContentCalendar from './tabs/ContentCalendar';
import LaunchStrategy from './tabs/LaunchStrategy';
import TargetingBudgets from './tabs/TargetingBudgets';
import ExecutiveSummary from './tabs/ExecutiveSummary';
import HooksCTAs from './tabs/HooksCTAs';

const TABS = [
  { id: 'index', label: 'فهرس المحتوى (Index)', icon: List, component: IndexTab },
  { id: 'market', label: 'تحليل السوق والكلمات المفتاحية', icon: TrendingUp, component: MarketKeywords },
  { id: 'competitors', label: 'المنافسون', icon: Award, component: Competitors },
  { id: 'pricing', label: 'تحليل الأسعار السائدة', icon: DollarSign, component: PricingAnalysis },
  { id: 'ad-patterns', label: 'أنماط المحتوى الإعلاني + هيكل الفيديو', icon: Clapperboard, component: AdPatterns },
  { id: 'ingredients', label: 'المكونات الأكثر ذكرًا', icon: FlaskConical, component: Ingredients },
  { id: 'gaps', label: 'الفجوات والفرص', icon: Target, component: GapsOpportunities },
  { id: 'ad-ideas', label: 'أفكار الإعلانات + نصوص Caption كاملة', icon: MessageSquareText, component: AdIdeas },
  { id: 'calendar', label: 'Content Calendar الشهري', icon: CalendarDays, component: ContentCalendar },
  { id: 'launch', label: 'Launch Strategy', icon: Rocket, component: LaunchStrategy },
  { id: 'targeting', label: 'توصيات الاستهداف والميزانيات', icon: Crosshair, component: TargetingBudgets },
  { id: 'summary', label: 'الخلاصة التنفيذية', icon: CheckSquare, component: ExecutiveSummary },
  { id: 'hooks', label: 'مكتبة Hooks + CTAs', icon: Magnet, component: HooksCTAs },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when tab changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  const activeTabObj = TABS.find(t => t.id === activeTab) || TABS[0];
  const ActiveComponent = activeTabObj.component;

  return (
    <div className="flex h-screen bg-[#F8F7FA] text-slate-900 font-sans selection:bg-[#FF9E79] selection:text-[#3B1C5A]" dir="rtl">
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 right-0 z-50 w-80 bg-[#3B1C5A] flex flex-col h-full shadow-2xl transition-transform duration-300 lg:relative lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 lg:p-8 border-b border-white/10 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF9E79] to-[#F4A261] flex items-center justify-center shadow-lg shrink-0">
                <span className="text-[#3B1C5A] font-bold text-xl">HR</span>
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">Hair Reborn</h1>
            </div>
            <p className="text-xs lg:text-sm text-[#FFB89E] font-medium opacity-90">تحليل المنافسين والخطة التسويقية</p>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-6 custom-scrollbar">
          <nav className="space-y-1.5 px-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 text-right relative overflow-hidden group",
                    isActive 
                      ? "text-[#3B1C5A] shadow-md shadow-[#FF9E79]/20" 
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#FF9E79]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={cn("w-5 h-5 shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110", isActive ? "text-[#3B1C5A]" : "text-[#FFB89E]")} />
                  <span className="truncate relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col relative w-full">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#3B1C5A]/5 to-transparent pointer-events-none" />
        
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-4 lg:px-10 py-4 lg:py-6 shadow-sm z-10 sticky top-0 flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#3B1C5A] hover:bg-[#FF9E79]/20 rounded-lg transition-colors shrink-0"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 lg:gap-4 overflow-hidden">
            <div className="p-2 lg:p-2.5 bg-[#FF9E79]/20 rounded-xl shrink-0">
              <activeTabObj.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#3B1C5A]" />
            </div>
            <h2 className="text-lg lg:text-2xl font-bold text-[#3B1C5A] truncate">
              {activeTabObj.label}
            </h2>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-10 relative z-0">
          <div className="max-w-5xl mx-auto pb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
