import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle, Instagram, Facebook, Globe, MessageSquare } from 'lucide-react';

interface ContactProps {
  lang: 'vi' | 'en';
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate premium submission sequence
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'residential',
        message: ''
      });
    }, 1200);
  };

  const servicesList = [
    { value: 'residential', label: 'Thiết kế Biệt thự / Villa', labelEn: 'Villa & Estate Design' },
    { value: 'penthouse', label: 'Căn hộ Penthouse / Duplex', labelEn: 'Penthouse & Luxury Suites' },
    { value: 'showroom', label: 'Showroom & Commercial Art space', labelEn: 'Commercial & Showrooms' },
    { value: 'turnkey', label: 'Thi công & Hoàn thiện trọn gói', labelEn: 'Turnkey Build & Installation' }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      
      {/* Dynamic light blur orb */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-brand-light/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-dark/60 mb-3 block">
            {lang === 'vi' ? 'KHỞI ĐẦU KHÔNG GIAN SỐNG' : 'COMMISSION A PROJECT'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark tracking-tight leading-tight">
            {lang === 'vi' ? (
              <>
                Hiện thực hóa không gian <br />
                <span className="italic font-normal text-brand-dark/80">mang đậm dấu ấn của riêng bạn.</span>
              </>
            ) : (
              <>
                Let’s create your legacy <br />
                <span className="italic font-normal text-brand-dark/80">architectural signature.</span>
              </>
            )}
          </h2>
        </div>

        {/* Form and Contact Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Block: Address Cards & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex items-start space-x-4 border-l-2 border-brand-light pl-4 py-2">
                <MapPin className="w-5 h-5 text-brand-dark/70 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-dark/45 font-bold mb-1">
                    {lang === 'vi' ? 'ĐỊA CHỈ TRỤ SỞ' : 'ATELIER ADDRESS'}
                  </span>
                  <p className="font-sans text-sm text-brand-dark font-medium leading-relaxed">
                    202 Lý Chính Thắng, Phường Nhiêu Lộc, <br />
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start space-x-4 border-l-2 border-brand-light pl-4 py-2">
                <Phone className="w-5 h-5 text-brand-dark/70 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-dark/45 font-bold mb-1">
                    {lang === 'vi' ? 'ĐIỆN THOẠI HỖ TRỢ' : 'COMMUNICATIONS'}
                  </span>
                  <a href="tel:+84900000000" className="block font-sans text-sm text-brand-dark hover:text-brand-light font-medium transition-colors">
                    028.9999.MESA (6372)
                  </a>
                  <a href="tel:+84901234567" className="block font-sans text-xs text-brand-dark/70 font-light mt-0.5">
                    Hotline: (+84) 901 234 567
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-start space-x-4 border-l-2 border-brand-light pl-4 py-2">
                <Mail className="w-5 h-5 text-brand-dark/70 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-dark/45 font-bold mb-1">
                    {lang === 'vi' ? 'HÒM THƯ LIÊN HỆ' : 'DIGITAL INQUIRIES'}
                  </span>
                  <a href="mailto:contact@mesainterior.vn" className="block font-sans text-sm text-brand-dark hover:text-brand-light font-medium transition-colors">
                    contact@mesainterior.vn
                  </a>
                  <a href="mailto:design@mesainterior.vn" className="block font-sans text-xs text-brand-dark/70 font-light mt-0.5">
                    design@mesainterior.vn
                  </a>
                </div>
              </div>
            </div>

            {/* Dynamic visual map representation */}
            <div className="aspect-[16/10] w-full overflow-hidden rounded-md border border-brand-light/30 shadow-md relative group bg-brand-dark/15">
              {/* Premium dark overlay map visual */}
              <iframe
                title="Mesa Interior Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4243054179374!2d106.68067537570295!3d10.778776059150174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2f7dbf1cb7%3s0x31752f2f7c000001!2zMjAyIEzDvSBDaMOtbmggVGjhuq9uZywgUGjGsOG7nW5nIDksIFF14bqtbiAzLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-85 hover:grayscale-0 transition-all duration-700 w-full h-full"
              />
              <div className="absolute bottom-3 left-3 bg-brand-charcoal/85 backdrop-blur-sm px-3 py-1.5 rounded-sm pointer-events-none border border-brand-light/20">
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-cream block">
                  SHOWROOM LOCATION
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Elegant Contact Form */}
          <div className="lg:col-span-7 bg-brand-light/5 border border-brand-light/15 p-8 md:p-12 rounded-md shadow-sm relative flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="flex flex-col">
                      <label htmlFor="name-input" className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-dark/60 mb-2">
                        {lang === 'vi' ? 'Họ và tên *' : 'Your Full Name *'}
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'vi' ? 'Nhập họ tên...' : 'Enter your name...'}
                        className="font-sans text-sm bg-brand-cream/50 hover:bg-brand-cream border border-brand-light/40 focus:border-brand-dark rounded-sm px-4 py-3 outline-none transition-colors w-full text-brand-dark"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="flex flex-col">
                      <label htmlFor="phone-input" className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-dark/60 mb-2">
                        {lang === 'vi' ? 'Số điện thoại *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        id="phone-input"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={lang === 'vi' ? 'Số điện thoại liên hệ...' : 'Your contact number...'}
                        className="font-sans text-sm bg-brand-cream/50 hover:bg-brand-cream border border-brand-light/40 focus:border-brand-dark rounded-sm px-4 py-3 outline-none transition-colors w-full text-brand-dark"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email input */}
                    <div className="flex flex-col">
                      <label htmlFor="email-input" className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-dark/60 mb-2">
                        {lang === 'vi' ? 'Địa chỉ email *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@domain.com"
                        className="font-sans text-sm bg-brand-cream/50 hover:bg-brand-cream border border-brand-light/40 focus:border-brand-dark rounded-sm px-4 py-3 outline-none transition-colors w-full text-brand-dark"
                      />
                    </div>

                    {/* Services Dropdown */}
                    <div className="flex flex-col">
                      <label htmlFor="service-select" className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-dark/60 mb-2">
                        {lang === 'vi' ? 'Dịch vụ cần tư vấn' : 'Requested Service'}
                      </label>
                      <select
                        id="service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="font-sans text-sm bg-brand-cream/50 hover:bg-brand-cream border border-brand-light/40 focus:border-brand-dark rounded-sm px-4 py-3 outline-none transition-colors w-full text-brand-dark"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv.value} value={srv.value}>
                            {lang === 'vi' ? srv.label : srv.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col">
                    <label htmlFor="message-input" className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-dark/60 mb-2">
                      {lang === 'vi' ? 'Chia sẻ ý tưởng hoặc nhu cầu của bạn' : 'Briefly describe your dream space'}
                    </label>
                    <textarea
                      id="message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'vi' ? 'VD: Tôi cần tư vấn thiết kế và thi công biệt thự 3 tầng tại Thảo Điền...' : 'Describe your timeline, space size, style preferences...'}
                      className="font-sans text-sm bg-brand-cream/50 hover:bg-brand-cream border border-brand-light/40 focus:border-brand-dark rounded-sm px-4 py-3 outline-none transition-colors w-full text-brand-dark scrollbar-thin resize-none"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-3 bg-brand-dark hover:bg-brand-dark/95 text-brand-cream py-4 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
                  >
                    {loading ? (
                      <span className="animate-pulse">{lang === 'vi' ? 'Đang gửi thông tin...' : 'Sending Inquiries...'}</span>
                    ) : (
                      <>
                        <span>{lang === 'vi' ? 'Gửi yêu cầu tư vấn' : 'Submit commission request'}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-dark/5 flex items-center justify-center mx-auto mb-6 text-brand-dark border border-brand-light/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-brand-dark mb-4">
                    {lang === 'vi' ? 'Gửi yêu cầu thành công' : 'Inquiry Successfully Received'}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light max-w-md mx-auto mb-8">
                    {lang === 'vi'
                      ? 'Cảm ơn sự tin cậy của bạn. Đội ngũ Kiến trúc sư cao cấp của MESA INTERIOR sẽ liên hệ trực tiếp hỗ trợ bạn trong vòng 24 giờ tới.'
                      : 'Thank you for commissioning MESA. Our Principal Architect will contact you directly within the next 24 business hours.'}
                  </p>

                  <button
                    id="contact-reset-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-block border border-brand-dark/30 hover:border-brand-dark text-brand-dark px-6 py-2.5 rounded-sm font-sans text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                  >
                    {lang === 'vi' ? 'Gửi yêu cầu mới' : 'Submit another request'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
