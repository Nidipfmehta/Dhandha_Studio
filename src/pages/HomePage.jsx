export default function HomePage({ onLogin }) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-900 to-brown-900 text-white overflow-hidden relative"
      role="main"
      aria-label="धड़ा Studio Home"
    >
      {/* Leather-texture Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-gradient-to-r from-brown-600 to-orange-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center px-6 py-20 max-w-7xl mx-auto sm:py-24">
        
        {/* Luxury Leather Header */}
        <header
          className="flex flex-wrap justify-between items-center gap-4 mb-20 animate-fade-in-down"
          aria-label="Main site header"
        >
          <div className="flex items-center gap-4">
            {/* Logo placeholder - replace with actual SVG/image */}
            <div 
              className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center animate-pulse bg-[url('/logo.png')] bg-cover bg-center border-4 border-amber-800/50" 
              style={{ 
                backgroundImage: "url('data:image/svg+xml;base64,...')", // Add your logo base64 here
                minHeight: '64px'
              }}
              aria-label="धड़ा Studio Logo"
              role="img"
            />
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-orange-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl select-none">
              धड़ा Studio
            </h1>
          </div>
          <button
            onClick={onLogin}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-800/30 to-orange-700/30 backdrop-blur-xl border-2 border-amber-600/40 hover:border-amber-400/60 hover:from-amber-700/50 hover:to-orange-600/50 transition-all duration-500 font-semibold shadow-2xl hover:shadow-amber-500/40 hover:shadow-xl hover:-translate-y-2 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500 focus-visible:ring-opacity-60"
            aria-label="Login to your account"
            type="button"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl blur"></span>
            <span className="relative">Login</span>
          </button>
        </header>

        {/* Elegant Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32 animate-fade-in-up">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-6 py-3 bg-gradient-to-r from-amber-600/30 to-orange-600/30 backdrop-blur-sm rounded-2xl text-amber-300 border border-amber-500/40 font-bold text-lg mb-6 inline-block animate-pulse shadow-lg">
                ✨ AI Fashion Studio
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-amber-200 via-orange-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
              Transform Apparel into{' '}
              <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text drop-shadow-2xl">
                Luxury Mannequin Visuals
              </span>
            </h2>
            <p className="text-xl text-orange-200 max-w-lg leading-relaxed opacity-90 font-medium">
              Generate premium mannequin presentations and PDF catalogs instantly. Crafted for fashion professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                className="group relative px-12 py-6 bg-gradient-to-r from-amber-600 to-orange-600 text-xl font-black rounded-3xl shadow-2xl hover:shadow-amber-500/60 hover:-translate-y-3 active:scale-95 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-opacity-70 text-white shadow-amber-900/25"
                type="button"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400/40 to-orange-400/40 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl backdrop-blur-sm"></span>
                <span className="relative">✨ Start Free Trial</span>
              </button>
              <button
                className="px-12 py-6 border-2 border-amber-500/40 backdrop-blur-sm rounded-3xl font-bold hover:bg-amber-800/30 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-opacity-50 shadow-xl"
                type="button"
              >
                ▶️ Watch Demo
              </button>
            </div>
          </div>

          {/* Premium Features Card */}
          <aside
            className="relative animate-slide-in-right"
            aria-label="Key features of धड़ा Studio"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-brown-600/10 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-amber-900/40 to-orange-900/20 backdrop-blur-3xl rounded-3xl p-12 border border-amber-600/30 shadow-2xl hover:shadow-3xl hover:shadow-amber-500/30 transition-all duration-700">
              <h3 className="text-3xl font-black mb-10 text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-xl select-none">
                Premium Features
              </h3>
              <div className="space-y-8">
                {[
                  { icon: '⚡', text: 'Instant AI mannequin generation', color: 'from-amber-500 to-orange-500' },
                  { icon: '📄', text: 'Professional PDF catalog creator', color: 'from-orange-500 to-yellow-500' },
                  { icon: '👗', text: 'Tailored for fashion retailers', color: 'from-yellow-500 to-amber-600' },
                  { icon: '✨', text: 'Luxury presentation quality', color: 'from-amber-600 to-orange-600' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-6 p-6 bg-amber-900/20 hover:bg-gradient-to-r hover:from-amber-700/40 rounded-3xl transition-all duration-400 cursor-pointer hover:scale-105 border border-amber-600/20 animate-feature-pop"
                    style={{ animationDelay: `${index * 150}ms` }}
                    tabIndex={0}
                    role="listitem"
                    aria-label={feature.text}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all flex-shrink-0">
                      <span className="text-2xl font-bold">{feature.icon}</span>
                    </div>
                    <span className="text-xl leading-tight group-hover:text-amber-100 font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Luxury Policy Cards */}
        <section
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto animate-fade-in-up"
          aria-label="धड़ा Studio policies"
        >
          {[
            {
              title: '🔒 Privacy First',
              desc: 'Your designs remain yours. Complete data ownership guaranteed.',
              color: 'from-amber-600 to-orange-600',
              icon: '🔒',
            },
            {
              title: '💎 30-Day Premium',
              desc: 'Unmatched results or full refund. Luxury service promise.',
              color: 'from-orange-600 to-yellow-500',
              icon: '💎',
            },
            {
              title: '📜 Transparent',
              desc: 'Clear, honest terms for professional partnerships.',
              color: 'from-yellow-500 to-amber-600',
              icon: '📜',
            }
          ].map((policy, index) => (
            <article
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-2xl rounded-3xl p-10 border border-amber-600/30 hover:from-amber-800/50 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-4 transition-all duration-700 cursor-pointer h-full animate-policy-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500 focus-visible:ring-opacity-50"
              style={{ animationDelay: `${index * 200}ms` }}
              tabIndex={0}
              aria-labelledby={`policy-title-${index}`}
              role="region"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 group-hover:opacity-100 transition-all rounded-3xl blur-sm"></div>
              <div className="relative">
                <h3
                  id={`policy-title-${index}`}
                  className="font-black text-2xl mb-6 bg-gradient-to-r from-amber-300 to-orange-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform flex items-center gap-3 select-none"
                >
                  <span className="text-3xl">{policy.icon}</span>
                  {policy.title}
                </h3>
                <p className="text-orange-200 leading-relaxed text-lg group-hover:text-amber-100 transition-all font-medium">
                  {policy.desc}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes feature-pop {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes policy-lift {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 0.3s both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.4s both; }
        .animate-feature-pop { animation: feature-pop 0.6s ease-out both; }
        .animate-policy-lift { animation: policy-lift 0.6s ease-out both; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .delay-100 { animation-delay: 0.1s; }
      `}</style>
    </div>
  );
}
