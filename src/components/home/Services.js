"use client";
import { MonitorSmartphone, Globe, Code2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'UI/UX Design',
    text: 'We design intuitive and engaging interfaces by deeply understanding users and business goals. From wireframes to high-fidelity UI, every decision is made with purpose.',
    icon: 'uiux',
    featured: false,
  },
  {
    title: 'Website Development',
    text: 'We design intuitive and engaging interfaces by deeply understanding users and business goals. From wireframes to high-fidelity UI, every decision is made with purpose.',
    icon: 'website',
    featured: false,
  },
  {
    title: 'Web Application Development',
    text: 'We design intuitive and engaging interfaces by deeply understanding users and business goals. From wireframes to high-fidelity UI, every decision is made with purpose.',
    icon: 'webapp',
    featured: true,
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Icon component renderer
  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'uiux':
        // UI/UX Design icon - Layout with sidebar and content blocks
        return (
          <svg className="w-7 h-7 text-teal-500" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Two dots at top */}
            <circle cx="7" cy="6" r="1" fill="currentColor"/>
            <circle cx="11" cy="6" r="1" fill="currentColor"/>
            {/* Horizontal line below dots */}
            <line x1="3" y1="10" x2="25" y2="10" />
            {/* Left sidebar */}
            <rect x="3" y="12" width="8" height="13" rx="1" />
            {/* Right content blocks */}
            <line x1="14" y1="15" x2="22" y2="15" />
            <line x1="14" y1="19" x2="18" y2="19" />
          </svg>
        );
      case 'website':
        // Website Development icon - Browser window with code
        return (
          <svg className="w-7 h-7 text-teal-500" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Rounded square container */}
            <rect x="3" y="3" width="22" height="22" rx="4" />
            {/* Two dots at top */}
            <circle cx="7" cy="8" r="1" fill="currentColor"/>
            <circle cx="11" cy="8" r="1" fill="currentColor"/>
            {/* Horizontal line below dots */}
            <line x1="3" y1="11" x2="25" y2="11" />
            {/* Code brackets */}
            <path d="M10 15L8 17L10 19" />
            <line x1="13" y1="15" x2="13" y2="19" />
            <path d="M16 15L18 17L16 19" />
          </svg>
        );
      case 'webapp':
        // Web Application Development icon - Overlapping windows with code
        return (
          <svg className="w-7 h-7 text-teal-500" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Back window */}
            <rect x="3" y="3" width="18" height="16" rx="3" />
            {/* Front window with code */}
            <rect x="7" y="9" width="18" height="16" rx="3" />
            {/* Code brackets in front window */}
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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* SERVICES Pill */}
        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-5 py-2 rounded-full border border-gray-300 text-gray-700 text-xs font-medium mb-8">
            SERVICES
          </span>
        </div>

        {/* Headline */}
        <h2 className={`text-5xl font-medium text-gray-900 mb-6 leading-none max-w-xl transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          We design intuitive and engaging interfaces
        </h2>

        {/* Gradient Underline */}
        <div className={`flex gap-2 mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <div className="w-64 h-1 bg-yellow-400" />
          <div className="w-24 h-1 bg-teal-500" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl border-2 border-teal-400 flex items-center justify-center mb-6">
                    {renderIcon(service.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left uppercase tracking-wide whitespace-nowrap">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-left leading-relaxed flex-1 mb-8 text-sm">{service.text}</p>

                  {/* Arrow Button - Bottom Left */}
                  <div className="mt-auto flex justify-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-blue-600 group-hover:bg-blue-600`}>
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 text-blue-600 group-hover:text-white`}
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