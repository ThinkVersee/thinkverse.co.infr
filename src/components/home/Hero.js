'use client';

import React from 'react';

export default function ThinkVerseHero() {
  const scrollToPortfolio = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-black min-h-screen text-white overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-27 left-8 md:left-20 w-28 h-28 md:w-40 md:h-40 border-2 border-gray-800/50 rounded-tl-[80px] md:rounded-tl-[120px] pointer-events-none" />
      <div className="absolute top-32 right-8 md:right-24 w-24 h-24 md:w-36 md:h-36 border-2 border-gray-800/50 rounded-full pointer-events-none" />

      {/* Main layout: two-column on large screens, stacked on small */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 xl:px-16 min-h-screen flex flex-col">

        {/* Headline — full width, centered on all screens */}
        <div className="pt-28 md:pt-36 lg:pt-44 text-center w-full">
          <h1
            style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight text-white"
          >
            Think Beyond the Interface
          </h1>
          <p
            style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500 }}
            className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight text-emerald-400"
          >
            We design &amp; build digital products that live in the future.
          </p>
        </div>

        {/* Content row: left text block + right phone mockup */}
        <div className="mt-10 md:mt-14 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0 flex-1 pb-2">

          {/* Left: accent bars + description + CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[420px] xl:w-[480px] shrink-0">

            {/* Accent bars */}
            <div className="flex gap-3 mb-4">
              <div className="w-20 h-1.5 bg-yellow-400" />
              <div className="w-10 h-1.5 bg-emerald-400" />
            </div>

            {/* Description */}
            <p
              style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 400 }}
              className="text-base md:text-lg xl:text-xl leading-[1.6] text-gray-300 max-w-sm lg:max-w-none"
            >
              Thinkverse is a design-driven digital studio focused on creating meaningful, scalable, and high-performing digital experiences.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToPortfolio}
              className="group mt-8 border-2 border-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-600/10 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
            >
              <span style={{ fontFamily: 'Halenoir, sans-serif', fontSize: '16px', fontWeight: 500 }}>
                View Portfolio
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg">
                →
              </span>
            </button>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex-1 flex items-center justify-center lg:justify-end pointer-events-none">
            <img
              src="/common/iPhone 16.png"
              alt="ThinkVerse mobile mockup"
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-none lg:w-[600px] xl:w-[700px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}