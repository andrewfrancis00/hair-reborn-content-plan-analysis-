import { allPages } from '@/data/allPages';

export default function ExecutiveSummary() {
  const page43 = allPages.find(p => p.pageNumber === 43)?.content || '';
  const page44 = allPages.find(p => p.pageNumber === 44)?.content || '';
  const page45 = allPages.find(p => p.pageNumber === 45)?.content || '';

  const startIndex = page43.indexOf('الجزء الثاني عشر :الخلاصة التنفيذية');
  const contentPage43 = startIndex !== -1 ? page43.substring(startIndex) : page43;

  const endIndex = page45.indexOf('جاهزة للاستخدام Hooks ملحق :مكتبة');
  const contentPage45 = endIndex !== -1 ? page45.substring(0, endIndex) : page45;

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-4 lg:px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الثاني عشر :الخلاصة التنفيذية</h3>
        </div>
        <div className="p-4 lg:p-6">
          <pre className="whitespace-pre-wrap break-words font-sans text-slate-800 leading-relaxed text-base">
            {contentPage43.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {page44.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage45.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
