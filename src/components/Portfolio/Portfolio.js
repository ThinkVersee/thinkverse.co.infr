"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
    'All',
    'UI/UX Designing',
    'Mobile Application Development',
    'Website Development',
    'Web Application Development'
];

const projects = [
    {
        id: 1,
        title: 'Cinema Casting Company',
        description: 'A dedicated social media and casting platform connecting actors, directors, production houses, and casting teams. Features include talent search, casting calls, verified profiles, messages, and opportunities in film, short films, and digital media – with a focus on the Malayalam industry.',
        category: 'Web Application Development',
        slug: 'cinema-casting-company',
        heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    },
    {
        id: 2,
        title: 'eMassh – Online Tuition Platform',
        description: 'Live online tuition connecting students with expert tutors, structured notes, and personalized learning paths.',
        category: 'Website Development',
        slug: 'emassh-online-tuition',
        heroImage: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        id: 5,
        title: 'Bus Book – Fleet Management',
        description: 'Complete financial tracking system for bus operators with income, expense & maintenance logs.',
        category: 'Web Application Development',
        slug: 'bus-book-fleet-management',
        heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80'
    },
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
        <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Portfolio Badge */}
                <div className={`mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <span className="inline-block bg-gray-100 px-5 py-2 rounded-full text-xs font-semibold tracking-wider text-gray-700 uppercase">
                        Portfolio
                    </span>
                </div>

                {/* Heading */}
                <h2 className={`text-4xl lg:text-5xl font-medium text-gray-900 mb-12 max-w-4xl leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500, fontSize: '54px', lineHeight: '100%', letterSpacing: '0%' }}>
                        Showcasing thoughtfully crafted digital solutions that blend creativity, innovation, and real-world impact.
                    </span>
                </h2>

                {/* Category Filters */}
                <div className={`flex flex-wrap gap-3 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-7 py-3 rounded-full font-medium text-sm transition-all duration-300 border ${selectedCategory === category
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <a
                            href={`/projects/${project.slug}`}
                            key={project.id}
                            className={`group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                            style={{ transitionDelay: `${index * 150 + 300}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Category Badge */}
                                <span className="inline-block px-4 py-1.5 bg-black text-white text-xs font-medium rounded-full mb-5 self-start">
                                    {project.category}
                                </span>

                                {/* Project Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 line-clamp-2 min-h-[3.5rem]">
                                    {project.title}
                                </h3>

                                {/* Arrow Button - NOW GREEN */}
                                <div className="mt-auto pt-2">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:translate-x-1">
                                        <ArrowRight className="w-5 h-5" />
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