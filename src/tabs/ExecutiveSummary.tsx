import { allPages } from '@/data/allPages';

export default function ExecutiveSummary() {
  const contentPage43 = allPages.find(p => p.pageNumber === 43)?.content.split('الجزء الثاني عشر :الخلاصة التنفيذية')[1];
  const contentPage44 = allPages.find(p => p.pageNumber === 44)?.content;
  const contentPage45 = allPages.find(p => p.pageNumber === 45)?.content.split('جاهزة للاستخدام Hooks ملحق :مكتبة')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الثاني عشر :الخلاصة التنفيذية</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage43?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage44?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage45?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
