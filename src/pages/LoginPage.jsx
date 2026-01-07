import React from "react";

export default function LoginPage({ onLogin }) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white overflow-hidden relative flex items-center justify-center px-4"
      role="main"
      aria-label="Login - Virtual Mannequin Studio"
    >
      {/* Animated Background Blobs (same as HomePage & Dashboard) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Login Card */}
      <div
        className="relative z-10 w-full max-w-md animate-fade-in-up"
        role="region"
        aria-labelledby="login-heading"
      >
        {/* Glow backdrop */}
        <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-3xl blur-2xl opacity-70"></div>

        <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl p-10 border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-pink-500/30 transition-all duration-700">
          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center animate-pulse mb-6">
              <span className="text-2xl font-bold select-none">VM</span>
            </div>
            <h2
              id="login-heading"
              className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-100 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl"
            >
              Welcome Back
            </h2>
            <p className="mt-3 text-indigo-200 opacity-80 text-center">
              Choose your role to continue
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6 mb-8">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-pink-500/30 transition-all duration-300 placeholder-indigo-300/60 text-white"
                aria-label="Email address"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-pink-500/30 transition-all duration-300 placeholder-indigo-300/60 text-white"
                aria-label="Password"
              />
            </div>
          </div>

          {/* Login Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => onLogin("user")}
              className="group relative w-full py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-lg font-bold rounded-3xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2 active:scale-95 overflow-hidden"
              type="button"
              aria-label="Login as regular user"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-3xl"></span>
              <span className="relative">Login as User</span>
            </button>

            <button
              onClick={() => onLogin("admin")}
              className="group relative w-full py-5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl font-semibold hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              type="button"
              aria-label="Login as administrator"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></span>
              <span className="relative">Login as Admin</span>
            </button>
          </div>

          {/* Forgot Password */}
          <p className="mt-8 text-center text-indigo-200 opacity-70 text-sm">
            Forgot your password?{" "}
            <span className="underline hover:text-white cursor-pointer transition">
              Reset it here
            </span>
          </p>
        </div>
      </div>

      {/* Shared Animations (same across pages) */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s both; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}