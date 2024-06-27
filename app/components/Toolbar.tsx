"use client";

import React, { useEffect, useState } from 'react';

const Toolbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-2 transition-colors duration-300 ${
        isScrolled ? 'bg-black/35' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg flex-1 font-medium">
        <img src="/shlawp-pfp.png" className='w-10 h-auto'/>
        </div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-4 text-sm font-light">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
            <button className='bg-gradient-to-r from-fuchsia-600 to-orange-400 px-3 py-2 rounded-lg text-sm'>
                Contact Us
            </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
