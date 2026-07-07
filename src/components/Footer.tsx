import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'vi' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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

  return (
    <footer id="site-footer" className="bg-brand-charcoal text-brand-cream py-16 md:py-20 border-t border-brand-light/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper Column Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-16">
          
          {/* Col 1: Logo & Vision */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex flex-col tracking-[0.25em]" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="font-serif text-3xl font-light tracking-[0.35em] uppercase text-brand-cream">
                MESA
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-light/60 mt-1 pl-0.5">
                Interior Architecture
              </span>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-brand-cream/65 leading-relaxed font-light max-w-sm">
              {lang === 'vi'
                ? 'Đơn vị tư vấn thiết kế và thi công nội thất phân khúc siêu sang tại Việt Nam. Chúng tôi tin vào giá trị bền bỉ của chất liệu và vẻ đẹp thầm lặng của hình khối.'
                : 'Bespoke high-end interior architecture atelier in Vietnam. We believe in the enduring longevity of raw minerals and the quiet poetry of structural voids.'}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="block font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-light">
              {lang === 'vi' ? 'ĐIỀU HƯỚNG NHANH' : 'STUDIO SECTIONS'}
            </span>
            
            <ul className="space-y-2.5">
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="font-sans text-xs text-brand-cream/70 hover:text-brand-light transition-colors font-light">
                  {lang === 'vi' ? 'Về chúng tôi' : 'About Atelier'}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="font-sans text-xs text-brand-cream/70 hover:text-brand-light transition-colors font-light">
                  {lang === 'vi' ? 'Dự án nổi bật' : 'Bespoke Projects'}
                </a>
              </li>
              <li>
                <a href="#stories" onClick={(e) => handleScrollTo(e, '#stories')} className="font-sans text-xs text-brand-cream/70 hover:text-brand-light transition-colors font-light">
                  {lang === 'vi' ? 'Câu chuyện thiết kế' : 'Design Journal'}
                </a>
              </li>
              <li>
                <a href="#philosophy" onClick={(e) => handleScrollTo(e, '#philosophy')} className="font-sans text-xs text-brand-cream/70 hover:text-brand-light transition-colors font-light">
                  {lang === 'vi' ? 'Triết lý cốt lõi' : 'Philosophy'}
                </a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => handleScrollTo(e, '#materials')} className="font-sans text-xs text-brand-cream/70 hover:text-brand-light transition-colors font-light">
                  {lang === 'vi' ? 'Thư viện vật liệu' : 'Materials Library'}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="font-sans text-xs text-brand-cream/70 hover:text-brand-light transition-colors font-light">
                  {lang === 'vi' ? 'Liên hệ dự án' : 'Commission Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-light">
              {lang === 'vi' ? 'LIÊN HỆ PHÒNG TRƯNG BÀY' : 'ATELIER INQUIRIES'}
            </span>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 font-sans text-xs text-brand-cream/70 font-light leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-light/75 flex-shrink-0 mt-0.5" />
                <span>
                  202 Lý Chính Thắng, Phường Nhiêu Lộc, Quận 3, <br />
                  Thành phố Hồ Chí Minh, Việt Nam
                </span>
              </li>
              
              <li className="flex items-center space-x-3 font-sans text-xs text-brand-cream/70 font-light">
                <Phone className="w-4 h-4 text-brand-light/75 flex-shrink-0" />
                <a href="tel:+84900000000" className="hover:text-brand-light transition-colors">
                  028.9999.MESA
                </a>
              </li>
              
              <li className="flex items-center space-x-3 font-sans text-xs text-brand-cream/70 font-light">
                <Mail className="w-4 h-4 text-brand-light/75 flex-shrink-0" />
                <a href="mailto:contact@mesainterior.vn" className="hover:text-brand-light transition-colors">
                  contact@mesainterior.vn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-brand-light/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-[11px] text-brand-cream/45 font-light">
            © 2026 MESA INTERIOR. All Rights Reserved. Designed according to global standards.
          </span>
          
          <div className="flex items-center space-x-6">
            {/* Social references */}
            <a href="https://instagram.com" referrerPolicy="no-referrer" target="_blank" className="font-sans text-[10px] uppercase tracking-widest text-brand-cream/50 hover:text-brand-light transition-colors">
              Instagram
            </a>
            <a href="https://facebook.com" referrerPolicy="no-referrer" target="_blank" className="font-sans text-[10px] uppercase tracking-widest text-brand-cream/50 hover:text-brand-light transition-colors">
              Facebook
            </a>
            <a href="https://linkedin.com" referrerPolicy="no-referrer" target="_blank" className="font-sans text-[10px] uppercase tracking-widest text-brand-cream/50 hover:text-brand-light transition-colors">
              LinkedIn
            </a>
            
            {/* Scroll to Top Arrow */}
            <button
              id="footer-scroll-top"
              onClick={handleScrollToTop}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-brand-light/20 text-brand-cream/60 hover:text-brand-light hover:border-brand-light/80 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
