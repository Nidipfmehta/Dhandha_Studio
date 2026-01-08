// Main shown version1

import { useState } from 'react';

export default function HomePage({ onLogin }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [openFaq, setOpenFaq] = useState(null);
  const [flippedIndexes, setFlippedIndexes] = useState(new Set());

  const tabs = ['Home', 'Features', 'Pricing', 'FAQs', 'Contact'];

  const scrollToSection = (tabName) => {
    setActiveTab(tabName);
    const id = tabName.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      // block: 'start' ensures it aligns to the top of the screen
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
    { q: "How does DHandha Studio create ads?", a: "DHandha Studio uses advanced AI models to analyze your product photos and generate high-conversion marketing visuals instantly." },
    { q: "What types of ads can I create?", a: "You can create social media reels, catalog photos, banner ads, and lifestyle imagery tailored for fashion brands." },
    { q: "How long does it take to generate an ad?", a: "Generating a high-quality visual typically takes between 30 to 60 seconds." },
    { q: "Can I edit the generated ads?", a: "Yes, our built-in editor allows you to adjust colors, lighting, and add custom text overlays." },
    { q: "What's included in the refund guarantee?", a: "We offer a 7-day 'no questions asked' refund if you haven't used more than 5 generation credits." },
    { q: "Do you offer custom enterprise solutions?", a: "Absolutely. We provide API access and custom model training for large manufacturers and retailers." }
  ];

  const scrollPhotos = [
    { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80", label: "Beauty" },
    { src: "https://images.unsplash.com/photo-1529139574466-a302d2052574?w=500&q=80", label: "Electronics" },
    { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80", label: "Lifestyle" },
    { src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80", label: "Food" },
    { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80", label: "Wellness" },
    { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80", label: "Tech" },
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
    <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img 
          src="/Dhandha_Studio_Logo_2.png" 
          alt="" 
          className="w-[60%] opacity-[0.08] rotate-0 scale-150 filter grayscale"
        />
      </div>

      {/* Fixed Top Nav - Animation: Slide Down */}
      <nav className="animate-slide-down fixed top-0 left-0 right-0 bg-[#FDF8F2]/95 backdrop-blur-lg border-b border-amber-100/30 z-50 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-xl">ध</div>
            <span className="font-black text-xl hidden sm:block tracking-tight">Dhandha Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            {tabs.map(tab => (
              <button key={tab} onClick={() => scrollToSection(tab)} className={`transition-all hover:text-amber-700 ${activeTab === tab ? 'text-amber-700 font-black' : ''}`}>{tab}</button>
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={onLogin} className="px-7 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl text-sm">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
          
          {/* Scrolling Photos - Animation: Fade In */}
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
                >
                   <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${flippedIndexes.has(i) ? 'rotate-y-180' : ''}`}>
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden rounded-3xl shadow-2xl overflow-hidden border border-amber-100/50">
                      <img src={item.src} className="w-full h-full object-cover" alt="" />
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                        <span className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider text-amber-800 shadow-md border border-amber-200">
                          {item.label}
                        </span>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-white px-8 text-center">
                      <div>
                        <p className="text-2xl font-black mb-2">AI Ready</p>
                        <p className="text-sm opacity-90">Instant high-conversion lifestyle visual generated for your brand.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reels Section */}
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

      {/* Pricing Section */}
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

      {/* FAQs Section - Clean white */}
      <section id="faqs" className="py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-xl font-medium">Everything you need to know</p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50/50 to-orange-50/30 backdrop-blur-sm rounded-3xl border border-amber-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-10 py-7 flex items-center justify-between text-left hover:bg-amber-50/50 transition-all"
                >
                  <span className="text-xl font-black text-gray-900 pr-8">{faq.q}</span>
                  <svg 
                    className={`w-6 h-6 text-amber-700 transition-transform duration-300 flex-none ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-10 pb-8 text-gray-700 leading-relaxed text-lg">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Warm light */}
       <section id="contact" className="py-28 px-6 bg-amber-50/40 scroll-mt-24">
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
                   <p className="text-2xl font-black text-gray-900">hello@Dhandha.studio</p>
                 </div>
               </div>

               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-inner">
                   <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                 <div>
                   <p className="text-sm font-bold text-amber-700 uppercase tracking-wider">Phone</p>
                   <p className="text-2xl font-black text-gray-900">+91 98765 43210</p>
                 </div>
               </div>

               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-inner">
                   <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-amber-700 uppercase tracking-wider">Location</p>
                   <p className="text-2xl font-black text-gray-900">Mumbai, Maharashtra</p>
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
             {/* Other columns remain similar */}
             <div>
               <h4 className="font-black text-xl mb-8 text-amber-400">Company</h4>
               <ul className="text-gray-300 text-base space-y-5">
                 <li><a href="#" className="hover:text-white transition">About Us</a></li>
                 <li><a href="#" className="hover:text-white transition">Careers</a></li>
                 <li><a href="#" className="hover:text-white transition">Blog</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-black text-xl mb-8 text-amber-400">Product</h4>
               <ul className="text-gray-300 text-base space-y-5">
                 <li><a href="#" className="hover:text-white transition">Features</a></li>
                 <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                 <li><a href="#" className="hover:text-white transition">API</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-black text-xl mb-8 text-amber-400">Legal</h4>
               <ul className="text-gray-300 text-base space-y-5">
                 <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                 <li><a href="#" className="hover:text-white transition">Terms</a></li>
                 <li><a href="#" className="hover:text-white transition">Refunds</a></li>
               </ul>
             </div>
           </div>

           <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
             <p>© 2026 Dhandha Studio. All rights reserved.</p>
             <div className="flex gap-10 font-medium">
               <a href="#" className="hover:text-white transition">Privacy Policy</a>
               <a href="#" className="hover:text-white transition">Terms of Service</a>
             </div>
           </div>
         </div>
       </footer>

       {/* Fixed CTA Button - Fixed position */}
       <button className="fixed bottom-17 right-8 z-[100] bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all font-black text-base border-2 border-white/20">
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
         Try Now
       </button>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 5rem; /* Adjust based on your header height */
        }
        /* --- Animations --- */
        @keyframes slideDown { from { transform: translateY(-100%); } to { transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-150%); } }
        @keyframes scroll-reverse { 0% { transform: translateX(-150%); } 100% { transform: translateX(0); } }

        .animate-slide-down { animation: slideDown 0.6s ease-out forwards; }
        .animate-slide-up { opacity: 0; animation: slideUp 0.8s ease-out forwards; }
        .animate-fade-in { opacity: 0; animation: fadeIn 1.2s ease-out forwards; }
        .animate-scroll { animation: scroll 20s linear infinite; }
        .animate-scroll-reverse { animation: scroll-reverse 20s linear infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.4s; }
        .delay-400 { animation-delay: 0.6s; }
        .delay-500 { animation-delay: 0.8s; }

        /* --- 3D Flip --- */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}