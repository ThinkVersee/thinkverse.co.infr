"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { projectsData, categories } from '@/data/projectsData';

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    return (
        <section
            ref={sectionRef}
            className="pt-24 pb-10 sm:pt-24 sm:pb-20 lg:pt-[120px] lg:pb-[120px] bg-white relative overflow-hidden"
        >
            <div className="max-w-[1279px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Portfolio Badge — matches Works/Services pill style */}
                <div
                    className={`mb-6 sm:mb-8 lg:mb-10 transition-all duration-1000 delay-100 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                    }`}
                >
                    <span className="inline-block py-2 px-5 sm:px-7 bg-white border border-[#e0e0e0] rounded-[40px] text-xs sm:text-[13px] font-semibold uppercase tracking-[2px] text-[#888]">
                        • Portfolio
                    </span>
                </div>

                {/* Heading — Halenoir font, matching Hero/Works style */}
                <h2
                    style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500 }}
                    className={`
                        text-3xl sm:text-4xl md:text-5xl lg:text-[54px]
                        text-[#1a1a1a] leading-[1.2]
                        mb-5 sm:mb-6 lg:mb-7
                        max-w-xs sm:max-w-lg lg:max-w-[700px]
                        transition-all duration-1000 delay-200
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Showcasing thoughtfully crafted digital solutions that blend creativity, innovation, and real-world impact
                </h2>

                {/* Yellow + Emerald accent bars — consistent with Works & Services */}
                <div
                    className={`flex gap-1 mb-8 sm:mb-12 lg:mb-14 transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transformOrigin: 'left center' }}
                >
                    <div
                        className="h-[4px] sm:h-[5px] bg-[#F7D046] rounded-[3px]"
                        style={{ width: 'clamp(120px, 35vw, 315px)' }}
                    />
                    <div
                        className="h-[4px] sm:h-[5px] bg-[#10B981] rounded-[3px]"
                        style={{ width: 'clamp(35px, 9vw, 80px)' }}
                    />
                </div>

                {/* Category Filter Pills */}
                <div
                    className={`flex flex-wrap gap-2 sm:gap-2.5 lg:gap-3 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-400 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`
                                px-4 sm:px-5 lg:px-6
                                py-1.5 sm:py-2
                                rounded-full font-medium text-xs sm:text-sm
                                transition-all duration-300 border whitespace-nowrap
                                ${selectedCategory === category
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {filteredProjects.map((project, index) => (
                        <a
                            href={`/projects/${project.slug}`}
                            key={project.id}
                            className={`
                                group relative bg-white rounded-2xl overflow-hidden
                                shadow-sm border border-gray-100
                                transition-all duration-500
                                hover:-translate-y-2 hover:shadow-2xl
                                flex flex-col h-full cursor-pointer
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                            `}
                            style={{ transitionDelay: `${index * 120 + 400}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Info */}
                            <div className="p-4 sm:p-5 lg:p-8 flex flex-col flex-grow">

                                {/* Category Badge — matches Works page style exactly */}
                                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-black text-white text-[10px] sm:text-xs font-medium rounded-full mb-3 sm:mb-4 lg:mb-5 self-start uppercase tracking-wide">
                                    {project.category}
                                </span>

                                {/* Project Title */}
                                <h3
                                    style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 700 }}
                                    className="text-base sm:text-xl lg:text-2xl text-gray-900 mb-3 sm:mb-4 lg:mb-6 line-clamp-2 min-h-[2.5rem] lg:min-h-[3.5rem]"
                                >
                                    {project.title}
                                </h3>

                                {/* Arrow Button — green, matching Works page */}
                                <div className="mt-auto pt-1 sm:pt-2">
                                    <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-[#10B981] text-[#10B981] transition-all duration-300 group-hover:bg-[#10B981] group-hover:text-white group-hover:translate-x-1">
                                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}