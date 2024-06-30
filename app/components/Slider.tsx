"use client";

import React from 'react';
import { motion } from 'framer-motion';

const slides = [
    { icon: <img src="/fortnite-logo.png" className="w-52 h-4/6"/> },
    { icon: <img src="/supercell-logo.png" className="w-32"/> },
    { icon: <img src="/tiktok-logo.png" className="w-32"/> },
    { icon: <img src="/tinder-logo.png" className="w-32"/> },
    { icon: <img src="/bitlife-logo-2.png" className="w-32"/> },
];

const SliderDesign2 = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden py-2 bg-black mx-auto">
            <div className="absolute inset-0 z-20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-transparent before:to-transparent after:absolute after:inset-0 after:bg-gradient-to-l after:from-black after:via-transparent after:to-transparent"></div>
            <motion.div
                className="flex"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    ease: 'linear',
                    duration: 15,
                    repeat: Infinity,
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            {slide.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign2;
