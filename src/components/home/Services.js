"use client";
import { Calendar, Lightbulb, Monitor, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const services = [
  { 
    title: 'UI/UX Designing', 
    text: 'Create intuitive and engaging user experiences with modern design principles that captivate your audience.', 
    bgColor: 'bg-blue-500',
    icon: Calendar
  },
  { 
    title: 'Mobile Application Development', 
    text: 'Build powerful native and cross-platform mobile apps that deliver seamless performance on iOS and Android.', 
    bgColor: 'bg-yellow-400',
    icon: Lightbulb
  },
  { 
    title: 'Website Development', 
    text: 'Develop responsive, fast-loading websites that represent your brand and drive business growth online.', 
    bgColor: 'bg-teal-600',
    icon: Calendar
  },
  { 
    title: 'Web Application Development', 
    text: 'Transform your ideas into scalable web applications with cutting-edge technologies and robust architecture.', 
    bgColor: 'bg-black',
    icon: Monitor
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Our Services</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-10 sm:mb-12 lg:mb-16 max-w-2xl leading-relaxed">
            We offer comprehensive IT solutions tailored to your business needs. From design to development, 
            our expert team delivers innovative digital products that drive results and exceed expectations. 
            Let us help you transform your vision into reality with our cutting-edge services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} p-6 sm:p-7 lg:p-8 rounded-2xl text-white relative overflow-hidden min-h-64 sm:min-h-72 flex flex-col transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 transition-opacity duration-500 group-hover:opacity-20">
                  <div className="absolute top-20 -left-20 w-64 h-64 bg-white rounded-full transition-transform duration-700 hover:scale-110"></div>
                  <div className="absolute bottom-10 -right-10 w-48 h-48 bg-white rounded-full transition-transform duration-700 hover:scale-110"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-auto transform transition-all duration-500 hover:rotate-12 hover:scale-110">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${index === 1 ? 'text-yellow-400' : index === 2 ? 'text-teal-600' : index === 3 ? 'text-black' : 'text-blue-500'}`} />
                  </div>
                  
                  <div className="mt-auto transform transition-all duration-300 hover:translate-y-[-4px]">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{service.text}</p>
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