import React from "react";

export default function AdminDashboard({ onLogout }) {
  const stats = [
    { label: "Total Users", value: 124, icon: "👥" },
    { label: "Total Images Generated", value: 1982, icon: "🖼️" },
    { label: "Total PDFs Created", value: 1540, icon: "📄" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.07]">
        <img
          src="/Dhandha_Studio_Logo.png"
          alt=""
          className="w-[60%] md:w-[55%] lg:w-[50%] scale-125 filter grayscale"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col px-6 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 animate-slide-up">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#A67C52] to-[#4A3728] rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-3xl lg:text-4xl font-black text-white">ध</span>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-extrabold text-[#4A3728] tracking-tight uppercase drop-shadow-sm">
                Admin Control
              </h1>
              <p className="text-[#6B4F35] text-base lg:text-lg italic font-medium">
                Platform Oversight & Analytics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-5 py-2 bg-[#4A3728] text-[#F4EDE4] text-sm lg:text-base font-medium rounded-full shadow-md uppercase tracking-wider">
              🔐 Administrator
            </span>
            <button
              onClick={onLogout}
              className="px-8 py-4 bg-gradient-to-r from-[#4A3728] to-[#6B4F35] text-[#F4EDE4] font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-[#A67C52] hover:to-[#D4A373] transition-all duration-500 transform hover:scale-[1.02] uppercase tracking-widest text-sm lg:text-base"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-fade-in-up"
          aria-label="Platform statistics"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#A67C52]/20 shadow-xl hover:shadow-2xl hover:shadow-[#A67C52]/20 transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="text-5xl lg:text-6xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#4A3728] mb-3 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-4xl lg:text-5xl font-extrabold text-[#A67C52] drop-shadow-sm">
                {stat.value.toLocaleString()}
              </p>
              <div className="mt-6 h-1 w-20 mx-auto bg-gradient-to-r from-[#A67C52] to-[#4A3728] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </section>

        {/* Future Tools Placeholder */}
        <div className="mt-20 lg:mt-28 text-center animate-fade-in-up">
          <p className="text-[#6B4F35] text-lg lg:text-xl italic font-medium max-w-2xl mx-auto">
            Advanced analytics, user management, content moderation, and more coming soon...
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.2s both; }
      `}</style>
    </div>
  );
}