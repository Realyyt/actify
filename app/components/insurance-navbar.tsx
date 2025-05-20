"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function InsuranceNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="flex flex-col px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl font-bold text-white hover:text-teal-400 transition-colors">LLC, dba Insurance Agency</h1>
          </div>
          
          <button 
            onClick={toggleMenu} 
            className="text-white hover:text-teal-400 transition-colors z-50"
          >
            <div className="relative w-8 h-8">
              <Menu className={`absolute w-8 h-8 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className={`fixed inset-y-0 right-0 w-80 bg-blue-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-40
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-8 space-y-6">
            <div className="flex justify-end">
              <button 
                onClick={toggleMenu} 
                className="text-white hover:text-teal-400 transition-colors mb-8"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <Link href="/who-we-are" className="text-white text-lg hover:text-teal-400 transition-colors py-2 border-b border-blue-800" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/what-we-do" className="text-white text-lg hover:text-teal-400 transition-colors py-2 border-b border-blue-800" onClick={toggleMenu}>
             What We Do, Our Approach, Why It Matters
            </Link>
            <Link href="/products" className="text-white text-lg hover:text-teal-400 transition-colors py-2 border-b border-blue-800" onClick={toggleMenu}>
              Our Insurance Products
            </Link>
            <Link href="/our-program-products" className="text-white text-lg hover:text-teal-400 transition-colors py-2 border-b border-blue-800" onClick={toggleMenu}>
              Our Program Products
            </Link>
            <Link href="/resources" className="text-white text-lg hover:text-teal-400 transition-colors py-2 border-b border-blue-800" onClick={toggleMenu}>
              Resources
            </Link>
            <Link href="/careers" className="text-white text-lg hover:text-teal-400 transition-colors py-2 border-b border-blue-800" onClick={toggleMenu}>
              Careers
            </Link>
            <Link href="/contact" className="text-white text-lg hover:text-teal-400 transition-colors py-2" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30" 
            onClick={toggleMenu}
          />
        )}
      </div>
    </nav>
  );
}
