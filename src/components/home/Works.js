'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

const Works = () => {
    const router = useRouter();
    const worksProjects = projectsData.slice(0, 3);

    const Card = ({ project }) => {
        const handleClick = () => {
            router.push(`/projects/${project.slug}`);
        };

        return (
            <div
                onClick={handleClick}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full cursor-pointer border border-gray-100"
            >
                {/* Project Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                        src={project.worksImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Card Info */}
                <div className="flex flex-col flex-grow p-4 sm:p-5 lg:p-8">
                    {/* Category Badge */}
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-black text-white text-xs font-medium rounded-full mb-3 sm:mb-4 lg:mb-5 self-start uppercase tracking-wide">
                        {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2 mb-3 sm:mb-4 lg:mb-6 min-h-[2.8rem] lg:min-h-[3.5rem]">
                        {project.title}
                    </h3>

                    {/* Arrow Button */}
                    <div className="mt-auto pt-1 sm:pt-2">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:translate-x-1">
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-10 xl:py-[60px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1279px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-14 lg:mb-20 xl:mb-[60px]">
                    <div className="inline-block py-2 sm:py-[10px] px-5 sm:px-7 bg-white border border-[#e0e0e0] rounded-[40px] text-xs sm:text-[13px] lg:text-[15px] font-semibold uppercase tracking-[2px] text-[#888] mb-6 sm:mb-8 lg:mb-10">
                        • RECENT WORKS
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-medium text-[#1a1a1a] leading-[1.2] mb-8 sm:mb-10 lg:mb-12 mx-auto max-w-xs sm:max-w-md lg:max-w-[700px]">
                        Showcasing thoughtfully crafted digital solutions
                    </h1>

                    {/* Multi-color Underline */}
                    <div className="flex justify-center gap-1">
                        <div
                            className="h-[4px] sm:h-[5px] bg-[#F7D046] rounded-[3px]"
                            style={{ width: 'clamp(120px, 35vw, 315px)' }}
                        />
                        <div
                            className="h-[4px] sm:h-[5px] bg-[#10B981] rounded-[3px]"
                            style={{ width: 'clamp(35px, 9vw, 80px)' }}
                        />
                    </div>
                </div>

                {/* Cards Grid
                    Mobile:  1 column  (stacked, current design preserved)
                    Tablet:  2 columns
                    Desktop: 3 columns (Portfolio-style uniform grid)
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {worksProjects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Works;