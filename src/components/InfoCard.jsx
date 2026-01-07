import React from "react";

export default function InfoCard({ title }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-start hover:shadow-2xl transition transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">
        Static placeholder content for {title.toLowerCase()}.
      </p>
    </div>
  );
}
