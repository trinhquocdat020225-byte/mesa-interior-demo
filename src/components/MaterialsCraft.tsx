import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MATERIALS_DATA } from '../data';
import { Layers, ShieldCheck, MapPin, Feather } from 'lucide-react';

interface MaterialsCraftProps {
  lang: 'vi' | 'en';
}

export default function MaterialsCraft({ lang }: MaterialsCraftProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMaterial = MATERIALS_DATA[activeIndex];

  return (
    <section id="materials" className="py-24 md:py-32 bg-brand-cream overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
              {lang === 'vi' ? 'VẬT LIỆU & KỸ NGHỆ' : 'MATERIALS & CRAFTSMANSHIP'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark tracking-tight leading-tight">
              {lang === 'vi' ? (
                <>
                  Chế tác từ linh hồn <br />
                  <span className="italic font-normal text-brand-dark/80">của đất, đá và thời gian.</span>
                </>
              ) : (
                <>
                  Sculpted from the soul <br />
                  <span className="italic font-normal text-brand-dark/80">of stone, timber, and time.</span>
                </>
              )}
            </h2>
          </div>
          
          <div className="lg:col-span-4">
            <p className="font-sans text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
              {lang === 'vi' 
                ? 'Tại MESA, chất liệu chính là cốt lõi của kiến trúc. Chúng tôi chu du thế giới để kiếm tìm những phiến đá trầm tích, phôi gỗ trăm tuổi có nguồn gốc rõ ràng và kết cấu đặc sắc nhất.'
                : 'At MESA, materiality is the foundation of space. We travel to find historic travertine deposits, hundred-year certified timbers, and aniline hides reflecting raw geology.'}
            </p>
          </div>
        </div>

        {/* Dynamic Display Board (Split Layout: List & Close-up Viewer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block: List Selection */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {MATERIALS_DATA.map((mat, idx) => (
                <button
                  key={mat.id}
                  id={`material-select-btn-${mat.id}`}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setHoveredId(mat.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`w-full text-left p-6 md:p-8 rounded-sm border transition-all duration-500 cursor-pointer flex items-center justify-between group ${
                    idx === activeIndex
                      ? 'bg-brand-dark border-brand-dark text-brand-cream shadow-lg'
                      : 'bg-brand-light/5 border-brand-light/30 hover:border-brand-dark/50 text-brand-dark'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <span className={`font-mono text-xs ${idx === activeIndex ? 'text-brand-light' : 'text-brand-dark/40'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-light tracking-tight mb-1">
                        {lang === 'vi' ? mat.name : mat.nameEn}
                      </h3>
                      <span className={`font-sans text-[10px] uppercase tracking-wider ${idx === activeIndex ? 'text-brand-light/70' : 'text-brand-dark/50'}`}>
                        {lang === 'vi' ? mat.origin : mat.originEn}
                      </span>
                    </div>
                  </div>

                  <div className="relative w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="font-sans text-xs">→</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden lg:block border-l border-brand-light/35 pl-6 pt-6">
              <span className="block font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-brand-dark/60 mb-2">
                {lang === 'vi' ? 'TIÊU CHUẨN KIỂM ĐỊNH' : 'VERIFICATION CODES'}
              </span>
              <p className="font-sans text-xs text-brand-dark/65 font-light leading-relaxed">
                {lang === 'vi'
                  ? 'Mỗi lô đá hay thớ gỗ khi cập cảng xưởng MESA đều phải trải qua quy trình siêu âm kiểm tra bọt khí, khuyết tật và độ ẩm vi sai nghiêm ngặt kéo dài 48 tiếng.'
                  : 'Every raw block and timber flitch arriving at MESA undergoes a stringent 48-hour ultrasonic inspection tracking deep air pockets, structural defects, and core moisture.'}
              </p>
            </div>
          </div>

          {/* Right Block: Macro Showcase Display with Parallax effect */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMaterial.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-brand-light/10 border border-brand-light/20 rounded-md p-6 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden"
              >
                {/* Floating ambient graphic overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Image Showcase Container (Macro look) */}
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-sm mb-8 shadow-md relative group bg-brand-dark/10">
                    <div className="absolute inset-0 bg-brand-charcoal/15 z-[1]" />
                    <img
                      src={activeMaterial.image}
                      alt={activeMaterial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>

                  {/* Description copy */}
                  <h4 className="font-serif text-2xl font-light text-brand-dark tracking-tight mb-4">
                    {lang === 'vi' ? activeMaterial.name : activeMaterial.nameEn}
                  </h4>
                  
                  <p className="font-sans text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-light mb-8">
                    {lang === 'vi' ? activeMaterial.description : activeMaterial.descriptionEn}
                  </p>
                </div>

                {/* Properties Chips list */}
                <div className="border-t border-brand-light/30 pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-brand-dark/60" />
                    <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-dark/70">
                      {lang === 'vi' ? 'ĐẶC TÍNH VẬT LÝ & KỸ THUẬT' : 'PHYSICAL PROPERTIES'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {(lang === 'vi' ? activeMaterial.properties : activeMaterial.propertiesEn).map((prop, index) => (
                      <div key={index} className="flex flex-col border-l-2 border-brand-light pl-3 py-1 bg-brand-cream/30 rounded-r-sm">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-dark/50">
                          Prop 0{index + 1}
                        </span>
                        <span className="font-sans text-xs font-light text-brand-dark/85 mt-1 leading-snug">
                          {prop}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
