import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // 'user' or 'admin'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Replace with your real auth logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
      onLogin?.({ email, role });
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans relative overflow-hidden flex items-center justify-center px-4"
      role="main"
      aria-label="Login - Dhandha Studio"
    >
      {/* Subtle logo background overlay – same as homepage */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.07]" aria-hidden="true">
        <img
          src="/Dhandha_Studio_Logo.png"
          alt=""
          className="w-[60%] md:w-[55%] lg:w-[50%] scale-125 rotate-3 filter grayscale"
        />
      </div>

      {/* Login Card */}
      <div
        className="relative z-10 w-full max-w-md animate-fade-in-up"
        role="region"
        aria-labelledby="login-heading"
      >
        {/* Soft glow backdrop */}
        <div className="absolute -inset-6 bg-gradient-to-r from-[#A67C52]/10 via-[#4A3728]/10 to-[#A67C52]/10 rounded-3xl blur-2xl opacity-40"></div>

        <div className="relative bg-white/92 backdrop-blur-xl rounded-3xl p-10 border border-[#A67C52]/20 shadow-2xl hover:shadow-3xl hover:shadow-[#A67C52]/30 transition-all duration-700">
          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A67C52] to-[#4A3728] rounded-2xl shadow-lg flex items-center justify-center mb-6">
              <span className="text-3xl font-black text-white">ध</span>
            </div>
            <h2
              id="login-heading"
              className="text-4xl font-serif font-extrabold text-[#4A3728] tracking-tight drop-shadow-sm"
            >
              Welcome Back
            </h2>
            <p className="mt-3 text-[#6B4F35] opacity-90 text-center font-medium">
              Choose your role to continue
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex justify-center mb-10 bg-[#F4EDE4]/60 backdrop-blur-sm rounded-full p-1.5 border border-[#A67C52]/20 shadow-inner">
            <button
              type="button"
              onClick={() => setRole("user")}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                role === "user" ? "bg-[#4A3728] text-white shadow-md" : "text-[#6B4F35] hover:bg-[#A67C52]/10"
              }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                role === "admin" ? "bg-[#4A3728] text-white shadow-md" : "text-[#6B4F35] hover:bg-[#A67C52]/10"
              }`}
            >
              Admin
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-6 mb-8">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-[#F4EDE4]/60 border border-[#A67C52]/30 rounded-xl focus:outline-none focus:border-[#A67C52] focus:bg-[#F4EDE4]/70 focus:ring-2 focus:ring-[#A67C52]/30 transition-all duration-300 placeholder-[#6B4F35]/70 text-[#4A3728]"
                aria-label="Email address"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-[#F4EDE4]/60 border border-[#A67C52]/30 rounded-xl focus:outline-none focus:border-[#A67C52] focus:bg-[#F4EDE4]/70 focus:ring-2 focus:ring-[#A67C52]/30 transition-all duration-300 placeholder-[#6B4F35]/70 text-[#4A3728]"
                aria-label="Password"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-center text-red-600 text-sm font-medium bg-red-50/80 py-3 rounded-xl">
              {error}
            </p>
          )}

          {/* Login Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="group relative w-full py-5 bg-gradient-to-r from-[#4A3728] to-[#6B4F35] text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-[#A67C52] hover:to-[#D4A373] transition-all duration-500 hover:-translate-y-1 active:scale-95 overflow-hidden flex items-center justify-center gap-3"
              type="button"
              aria-label="Login as selected role"
            >
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></span>
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Authenticating...
                </>
              ) : (
                `Login as ${role === "user" ? "User" : "Admin"}`
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <p className="mt-8 text-center text-[#6B4F35] opacity-80 text-sm">
            Forgot your password?{" "}
            <span className="underline hover:text-[#A67C52] cursor-pointer transition">
              Reset it here
            </span>
          </p>
        </div>
      </div>

      {/* Shared Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s both; }
      `}</style>
    </div>
  );
}