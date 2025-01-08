import React, { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto md:h-16"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["gallery", "blog", "council", "about"].map((item) => (
              <a
                key={item}
                href={`/${item}`}
                className="text-gray-700 hover:text-pink-primary font-medium text-lg transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Join Button (Desktop) */}
          <div className="hidden md:flex">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPwZENdS5zO6lYrVN_sX5a_kZJEQTQvuyJcx5pk6yslo6OMA/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-pink-primary hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
                Join the Club
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-primary"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {["gallery", "blog", "council", "about"].map((item) => (
              <a
                key={item}
                href={`/${item}`}
                className="block text-gray-700 hover:text-pink-primary font-medium text-lg transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPwZENdS5zO6lYrVN_sX5a_kZJEQTQvuyJcx5pk6yslo6OMA/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-pink-primary hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105">
                Join the Club
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
