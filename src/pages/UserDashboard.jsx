import React from "react";

export default function UserDashboard({ onLogout }) {
  const history = [
    { id: 1, product: "Men Shirt", date: "2026-01-02" },
    { id: 2, product: "Women Pant", date: "2026-01-05" },
    // Add more entries as needed
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white overflow-hidden relative"
      role="main"
      aria-label="User Dashboard - Virtual Mannequin Studio"
    >
      {/* Animated Background Blobs (same as HomePage) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col px-6 py-16 max-w-7xl mx-auto">
        {/* Header */}
        <header
          className="flex flex-wrap justify-between items-center gap-6 mb-16 animate-fade-in-down"
          aria-label="Dashboard header"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-xl font-bold select-none">VM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
              User Dashboard
            </h1>
          </div>
          <button
            onClick={onLogout}
            className="group relative px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 font-semibold shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-1 active:scale-95"
            aria-label="Logout"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></span>
            <span className="relative">Logout</span>
          </button>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up">
          {/* Generate Mannequin Section */}
          <section
            className="relative animate-slide-in-left"
            aria-labelledby="generate-heading"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-rose-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl p-10 border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-pink-500/30 transition-all duration-500">
              <h3
                id="generate-heading"
                className="text-2xl font-black mb-8 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"
              >
                Generate Mannequin Image
              </h3>
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm file:mr-4 file:py-4 file:px-8 file:rounded-2xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-pink-500 file:to-rose-500 file:text-white hover:file:brightness-110 cursor-pointer bg-white/10 backdrop-blur border border-white/20 rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-500/50"
                  aria-label="Upload apparel photo"
                />
                <button
                  className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-lg font-bold rounded-3xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2 active:scale-95 overflow-hidden"
                  type="button"
                  aria-label="Generate static mannequin"
                >
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-3xl"></span>
                  <span className="relative">Generate (Static)</span>
                </button>
              </div>
              <p className="mt-6 text-indigo-200 opacity-80 text-sm">
                Upload an apparel photo to instantly generate a professional mannequin visual.
              </p>
            </div>
          </section>

          {/* History Section */}
          <section
            className="relative animate-slide-in-right"
            aria-labelledby="history-heading"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl p-10 border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden">
              <h3
                id="history-heading"
                className="text-2xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Generation History
              </h3>
              {history.length === 0 ? (
                <p className="text-indigo-200 opacity-70 text-center py-8">
                  No generations yet. Start by uploading an image!
                </p>
              ) : (
                <div className="space-y-4">
                  {history.map((item, index) => (
                    <div
                      key={item.id}
                      className="group flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 animate-feature-pop"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div>
                        <p className="font-semibold text-lg">{item.product}</p>
                        <p className="text-sm text-indigo-300 opacity-80">{item.date}</p>
                      </div>
                      <button
                        className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl font-medium hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/20"
                        aria-label={`View or download ${item.product}`}
                      >
                        View / Download
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Reusable Animations (same as HomePage) */}
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
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 0.3s both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.4s both; }
        .animate-feature-pop { animation: feature-pop 0.6s ease-out both; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}