"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-black flex items-center justify-between px-4 md:px-6 h-16 fixed top-0 w-full z-50 bg-transparent bg-opacity-90 backdrop-blur-sm">
      <Link href="/">
        <span className="text-2xl font-bold">BIG DOG ENERGY</span>
      </Link>
      <div className="md:hidden mr-6" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>
      <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 mr-12 fixed md:static top-16 md:top-auto right-0 px-4 py-2 md:px-0 md:py-0 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-y-0" : "-translate-y-full"} bg-black bg-opacity-90 md:bg-transparent rounded-lg md:translate-y-0`}>
        <Link href="/"><span className="text-xl font-medium hover:ring-2  hover:ring-orange-500/50 rounded-md p-2 transition duration-300 ease-in-out">HOME</span></Link>
        <Link href="/about"><span className="text-xl font-medium  hover:ring-2 hover:ring-orange-500/50 rounded-md p-2 transition duration-300 ease-in-out">ABOUT ME</span></Link>
        <Link href="https://www.rover.com/members/william-e-big-dog-energy/?utm_source=sitter_profile_share&utm_medium=android&utm_campaign=852584338&utm_nooverride=1&_branch_match_id=1151226046273528170&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL9Iryi9LLdJLzs%2FVt%2FT2diu3AABNZ%2F1aGgAAAA%3D%3D"><span className="text-xl font-medium  hover:ring-2 hover:ring-orange-500/50 rounded-md p-2 transition duration-300 ease-in-out">BOOK ME ON ROVER</span></Link>
        {/* <Link href="/about"><span className="text-xl font-medium  hover:ring-2 hover:ring-orange-500/50 rounded-md p-2 transition duration-300 ease-in-out">ABOUT</span></Link> */}
        {/* <Link href="mailto:0xdyana@gmail.com"><span className="text-xl font-medium hover:ring-2 hover:ring-orange-500/50 rounded-md p-2 transition duration-300 ease-in-out">EMAIL ME</span></Link> */}
      </nav>
    </header>
  );
};

export default Navbar;

