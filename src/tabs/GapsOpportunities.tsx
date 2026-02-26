import { allPages } from '@/data/allPages';

export default function GapsOpportunities() {
  const contentPage25 = allPages.find(p => p.pageNumber === 25)?.content.split('Reborn Hair الجزء السادس :الفجوات والفرص المتاحة لـ')[1];
  const contentPage26 = allPages.find(p => p.pageNumber === 26)?.content;

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">Reborn Hair الجزء السادس :الفجوات والفرص المتاحة لـ</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage25?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage26?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
