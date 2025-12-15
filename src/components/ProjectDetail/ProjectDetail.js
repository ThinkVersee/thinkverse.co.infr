"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const projectData = {
    'cinema-casting-company': {
        title: 'Cinema Casting Company',
        category: 'Web Application Development',
        overview: 'Talent Meets Opportunity – A modern social media and casting platform connecting actors, directors, production houses, and casting teams, with a strong focus on Malayalam cinema, short films, reels, and digital media.',
         heroImage: '/cinema-1.png',
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
        heroImage: '/emassh-1.png',
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
        heroImage: '/bus-1.png',
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
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#d9cfae] via-[#adc8ec] to-[#6aa7e0] text-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Portfolio
                </Link>

                <div className="text-center mb-20">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto mb-8">{project.overview}</p>
                    <span className="inline-block px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold">{project.category}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                        <ul className="space-y-4 text-lg">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-400">✓</span> {feature}
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
                                <img src="/cinema-2.png" />
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
                                <img src="/bus-2.png" alt="Main Dashboard" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" alt="Fleet Overview" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1554224320-2e5472f8b2e7?w=800" alt="Reports" className="w-full h-auto object-cover" />
                            </div>
                        </>
                    )}
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-2xl font-semibold mb-6">Want something similar built for you?</h3>
                    <Link href="/#contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-lg font-medium transition-colors">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}