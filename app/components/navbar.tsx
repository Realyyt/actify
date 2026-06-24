"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/idg.png" alt="Impact Delivery Group Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive('/') ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/who-we-are" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive('/who-we-are') ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Who We Are
            </Link>
            <Link 
              href="/what-we-do" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive('/what-we-do') ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              What We Do
            </Link>
            <Link 
              href="/capabilities" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive('/capabilities') ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Capabilities
            </Link>
            <Link 
              href="/careers" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive('/careers') ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-900 text-white text-sm font-medium uppercase tracking-wider px-6 py-2.5 hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className={`block text-base font-medium uppercase tracking-wider ${
                isActive('/') ? 'text-gray-900' : 'text-gray-600'
              }`} 
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/who-we-are" 
              className={`block text-base font-medium uppercase tracking-wider ${
                isActive('/who-we-are') ? 'text-gray-900' : 'text-gray-600'
              }`} 
              onClick={toggleMenu}
            >
              Who We Are
            </Link>
            <Link 
              href="/what-we-do" 
              className={`block text-base font-medium uppercase tracking-wider ${
                isActive('/what-we-do') ? 'text-gray-900' : 'text-gray-600'
              }`} 
              onClick={toggleMenu}
            >
              What We Do
            </Link>
            <Link 
              href="/capabilities" 
              className={`block text-base font-medium uppercase tracking-wider ${
                isActive('/capabilities') ? 'text-gray-900' : 'text-gray-600'
              }`} 
              onClick={toggleMenu}
            >
              Capabilities
            </Link>
            <Link 
              href="/careers" 
              className={`block text-base font-medium uppercase tracking-wider ${
                isActive('/careers') ? 'text-gray-900' : 'text-gray-600'
              }`} 
              onClick={toggleMenu}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-gray-900 text-white text-sm font-medium uppercase tracking-wider px-6 py-2.5 hover:bg-gray-800 transition-colors" 
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
