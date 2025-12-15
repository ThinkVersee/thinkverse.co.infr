"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const categories = [
    'All',
    'UI/UX Designing',
    'Mobile Application Development',
    'Website Development',
    'Web Application Development'
];

const projects = [
    { id: 1, title: 'Cinema Casting Company', description: 'A modern social media platform for actors, directors, and casting teams to connect and streamline auditions.', category: 'Web Application Development', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80' },
    { id: 2, title: 'eMassh – Online Tuition Platform', description: 'Live online tuition connecting students with expert tutors, structured notes, and personalized learning paths.', category: 'Website Development',image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800'
 },
    //   { id: 3, title: 'Analytics Dashboard UI', description: 'Clean and intuitive admin panel with real-time data visualization and interactive charts.', category: 'UI/UX Designing', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
    //   { id: 4, title: 'SaaS Landing Page Design', description: 'High-conversion modern landing page for a project management tool.', category: 'UI/UX Designing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
    { id: 5, title: 'Bus Book – Fleet Management', description: 'Complete financial tracking system for bus operators with income, expense & maintenance logs.', category: 'Web Application Development', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
    //   { id: 6, title: 'Fitness Tracker Mobile App', description: 'Beautiful iOS & Android app with workout tracking, progress analytics, and social challenges.', category: 'Mobile Application Development', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' },
];

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
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-blue-950 relative overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#d9cfae] via-[#adc8ec] to-[#6aa7e0]" />

            <div className=" max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center ">
                    {/* Small Badge */}
                    <div className={`inline-flex items-center gap-3 mb-9 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                        }`}>
                 
                        <span className=" text-2xl font-semibold tracking-wider text-blue-600 uppercase">
                            Our Works
                        </span>
                    </div>



                    {/* Subtitle */}
                    <p className=" text-black mb-10 text-lg max-w-3xl mx-auto leading-relaxed">
                        Showcasing thoughtfully crafted digital solutions that blend creativity, innovation, and real-world impact.
                    </p>

                </div>

                {/* Category Filters */}
                <div className={`flex flex-wrap justify-center gap-4  pt-4  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300   border ${selectedCategory === category
                                    ? 'bg-white text-black border-white shadow-2xl shadow-white/40'
                                    : 'bg-white text-black border-white/10 hover:bg-white hover:text-blue-500 hover:border-blue/30'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Perfect Grid - Fixed Alignment */}
                <div className="pt-16 gap-6 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative bg-white   rounded-3xl overflow-hidden border border-white/10 transition-all duration-700 hover:border-white/30 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: `${index * 150 + 500}ms` }}
                        >
                            {/* Fixed Aspect Ratio Image */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900 flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                <span className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-full shadow-lg z-10">
                                    {project.category}
                                </span>
                            </div>

                            {/* Content Section - Fixed Height Structure */}
                            <div className="p-6 lg:p-8 flex flex-col flex-grow">
                                {/* Title - Fixed Height */}
                                <h3 className="text-xl text-black lg:text-2xl font-bold   mb-3 group-hover:text-blue-400 transition-colors duration-500 line-clamp-2 min-h-[3.5rem]">
                                    {project.title}
                                </h3>

                                {/* Description - Fixed Height with Line Clamp */}
                                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
                                    {project.description}
                                </p>

                                {/* Button - Always at Bottom */}
                                <div className="mt-auto pt-2">
                                    <button className="flex items-center gap-3 text-blue-400 font-semibold text-sm hover:gap-6 transition-all duration-300 group/btn">
                                        View Case Study
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                
            </div>
        </section>
    );
}


