"use client"; // Required for client-side interactivity

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
             Triple E Organization Gilgit-Baltistan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-primary">
              Events
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link href="/member" className="text-gray-700 hover:text-primary">
              Member
            </Link>

            {/* Login Button */}
            <button className='bg-blue-600 ml-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors '>
            <Link 
              href="/login"
              className=""
            >
              Login
            </Link>
            </button>
          </div>

          {/* Mobile  Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            > Home</Link>

            <Link 
              href="/about" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/events" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
           <button className='bg-blue-600 inline-block mt-4  bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary  '>
           <Link
              href="/login"
              className=""
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
           </button>
          </div>
        )}
      </div>
    </nav>
  );
}