import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [page, setPage] = useState("home");

  const handleLogin = (role) => {
    setPage(role === "admin" ? "admin" : "user");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {page === "home" && <HomePage onLogin={() => setPage("login")} />}
      {page === "login" && <LoginPage onLogin={handleLogin} />}
      {page === "user" && <UserDashboard onLogout={() => setPage("home")} />}
      {page === "admin" && <AdminDashboard onLogout={() => setPage("home")} />}
    </div>
  );
}
