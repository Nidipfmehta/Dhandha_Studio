import React from "react";

export default function AdminDashboard({ onLogout }) {
  const stats = [
    { label: "Total Users", value: 124, icon: "👥" },
    { label: "Total Images Generated", value: 1982, icon: "🖼️" },
    { label: "Total PDFs Created", value: 1540, icon: "📄" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white overflow-hidden relative"
      role="main"
      aria-label="Admin Dashboard - Virtual Mannequin Studio"
    >
      {/* Animated Background Blobs (consistent across all pages) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col px-6 py-16 max-w-7xl mx-auto">
        {/* Header */}
        <header
          className="flex flex-wrap justify-between items-center gap-6 mb-16 animate-fade-in-down"
          aria-label="Admin dashboard header"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-xl font-bold select-none">VM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
              Admin Dashboard
            </h1>
            <span className="px-4 py-2 bg-purple-500/30 backdrop-blur rounded-full text-sm font-medium animate-pulse">
              🔐 Administrator
            </span>
          </div>
          <button
            onClick={onLogout}
            className="group relative px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 font-semibold shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-1 active:scale-95"
            aria-label="Logout from admin panel"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></span>
            <span className="relative">Logout</span>
          </button>
        </header>

        {/* Stats Grid */}
        <section
          className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up"
          aria-label="Platform statistics"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative animate-feature-pop"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow backdrop */}
              <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-rose-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

              <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl p-10 border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-500 text-center hover:-translate-y-3">
                <div className="text-5xl mb-6">{stat.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-200 opacity-90">
                  {stat.label}
                </h3>
                <p className="text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent drop-shadow-lg">
                  {stat.value.toLocaleString()}
                </p>
                <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </section>

        {/* Optional Future Expansion Placeholder */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-600">
          <p className="text-indigo-200 opacity-70 text-lg">
            More admin tools and analytics coming soon...
          </p>
        </div>
      </div>

      {/* Shared Animations (identical across all pages) */}
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
        @keyframes feature-pop {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.3s both; }
        .animate-feature-pop { animation: feature-pop 0.7s ease-out both; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}