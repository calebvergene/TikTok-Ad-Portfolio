import React from 'react';
import ReactDOM from 'react-dom/client';
import backgroundImage from '../images/shlawp-background.png';
import fortniteImage from '../images/fortnite-background.jpg'
import Toolbar from './Toolbar';

function Hero() {
  return (
    <div className='bg-[url("./images/shlawp-background.png")] bg-cover h-svh w-full'>
        <Toolbar/>
        <div className='pt-[200px]'>
            <div className='flex justify-center text-7xl'>
                <h1 className='bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent'>Powerful Advertisements</h1>
            </div>
            <div className='mt-4 flex justify-center text-7xl'>
                <h1 className='bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent'>For Your Business</h1>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
            <button className='bg-gradient-to-r from-purple-600 to-pink-400 px-4 py-3 rounded-lg'>
                Contact Us
            </button>
        </div>
        
    </div>
  );
}

export default Hero;
