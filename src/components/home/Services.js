"use client";
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'UI/UX Design',
    text: 'We design intuitive and engaging interfaces by deeply understanding users and business goals. From wireframes to high-fidelity UI, every decision is made with purpose.',
    icon: 'uiux',
  },
  {
    title: 'Website Development',
    text: 'We design intuitive and engaging interfaces by deeply understanding users and business goals. From wireframes to high-fidelity UI, every decision is made with purpose.',
    icon: 'website',
  },
  {
    title: 'We design intuitive and engaging interfaces by deeply understanding users and business goals.',
    text: 'We design intuitive and engaging interfaces by deeply understanding users and business goals. From wireframes to high-fidelity UI, every decision is made with purpose.',
    icon: 'webapp',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'uiux':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-500" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="7" cy="6" r="1" fill="currentColor" />
            <circle cx="11" cy="6" r="1" fill="currentColor" />
            <line x1="3" y1="10" x2="25" y2="10" />
            <rect x="3" y="12" width="8" height="13" rx="1" />
            <line x1="14" y1="15" x2="22" y2="15" />
            <line x1="14" y1="19" x2="18" y2="19" />
          </svg>
        );
      case 'website':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-500" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="22" height="22" rx="4" />
            <circle cx="7" cy="8" r="1" fill="currentColor" />
            <circle cx="11" cy="8" r="1" fill="currentColor" />
            <line x1="3" y1="11" x2="25" y2="11" />
            <path d="M10 15L8 17L10 19" />
            <line x1="13" y1="15" x2="13" y2="19" />
            <path d="M16 15L18 17L16 19" />
          </svg>
        );
      case 'webapp':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-500" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="16" rx="3" />
            <rect x="7" y="9" width="18" height="16" rx="3" />
            <path d="M11 16L9 18L11 20" />
            <path d="M17 16L19 18L17 20" />
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-5 sm:py-8 lg:py-5 xl:py-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* SERVICES Pill */}
        <div
          className={`transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-300 text-gray-700 text-xs font-medium mb-6 sm:mb-8">
            SERVICES
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-medium text-gray-900
            mb-4 sm:mb-5 lg:mb-6
            leading-tight
            w-full max-w-[16rem] sm:max-w-sm md:max-w-md lg:max-w-xl
            transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          We design intuitive and engaging interfaces
        </h2>

        {/* Gradient Underline */}
        <div
          className={`flex gap-2 mb-10 sm:mb-15 lg:mb-15 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transformOrigin: 'left center' }}
        >
          <div className="h-1 bg-yellow-400 rounded-full" style={{ width: 'clamp(100px, 28vw, 256px)' }} />
          <div className="h-1 bg-teal-500 rounded-full" style={{ width: 'clamp(40px, 9vw, 96px)' }} />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isLongTitle = service.title.length > 30;

            return (
              <div
                key={index}
                className={`
                  group bg-white rounded-2xl sm:rounded-3xl
                  p-5 sm:p-6 lg:p-8
                  border border-gray-200
                  hover:shadow-xl
                  transition-all duration-500 hover:-translate-y-2
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex flex-col h-full">

                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl border-2 border-teal-400 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shrink-0">
                    {renderIcon(service.icon)}
                  </div>

                  {/* Title */}
                  {/* Long titles get smaller text + normal case to avoid overflow */}
                  <h3
                    className={`
                      font-semibold text-gray-900
                      mb-3 sm:mb-4
                      text-left leading-snug
                      ${isLongTitle
                        ? 'text-sm sm:text-sm lg:text-base normal-case tracking-normal line-clamp-3'
                        : 'text-base sm:text-lg lg:text-xl uppercase tracking-wide'}
                    `}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-left leading-relaxed flex-1 mb-5 sm:mb-6 lg:mb-8 text-sm">
                    {service.text}
                  </p>

                  {/* Arrow Button */}
                  <div className="mt-auto flex justify-start">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-blue-600 group-hover:bg-blue-600">
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 text-blue-600 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}