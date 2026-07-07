import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';
import { ArrowUpRight, Grid3X3, MapPin } from 'lucide-react';

interface FeaturedProjectsProps {
  lang: 'vi' | 'en';
}

export default function FeaturedProjects({ lang }: FeaturedProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'japandi' | 'luxury' | 'contemporary'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { value: 'all', label: 'Tất cả dự án', labelEn: 'All Projects' },
    { value: 'japandi', label: 'Phong cách Japandi', labelEn: 'Japandi Style' },
    { value: 'luxury', label: 'Modern Luxury', labelEn: 'Modern Luxury' },
    { value: 'contemporary', label: 'Đương Đại & Cổ Điển', labelEn: 'Contemporary Classic' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'japandi') return proj.style.toLowerCase().includes('japandi');
    if (selectedFilter === 'luxury') return proj.style.toLowerCase().includes('luxury');
    if (selectedFilter === 'contemporary') return proj.style.toLowerCase().includes('contemporary') || proj.style.toLowerCase().includes('classic');
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-brand-cream/40 border-y border-brand-light/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
              {lang === 'vi' ? 'DỰ ÁN TIÊU BIỂU' : 'SELECTED PORTFOLIO'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-dark tracking-tight">
              {lang === 'vi' ? (
                <>
                  Kiến trúc sống <br />
                  <span className="italic font-normal text-brand-dark/80">mang đậm cá tính gia chủ.</span>
                </>
              ) : (
                <>
                  Bespoke residential <br />
                  <span className="italic font-normal text-brand-dark/80">realized with pure devotion.</span>
                </>
              )}
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 bg-brand-light/10 p-1 border border-brand-light/20 rounded-full max-w-max">
            {filters.map((f) => (
              <button
                key={f.value}
                id={`filter-${f.value}`}
                onClick={() => setSelectedFilter(f.value as any)}
                className={`font-sans text-[10px] md:text-xs uppercase tracking-[0.1em] px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  selectedFilter === f.value
                    ? 'bg-brand-dark text-brand-cream shadow-md'
                    : 'text-brand-dark/75 hover:text-brand-dark hover:bg-brand-dark/5'
                }`}
              >
                {lang === 'vi' ? f.label : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer block"
              >
                {/* Visual Cover */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-md relative shadow-lg bg-brand-dark/10 mb-6">
                  {/* Gentle darken overlay on normal, lightens slightly on hover */}
                  <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/10 transition-colors duration-500 z-[1]" />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-brand-cream/90 backdrop-blur-sm border border-brand-light/30 flex items-center justify-center text-brand-dark opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  <img
                    src={project.coverImage}
                    alt={lang === 'vi' ? project.title : project.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-1000"
                  />
                </div>

                {/* Meta details & Title */}
                <div className="flex flex-col">
                  {/* Info Row: Style, Area */}
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-brand-dark/50 font-bold">
                      {lang === 'vi' ? project.style : project.styleEn}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-brand-light" />
                    <span className="font-sans text-[10px] tracking-wider text-brand-dark/60">
                      {project.area}
                    </span>
                  </div>

                  {/* Title heading */}
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-dark tracking-tight leading-snug group-hover:text-brand-dark/70 transition-colors">
                    {lang === 'vi' ? project.title : project.titleEn}
                  </h3>

                  {/* Location label */}
                  <div className="flex items-center space-x-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-dark/40" />
                    <span className="font-sans text-xs text-brand-dark/60 font-light">
                      {lang === 'vi' ? project.location : project.locationEn}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Beautiful empty message fallback just in case */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-brand-light/10 border border-dashed border-brand-light rounded-sm">
            <span className="block font-sans text-sm text-brand-dark/60 font-light">
              {lang === 'vi' ? 'Không tìm thấy dự án phù hợp' : 'No projects matched this filter'}
            </span>
          </div>
        )}

      </div>

      {/* Lightbox / Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            lang={lang}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
