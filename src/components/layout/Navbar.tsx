"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-gray-900">Mobilya Tasarım</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Ana Sayfa
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
              Portfolyo
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">
              Hizmetler
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              Hakkında
            </Link>
            <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium">
              İletişim
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Ana Sayfa
            </Link>
            <Link href="/portfolio" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Portfolyo
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Hizmetler
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Hakkında
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium">
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 