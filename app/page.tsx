"use client"

import React, { useEffect, useState } from 'react';
import Hero from "./components/Hero";
import backgroundImage2 from './images/shlawp-background.png';
import SliderDesign from "./components/Slider";
import Body from "./components/Body";
import Loading from './components/Loading'; // Import the loading component

export default function Home() {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading process and set loading to false after a delay
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(loadTimer); // Clean up the timer
    };
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen while loading
  }

  return (
    <div>
      <Hero />
      <SliderDesign />
      <Body />
    </div>
  );
}
