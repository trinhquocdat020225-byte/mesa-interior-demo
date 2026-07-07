import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Phone } from 'lucide-react';

interface HeaderProps {
  lang: 'vi' | 'en';
  setLang: (l: 'vi' | 'en') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Giới thiệu', labelEn: 'About Us', href: '#about' },
    { label: 'Dự án nổi bật', labelEn: 'Featured Projects', href: '#projects' },
    { label: 'Câu chuyện nội thất', labelEn: 'Design Stories', href: '#stories' },
    { label: 'Triết lý', labelEn: 'Philosophy', href: '#philosophy' },
    { label: 'Vật liệu & Kỹ nghệ', labelEn: 'Materials', href: '#materials' },
    { label: 'Đánh giá', labelEn: 'Testimonials', href: '#testimonials' },
    { label: 'Liên hệ', labelEn: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-light/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex flex-col tracking-[0.25em] text-brand-dark group transition-all"
        >
          <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.35em] uppercase text-brand-dark">
            Mesa
          </span>
          <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-brand-dark/60 mt-1 pl-0.5 group-hover:text-brand-dark transition-colors duration-300">
            Interior Architecture
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              id={`nav-link-${item.href.replace('#', '')}`}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="font-sans text-xs uppercase tracking-[0.15em] text-brand-dark/80 hover:text-brand-dark relative py-2 overflow-hidden group transition-colors"
            >
              {lang === 'vi' ? item.label : item.labelEn}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-dark origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
            </a>
          ))}
        </nav>

        {/* Utilities: Language and CTA */}
        <div id="header-utilities" className="hidden lg:flex items-center space-x-6">
          {/* Language Toggle */}
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="flex items-center space-x-2 border border-brand-dark/20 hover:border-brand-dark/80 rounded-full px-3 py-1.5 transition-colors duration-300 group cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-brand-dark/70 group-hover:text-brand-dark" />
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-medium text-brand-dark">
              {lang === 'vi' ? 'EN' : 'VI'}
            </span>
          </button>

          {/* Quick Call */}
          <a
            href="tel:+84900000000"
            id="quick-call-link"
            className="flex items-center space-x-2 text-brand-dark bg-brand-light/25 hover:bg-brand-light/50 border border-brand-light/40 rounded-full px-4 py-1.5 transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5 text-brand-dark" />
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-brand-dark">
              Hotline
            </span>
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            id="mobile-lang-toggle-btn"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="flex items-center justify-center p-2 border border-brand-dark/10 rounded-full text-brand-dark cursor-pointer"
            aria-label="Toggle language"
          >
            <span className="font-sans text-xs uppercase tracking-widest font-semibold">
              {lang === 'vi' ? 'EN' : 'VI'}
            </span>
          </button>
          
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-dark hover:text-brand-dark/80 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-brand-cream/98 border-b border-brand-light/30 shadow-lg py-8 px-8 lg:hidden z-40 flex flex-col items-center"
          >
            <div className="flex flex-col space-y-5 w-full max-w-sm text-center">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.href}
                  href={item.href}
                  id={`mobile-nav-link-${item.href.replace('#', '')}`}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="font-sans text-sm uppercase tracking-[0.2em] text-brand-dark hover:text-brand-dark/75 py-2 block border-b border-brand-light/10"
                >
                  {lang === 'vi' ? item.label : item.labelEn}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                className="pt-4 flex flex-col space-y-3"
              >
                <a
                  href="tel:+84900000000"
                  id="mobile-call-action"
                  className="flex items-center justify-center space-x-2 text-brand-cream bg-brand-dark hover:bg-brand-dark/95 border border-transparent rounded-lg py-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-cream" />
                  <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-brand-cream">
                    Hotline: 028.9999.MESA
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
