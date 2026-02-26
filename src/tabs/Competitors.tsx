import { allPages } from '@/data/allPages';
import { motion } from 'motion/react';

export default function Competitors() {
  const competitorsData = [
    {
      name: 'أعلى كثافة إعلانية في السوق كله — Go & Twist :المنافس الأول',
      content: allPages.find(p => p.pageNumber === 15)?.content.split('أعلى كثافة إعلانية في السوق كله — Go & Twist :المنافس الأول')[1] + 
               allPages.find(p => p.pageNumber === 16)?.content.split('   الثاني المنافس: Hair Daily / HAIR DAILY MEN — 2024 منذ')[0]
    },
    {
      name: 'الثاني المنافس: Hair Daily / HAIR DAILY MEN — 2024 منذ',
      content: allPages.find(p => p.pageNumber === 16)?.content.split('   الثاني المنافس: Hair Daily / HAIR DAILY MEN — 2024 منذ')[1] +
               allPages.find(p => p.pageNumber === 17)?.content.split('المنافس الصيدلاني الموثوق — Capixy :المنافس الثالث')[0]
    },
    {
      name: 'المنافس الصيدلاني الموثوق — Capixy :المنافس الثالث',
      content: allPages.find(p => p.pageNumber === 17)?.content.split('المنافس الصيدلاني الموثوق — Capixy :المنافس الثالث')[1].split('متخصص الطبيعي والكيرلي — DOUX G :المنافس الرابع')[0]
    },
    {
      name: 'متخصص الطبيعي والكيرلي — DOUX G :المنافس الرابع',
      content: allPages.find(p => p.pageNumber === 17)?.content.split('متخصص الطبيعي والكيرلي — DOUX G :المنافس الرابع')[1] +
               allPages.find(p => p.pageNumber === 18)?.content.split('الخامس المنافس: SoolaBay (Dr. Sara Elmahdi) — نموذج أذكى Personal Branding')[0]
    },
    {
      name: 'الخامس المنافس: SoolaBay (Dr. Sara Elmahdi) — نموذج أذكى Personal Branding',
      content: allPages.find(p => p.pageNumber === 18)?.content.split('الخامس المنافس: SoolaBay (Dr. Sara Elmahdi) — نموذج أذكى Personal Branding')[1].split('سلاح السعر المنخفض والحزم — Axel GM :المنافس السادس')[0]
    },
    {
      name: 'سلاح السعر المنخفض والحزم — Axel GM :المنافس السادس',
      content: allPages.find(p => p.pageNumber === 18)?.content.split('سلاح السعر المنخفض والحزم — Axel GM :المنافس السادس')[1] +
               allPages.find(p => p.pageNumber === 19)?.content.split('السابع المنافس: Leaves Natural Source / E-Leaves — 2026 الجديد الصاعد')[0]
    },
    {
      name: 'السابع المنافس: Leaves Natural Source / E-Leaves — 2026 الجديد الصاعد',
      content: allPages.find(p => p.pageNumber === 19)?.content.split('السابع المنافس: Leaves Natural Source / E-Leaves — 2026 الجديد الصاعد')[1] +
               allPages.find(p => p.pageNumber === 20)?.content.split('متخصص زيت الروزماري — Mary Grow :المنافس الثامن')[0]
    },
    {
      name: 'متخصص زيت الروزماري — Mary Grow :المنافس الثامن',
      content: allPages.find(p => p.pageNumber === 20)?.content.split('متخصص زيت الروزماري — Mary Grow :المنافس الثامن')[1].split('فئة المكملات الغذائية — (SooCare (Gummies SooHair :المنافس التاسع')[0]
    },
    {
      name: 'فئة المكملات الغذائية — (SooCare (Gummies SooHair :المنافس التاسع',
      content: allPages.find(p => p.pageNumber === 20)?.content.split('فئة المكملات الغذائية — (SooCare (Gummies SooHair :المنافس التاسع')[1]
    },
    {
      name: 'المنافسون الإضافيون الجديرون بالمتابعة',
      content: allPages.find(p => p.pageNumber === 21)?.content.split('المنافسون الإضافيون الجديرون بالمتابعة')[1].split('═══════════════════════════════')[0]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-6">
          <h3 className="text-2xl font-bold text-slate-800">الجزء الثاني :المنافسون الرئيسيون — تحليل شامل</h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {competitorsData.map((comp, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
          >
            <div className="bg-indigo-50 border-b border-indigo-100 px-6 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3B1C5A] flex items-center justify-center text-[#FF9E79] font-bold text-xl shadow-lg shrink-0">
                {index + 1}
              </div>
              <h4 className="text-xl font-bold text-indigo-900 leading-tight">{comp.name}</h4>
            </div>
            <div className="p-6">
              <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-base">
                {comp.content?.trim()}
              </pre>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
