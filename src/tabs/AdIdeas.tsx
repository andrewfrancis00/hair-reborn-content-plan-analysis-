import { allPages } from '@/data/allPages';

export default function AdIdeas() {
  const contentPage27 = allPages.find(p => p.pageNumber === 27)?.content.split('كاملة Caption الجزء الثامن :أفكار الإعلانات +نصوص')[1];
  const contentPage28 = allPages.find(p => p.pageNumber === 28)?.content;
  const contentPage29 = allPages.find(p => p.pageNumber === 29)?.content;
  const contentPage30 = allPages.find(p => p.pageNumber === 30)?.content;
  const contentPage31 = allPages.find(p => p.pageNumber === 31)?.content;
  const contentPage32 = allPages.find(p => p.pageNumber === 32)?.content;
  const contentPage33 = allPages.find(p => p.pageNumber === 33)?.content;
  const contentPage34 = allPages.find(p => p.pageNumber === 34)?.content;
  const contentPage35 = allPages.find(p => p.pageNumber === 35)?.content;
  const contentPage36 = allPages.find(p => p.pageNumber === 36)?.content;
  const contentPage37 = allPages.find(p => p.pageNumber === 37)?.content;
  const contentPage38 = allPages.find(p => p.pageNumber === 38)?.content;
  const contentPage39 = allPages.find(p => p.pageNumber === 39)?.content;
  const contentPage40 = allPages.find(p => p.pageNumber === 40)?.content.split('الشهري Calendar Content الجزء التاسع :استراتيجية الـ')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">كاملة Caption الجزء الثامن :أفكار الإعلانات +نصوص</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {contentPage27?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage28?.replace(/═══════════════════════════════/g, '').trim()}
            {'\n\n'}
            {contentPage29?.trim()}
            {'\n\n'}
            {contentPage30?.trim()}
            {'\n\n'}
            {contentPage31?.trim()}
            {'\n\n'}
            {contentPage32?.trim()}
            {'\n\n'}
            {contentPage33?.trim()}
            {'\n\n'}
            {contentPage34?.trim()}
            {'\n\n'}
            {contentPage35?.trim()}
            {'\n\n'}
            {contentPage36?.trim()}
            {'\n\n'}
            {contentPage37?.trim()}
            {'\n\n'}
            {contentPage38?.trim()}
            {'\n\n'}
            {contentPage39?.trim()}
            {'\n\n'}
            {contentPage40?.replace(/═══════════════════════════════/g, '').trim()}
          </pre>
        </div>
      </div>
    </div>
  );
}
