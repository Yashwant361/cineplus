import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]);

  return (

    <nav className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-red-500">
          CinePulse
        </Link>

        <div className="flex items-center gap-6">

          <Link 
            to="/" 
            className="text-gray-700 dark:text-gray-200 hover:text-white"
          >
            Home
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            {/* {darkMode ? "☀️ Light" : "🌙 Dark"} */}
          </button>

        </div>

      </div>

    </nav>

  );
}