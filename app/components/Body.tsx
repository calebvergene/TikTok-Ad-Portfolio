"use client"

import React, { useEffect, useRef } from 'react';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion"
import Image from 'next/image'

const Body = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scale-90', 'opacity-50');
            entry.target.classList.add('scale-100', 'opacity-100');
          }
        });
      },
      { threshold: 0.1 } 
    );
    
    const currentBoxRef = boxRef.current;
    
    if (currentBoxRef) {
      observer.observe(currentBoxRef);
    }

    return () => {
      if (currentBoxRef) {
        observer.unobserve(currentBoxRef);
      }
    };
  }, []);

  return (
    <div className='bg-[url("./images/shlawp-background-2.png")] bg-cover h-full w-full'>
      <div className="flex items-center justify-center pt-36 pb-20">
        <div className="rounded-lg p-[2px] bg-gradient-to-r from-yellow-400 to-pink-400">
          <div
            ref={boxRef}
            className="flex max-w-6xl mx-auto rounded-lg overflow-hidden px-4 pb-4 pt-4 bg-[url('./images/shlawp-background-2.png')] bg-cover h-full w-full transform scale-90 opacity-0 transition-transform duration-1000"
            >
            <div className="flex w-full max-w-6xl mx-auto rounded-lg">
              <div className="w-full md:w-3/5 flex items-center justify-center p-2">
                <img
                  src="/shlawp-profile.png"
                  className="object-cover w-full md:w-5/6 h-auto rounded-lg"
                  alt="Shlawp Profile"
                />
              </div>
              <div className="w-full md:w-2/5 pt-3 text-white">
                <h2 className="text-l font-semibold text-white/70 mt-10">
                  Hey! We&apos;re
                </h2>
                <h2 className="text-4xl font-semibold mt-2 text-white/70">
                  <span className="text-white font-semibold">Shlawp</span>,
                </h2>
                <h3 className="text-2xl font-medium pt-4 text-white/60">
                  a <span className="text-white font-semibold">digital marketing</span> startup utilizing AI to create viral content.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-32 pb-4 text-center'>
        <h2 className="text-4xl font-medium text-white">
          We have created <span className="bg-gradient-to-r from-yellow-500 to-pink-400 text-transparent bg-clip-text font-semibold">461</span> ads for <span className="bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text font-semibold">170</span> unique companies,
        </h2>
        <h3 className="mt-4 text-4xl font-medium text-white">
          <span className="bg-gradient-to-r from-purple-400 to-red-400 text-transparent bg-clip-text font-semibold">326</span> of which are still running in ads today.
        </h3>
      </div>
      <StickyScrollRevealDemo />
      <div className="flex items-center justify-center pt-20 pb-32">
        <div className="flex w-full max-w-6xl mx-auto rounded-lg">
          <div className="w-full md:w-2/5 justify-center p-5 text">
            <h1 className='text-4xl font-semibold pb-2'>Questions? We have answers.</h1>
            <a href="mailto:shlawpco@gmail.com">
              <h3 className='text-l text-white/80 pb-5'>Here are some common questions we get asked.</h3>
              <button className='flex items-center border border-white/30 rounded-lg p-1 px-2 text-l hover:border-transparent hover:bg-white/30 transition duration-300'>
                Additional Questions
                <div className='ml-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
              </button>
            </a>
          </div>
          <div className="w-full md:w-3/5 pt-3 text-white">
            <Accordion type="single" collapsible className="w-full pb-32">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can digital marketing benefit my business?</AccordionTrigger>
                <AccordionContent>
                  Digital marketing can increase your online visibility, attract more customers, and boost sales through targeted and measurable strategies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do you keep clients updated on the progress of their campaigns?</AccordionTrigger>
                <AccordionContent>
                  We keep clients updated through regular reports and scheduled meetings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you work with businesses in all industries?</AccordionTrigger>
                <AccordionContent>
                  Yes, but we specialize mostly in mobile apps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  Just contact us at shlawpco@gmail.com, and we will take it from there!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400">
        <footer className="bg-black text-white py-4 pb-32">
          <div className="container mx-auto">
            <p className="mb-2 mt-12">
              <span className='text-5xl font-semibold'>Shlawp</span>
            </p>
            <div className='flex pt-4'>
              <div className='pr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <a href="mailto:shlawpco@gmail.com">
                <button className='hover:text-white/70 transition duration-300'>shlawpco@gmail.com</button>
              </a>
            </div>
            <div className='flex pt-2'>
              <div className='pr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
              </div>
              <p>Irvine, California</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Body;
