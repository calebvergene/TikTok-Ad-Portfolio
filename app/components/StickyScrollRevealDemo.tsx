"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "🥇Meete (+$20k📈)",
    description:
      "\"Shlawp has transformed our app's growth! We saw a massive increase in clicks and downloads, with over 5,000 new users over the past month. They were also professional, responsive, and really listened to our needs.\"",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/meete.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "🥈VooDoo (+$9k📈)",
    description:
    "\"We had a fantastic experience with Shlawp! The ads drove a significant surge in our downloads and income for our mobile games. Highly effective and highly recommended!\"",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src="/voodoo.png"
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
    ),
  },
  {
    title: "🥉Top War (+$4k📈)",
    description:
    "\"Great results from Shlawp's ads. More clicks, downloads, and income; they definitley know how to target an audience to drive views and results! Though there were minor delays, overall very satisfied.\"",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/topwar.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
