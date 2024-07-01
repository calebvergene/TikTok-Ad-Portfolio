import React from 'react';
import ReactDOM from 'react-dom/client';
import fortniteImage from '../images/shlawp-img-fortnite.png'
import tiktokImage from '../images/tiktok-logo.png'
import Toolbar from './Toolbar';
import { HoverBorderGradientDemo } from './MessageButton';
import { FlipWordsDemo } from './FlipWords';

function Hero() {
  return (
    <div className='bg-[url("./images/shlawp-background-og.png")] bg-cover h-full w-full'>
        <Toolbar/>
        <div className='pt-[200px] text-center'>
            <div className='flex justify-center text-7xl'>
            <h1 className="bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent font-medium">
                <span className="inline-block"><FlipWordsDemo/></span> Advertisements
            </h1>
            </div>
            <div className='mt-4 flex justify-center text-7xl'>
                <h1 className='bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent font-medium'>For Your Business</h1>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
        <a href="mailto:shlawpco@gmail.com">
            <HoverBorderGradientDemo/>
            </a>
        </div>
        <div className="mt-8 flex justify-center mr-12">
            <img
            src="/shlawp-img-fortnite-2.png"
            className='w-3/5 h-auto'
        />
        </div>    
    </div>
  );
}

export default Hero;
