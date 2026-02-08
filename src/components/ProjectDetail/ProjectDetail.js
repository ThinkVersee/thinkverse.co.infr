"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const projectData = {
    'cinema-casting-company': {
        title: 'Cinema Casting Company',
        category: 'Web Application Development',
        overview: 'Talent Meets Opportunity – A modern social media and casting platform connecting actors, directors, production houses, and casting teams, with a strong focus on Malayalam cinema, short films, reels, and digital media.',
        heroImage: '/ccc/login.png',
        features: [
            'Social feed with posts, likes, comments, photos & videos',
            'Advanced role search with filters (location, salary, experience, employment type)',
            'Verified production house and actor profiles',
            'Direct messaging and casting call applications',
            'Mobile-responsive for on-the-go auditions'
        ]
    },
    'emassh-online-tuition': {
        title: 'eMassh – Online Tuition Platform',
        category: 'Website Development',
        overview: 'A live online learning platform connecting students with expert tutors, offering structured courses, notes, quizzes, progress tracking, and personalized learning paths.',
        heroImage: '/emash/emassh-1.png',
        features: [
            'Live video classes and interactive sessions',
            'Structured course materials and downloadable notes',
            'Student progress tracking and analytics',
            'Tutor scheduling and booking system',
            'Quiz and assessment tools',
            'Clean, responsive dashboard for students and tutors'
        ]
    },
    'bus-book-fleet-management': {
        title: 'Bus Book – Fleet Management',
        category: 'Web Application Development',
        overview: 'A comprehensive system for bus operators to track finances, maintenance, routes, and fleet performance in real-time.',
        heroImage: '/busbook/bus-1.png',
        features: [
            'Income and expense tracking with reports',
            'Maintenance scheduling and logs',
            'Driver and route management',
            'Real-time fleet monitoring',
            'Financial analytics and dashboards',
            'Multi-device access for operators'
        ]
    }
};

export default function ProjectDetail({ slug }) {  
    const project = projectData[slug];

    if (!project) return notFound();

    const isDevelopmentProject = 
        project.category === 'Web Application Development' || 
        project.category === 'Website Development';

    return (
        <section className="min-h-screen bg-white text-gray-900 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-12 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Portfolio
                </Link>

                <div className="text-center mb-20">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto mb-8">{project.overview}</p>
                    
                    {/* Green badge with white text for both development categories */}
                    <span className={`inline-block px-6 py-3 rounded-full text-lg font-semibold text-white ${
                        isDevelopmentProject ? 'bg-green-600' : 'bg-gray-600'
                    }`}>
                        {project.category}
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                        <ul className="space-y-4 text-lg">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className={isDevelopmentProject ? 'text-green-500' : 'text-gray-500'}>✓</span> 
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src={project.heroImage} alt={`${project.title} Dashboard`} className="w-full h-auto" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Cinema Casting Company */}
                    {slug === 'cinema-casting-company' && (
                        <>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/cinema-2.png" alt="Gallery 1" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/cinema-3.png" alt="Casting Profile" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/cinema-4.png" alt="Social Feed" className="w-full h-auto object-cover" />
                            </div>
                        </>
                    )}

                    {/* eMassh Online Tuition */}
                    {slug === 'emassh-online-tuition' && (
                        <>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/emassh-1.png" alt="Main Dashboard" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/emassh-2.png" alt="Classes View" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/emassh-3.png" alt="Analytics" className="w-full h-auto object-cover" />
                            </div>
                        </>
                    )}

                    {/* Bus Book Fleet Management */}
                    {slug === 'bus-book-fleet-management' && (
                        <>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/busbook/bus-2.png" alt="Main Dashboard" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/busbook/busbook.png" alt="Fleet Overview" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/busbook/busbook2.png" alt="Fleet Overview" className="w-full h-auto object-cover" />

                            </div>
                        </>
                    )}
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-2xl font-semibold mb-6">Want something similar built for you?</h3>
                    
                    {/* Green "Get in Touch" button with white text */}
                    <Link href="/#contact" className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-lg font-medium text-white transition-colors shadow-lg">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}