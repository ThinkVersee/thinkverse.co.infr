'use client';

import React from 'react';

export default function ThinkVerseHero() {
  const scrollToPortfolio = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-black min-h-screen text-white overflow-hidden">
      {/* Your existing decorative elements */}
      <div className="absolute top-32 left-20 w-40 h-40 border-2 border-gray-800/50 rounded-tl-[120px]" />
      <div className="absolute top-40 right-24 w-36 h-36 border-2 border-gray-800/50 rounded-full" />

      <div className="relative w-full min-h-screen">
        {/* Hero Text */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '169px', width: '1170px', maxWidth: '95%' }}>
          <h1 style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500, fontSize: '64px', lineHeight: '100%', color: '#ffffff', margin: 0 }}>
            Think Beyond the Interface
          </h1>
          <p style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500, fontSize: '64px', lineHeight: '100%', color: '#10b981', margin: '8px 0 0 0' }}>
            We design &amp; build digital products that live in the future.
          </p>
        </div>

        {/* Accent bars */}
        <div className="absolute flex gap-3" style={{ top: '490px', left: '80px' }}>
          <div className="w-20 h-1.5 bg-yellow-400" />
          <div className="w-10 h-1.5 bg-emerald-400" />
        </div>

        {/* Description */}
        <div className="absolute" style={{ top: '520px', left: '80px', width: '435px' }}>
          <p style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '30px', color: '#d1d5db' }}>
            Thinkverse is a design-driven digital studio focused on creating meaningful, scalable, and high-performing digital experiences.
          </p>
        </div>

        {/* View Portfolio Button - Now Clickable! */}
        <div className="absolute" style={{ top: '620px', left: '80px' }}>
          <button
            onClick={scrollToPortfolio}
            className="group border-2 border-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-600/10 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <span style={{ fontFamily: 'Halenoir, sans-serif', fontSize: '16px', fontWeight: 500 }}>
              View Portfolio
            </span>
            <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg">
              →
            </span>
          </button>
        </div>

        {/* Phone Mockup */}
        <div className="absolute pointer-events-none" style={{ width: '1072px', height: '804px', top: '180px', left: '483px' }}>
          <img
            src="/common/iPhone 16.png"
            alt="ThinkVerse mobile mockup"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}