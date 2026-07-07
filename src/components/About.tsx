import { motion } from 'motion/react';

interface AboutProps {
  lang: 'vi' | 'en';
}

export default function About({ lang }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Asymmetrical overlapping image grid */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Background subtle frame */}
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 border border-brand-light/40 rounded-sm pointer-events-none z-0" />
            
            {/* Image 1: Beautiful light-wood showroom / living area (Main Image) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="w-4/5 aspect-[4/5] overflow-hidden rounded-sm shadow-xl z-10 relative bg-brand-dark/10"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85"
                alt="MESA Showroom & Design Atelier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* Image 2: Overlay smaller image showing hand-drawn blueprint or macro texture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 bottom-[-30px] w-1/2 aspect-square overflow-hidden rounded-sm shadow-2xl z-20 border-[6px] border-brand-cream bg-brand-dark/10"
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=85"
                alt="Material selection and spatial sketches"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>

          {/* Right Column: Copy & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category / Section Name */}
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
              {lang === 'vi' ? 'CÂU CHUYỆN THƯƠNG HIỆU' : 'THE ART OF LIVING'}
            </span>

            {/* Serif Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-dark leading-tight tracking-tight mb-8">
              {lang === 'vi' ? (
                <>
                  Kiến tạo khoảng lặng <br />
                  <span className="italic font-normal text-brand-dark/80">giữa phố thị phồn hoa.</span>
                </>
              ) : (
                <>
                  Sculpting silence <br />
                  <span className="italic font-normal text-brand-dark/80">within luxury spaces.</span>
                </>
              )}
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-sm sm:text-base text-brand-dark/85 font-light leading-relaxed mb-6">
              {lang === 'vi' ? (
                'MESA INTERIOR ra đời tại Sài Gòn với sứ mệnh định hình lại khái niệm “Modern Luxury”. Đối với chúng tôi, một không gian hoàn mỹ không đo đếm bằng mức độ phô diễn vương giả hay đồ sộ, mà bằng cảm xúc yên bình khi chạm tay vào những thớ gỗ sồi uốn cong tinh tế, bằng sự lay động khi đón nhận vệt nắng ban mai chạy dài trên mảng đá trầm tích thô sơ.'
              ) : (
                'MESA INTERIOR was established with a singular purpose: to redefine Modern Luxury. To our design team, a perfect space is not measured by ostentatious displays, but by the quiet emotional resonance of running your fingers along steam-bent oak, and witnessing natural morning light cascade across hand-selected travertine blocks.'
              )}
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed mb-10">
              {lang === 'vi' ? (
                'Chúng tôi tin rằng mỗi ngôi nhà là một cuốn tự truyện không lời của gia chủ. Do đó, đội ngũ kiến trúc sư và thợ thủ công của MESA luôn dành hàng tháng trời để nghiên cứu thói quen sinh hoạt, tính khí của chủ nhân và nguồn gốc vật liệu, nhằm đảm bảo từng công trình bàn giao là độc bản, trường tồn cả về kết cấu lẫn giá trị thẩm mỹ.'
              ) : (
                'We believe a home is an unspoken autobiography of its inhabitant. Consequently, our architects and craftsmen dedicate months researching spatial flow, natural material responses, and personal lifestyle rituals, ensuring every finished project is a bespoke legacy of architectural permanence.'
              )}
            </p>

            {/* Dynamic metrics / Counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-light/30">
              <div>
                <span className="block font-serif text-3xl md:text-4xl font-light text-brand-dark">50+</span>
                <span className="block font-sans text-[10px] sm:text-xs uppercase tracking-wider text-brand-dark/60 mt-1">
                  {lang === 'vi' ? 'Dự án Penthouse & Villa' : 'Luxury Estates'}
                </span>
              </div>
              
              <div>
                <span className="block font-serif text-3xl md:text-4xl font-light text-brand-dark">10+</span>
                <span className="block font-sans text-[10px] sm:text-xs uppercase tracking-wider text-brand-dark/60 mt-1">
                  {lang === 'vi' ? 'Năm Kỹ Nghệ' : 'Years of Craft'}
                </span>
              </div>
              
              <div>
                <span className="block font-serif text-3xl md:text-4xl font-light text-brand-dark">100%</span>
                <span className="block font-sans text-[10px] sm:text-xs uppercase tracking-wider text-brand-dark/60 mt-1">
                  {lang === 'vi' ? 'Độc Bản Tự Nhiên' : 'Bespoke Artistry'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
