'use client'

import { useState } from 'react'
import Link from 'next/link'
import DemoForm from './DemoForm'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-5 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl sm:text-3xl font-bold text-purple-600 cursor-pointer hover:text-purple-800 transition-colors"
            onClick={() => window.location.reload()}
          >
            Lumen
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex list-none gap-6 xl:gap-8">
            <li><Link href="#features" className="text-gray-800 font-medium hover:text-purple-600 transition-colors text-sm xl:text-base">Features</Link></li>
            <li><Link href="#impact" className="text-gray-800 font-medium hover:text-purple-600 transition-colors text-sm xl:text-base">Impact</Link></li>
            <li><Link href="#about" className="text-gray-800 font-medium hover:text-purple-600 transition-colors text-sm xl:text-base">About</Link></li>
            <li><Link href="#contact" className="text-gray-800 font-medium hover:text-purple-600 transition-colors text-sm xl:text-base">Contact</Link></li>
          </ul>

          <div className="flex items-center gap-3">
            {/* Desktop Demo Button */}
            <div className="hidden sm:block">
              <DemoForm 
                triggerText="Request Demo"
                className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold hover:bg-purple-800 transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-3 mt-4">
              <li>
                <Link 
                  href="#features" 
                  className="block text-gray-800 font-medium hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="#impact" 
                  className="block text-gray-800 font-medium hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="block text-gray-800 font-medium hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="block text-gray-800 font-medium hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-3 sm:hidden">
                <DemoForm 
                  triggerText="Request Demo"
                  className="w-full bg-purple-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-purple-800 transition-colors text-center"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

