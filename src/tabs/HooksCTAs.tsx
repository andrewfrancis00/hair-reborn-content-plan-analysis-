import { allPages } from '@/data/allPages';

export default function HooksCTAs() {
  const contentPage45 = allPages.find(p => p.pageNumber === 45)?.content.split('جاهزة للاستخدام Hooks ملحق :مكتبة')[1];
  const contentPage46 = allPages.find(p => p.pageNumber === 46)?.content;
  const contentPage47 = allPages.find(p => p.pageNumber === 47)?.content.split('على بيانات مباشرة من مكتبة إعلانات')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">جاهزة للاستخدام Hooks ملحق :مكتبة</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage45?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage46?.trim()}
            {'\n\n'}
            {contentPage47?.trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
