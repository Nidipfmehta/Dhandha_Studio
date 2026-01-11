// UserDashboard.jsx
import React from "react";

export default function UserDashboard({ onLogout }) {
  const history = [
    { id: 1, product: "Men Shirt", date: "2026-01-02" },
    { id: 2, product: "Women Pant", date: "2026-01-05" },
    { id: 3, product: "Kids Kurta", date: "2026-01-07" },
    // Add more as needed
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-hidden">
      {/* Subtle logo background overlay – same as homepage */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.07]">
        <img
          src="/Dhandha_Studio_Logo.png"
          alt=""
          className="w-[60%] md:w-[65%] lg:w-[50%] scale-145 rotate-0 filter grayscale"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col px-6 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 animate-slide-up">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <img 
                src="/Dhandha_Studio_Logo.png" 
                alt="Dhandha Studio Logo" 
                className="h-13 w-auto object-contain" 
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-extrabold text-[#4A3728] tracking-tight uppercase drop-shadow-sm">
                Welcome, Company
              </h1>
              <p className="text-[#6B4F35] text-base lg:text-lg italic font-medium">
                Manage your AI-generated fashion visuals
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="px-8 py-4 bg-gradient-to-r from-[#4A3728] to-[#6B4F35] text-[#F4EDE4] font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-[#A67C52] hover:to-[#D4A373] transition-all duration-500 transform hover:scale-[1.02] uppercase tracking-widest text-sm lg:text-base"
          >
            Logout
          </button>
        </header>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 animate-fade-in-up">
          {/* Generate New Section */}
          <section className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#A67C52]/5 via-[#4A3728]/5 to-[#A67C52]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-[#A67C52]/20 shadow-xl hover:shadow-2xl hover:shadow-[#A67C52]/20 transition-all duration-500">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#4A3728] mb-6 uppercase tracking-wide">
                Generate New Visual
              </h3>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm file:mr-4 file:py-4 file:px-8 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-[#4A3728] file:text-[#F4EDE4] hover:file:bg-[#6B4F35] cursor-pointer bg-[#F4EDE4]/60 border border-[#A67C52]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A67C52]/30 transition-all duration-300 py-4 px-6"
                  aria-label="Upload apparel photo"
                />
                <button
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#4A3728] to-[#6B4F35] text-[#F4EDE4] font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-[#A67C52] hover:to-[#D4A373] transition-all duration-500 transform hover:scale-[1.02] uppercase tracking-widest text-sm"
                  type="button"
                  aria-label="Generate static mannequin"
                >
                  Generate Now
                </button>
              </div>
              <p className="mt-6 text-[#6B4F35] text-sm lg:text-base italic font-medium">
                Upload your apparel photo to create professional AI visuals instantly.
              </p>
            </div>
          </section>

          {/* Generation History */}
          <section className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#A67C52]/5 via-[#4A3728]/5 to-[#A67C52]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-[#A67C52]/20 shadow-xl hover:shadow-2xl hover:shadow-[#A67C52]/20 transition-all duration-500">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#4A3728] mb-6 uppercase tracking-wide">
                Your Visual History
              </h3>

              {history.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-[#6B4F35] text-lg italic font-medium">
                    No generations yet.
                  </p>
                  <p className="mt-2 text-[#6B4F35]/80 text-sm">
                    Start creating your first AI fashion visual above!
                  </p>
                </div>
              ) : (
                <div className="space-y-5 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
                  {history.map((item, index) => (
                    <div
                      key={item.id}
                      className="group flex items-center justify-between p-6 bg-[#F4EDE4]/40 backdrop-blur-sm rounded-2xl border border-[#A67C52]/20 hover:border-[#A67C52]/40 hover:bg-[#F4EDE4]/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div>
                        <p className="font-bold text-lg text-[#4A3728]">{item.product}</p>
                        <p className="text-[#6B4F35]/80 text-sm mt-1">{item.date}</p>
                      </div>
                      <button
                        className="px-6 py-3 bg-[#4A3728] text-[#F4EDE4] font-medium rounded-xl hover:bg-[#6B4F35] transition-all duration-300 transform hover:scale-105 shadow-md"
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

      {/* Reusable Animations */}
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #A67C52;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F4EDE4;
        }
      `}</style>
    </div>
  );
}