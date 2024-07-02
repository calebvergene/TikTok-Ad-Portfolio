"use client"

import React, { useEffect, useState } from 'react';
import Hero from "./components/Hero";
import backgroundImage2 from './images/shlawp-background.png';
import SliderDesign from "./components/Slider";
import Body from "./components/Body";
import Loading from './components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 12000);

    return () => {
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Hero />
      <SliderDesign />
      <Body />
    </div>
  );
}
