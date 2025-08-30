'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-5 py-4 flex justify-between items-center max-w-6xl">
        <div className="text-3xl font-bold text-purple-600">Lumen</div>
        <ul className="hidden md:flex list-none gap-8">
          <li><Link href="#features" className="text-gray-800 font-medium hover:text-purple-600 transition-colors">Features</Link></li>
          <li><Link href="#impact" className="text-gray-800 font-medium hover:text-purple-600 transition-colors">Impact</Link></li>
          <li><Link href="#about" className="text-gray-800 font-medium hover:text-purple-600 transition-colors">About</Link></li>
          <li><Link href="#contact" className="text-gray-800 font-medium hover:text-purple-600 transition-colors">Contact</Link></li>
        </ul>
        <Link 
          href="#demo" 
          className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-800 transition-colors"
        >
          Request Demo
        </Link>
      </nav>
    </header>
  )
}

export default Header
