import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: 'vi' | 'en';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleGoTo = (idx: number) => {
    setCurrentIndex(idx);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-cream/40 border-y border-brand-light/20 overflow-hidden relative">
      
      {/* Decorative large quotes watermark background */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.03] select-none text-brand-dark">
        <Quote className="w-64 h-64" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
            {lang === 'vi' ? 'ĐỒNG HÀNH & CHIA SẺ' : 'CLIENTS & PARTNERS'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-dark tracking-tight">
            {lang === 'vi' ? 'Sự tin cậy kiến tạo đẳng cấp' : 'Reflections on MESA Artistry'}
          </h2>
          <div className="h-[1px] w-16 bg-brand-light mx-auto mt-4" />
        </div>

        {/* Carousel Content Panel */}
        <div className="relative min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Giant quote mark */}
              <Quote className="w-10 h-10 text-brand-light mb-8 opacity-70" />

              {/* Quote copy */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-light text-brand-dark leading-relaxed max-w-3xl mb-10 italic">
                "{lang === 'vi' ? current.content : current.contentEn}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-light bg-brand-dark/15 shadow-sm">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <span className="block font-sans text-sm font-semibold text-brand-dark">
                    {current.name}
                  </span>
                  <span className="block font-sans text-[11px] text-brand-dark/50 mt-0.5">
                    {lang === 'vi' ? current.role : current.roleEn}
                  </span>
                  <span className="inline-block font-sans text-[10px] uppercase tracking-wider text-brand-light bg-brand-dark/5 border border-brand-light/30 px-2 py-0.5 rounded-sm mt-1.5 font-bold">
                    {lang === 'vi' ? current.project : current.projectEn}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-16">
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-dark/20 hover:border-brand-dark text-brand-dark/60 hover:text-brand-dark transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Quick jump dots */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <button
                key={t.id}
                id={`testimonial-dot-${idx}`}
                onClick={() => handleGoTo(idx)}
                className="py-2 cursor-pointer"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-5 bg-brand-dark' : 'w-1.5 bg-brand-dark/20 hover:bg-brand-dark/45'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-dark/20 hover:border-brand-dark text-brand-dark/60 hover:text-brand-dark transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
