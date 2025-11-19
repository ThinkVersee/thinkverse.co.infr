'use client';

import React from 'react';
import Image from 'next/image';
import laptopImg from '../../../public/common/Frame 2147225212.png';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d9cfae] via-[#adc8ec] to-[#6aa7e0] pt-16 sm:pt-24">
      <style jsx>{`
        @keyframes slideRight {
          from {
            transform: translateX(-5px);
          }
          to {
            transform: translateX(0);
          }
        }

        .button-hover:hover .arrow {
          animation: slideRight 0.3s ease-in-out infinite;
        }

        .button-hover {
          position: relative;
          overflow: hidden;
        }

        .button-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .button-hover:hover::before {
          width: 300px;
          height: 300px;
        }

        .button-hover span {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Empowering <span className="text-blue-600">Innovation with Scalable</span> IT Solutions
        </h1>

        <p className="text-white text-base sm:text-lg mb-6 max-w-3xl mx-auto px-4">
          We help startups and enterprises accelerate digital transformation with
          custom software, cloud, and cybersecurity services.
        </p>

        {/* <button className="button-hover bg-blue-600 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2 mb-4 sm:mb-2 text-sm sm:text-base">
          <span>Start a Project</span>
          <span className="arrow">→</span>
        </button> */}

        {/* Laptop Image Section */}
        <div className="mt-4 sm:mt-0 sm:-mt-12 md:-mt-16 lg:-mt-[90px] mb-0 sm:-mb-20 md:-mb-32 lg:-mb-[150px] flex justify-center px-4">
          <div className="w-full max-w-5xl">
            <Image
              src={laptopImg}
              alt="Laptop mockup showing our services"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}