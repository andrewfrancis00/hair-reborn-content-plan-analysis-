import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';

export default function IndexTab() {
  const indexItems = [
    { title: '(2هوية البراند) Identity Visual الحاجة اللي لازم تفضل ثابتة(', page: 1 },
    { title: '(3الجمهور المستهدف )مين اللي هنكلمه بالظبط؟(', page: 1 },
    { title: ') Promise → Problem) 4إيه المشكلة وإيه الوعد؟(', page: 2 },
    { title: '/ USP) 5الميزة التنافسية الكبرى', page: 2 },
    { title: '(6منتجات — (Portfolio (Reborn Hair الأساس اللي لازم يبقى ثابت', page: 3 },
    { title: '(7المنتج الإضافي) Tablets Hairsanocalp :هيرسانو كلب (', page: 3 },
    { title: '(8فكرة "نظام 30 يوم " — العمود الفقري للبراند', page: 4 },
    { title: '(9دور دكتورة سارة المهدي في البراند(Story + Trust(', page: 5 },
    { title: '(10شخصية البراند في الكلام (Voice of Tone(', page: 6 },
    { title: '(11شخصية السيلز/الأيجنت )أماني (', page: 7 },
    { title: '(12الوعد التسويقي الأساسي (Messaging Core(', page: 7 },
    { title: '(13الـ) Roles Product كل منتج دوره إيه؟(', page: 7 },
    { title: 'Hair Reborn (Offer Mindset)عروض14 (', page: 8 },
    { title: '(15تجربة العميلة — (Journey Customer (من أول إعلان لحد إعادة الشراء', page: 9 },
    { title: '(16قواعد مهمة في المحتوى والإعلانات(Credibility + Safety(', page: 10 },
    { title: '(17أفكار محتوى جاهزة بالمنطق بتاع) Reborn Hair من غير ما أختلق معلومات(', page: 10 },
    { title: '(18شكل الفيديوهات اللي تمشي مع البراند(Hybrid / AI / UGC(', page: 12 },
    { title: ') Hooks) 19افتتاحيات( على لسان بنت مصرية', page: 12 },
    { title: '(20أسئلة واعتراضات شائعة )وموديل ردود أماني(', page: 12 },
    { title: '(21خلاصة البراند في جملة واحدة )لازم تتحفظ(', page: 13 },
    { title: 'الجزء الأول :حجم السوق والكلمات المفتاحية', page: 14 },
    { title: 'الجزء الثاني :المنافسون الرئيسيون — تحليل شامل', page: 15 },
    { title: 'الجزء الثالث :تحليل الأسعار السائدة', page: 21 },
    { title: 'الجزء الرابع :أنماط المحتوى الإعلاني السائدة', page: 22 },
    { title: 'الجزء الخامس :المكونات الأكثر ذكراً', page: 24 },
    { title: 'Reborn Hair الجزء السادس :الفجوات والفرص المتاحة لـ', page: 25 },
    { title: 'المقترحة Reborn Hair الجزء السابع :استراتيجية', page: 27 },
    { title: 'كاملة Caption الجزء الثامن :أفكار الإعلانات +نصوص', page: 27 },
    { title: 'الشهري Calendar Content الجزء التاسع :استراتيجية الـ', page: 40 },
    { title: '(Strategy Launch (الجزء العاشر :استراتيجية الإطلاق', page: 41 },
    { title: 'الجزء الحادي عشر :توصيات الاستهداف الإعلاني', page: 42 },
    { title: 'الجزء الثاني عشر :الخلاصة التنفيذية', page: 43 },
    { title: 'جاهزة للاستخدام Hooks ملحق :مكتبة', page: 45 },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-6">
          <h3 className="text-2xl font-bold text-slate-800">فهرس المحتوى (Index)</h3>
          <p className="text-slate-500 mt-2 text-lg">
            قائمة بجميع العناوين الرئيسية والفرعية الموجودة في الملف الأصلي.
          </p>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {indexItems.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.015 }}
                key={index} 
                className="group flex items-center justify-between p-4 bg-slate-50/50 hover:bg-[#FF9E79]/10 rounded-xl transition-all duration-300 border border-slate-100 hover:border-[#FF9E79]/30 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-[#3B1C5A]/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF9E79]/20 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-[#3B1C5A]" />
                  </div>
                  <span className="font-semibold text-[#2D1B4E] truncate">{item.title}</span>
                </div>
                <span className="text-sm font-bold text-[#3B1C5A] bg-[#FF9E79]/20 px-4 py-1.5 rounded-full shrink-0">
                  صفحة {item.page}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
