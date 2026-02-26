import { allPages } from '@/data/allPages';

export default function ContentCalendar() {
  const contentPage40 = allPages.find(p => p.pageNumber === 40)?.content.split('الشهري Calendar Content الجزء التاسع :استراتيجية الـ')[1];
  const contentPage41 = allPages.find(p => p.pageNumber === 41)?.content.split('(Strategy Launch (الجزء العاشر :استراتيجية الإطلاق')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الشهري Calendar Content الجزء التاسع :استراتيجية الـ</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage40?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage41?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
