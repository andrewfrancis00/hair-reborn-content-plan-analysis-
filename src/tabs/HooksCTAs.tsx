import { allPages } from '@/data/allPages';

export default function HooksCTAs() {
  const page45 = allPages.find(p => p.pageNumber === 45)?.content || '';
  const page46 = allPages.find(p => p.pageNumber === 46)?.content || '';
  const page47 = allPages.find(p => p.pageNumber === 47)?.content || '';

  const startIndex = page45.indexOf('جاهزة للاستخدام Hooks ملحق :مكتبة');
  const contentPage45 = startIndex !== -1 ? page45.substring(startIndex) : page45;

  const endIndex = page47.indexOf('على بيانات مباشرة من مكتبة إعلانات');
  const contentPage47 = endIndex !== -1 ? page47.substring(0, endIndex) : page47;

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-4 lg:px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">جاهزة للاستخدام Hooks ملحق :مكتبة</h3>
        </div>
        <div className="p-4 lg:p-6">
          <pre className="whitespace-pre-wrap break-words font-sans text-slate-800 leading-relaxed text-base">
            {contentPage45.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {page46.trim()}
            {'\n\n'}
            {contentPage47.trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
