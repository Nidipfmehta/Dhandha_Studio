import { useState, useEffect } from 'react';

export default function HomePage({ onLogin }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [openFaq, setOpenFaq] = useState(null);
  const [flippedIndexes, setFlippedIndexes] = useState(new Set());
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['Home', 'Features', 'Pricing', 'FAQs', 'Contact'];

  const resetFlips = () => {
    setFlippedIndexes(new Set());
  };

  const scrollToSection = (tabName) => {
    setActiveTab(tabName);
    const id = tabName.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFlip = (index) => {
    const newFlipped = new Set(flippedIndexes);
    if (newFlipped.has(index)) newFlipped.delete(index);
    else newFlipped.add(index);
    setFlippedIndexes(newFlipped);
  };

  const faqData = [
    { q: "How does Dhandha Studio create ads?", a: "Dhandha Studio uses advanced AI models to analyze your product photos and generate high-conversion marketing visuals instantly." },
    { q: "What types of ads can I create?", a: "You can create social media reels, catalog photos, banner ads, and lifestyle imagery tailored for fashion brands." },
    { q: "How long does it take to generate an ad?", a: "Generating a high-quality visual typically takes between 30 to 60 seconds." },
    { q: "Can I edit the generated ads?", a: "Yes, our built-in editor allows you to adjust colors, lighting, and add custom text overlays." },
    { q: "What's included in the refund guarantee?", a: "In case of a verified technical failure where credits are deducted but no image is delivered, we provide service credits as compensation." },
    { q: "Do you offer custom enterprise solutions?", a: "Absolutely. We provide API access and custom model training for large manufacturers and retailers." }
  ];

  const scrollPhotos = [
  { 
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80", 
    label: "Beauty" 
  },
  { 
    src: "https://images.unsplash.com/photo-1529139574466-a302d2052574?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80", 
    label: "Electronics" 
  },
  { 
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
    label: "Lifestyle" 
  },
  { 
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
    label: "Food" 
  },
  { 
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80",
    label: "Wellness" 
  },
  { 
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    label: "Tech" 
  },
  { 
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    label: "Fashion" 
  },
  { 
    src: "https://images.unsplash.com/photo-1574259514749-0e6b8cd237e2?w=500&q=80", 
    backSrc: "https://images.unsplash.com/photo-1571115622295-3a23c9cfd195?w=500&q=80",
    label: "Jewelry" 
  }
];


  const scrollReels = [
  "https://images.unsplash.com/photo-1611558709796-cfd43d706e25?w=400&q=80",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80",
  "https://images.unsplash.com/photo-1485230205346-71acb9518d9c?w=400&q=80",
  "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400&q=80",
  "https://images.unsplash.com/photo-1571115622295-3a23c9cfd195?w=400&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80"
];


  return (
    // <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-x-hidden pt-20">
    <div className="min-h-screen bg-[#F4EDE4] text-[#4A3728] font-sans relative overflow-x-hidden">
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img 
          src="/DSLogo.png" 
          alt="" 
          className="w-[80%] opacity-[0.05] scale-160 filter grayscale"
        />
      </div>

      {/* Nav */}
      <nav className="animate-slide-down fixed top-0 left-0 right-0 bg-[#F4EDE4]/95 backdrop-blur-lg border-b border-[#A67C52]/20 z-50 px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('Home')} 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="flex items-center justify-center">
              <img 
                src="/DSLogo.png" 
                alt="Dhandha Studio Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <span className="font-serif font-bold text-2xl hidden sm:block tracking-tight text-[#4A3728]">
              Dhandha Studio
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#6B4F35]">
            {tabs.map(tab => (
              <button 
                key={tab} 
                onClick={() => scrollToSection(tab)} 
                className={`transition-all hover:text-[#A67C52] ${activeTab === tab ? 'text-[#A67C52] border-b border-[#A67C52]' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button onClick={onLogin} className="px-9 py-2.5 bg-[#4A3728] text-[#F4EDE4] font-bold rounded-sm hover:bg-[#A67C52] transition-all shadow-lg uppercase text-[10px] tracking-widest">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-48 pb-24 px-6 relative z-10 scroll-mt-24">
        <div className="max-w-9xl mx-auto text-center">
          
          <h1 className="animate-slide-up text-6xl lg:text-8xl font-serif font-black text-[#4A3728] mb-4 tracking-tighter italic drop-shadow-sm">
            Dhandha Studio
          </h1>
          <div className="w-24 h-1 bg-[#A67C52] mx-auto mb-8"></div>
          <h2 className="animate-slide-up delay-100 text-xl lg:text-2xl font-medium text-[#6B4F35] mb-12 tracking-wide italic">
            Enabling Bharat's Fashion Industry
          </h2>
          <p className="animate-slide-up delay-200 text-lg lg:text-xl text-[#4A3728] mb-16 max-w-3xl mx-auto font-medium tracking-wide">
            AI-powered fashion visuals for traders & retailers
          </p>
          
          <div className="animate-fade-in delay-300 mb-20">
          <div 
            className="flex gap-6 overflow-hidden pb-6 -mb-6 group" 
            onMouseEnter={(e) => e.currentTarget.querySelectorAll('.animate-scroll').forEach(el => el.style.animationPlayState = 'paused')}
            onMouseLeave={(e) => e.currentTarget.querySelectorAll('.animate-scroll').forEach(el => el.style.animationPlayState = 'running')}
          >
            {[...scrollPhotos, ...scrollPhotos].map((item, i) => (
              <div 
                key={i} 
                className="animate-scroll flex-none w-72 h-96 min-w-[288px] perspective-1000"
                onClick={() => toggleFlip(i)}
                onMouseLeave={() => {
                  if (flippedIndexes.has(i)) {
                    toggleFlip(i);
                  }
                }}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${flippedIndexes.has(i) ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front side */}
                  <div className="absolute inset-0 backface-hidden rounded-xl shadow-2xl overflow-hidden border-2 border-[#A67C52]/20">
                    <img src={item.src} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" alt="" />
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#4A3728]/90 backdrop-blur-md px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4EDE4] shadow-md border border-[#A67C52]/30">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {/* Back side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border-2 border-[#A67C52] shadow-2xl">
                    <img src={item.backSrc || item.src} className="w-full h-full object-cover" alt="AI Generated Version" />
                    <div className="absolute inset-0 bg-[#4A3728]/40 flex items-center justify-center">
                      <div className="bg-[#A67C52] text-[#F4EDE4] px-5 py-2 rounded-sm font-bold text-[10px] uppercase tracking-widest shadow-lg">
                        AI Result
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          
          {/* Scrolling Reels - Refined Version */}
          <div id="features" className="animate-slide-up delay-400 mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#4A3728] mb-4 lg:mb-6 tracking-tight uppercase drop-shadow-sm">
              Examples of Reels
            </h2>
            <p className="text-[#6B4F35] text-lg lg:text-xl font-medium italic tracking-wide">
              See what our AI creates for leading brands
            </p>
          </div>

          <div className="animate-fade-in delay-500 mb-12 lg:mb-16">
            <div
              className="flex gap-5 sm:gap-6 lg:gap-8 overflow-hidden pb-6 -mb-6 group"
              onMouseEnter={(e) => e.currentTarget.querySelectorAll('.animate-scroll-reverse').forEach(el => el.style.animationPlayState = 'paused')}
              onMouseLeave={(e) => e.currentTarget.querySelectorAll('.animate-scroll-reverse').forEach(el => el.style.animationPlayState = 'running')}
            >
              {[...scrollReels, ...scrollReels].map((src, i) => (
                <div
                  key={i}
                  className="group relative flex-none w-52 sm:w-60 lg:w-64 h-80 lg:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#A67C52]/20 transition-all duration-500 hover:-translate-y-2 border-4 border-[#F4EDE4]/80 bg-white animate-scroll-reverse"
                >
                  {/* Image with warm overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={src}
                      alt={`Reel example ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Subtle vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Play button - centered, modern, with pulse */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#F4EDE4]/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <div className="w-0 h-0 border-t-[10px] sm:border-t-[12px] lg:border-t-[14px] border-t-transparent border-l-[16px] sm:border-l-[20px] lg:border-l-[24px] border-l-[#4A3728] border-b-[10px] sm:border-b-[12px] lg:border-b-[14px] border-b-transparent ml-1.5 sm:ml-2 lg:ml-2.5"></div>
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#A67C52]/30 animate-ping-slow opacity-0 group-hover:opacity-70"></div>
                    </div>
                  </div>

                  {/* Optional small label (fashion category) */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="inline-block px-4 py-1.5 bg-[#4A3728]/80 backdrop-blur-md text-[#F4EDE4] text-xs sm:text-sm font-medium rounded-full uppercase tracking-wider shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Fashion Reel
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#2D2118]/95 text-[#A67C52] pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-t border-[#A67C52]/20 overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-multiply">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Perfectly centered, responsive title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-center text-[#F4EDE4] mb-12 lg:mb-20 tracking-tight uppercase leading-tight drop-shadow-lg">
            PRICING
          </h2>
          
          {/* Responsive grid - Perfect aspect ratio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* LEFT CARD - Small Traders */}
            <div className="group bg-[#F4EDE4]/95 backdrop-blur-sm rounded-[1.25rem] p-6 sm:p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-t-8 border-[#A67C52]/90 hover:shadow-[0_30px_60px_rgba(166,124,82,0.3)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between hover:border-t-[#A67C52]">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-serif font-black text-[#4A3728] mb-4 sm:mb-6 uppercase tracking-[0.1em] leading-tight">Small Traders</h3>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#A67C52] mb-2 lg:mb-4 leading-none drop-shadow-md">₹15</div>
                <p className="text-[#6B4F35]/90 mb-8 lg:mb-10 font-bold uppercase text-xs sm:text-sm tracking-[0.15em] leading-tight">per month</p>
              </div>
              <button className="w-full py-3 sm:py-4 lg:py-5 border-2 border-[#A67C52]/90 text-[#A67C52] font-serif font-black uppercase tracking-[0.15em] text-xs sm:text-sm rounded-lg hover:bg-[#A67C52] hover:text-[#F4EDE4] hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 group-hover:scale-[1.02] active:scale-95">
                Get Started
              </button>
            </div>

            {/* RIGHT CARD - Manufacturers (POPULAR) */}
            <div className="group relative bg-gradient-to-br from-[#A67C52]/95 to-[#6B4F35]/95 backdrop-blur-md rounded-[1.25rem] p-6 sm:p-8 lg:p-12 shadow-[0_25px_50px_rgba(0,0,0,0.25)] text-[#F4EDE4] h-full flex flex-col justify-between hover:shadow-[0_35px_70px_rgba(166,124,82,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              
              {/* Popular badge */}
              <div className="absolute -top-4 right-6 bg-[#4A3728]/95 px-4 py-2 rounded-t-2xl rounded-br-lg text-[10px] sm:text-xs lg:text-sm font-black uppercase tracking-[0.2em] shadow-lg border border-[#A67C52]/50 backdrop-blur-sm">POPULAR</div>
              
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-serif font-black mb-4 sm:mb-6 uppercase tracking-[0.1em] leading-tight drop-shadow-sm">Manufacturers</h3>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black mb-2 lg:mb-4 leading-none drop-shadow-lg">₹30</div>
                <p className="text-[#F4EDE4]/90 mb-8 lg:mb-10 font-bold uppercase text-xs sm:text-sm tracking-[0.15em] leading-tight">Save 20% • Billed Annually</p>
              </div>
              
              <button className="w-full py-3 sm:py-4 lg:py-5 bg-[#F4EDE4]/95 text-[#4A3728] font-serif font-black uppercase tracking-[0.15em] text-xs sm:text-sm rounded-lg shadow-inner hover:bg-[#4A3728]/95 hover:text-[#F4EDE4] hover:shadow-lg hover:shadow-white/20 transition-all duration-300 active:scale-95 border border-white/30 backdrop-blur-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section 
        id="faqs" 
        className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F4EDE4] via-[#F8F4EF] to-[#EDE5DC] scroll-mt-24 border-t border-[#A67C52]/10 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#4A3728] mb-4 lg:mb-6 uppercase tracking-[0.08em] leading-tight drop-shadow-sm">
              Frequently Asked Questions
            </h2>
            <div className="w-16 sm:w-20 h-0.5 mx-auto bg-gradient-to-r from-[#A67C52] via-[#D4A373] to-[#A67C52] rounded-full mb-4 lg:mb-6"></div>
            <p className="text-[#6B4F35] text-base sm:text-lg lg:text-xl italic font-medium tracking-wide max-w-2xl mx-auto">
              Everything you need to know about our AI-powered fashion visuals
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`group bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-[#A67C52]/15 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#A67C52]/10 transition-all duration-500 hover:-translate-y-1 ${
                  openFaq === index ? 'shadow-2xl border-[#A67C52]/30' : ''
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 flex items-center justify-between text-left transition-all duration-400 hover:bg-gradient-to-r hover:from-[#A67C52]/5 hover:to-[#F4EDE4]/10 relative overflow-hidden"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-serif font-bold text-[#4A3728] pr-6 lg:pr-8 uppercase tracking-[0.03em] group-hover:text-[#A67C52] transition-colors duration-300">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#A67C52] transition-all duration-500 flex-none transform ${
                      openFaq === index ? 'rotate-180 scale-110' : 'group-hover:rotate-12'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-out bg-gradient-to-b from-white/95 to-[#F4EDE4]/80 backdrop-blur-sm ${
                    openFaq === index ? 'max-h-96 opacity-100 py-6 lg:py-8' : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 lg:px-10 text-[#6B4F35] leading-relaxed text-sm sm:text-base lg:text-lg font-light italic tracking-wide">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F4EDE4] to-[#EDE5DC] scroll-mt-24 overflow-hidden border-t border-[#A67C52]/10"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#4A3728] mb-4 lg:mb-6 uppercase tracking-[0.08em] drop-shadow-sm">
              Connect With Us
            </h2>
            <p className="text-[#6B4F35] max-w-3xl mx-auto text-base sm:text-lg lg:text-xl italic font-medium leading-relaxed">
              Send us a message and our studio representative will respond quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-10 lg:space-y-12 order-2 md:order-1">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "dhandhastudio@gmail.com"
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 9106871523"
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  label: "Location",
                  value: "Ahmedabad, Gujarat"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-[#4A3728] rounded-xl flex items-center justify-center shadow-lg text-[#F4EDE4] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#A67C52] uppercase tracking-widest opacity-90">
                      {item.label}
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#4A3728] mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="order-1 md:order-2">
              <div className="bg-white/95 backdrop-blur-md p-8 lg:p-10 rounded-3xl shadow-2xl border border-[#A67C52]/20 hover:shadow-3xl transition-shadow duration-500">
                <form className="space-y-6 lg:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-6 py-4 bg-[#F4EDE4]/50 border border-[#A67C52]/30 rounded-xl focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/30 outline-none text-[#4A3728] placeholder-[#6B4F35]/60 transition-all duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-6 py-4 bg-[#F4EDE4]/50 border border-[#A67C52]/30 rounded-xl focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/30 outline-none text-[#4A3728] placeholder-[#6B4F35]/60 transition-all duration-300"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-[#F4EDE4]/50 border border-[#A67C52]/30 rounded-xl focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/30 outline-none text-[#4A3728] placeholder-[#6B4F35]/60 transition-all duration-300"
                  />
                  <textarea
                    rows="5"
                    placeholder="Your Message..."
                    className="w-full px-6 py-4 bg-[#F4EDE4]/50 border border-[#A67C52]/30 rounded-xl focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/30 outline-none text-[#4A3728] placeholder-[#6B4F35]/60 resize-none transition-all duration-300"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-[#4A3728] to-[#6B4F35] text-[#F4EDE4] font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-[#A67C52] hover:to-[#D4A373] transition-all duration-500 transform hover:scale-[1.02] uppercase tracking-widest text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
        <footer className="bg-[#2D2118] text-[#A67C52] pt-24 pb-16 px-6 overflow-hidden">
          {/* Subtle background texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A67C52]/5 to-[#2D2118]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
              <div className="col-span-2">
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold mb-4 text-[#F4EDE4] tracking-tight">
                  Dhandha Studio
                </h3>
                <p className="text-[#A67C52] italic text-lg mb-6 font-medium tracking-wide">
                  "Enabling Bharat's Fashion Industry"
                </p>
                <p className="text-[#F4EDE4]/70 text-sm leading-relaxed max-w-md font-light">
                  Crafting the future of fashion photography through artificial intelligence and bespoke digital visuals.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-sm mb-6 text-[#F4EDE4] uppercase tracking-widest">Product</h4>
                <ul className="text-[#A67C52]/80 text-sm space-y-4">
                  <li>
                    <button onClick={() => scrollToSection('Features')} className="hover:text-[#F4EDE4] transition-colors duration-300">
                      Features
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('Pricing')} className="hover:text-[#F4EDE4] transition-colors duration-300">
                      Pricing
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-sm mb-6 text-[#F4EDE4] uppercase tracking-widest">Legal</h4>
                <ul className="text-[#A67C52]/80 text-sm space-y-4">
                  <li>
                    <button onClick={() => setModalContent('privacy-policy')} className="hover:text-[#F4EDE4] transition-colors duration-300">
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setModalContent('terms-of-service')} className="hover:text-[#F4EDE4] transition-colors duration-300">
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setModalContent('refund-policy')} className="hover:text-[#F4EDE4] transition-colors duration-300">
                      Refunds
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-[#A67C52]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-[#A67C52]/60 text-xs uppercase tracking-widest font-medium">
              <p>© 2026 Dhandha Studio. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Fixed CTA Button */}
        <a  
          href="https://wa.me/919106837578" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-8 z-[100] bg-[#4A3728] text-[#F4EDE4] px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:bg-[#A67C52] transition-all font-bold text-[12px] uppercase tracking-widest border border-[#A67C52]/30"
        >
          <svg className="w-5 h-5 text-[#A67C52]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.632 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Try Now
        </a>

      {/* Legal Modal Rendering */}
      {modalContent && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-fade-in">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer" onClick={() => setModalContent(null)}></div>
        <div className="relative bg-[#F4EDE4] w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-sm shadow-2xl border border-[#A67C52] flex flex-col animate-slide-up">
          
          {/* Header */}
          <div className="p-8 border-b border-[#A67C52]/20 flex justify-between items-center bg-[#F4EDE4]">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#4A3728] capitalize">{modalContent.replace(/-/g, ' ')}</h2>
              <p className="text-[#A67C52] font-bold text-[8px] uppercase tracking-[0.3em] mt-1 italic">Dhandha Studio Official Atelier</p>
            </div>
            <button 
              onClick={() => setModalContent(null)} 
              className="w-10 h-10 flex items-center justify-center bg-[#4A3728] text-[#A67C52] hover:bg-[#A67C52] hover:text-[#F4EDE4] transition-all hover:scale-110 active:scale-95"
            >
              ✕
            </button>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12 overflow-y-auto text-[#6B4F35] leading-relaxed space-y-6 text-sm italic font-medium custom-scrollbar">
            
            {modalContent === 'privacy-policy' && (
              <div className="space-y-6">
                <p className="text-[10px] text-[#A67C52] font-bold italic uppercase tracking-widest">Last Updated: 07 January, 2026 | In accordance with DPDPA 2023</p>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">1. Data Collection</h3>
                  <p>We collect your WhatsApp number, name, business details (for Enterprise Dashboard users), and all media (photos/logos) uploaded for processing.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">2. Data Usage & Trade Secrets</h3>
                  <p>To protect our proprietary processes, we do not disclose specific third-party API providers or internal model architectures. Data is processed through secure "Sub-Processors" under strict confidentiality.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">3. Retention & Deletion</h3>
                  <p>We store your generated images to allow you to download them later. You may request data deletion by emailing <a href="mailto:dhandhastudio@gmail.com" className="text-[#A67C52] hover:underline font-bold">dhandhastudio@gmail.com</a>. We will process such requests within 30 days.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">4. Security</h3>
                  <p>While we use industry-standard encryption, users acknowledge that communication via WhatsApp is also subject to Meta's privacy terms.</p>
                </section>
              </div>
            )}
            
            {modalContent === 'terms-of-service' && (
              <div className="space-y-6">
                <p className="text-[10px] text-[#A67C52] font-bold italic uppercase tracking-widest">Last Updated: 07 January, 2026</p>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">1. Acceptance of Terms</h3>
                  <p>By accessing the Dhandha Studio WhatsApp Bot or Enterprise Dashboard, you agree to be bound by these terms.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">2. Description of Service</h3>
                  <p>Dhandha Studio provides an AI-driven "Parallel Photography" engine that transforms product images (e.g., tabletop clothing) into model-based lifestyle imagery.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">3. User Content & Logo Indemnification</h3>
                  <p><strong>Ownership:</strong> You retain rights to any original product photos uploaded.</p>
                  <p><strong>Indemnity:</strong> You represent that you own or have the legal right to use any logos provided. Dhandha Studio is a technical intermediary and shall not be held responsible for trademark infringement or unauthorized use of logos by the trader.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">4. AI-Generated Output & Ethics</h3>
                  <p>While highly realistic, these are synthetic images. AI may generate faces that inadvertently resemble real individuals; Dhandha Studio is not liable for such coincidences. You are granted a commercial license but are advised to follow ASCI guidelines by disclosing AI usage in public hoardings.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">5. Dispute Resolution</h3>
                  <p>All disputes are subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat only.</p>
                </section>
              </div>
            )}
            
            {modalContent === 'refund-policy' && (
              <div className="space-y-6">
                <p className="text-[10px] text-[#A67C52] font-bold italic text-center uppercase tracking-widest">Last Updated: 07 January, 2026</p>
                <div className="text-center py-4">
                  <div className="inline-block p-5 bg-[#4A3728]/10 rounded-md mb-4 text-4xl border border-[#A67C52]/20">🛡️</div>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">Strict No-Refund Policy</h3>
                </div>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">1. Subscription & Credits</h3>
                  <p>Once credits are used to generate an image, the service is considered fully rendered.</p>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">2. Policy Details</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>No refunds for "subjective dissatisfaction" with the AI's creative output.</li>
                    <li>No refunds for user errors (e.g., uploading the wrong photo or a low-resolution logo).</li>
                    <li>In case of a verified technical failure (credits deducted but no image delivered), we will provide <strong>service credits</strong> as compensation.</li>
                    <li>Cash refunds are only processed at the sole discretion of management.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="font-black text-lg text-[#4A3728] mb-2 uppercase tracking-tighter">3. Cancellation</h3>
                  <p>Enterprise customers may cancel their subscription at any time via the Dashboard. Access will remain active until the end of the current billing cycle.</p>
                </section>
              </div>
            )}
            
          </div>
          
          {/* Footer */}
          <div className="p-6 bg-[#4A3728]/5 text-center border-t border-[#A67C52]/20">
            <button 
              onClick={() => setModalContent(null)} 
              className="px-8 py-3 bg-[#4A3728] text-[#F4EDE4] font-serif font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-[#A67C52] hover:shadow-xl hover:scale-[1.05] transition-all duration-300 active:scale-[0.98] rounded-md border border-[#A67C52]/30"
            >
              Accept & Close
            </button>
          </div>
        </div>
      </div>
      )}

      <style>{`
        :global(html) {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 5rem;
        }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.1; } }
        @keyframes slideDown { from { transform: translateY(-100%); } to { transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-300%); } }
        @keyframes scroll-reverse { 0% { transform: translateX(-300%); } 100% { transform: translateX(0); } }

        .animate-slide-down { animation: slideDown 0.6s ease-out forwards; }
        .animate-slide-up { 
           opacity: 0; 
           animation: slideUp 0.8s ease-out forwards; 
           will-change: transform, opacity;
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-fade-in { opacity: 0; animation: fadeIn 1.2s ease-out forwards; }
        .animate-scroll { animation: scroll 30s linear infinite; will-change: transform; }
        .animate-scroll-reverse { animation: scroll-reverse 30s linear infinite; will-change: transform; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.4s; }
        .delay-400 { animation-delay: 0.6s; }
        .delay-500 { animation-delay: 0.8s; }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
