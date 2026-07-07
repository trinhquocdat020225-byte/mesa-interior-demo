import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FURNITURE_STORIES } from '../data';
import { ArrowRight, Sparkles, User, Info, FileText } from 'lucide-react';

interface FurnitureStoriesProps {
  lang: 'vi' | 'en';
}

export default function FurnitureStories({ lang }: FurnitureStoriesProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const activeStory = FURNITURE_STORIES[activeStoryIndex];

  return (
    <section id="stories" className="py-24 md:py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
            {lang === 'vi' ? 'ẤN PHẨM KHÔNG GIAN' : 'MESA JOURNAL & STORIES'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark tracking-tight leading-tight">
            {lang === 'vi' ? (
              <>
                Mỗi tuyệt tác nội thất <br />
                <span className="italic font-normal text-brand-dark/80">đều mang một linh hồn độc bản.</span>
              </>
            ) : (
              <>
                Every sculpted piece <br />
                <span className="italic font-normal text-brand-dark/80">whispers an architectural story.</span>
              </>
            )}
          </h2>
        </div>

        {/* Layout: Story Selectors (Vertical left) & Detailed Journal View (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Editorial Navigation Links */}
          <div className="lg:col-span-4 flex flex-col space-y-4 border-l border-brand-light/35 pl-6">
            {FURNITURE_STORIES.map((story, idx) => (
              <button
                key={story.id}
                id={`story-nav-btn-${story.id}`}
                onClick={() => setActiveStoryIndex(idx)}
                className="group text-left py-4 relative cursor-pointer focus:outline-none"
              >
                {/* Active Indicator bar */}
                {idx === activeStoryIndex && (
                  <motion.div
                    layoutId="magazine-active-indicator"
                    className="absolute left-[-25px] top-0 bottom-0 w-[2px] bg-brand-dark"
                    transition={{ duration: 0.4 }}
                  />
                )}

                <span className="block font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 group-hover:text-brand-dark/60 transition-colors mb-1">
                  Story 0{idx + 1}
                </span>

                <span
                  className={`block font-serif text-xl sm:text-2xl tracking-tight transition-all duration-300 ${
                    idx === activeStoryIndex
                      ? 'text-brand-dark font-medium pl-2'
                      : 'text-brand-dark/50 group-hover:text-brand-dark group-hover:pl-1'
                  }`}
                >
                  {story.title}
                </span>

                <span className="block font-sans text-[11px] text-brand-dark/40 group-hover:text-brand-dark/60 transition-colors mt-1 font-light tracking-wide uppercase">
                  {lang === 'vi' ? story.collection : story.collectionEn}
                </span>
              </button>
            ))}

            <div className="pt-10 hidden lg:block">
              <div className="border border-brand-light/20 p-5 rounded-sm bg-brand-light/10">
                <span className="block font-sans text-[10px] uppercase tracking-widest font-bold text-brand-dark/70 mb-2">
                  {lang === 'vi' ? 'QUY CHUẨN MESA' : 'MESA ATELIER'}
                </span>
                <p className="font-sans text-xs text-brand-dark/60 font-light leading-relaxed">
                  {lang === 'vi'
                    ? 'Tất cả sản phẩm nội thất do MESA thiết kế đều được sản xuất thủ công khép kín tại xưởng mộc 2000m² tại Hóc Môn bởi đội ngũ thợ lành nghề bậc thầy.'
                    : 'All collector furniture designed by MESA is fabricated locally in our 2,000m² craft workshop by generational cabinetmakers and upholsterers.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Active Story Details (Presented like a magazine spread) */}
          <div className="lg:col-span-8 bg-brand-light/5 border border-brand-light/15 p-6 md:p-12 rounded-sm shadow-sm relative overflow-hidden">
            
            {/* Ambient watermarks */}
            <div className="absolute top-4 right-4 font-serif text-[7rem] md:text-[9rem] font-light text-brand-light/5 select-none pointer-events-none leading-none">
              MESA
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
              >
                {/* Story Image */}
                <div className="md:col-span-5">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-md shadow-lg relative bg-brand-dark/10">
                    <img
                      src={activeStory.image}
                      alt={activeStory.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Tiny floating tag on image */}
                    <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-sm text-brand-cream text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-sm font-sans font-medium">
                      {lang === 'vi' ? 'Độc bản' : 'One of One'}
                    </div>
                  </div>
                </div>

                {/* Story Text spreads */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Sub title / Collection */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles className="w-4 h-4 text-brand-light" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-dark/60 font-semibold">
                        {lang === 'vi' ? activeStory.collection : activeStory.collectionEn}
                      </span>
                    </div>

                    {/* Headline of piece */}
                    <h3 className="font-serif text-3xl font-light text-brand-dark tracking-tight mb-4">
                      {activeStory.title}
                    </h3>

                    {/* Designer badge */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-brand-dark/40" />
                        <span className="font-sans text-[11px] text-brand-dark/60 font-light">
                          Designer: {activeStory.designer}
                        </span>
                      </div>
                      <span className="h-3 w-[1px] bg-brand-light/35" />
                      <div className="flex items-center space-x-1.5">
                        <Info className="w-3.5 h-3.5 text-brand-dark/40" />
                        <span className="font-sans text-[11px] text-brand-dark/60 font-light">
                          {lang === 'vi' ? 'Chất liệu cao cấp' : 'High-End Sourced'}
                        </span>
                      </div>
                    </div>

                    {/* Story content */}
                    <p className="font-sans text-xs sm:text-sm text-brand-dark/85 leading-relaxed font-light mb-8 italic">
                      " {lang === 'vi' ? activeStory.story : activeStory.storyEn} "
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="border-t border-brand-light/35 pt-6">
                    <span className="block font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/70 mb-3 flex items-center space-x-1">
                      <FileText className="w-3.5 h-3.5 text-brand-dark/60" />
                      <span>{lang === 'vi' ? 'ĐẶC ĐIỂM CHẾ TÁC' : 'CRAFT DETAILS'}</span>
                    </span>
                    <ul className="space-y-2">
                      {(lang === 'vi' ? activeStory.details : activeStory.detailsEn).map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 font-sans text-xs text-brand-dark/75 font-light leading-relaxed">
                          <span className="text-brand-light mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
