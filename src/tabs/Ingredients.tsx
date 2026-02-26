import { allPages } from '@/data/allPages';

export default function Ingredients() {
  const contentPage24 = allPages.find(p => p.pageNumber === 24)?.content.split('الجزء الخامس :المكونات الأكثر ذكراً')[1];
  const contentPage25 = allPages.find(p => p.pageNumber === 25)?.content.split('Reborn Hair الجزء السادس :الفجوات والفرص المتاحة لـ')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الخامس :المكونات الأكثر ذكراً</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage24?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage25?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
