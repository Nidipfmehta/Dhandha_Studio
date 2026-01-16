import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // TEMPORARILY DISABLED REDIRECT
      // onLogin?.({ email, role }); 
      alert(`Success! Authenticated as ${role}. (Redirect is currently disabled)`);
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.07]">
        <img src="/Dhandha_Studio_Logo.png" alt="" className="w-[60%] scale-125 rotate-3 filter grayscale" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        <div className="absolute -inset-6 bg-gradient-to-r from-[#A67C52]/10 via-[#4A3728]/10 to-[#A67C52]/10 rounded-3xl blur-2xl opacity-40"></div>

        <div className="relative bg-white/92 backdrop-blur-xl rounded-3xl p-10 border border-[#A67C52]/20 shadow-2xl">
          
          {/* BACK BUTTON */}
          <button 
            onClick={() => window.location.href = '/'} 
            className="absolute top-6 left-6 flex items-center gap-2 text-[#6B4F35] hover:text-[#4A3728] transition-colors text-sm font-bold uppercase tracking-wider group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-10 mt-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A67C52] to-[#4A3728] rounded-2xl shadow-lg flex items-center justify-center mb-6">
              <span className="text-3xl font-black text-white">ध</span>
            </div>
            <h2 className="text-4xl font-serif font-extrabold text-[#4A3728] tracking-tight">Welcome Back</h2>
          </div>

          {/* Role Toggle */}
          <div className="flex justify-center mb-10 bg-[#F4EDE4]/60 rounded-full p-1.5 border border-[#A67C52]/20">
            <button
              type="button"
              onClick={() => setRole("user")}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${role === "user" ? "bg-[#4A3728] text-white" : "text-[#6B4F35]"}`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${role === "admin" ? "bg-[#4A3728] text-white" : "text-[#6B4F35]"}`}
            >
              Admin
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-8">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-[#F4EDE4]/60 border border-[#A67C52]/30 rounded-xl focus:ring-2 focus:ring-[#A67C52]/30 text-[#4A3728]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-[#F4EDE4]/60 border border-[#A67C52]/30 rounded-xl focus:ring-2 focus:ring-[#A67C52]/30 text-[#4A3728]"
            />
          </div>

          {error && <p className="text-center text-red-600 text-sm mb-4">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-5 bg-gradient-to-r from-[#4A3728] to-[#6B4F35] text-white text-lg font-bold rounded-2xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            {loading ? "Authenticating..." : `Login as ${role === "user" ? "User" : "Admin"}`}
          </button>
        </div>
      </div>
    </div>
  );
}