import { allPages } from '@/data/allPages';

export default function MarketKeywords() {
  const page14 = allPages.find(p => p.pageNumber === 14)?.content;
  const page15 = allPages.find(p => p.pageNumber === 15)?.content;

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-800">الجزء الأول :حجم السوق والكلمات المفتاحية</h3>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {page14}
          </pre>
          <hr className="my-6 border-slate-200" />
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
            {page15?.split('إجمالي السوق: 11,000+ إعلان نشط )مع تداخل بين الكلمات(')[0]}
            إجمالي السوق: 11,000+ إعلان نشط )مع تداخل بين الكلمات(
          </pre>
        </div>
      </div>
    </div>
  );
}
