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
      className={`fixed top-0 left-0 w-full p-2 transition-colors duration-300 z-30 ${
        isScrolled ? 'bg-black/35' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg flex-1 font-medium">
        <a href="#">
        <img src="/shlawp-pfp.png" className='w-10 h-auto'/>
        </a>
        </div>
       
        <div className="flex-1 flex justify-end">
        <a href="mailto:shlawpco@gmail.com">
            <button className='bg-black/90 border px-3 py-2 rounded-lg text-sm text hover:text-white/80 transition duration-300'>
                Contact Us
            </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
