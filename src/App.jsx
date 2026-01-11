import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [page, setPage] = useState("home");

  // Receive full userData object { email, role }
  const handleLogin = (userData) => {
    const { role } = userData;
    // Redirect based on selected role
    setPage(role === "admin" ? "admin" : "user");
  };

  const handleLogout = () => {
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-900 font-sans">
      {page === "home" && <HomePage onLogin={() => setPage("login")} />}
      {page === "login" && <LoginPage onLogin={handleLogin} />}
      {page === "user" && <UserDashboard onLogout={handleLogout} />}
      {page === "admin" && <AdminDashboard onLogout={handleLogout} />}
    </div>
  );
}