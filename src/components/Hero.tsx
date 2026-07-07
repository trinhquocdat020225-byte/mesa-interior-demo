import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data';

interface HeroProps {
  lang: 'vi' | 'en';
}

export default function Hero({ lang }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleNext = () => {
    stopAutoSlide();
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    startAutoSlide();
  };

  const handlePrev = () => {
    stopAutoSlide();
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    startAutoSlide();
  };

  const handleGoToSlide = (index: number) => {
    stopAutoSlide();
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startAutoSlide();
  };

  const handleScrollToProjects = () => {
    const targetElement = document.querySelector('#projects');
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentData = HERO_SLIDES[currentSlide];

  // Variants for slide transitions
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-brand-charcoal"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Dark luxury overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-dark/30 to-brand-charcoal/40 z-[2]" />
            <div className="absolute inset-0 bg-brand-charcoal/10 z-[1]" />
            
            <img
              src={currentData.image}
              alt={lang === 'vi' ? currentData.titleVi : currentData.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transform"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating dynamic particles/ambient light for luxury feeling */}
      <div className="absolute inset-0 z-[3] pointer-events-none mix-blend-screen opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-brand-light/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-brand-dark/20 rounded-full blur-[100px]" />
      </div>

      {/* Slide Contents - Centered with gorgeous Typography */}
      <div className="relative z-[10] h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          {/* Tagline / Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`brand-tag-${currentSlide}`}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="h-[1px] w-12 bg-brand-light" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] font-medium text-brand-light">
              MESA INTERIOR
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="overflow-hidden mb-6">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              key={`title-${currentSlide}`}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-cream leading-[1.1] tracking-tight"
            >
              {lang === 'vi' ? currentData.titleVi : currentData.title}
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={`subtitle-${currentSlide}`}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-base sm:text-lg text-brand-cream/80 font-light leading-relaxed mb-10 max-w-2xl"
          >
            {lang === 'vi' ? currentData.subtitle : currentData.subtitleEn}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`cta-${currentSlide}`}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-5"
          >
            <button
              id="hero-cta-primary"
              onClick={handleScrollToProjects}
              className="group relative flex items-center space-x-3 bg-brand-light hover:bg-brand-light/90 text-brand-dark px-8 py-4 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer"
            >
              <span>{lang === 'vi' ? 'Khám phá dự án' : 'Discover Projects'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <a
              href="#contact"
              id="hero-cta-secondary"
              className="flex items-center space-x-2 border border-brand-cream/30 hover:border-brand-cream bg-brand-cream/5 hover:bg-brand-cream/10 text-brand-cream px-8 py-4 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
            >
              <span>{lang === 'vi' ? 'Liên hệ tư vấn' : 'Inquire Now'}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider Nav Controls - Bottom Right */}
      <div className="absolute bottom-12 right-6 md:right-12 z-[20] flex items-center space-x-4">
        <button
          id="hero-prev-btn"
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-cream/25 hover:border-brand-cream text-brand-cream/75 hover:text-brand-cream bg-brand-charcoal/20 hover:bg-brand-charcoal/40 transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          id="hero-next-btn"
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-cream/25 hover:border-brand-cream text-brand-cream/75 hover:text-brand-cream bg-brand-charcoal/20 hover:bg-brand-charcoal/40 transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Bullet Indicators & Progress Line - Bottom Left */}
      <div className="absolute bottom-12 left-6 md:left-12 z-[20] flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              id={`hero-bullet-${idx}`}
              onClick={() => handleGoToSlide(idx)}
              className="group py-3 cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[2px] transition-all duration-500 rounded-full ${
                  idx === currentSlide ? 'w-8 bg-brand-light' : 'w-3 bg-brand-cream/30 group-hover:bg-brand-cream/60'
                }`}
              />
            </button>
          ))}
        </div>
        
        <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.2em] text-brand-cream/60">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </span>
      </div>

      {/* Dynamic Scroll Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[20] hidden md:flex flex-col items-center">
        <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-cream/40 mb-1.5">
          SCROLL
        </span>
        <div className="h-10 w-[1px] bg-brand-cream/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-light"
          />
        </div>
      </div>
    </section>
  );
}
