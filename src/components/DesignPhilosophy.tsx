import { motion } from 'motion/react';
import { PHILOSOPHY_DATA } from '../data';
import { Compass, Cpu, Sparkles, Leaf } from 'lucide-react';

interface DesignPhilosophyProps {
  lang: 'vi' | 'en';
}

const iconMap: { [key: string]: any } = {
  Compass: Compass,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Leaf: Leaf
};

export default function DesignPhilosophy({ lang }: DesignPhilosophyProps) {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-brand-cream/40 border-y border-brand-light/25 relative overflow-hidden">
      
      {/* Background elegant architectural line grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-brand-dark" />
        <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-brand-dark" />
        <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-brand-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
            {lang === 'vi' ? 'TRIẾT LÝ THIẾT KẾ' : 'CORE VALUES'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-dark tracking-tight">
            {lang === 'vi' ? 'Tứ trụ trong kiến trúc MESA' : 'The Four Pillars of MESA Design'}
          </h2>
          <div className="h-[1px] w-20 bg-brand-light mx-auto mt-6" />
        </div>

        {/* Bento/Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PHILOSOPHY_DATA.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Compass;
            return (
              <motion.div
                key={item.id}
                id={`philosophy-card-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-brand-cream border border-brand-light/30 hover:border-brand-dark p-8 md:p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-[380px] md:h-[400px]"
              >
                {/* Floating dynamic backdrop glow on hover */}
                <div className="absolute inset-0 bg-brand-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none" />

                {/* Card Top: Numbering & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-brand-dark/30 group-hover:text-brand-dark/60 transition-colors">
                    0{index + 1}
                  </span>
                  
                  <div className="w-12 h-12 rounded-full border border-brand-light/40 group-hover:border-brand-dark/40 flex items-center justify-center text-brand-dark/60 group-hover:text-brand-dark transition-all duration-500 bg-brand-light/5 group-hover:bg-brand-light/10">
                    <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                {/* Card Bottom: Title & Body */}
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-light text-brand-dark mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {lang === 'vi' ? item.title : item.titleEn}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light">
                    {lang === 'vi' ? item.description : item.descriptionEn}
                  </p>
                </div>

                {/* Decorative bottom hairline indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-light origin-left scale-x-0 group-hover:scale-x-100 group-hover:bg-brand-dark transition-all duration-500 rounded-b-sm" />
              </motion.div>
            );
          })}
        </div>

        {/* Designer Quote at bottom of Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mt-20 border-t border-brand-light/25 pt-10"
        >
          <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-brand-dark/70 font-light leading-relaxed">
            {lang === 'vi' 
              ? '"Sự xa xỉ thực sự nằm ở các chi tiết vô hình, trong cảm xúc chạm và khả năng duy trì vẻ đẹp qua hàng thế hệ sử dụng."'
              : '"True luxury resides in the invisible details, in the emotion of physical touch, and the capacity to withstand the test of time."'}
          </span>
          <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-dark/50 mt-4 font-bold">
            — Alberto Rossi, Design Director MESA
          </span>
        </motion.div>

      </div>
    </section>
  );
}
