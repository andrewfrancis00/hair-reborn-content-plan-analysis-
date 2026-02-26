import { allPages } from '@/data/allPages';

export default function DocumentVault() {
  return (
    <div className="space-y-8">
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-900 mb-2">النص الأصلي كامل (Document Vault)</h3>
        <p className="text-indigo-700">
          هذا التبويب يحتوي على النص الأصلي الكامل للملف "تحليل المنافسين و الخطة التسويقيه.docx" مقسماً صفحة بصفحة.
          تم نسخ المحتوى حرفياً بدون أي تعديل أو حذف.
        </p>
      </div>

      {allPages.map((page) => (
        <div key={page.pageNumber} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
            <h4 className="font-bold text-slate-700">صفحة {page.pageNumber}</h4>
          </div>
          <div className="p-6">
            <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
              {page.content}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
