import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-200 text-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-400 transition duration-300 text-black font-medium">
              Home
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header