/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import FurnitureStories from './components/FurnitureStories';
import DesignPhilosophy from './components/DesignPhilosophy';
import MaterialsCraft from './components/MaterialsCraft';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');

  return (
    <div id="mesa-app-root" className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-dark selection:text-brand-cream font-sans antialiased overflow-x-hidden">
      {/* Premium Floating Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Sections Hierarchy */}
      <main id="main-content">
        {/* Section 1: Hero Video/Image Slider */}
        <Hero lang={lang} />

        {/* Section 2: About Brand & Design Philosophy Prelude */}
        <About lang={lang} />

        {/* Section 3: Premium Portfolio of Projects with Filtering & Lightbox Modal */}
        <FeaturedProjects lang={lang} />

        {/* Section 4: Magazine Spread Editorial Furniture Stories */}
        <FurnitureStories lang={lang} />

        {/* Section 5: Core Pillars of Design Philosophy Card Deck */}
        <DesignPhilosophy lang={lang} />

        {/* Section 6: Macro Texture Gallery & Sourcing Materials Showcase */}
        <MaterialsCraft lang={lang} />

        {/* Section 7: Curated Client and Partner Testimonials Carousel */}
        <Testimonials lang={lang} />

        {/* Section 8: Inquiries Form, Details Cards, and Styled Embedded Map */}
        <Contact lang={lang} />
      </main>

      {/* Section 9: Complete Corporate Footer Grid */}
      <Footer lang={lang} />
    </div>
  );
}

