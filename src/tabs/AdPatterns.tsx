import { allPages } from '@/data/allPages';

export default function AdPatterns() {
  const contentPage22 = allPages.find(p => p.pageNumber === 22)?.content.split('الجزء الرابع :أنماط المحتوى الإعلاني السائدة')[1];
  const contentPage23 = allPages.find(p => p.pageNumber === 23)?.content;
  const contentPage24 = allPages.find(p => p.pageNumber === 24)?.content.split('الجزء الخامس :المكونات الأكثر ذكراً')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الرابع :أنماط المحتوى الإعلاني السائدة</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage22?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage23?.trim()}
            {'\n\n'}
            {contentPage24?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
