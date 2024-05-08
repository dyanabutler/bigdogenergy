import React from 'react';
import Link from 'next/link';
// Assuming the component is named SocialLinks and imported correctly

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-6 my-8">
    <footer className="flex-1  border-gray-500 text-center text-gray-500 p-4 ">
      <nav className="mb-2">
        <Link href="/" className="mr-4 hover:text-gray-500 ">HOME</Link>
        <Link href="/about" className="mr-4 hover:text-gray-500 ">ABOUT ME</Link>
        <Link href="/reviews" className="mr-4 hover:text-gray-500 ">REVIEWS</Link>
        <Link href="https://www.rover.com/members/william-e-big-dog-energy/?utm_source=sitter_profile_share&utm_medium=android&utm_campaign=852584338&utm_nooverride=1&_branch_match_id=1151226046273528170&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL9Iryi9LLdJLzs%2FVt%2FT2diu3AABNZ%2F1aGgAAAA%3D%3D" className="mr-4 hover:text-gray-500 ">BOOK ME ON ROVER</Link>
       
      </nav>
     
    </footer>
    </div>
  );
};

export default Footer;

