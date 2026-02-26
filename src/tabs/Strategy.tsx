import { allPages } from '@/data/allPages';

export default function Strategy() {
  const contentPage27 = allPages.find(p => p.pageNumber === 27)?.content.split('المقترحة Reborn Hair الجزء السابع :استراتيجية')[1].split('كاملة Caption الجزء الثامن :أفكار الإعلانات +نصوص')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">المقترحة Reborn Hair الجزء السابع :استراتيجية</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage27?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
