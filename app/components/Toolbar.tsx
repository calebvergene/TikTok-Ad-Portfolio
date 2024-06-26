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
      className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg flex-1">My Toolbar</div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
          <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
