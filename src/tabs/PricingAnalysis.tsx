import { allPages } from '@/data/allPages';

export default function PricingAnalysis() {
  const pricingContent = allPages.find(p => p.pageNumber === 21)?.content.split('الجزء الثالث :تحليل الأسعار السائدة')[1];
  const pricingContent2 = allPages.find(p => p.pageNumber === 22)?.content.split('الجزء الرابع :أنماط المحتوى الإعلاني السائدة')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الثالث :تحليل الأسعار السائدة</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {pricingContent?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n'}
            {pricingContent2?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
