import { allPages } from '@/data/allPages';

export default function TargetingBudgets() {
  const contentPage42 = allPages.find(p => p.pageNumber === 42)?.content.split('الجزء الحادي عشر :توصيات الاستهداف الإعلاني')[1];
  const contentPage43 = allPages.find(p => p.pageNumber === 43)?.content.split('الجزء الثاني عشر :الخلاصة التنفيذية')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الحادي عشر :توصيات الاستهداف الإعلاني</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage42?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage43?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
