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
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-x-hidden pt-20">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img 
          src="/DSLogo.png" 
          alt="" 
          className="w-[60%] opacity-[0.08] rotate-0 scale-150 filter grayscale"
        />
      </div>

      {/* Nav */}
      <nav className="animate-slide-down fixed top-0 left-0 right-0 bg-[#FDF8F2]/95 backdrop-blur-lg border-b border-amber-100/30 z-50 px-6 py-4 shadow-sm">
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
            <span className="font-black text-xl hidden sm:block tracking-tight text-gray-900">
              Dhandha Studio
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            {tabs.map(tab => (
              <button 
                key={tab} 
                onClick={() => scrollToSection(tab)} 
                className={`transition-all hover:text-amber-700 ${activeTab === tab ? 'text-amber-700 font-black' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button onClick={onLogin} className="px-7 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl text-sm">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#FDF8F2] to-amber-50/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="animate-slide-up text-5xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-md">
            Dhandha Studio
          </h1>
          <h2 className="animate-slide-up delay-100 text-xl lg:text-2xl font-bold text-gray-500 mb-12 tracking-wide italic">
            Enabling Bharat's Fashion Industry
          </h2>
          <p className="animate-slide-up delay-200 text-xl lg:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto font-medium">
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
                /* NEW CHANGE: This triggers as soon as mouse leaves this specific photo */
                onMouseLeave={() => {
                  if (flippedIndexes.has(i)) {
                    toggleFlip(i);
                  }
                }}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${flippedIndexes.has(i) ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front side */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl shadow-2xl overflow-hidden border border-amber-100/50">
                    <img src={item.src} className="w-full h-full object-cover" alt="" />
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                      <span className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider text-amber-800 shadow-md border border-amber-200">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {/* Back side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden border border-orange-200 shadow-2xl">
                    <img src={item.backSrc || item.src} className="w-full h-full object-cover" alt="AI Generated Version" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-orange-600/90 text-white px-5 py-2 rounded-xl font-black text-sm uppercase tracking-tighter shadow-lg">
                        AI Result
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          <div id="features" className="animate-slide-up delay-400 mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">Examples of Reels</h2>
            <p className="text-gray-600 text-lg font-medium">See what our AI creates for leading brands</p>
          </div>

          <div className="animate-fade-in delay-500 mb-8">
            <div 
              className="flex gap-6 overflow-hidden pb-6 -mb-6 group"
              onMouseEnter={(e) => e.currentTarget.querySelectorAll('.animate-scroll-reverse').forEach(el => el.style.animationPlayState = 'paused')}
              onMouseLeave={(e) => e.currentTarget.querySelectorAll('.animate-scroll-reverse').forEach(el => el.style.animationPlayState = 'running')}
            >
              {[...scrollReels, ...scrollReels].map((src, i) => (
                <div key={i} className="flex-none w-52 h-80 rounded-[3rem] shadow-2xl animate-scroll-reverse overflow-hidden border-8 border-white min-w-[208px] relative group">
                  <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30"><div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl"><div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-amber-600 border-b-[6px] border-b-transparent ml-1"></div></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 px-6 bg-amber-50/60 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black text-center text-gray-900 mb-20 tracking-tight">Simple & Transparent Pricing</h2>
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto backdrop-blur-sm">
            <div className="bg-white/90 rounded-3xl p-12 shadow-2xl border border-amber-200/50 hover:shadow-3xl transition-shadow">
              <h3 className="text-3xl font-black text-gray-900 mb-6">Small Traders</h3>
              <div className="text-6xl font-black text-amber-700 mb-2">₹15</div>
              <p className="text-gray-600 mb-10">per month</p>
              <button className="w-full py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all">Get Started</button>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-12 shadow-2xl text-white relative">
              <div className="absolute top-0 right-0 bg-white/10 rounded-bl-3xl px-6 py-3 text-sm font-bold">POPULAR</div>
              <h3 className="text-3xl font-black mb-6">Manufacturers</h3>
              <div className="text-6xl font-black mb-2">₹30</div>
              <p className="text-amber-100 mb-10">Save 20% • Billed Annually</p>
              <button className="w-full py-5 bg-white text-amber-700 font-black rounded-2xl shadow-xl hover:scale-105 transition-all">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-28 px-6 bg-[#FDF8F2]/40 scroll-mt-24 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-xl font-medium">Everything you need to know</p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                /* Base color matches background but more opaque (85%) to define the bar */
                className="bg-[#FDF8F2]/85 backdrop-blur-md rounded-3xl border border-gray-200/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  /* Hover changed to a very light black/grey tint (5% opacity) to stay neutral */
                  className="w-full px-10 py-7 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                  <span className="text-xl font-black text-gray-900 pr-8">{faq.q}</span>
                  <svg 
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-none ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-10 pb-8 text-gray-700 leading-relaxed text-lg">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 bg-amber-50/40 scroll-mt-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-xl">
              Have questions? We'd love to hear from you. Send us a message and we'll respond quickly.
            </p>
          </div>

           <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
             <div className="space-y-12">
               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-inner">
                   <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                 </div>
                <div>
                   <p className="text-sm font-bold text-amber-700 uppercase tracking-wider">Email</p>
                   <p className="text-2xl font-black text-gray-900">dhandhastudio@gmail.com</p>
                 </div>
               </div>

               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-inner">
                   <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                 <div>
                   <p className="text-sm font-bold text-amber-700 uppercase tracking-wider">Phone</p>
                   <p className="text-2xl font-black text-gray-900">+91 9106871523</p>
                 </div>
               </div>

               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-inner">
                   <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-amber-700 uppercase tracking-wider">Location</p>
                   <p className="text-2xl font-black text-gray-900">Ahmedabad, Gujarat</p>
                 </div>
               </div>
             </div>

             <div className="bg-white/90 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-amber-100">
               <form className="space-y-8">
                 <div className="grid grid-cols-2 gap-6">
                   <input type="text" placeholder="First Name" className="px-6 py-4 bg-amber-50/50 border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 outline-none text-gray-800 font-medium" />
                   <input type="text" placeholder="Last Name" className="px-6 py-4 bg-amber-50/50 border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 outline-none text-gray-800 font-medium" />
                 </div>
                 <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-amber-50/50 border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 outline-none text-gray-800 font-medium" />
                 <textarea rows="5" placeholder="Your Message..." className="w-full px-6 py-4 bg-amber-50/50 border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 outline-none text-gray-800 font-medium resize-none"></textarea>
                 <button className="w-full py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg">
                   Send Message
                 </button>
               </form>
             </div>
           </div>
         </div>
       </section>

       {/* Footer */}
       <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-12 px-6">
         <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
             <div className="col-span-2">
               <h3 className="text-3xl font-black mb-2">Dhandha Studio<span className="text-amber-500">.</span></h3>
               <p className="text-amber-400 italic text-lg mb-6 font-semibold">"Enabling Bharat's Fashion Industry"</p>
               <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                 Create winning ads in seconds with AI-powered content generation.
               </p>
             </div>
             <div>
               <h4 className="font-black text-xl mb-8 text-amber-400">Product</h4>
               <ul className="text-gray-300 text-base space-y-5">
                 <li><button onClick={() => scrollToSection('Features')} className="hover:text-white transition">Features</button></li>
                 <li><button onClick={() => scrollToSection('Pricing')} className="hover:text-white transition">Pricing</button></li>
                 <li><a href="#" className="hover:text-white transition">API</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-black text-xl mb-8 text-amber-400">Legal</h4>
               <ul className="text-gray-300 text-base space-y-5">
                 <li><button onClick={() => setModalContent('privacy-policy')} className="hover:text-white transition">Privacy Policy</button></li>
                 <li><button onClick={() => setModalContent('terms-of-service')} className="hover:text-white transition">Terms Of Service</button></li>
                 <li><button onClick={() => setModalContent('refund-policy')} className="hover:text-white transition">Refund Policy</button></li>
               </ul>
             </div>
           </div>

           <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
             <p>© 2026 Dhandha Studio. All rights reserved.</p>
             <div className="flex gap-10 font-medium">
                <button onClick={() => setModalContent('privacy-policy')} className="hover:text-white transition">Privacy Policy</button>
                <button onClick={() => setModalContent('terms-of-service')} className="hover:text-white transition">Terms of Service</button>
             </div>
           </div>
         </div>
       </footer>

        {/* Fixed CTA Button */}
        <a  
          href="https://wa.me/919106871523?text=Hello!%20I'm%20interested%20in%20Dhandha%20Studio%20and%20would%20like%20to%20learn%20more." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-17 right-8 z-[100] bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all font-black text-base border-2 border-white/20"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.632 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Try Now
        </a>

      {/* Legal Modal Rendering */}
      {modalContent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer" onClick={() => setModalContent(null)}></div>
          <div className="relative bg-[#FDF8F2] w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-[2.5rem] shadow-2xl border border-amber-200 flex flex-col animate-slide-up">
            <div className="p-8 border-b border-amber-100 flex justify-between items-center bg-white/50">
              <div>
                <h2 className="text-3xl font-black text-gray-900 capitalize">{modalContent.replace(/-/g, ' ')}</h2>
                <p className="text-amber-700 font-bold text-[10px] uppercase tracking-widest mt-1">Dhandha Studio Official</p>
              </div>
              <button onClick={() => setModalContent(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 transition-all hover:rotate-90">✕</button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto text-gray-700 leading-relaxed space-y-6 custom-scrollbar text-base">
              {modalContent === 'privacy-policy' && (
                <div className="space-y-6">
                  <p className="text-xs text-amber-800 font-bold italic">Last Updated: 07 January, 2026 | In accordance with DPDPA 2023</p>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">1. Data Collection</h3>
                    <p>We collect your WhatsApp number, name, business details (for Enterprise Dashboard users), and all media (photos/logos) uploaded for processing.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">2. Data Usage & Trade Secrets</h3>
                    <p>To protect our proprietary processes, we do not disclose specific third-party API providers or internal model architectures. Data is processed through secure "Sub-Processors" under strict confidentiality.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">3. Retention & Deletion</h3>
                    <p>We store your generated images to allow you to download them later. You may request data deletion by emailing dhandhastudio@gmail.com. We will process such requests within 30 days.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">4. Security</h3>
                    <p>While we use industry-standard encryption, users acknowledge that communication via WhatsApp is also subject to Meta’s privacy terms.</p>
                  </section>
                </div>
              )}
              {modalContent === 'terms-of-service' && (
                <div className="space-y-6">
                  <p className="text-xs text-amber-800 font-bold italic">Last Updated: 07 January, 2026</p>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">1. Acceptance of Terms</h3>
                    <p>By accessing the Dhandha Studio WhatsApp Bot or Enterprise Dashboard, you agree to be bound by these terms.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">2. Description of Service</h3>
                    <p>Dhandha Studio provides an AI-driven "Parallel Photography" engine that transforms product images (e.g., tabletop clothing) into model-based lifestyle imagery.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">3. User Content & Logo Indemnification</h3>
                    <p><strong>Ownership:</strong> You retain rights to any original product photos uploaded.</p>
                    <p><strong>Indemnity:</strong> You represent that you own or have the legal right to use any logos provided. Dhandha Studio is a technical intermediary and shall not be held responsible for trademark infringement or unauthorized use of logos by the trader.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">4. AI-Generated Output & Ethics</h3>
                    <p>While highly realistic, these are synthetic images. AI may generate faces that inadvertently resemble real individuals; Dhandha Studio is not liable for such coincidences. You are granted a commercial license but are advised to follow ASCI guidelines by disclosing AI usage in public hoardings.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-xl text-gray-900 mb-2">5. Dispute Resolution</h3>
                    <p>All disputes are subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat only.</p>
                  </section>
                </div>
              )}
              {modalContent === 'refund-policy' && (
                <div className="space-y-6">
                  <p className="text-xs text-amber-800 font-bold italic text-center">Last Updated: 07 January, 2026</p>
                  <div className="text-center py-4">
                    <div className="inline-block p-5 bg-amber-100 rounded-3xl mb-4 text-4xl">🛡️</div>
                    <h3 className="font-black text-xl text-gray-900 mb-2">Strict No-Refund Policy</h3>
                  </div>
                  <section>
                    <h3 className="font-black text-lg text-gray-900 mb-2">1. Subscription & Credits</h3>
                    <p>Once credits are used to generate an image, the service is considered fully rendered.</p>
                  </section>
                  <section>
                    <h3 className="font-black text-lg text-gray-900 mb-2">2. Policy Details</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>No refunds for "subjective dissatisfaction" with the AI's creative output.</li>
                      <li>No refunds for user errors (e.g., uploading the wrong photo or a low-resolution logo).</li>
                      <li>In case of a verified technical failure (credits deducted but no image delivered), we will provide <strong>service credits</strong> as compensation.</li>
                      <li>Cash refunds are only processed at the sole discretion of management.</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="font-black text-lg text-gray-900 mb-2">3. Cancellation</h3>
                    <p>Enterprise customers may cancel their subscription at any time via the Dashboard. Access will remain active until the end of the current billing cycle.</p>
                  </section>
                </div>
              )}
            </div>
            <div className="p-6 bg-amber-50/50 text-center border-t border-amber-100">
              <button onClick={() => setModalContent(null)} className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black rounded-xl shadow-lg hover:scale-105 transition-all text-sm">Accept & Close</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 5rem;
        }
        @keyframes slideDown { from { transform: translateY(-100%); } to { transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-150%); } }
        @keyframes scroll-reverse { 0% { transform: translateX(-150%); } 100% { transform: translateX(0); } }

        .animate-slide-down { animation: slideDown 0.6s ease-out forwards; }
        .animate-slide-up { 
           opacity: 0; 
           animation: slideUp 0.8s ease-out forwards; 
           will-change: transform, opacity;
        }
        .animate-fade-in { opacity: 0; animation: fadeIn 1.2s ease-out forwards; }
        .animate-scroll { animation: scroll 20s linear infinite; will-change: transform; }
        .animate-scroll-reverse { animation: scroll-reverse 20s linear infinite; will-change: transform; }
        
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
