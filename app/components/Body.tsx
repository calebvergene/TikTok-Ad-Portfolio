import React from 'react';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';


function Body() {
  return (
    <div className='bg-[url("./images/shlawp-background-2.png")] bg-cover h-full w-full'>
      <div className="flex items-center justify-center pt-36 pb-20">
      <div className="rounded-lg p-[2px] bg-gradient-to-r from-yellow-400 to-pink-400">
        <div className="flex max-w-6xl mx-auto rounded-lg overflow-hidden px-14 pb-10 pt-6 bg-[url('./images/shlawp-background-2.png')] bg-cover h-full w-full">
          <div className="flex w-full max-w-6xl mx-auto rounded-lg">
            <div className="w-3/5 flex items-center justify-center p-5">
              <img src="/shlawp-profile.png" className="object-cover w-5/6 h-auto rounded-lg" />
            </div>
            <div className="w-2/5 pt-3 text-white">
              <h2 className="text-l font-semibold text-white/70 mt-10">
                Hey! We're
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
            <h2 className="text-4xl font-medium">
                We have created <span className="bg-gradient-to-r from-yellow-500 to-pink-400 text-transparent bg-clip-text font-semibold">461</span> ads for <span className="bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text font-semibold">170</span> unique companies,
            </h2>
            <h3 className="mt-4 text-4xl font-medium">
                <span className="bg-gradient-to-r from-purple-400 to-red-400 text-transparent bg-clip-text font-semibold">326</span> of which are still running in ads today.
            </h3>
        </div>
        <StickyScrollRevealDemo/>
        <div className="flex items-center justify-center pt-36 pb-20">
          <div className="flex w-full max-w-6xl mx-auto rounded-lg">
              <div className="w-3/5 flex items-center justify-center p-5">
                <img src="/shlawp-profile.png" className="object-cover w-5/6 h-auto rounded-lg" />
              </div>
              <div className="w-2/5 pt-3 text-white">
                <h2 className="text-l font-semibold text-white/70 mt-10">
                  Hey! We're
                </h2>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Body;
