import { motion } from 'motion/react';
import { X, Calendar, MapPin, Maximize, Palette } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export default function ProjectDetailModal({ project, onClose, lang }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-brand-cream w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl z-10 border border-brand-light/30 scrollbar-thin"
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-brand-cream/80 hover:bg-brand-dark/15 border border-brand-light/20 text-brand-dark z-20 cursor-pointer transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
          
          {/* Left Side: Images Grid/List */}
          <div className="md:col-span-7 space-y-4">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-brand-dark/5 shadow-md">
              <img
                src={project.coverImage}
                alt={lang === 'vi' ? project.title : project.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Gallery Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.slice(1).map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm bg-brand-dark/5 shadow-sm">
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Information Panel */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Style Tag */}
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-brand-light/20 border border-brand-light/40 text-brand-dark/80 px-3 py-1 rounded-full font-sans font-semibold mb-4">
                {lang === 'vi' ? project.style : project.styleEn}
              </span>

              {/* Project Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-light text-brand-dark leading-snug tracking-tight mb-6">
                {lang === 'vi' ? project.title : project.titleEn}
              </h3>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-light/25 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-dark/60" />
                  <span className="font-sans text-xs text-brand-dark/80">
                    {lang === 'vi' ? project.location : project.locationEn}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Maximize className="w-4 h-4 text-brand-dark/60" />
                  <span className="font-sans text-xs text-brand-dark/80 font-medium">
                    {project.area}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-brand-dark/60" />
                  <span className="font-sans text-xs text-brand-dark/80">
                    {lang === 'vi' ? `Hoàn thành: ${project.year}` : `Completed: ${project.year}`}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-brand-dark/60" />
                  <span className="font-sans text-xs text-brand-dark/80">
                    {lang === 'vi' ? 'Cao cấp' : 'High-End Finish'}
                  </span>
                </div>
              </div>

              {/* Deeper Narrative */}
              <p className="font-sans text-xs sm:text-sm text-brand-dark/85 leading-relaxed font-light mb-6">
                {lang === 'vi' ? project.description : project.descriptionEn}
              </p>
            </div>

            {/* Material Palette */}
            <div className="mt-6 pt-6 border-t border-brand-light/20">
              <span className="block font-sans text-[10px] uppercase tracking-[0.15em] font-bold text-brand-dark/70 mb-3">
                {lang === 'vi' ? 'Vật liệu chủ đạo:' : 'Material Palette:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {lang === 'vi' ? (
                  project.materialsUsed.map((mat) => (
                    <span key={mat} className="font-sans text-[11px] font-light bg-brand-dark/5 text-brand-dark border border-brand-light/35 rounded-sm px-2.5 py-1">
                      {mat}
                    </span>
                  ))
                ) : (
                  project.materialsUsedEn.map((mat) => (
                    <span key={mat} className="font-sans text-[11px] font-light bg-brand-dark/5 text-brand-dark border border-brand-light/35 rounded-sm px-2.5 py-1">
                      {mat}
                    </span>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
