'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/data/projectsData';

const Works = () => {
    const router = useRouter();
    const worksProjects = projectsData.slice(0, 3);

    const Card = ({ project, isLarge }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        const handleClick = () => {
            router.push(`/projects/${project.slug}`);
        };

        return (
            <div
                className={`
                    ${isLarge ? 'w-[738px] h-[896px]' : 'w-[521px] h-[438px]'}
                    ${isLarge ? 'bg-gradient-to-br from-[#e0d5c2] to-[#d0c0a8]' : 'bg-[#14B5720D]'}
                    rounded-[22px] p-6 relative flex flex-col
                    transition-all duration-300 ease-out cursor-pointer
                    border border-[#C9C9C980]
                    ${isHovered ? '-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)]' : 'shadow-[0_8px_20px_rgba(0,0,0,0.06)]'}
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
            >
                {/* Top Section - Category and Arrow */}
                <div className="flex justify-between items-center mb-6">
                    {/* Category Badge */}
                    <div className="bg-black/70 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide">
                        {project.category}
                    </div>

                    {/* Arrow Button */}
                    <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        border-2 border-white transition-all duration-300
                        ${isHovered ? 'bg-white rotate-45' : 'bg-transparent rotate-0'}
                    `}>
                        <span className={`text-2xl font-light transition-colors duration-300 ${isHovered ? 'text-gray-700' : 'text-[#aaaaaa]'}`}>
                            ↗
                        </span>
                    </div>
                </div>

                {/* Image Container - Fixed height */}
                <div className={`${isLarge ? 'h-[650px]' : 'h-[240px]'} mb-6 rounded-xl overflow-hidden`}>
                    <img 
                        src={project.worksImage}
                        alt={project.title}
                        className={`
                            w-full h-full object-cover
                            transition-transform duration-500 ease-out
                            ${isHovered ? 'scale-105' : 'scale-100'}
                        `}
                    />
                </div>

                {/* Title Card - Always visible at bottom */}
                <div className="bg-white p-5 rounded-2xl shadow-sm mt-auto">
                    <h3 className="text-2xl font-semibold text-[#1a1a1a] m-0">
                        {project.title}
                    </h3>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white py-[120px]">
            <div className="w-[1279px] mx-auto">
                {/* Header */}
                <div className="text-center mb-[100px]">
                    <div className="inline-block py-[10px] px-7 bg-white border border-[#e0e0e0] rounded-[40px] text-[15px] font-semibold uppercase tracking-[2px] text-[#888] mb-10">
                        • RECENT WORKS
                    </div>
                    
                    <h1 className="text-[54px] font-medium text-[#1a1a1a] leading-[1.2] mb-12 mx-auto max-w-[700px]">
                        Showcasing thoughtfully crafted digital solutions
                    </h1>
                    
                    {/* Multi-color Underline */}
                    <div className="flex justify-center gap-1">
                        <div className="w-[315px] h-[5px] bg-[#F7D046] rounded-[3px]"></div>
                        <div className="w-20 h-[5px] bg-[#10B981] rounded-[3px]"></div>
                    </div>
                </div>

                {/* Cards Layout */}
                <div className="flex gap-[42px] items-start">
                    <Card project={worksProjects[0]} isLarge={true} />
                    <div className="flex flex-col gap-5">
                        <Card project={worksProjects[1]} isLarge={false} />
                        <Card project={worksProjects[2]} isLarge={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;