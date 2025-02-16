"use client";

import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  let year = new Date().getFullYear();

  let navigate = useNavigate();
  let location = useLocation();

  return (
    <footer className="bg-black/90 font-sans flex items-center justify-center py-16">
      <div className="flex flex-col items-center gap-6">
        {location.pathname === "/" ? null : (
          <button
            className="text-white text-xl bg-gray-700 hover:bg-gray-600 transition-color duration-300 py-4 px-12 rounded-lg"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        )}
        <p className="text-gray-200 text-lg">
          Reach me at{" "}
          <span className="text-white font-bold">rscottdaly@gmail.com</span>
        </p>
        <p className="text-gray-200 mt-2 text-sm">©{year} Scott Daly</p>
      </div>
    </footer>
  );
}