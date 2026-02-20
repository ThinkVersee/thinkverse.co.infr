"use client";

import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const projectData = {
    'cinema-casting-company': {
        title: 'Cinema Casting Company',
        category: 'Web Application Development',
        overview: 'Talent Meets Opportunity – A full-stack social casting platform built for the Malayalam film industry, connecting verified actors, production houses, and casting directors. Users can post content, apply for roles, message connections, and build a professional profile — all in one place.',
        heroImage: '/ccc/login.png',
        liveUrl: 'https://www.cinemacastingcompany.com/',
        stats: [
            { label: 'Active Users', value: 'Real-time' },
            { label: 'Industry', value: 'Malayalam Cinema' },
            { label: 'Platform', value: 'Web App' },
        ],
        highlights: [
            {
                icon: '🎬',
                title: 'Casting Call Board',
                desc: 'Production houses post roles (e.g. Actor/Actress for short films, reels, full features) with details like location, salary range, employment type, and experience level. Talents apply directly via Contact.'
            },
            {
                icon: '📱',
                title: 'Social Feed',
                desc: 'Instagram-style feed where talents share photos, videos, and updates. Followers can like, comment, and share posts. Real activity from users like ameensalaam9, jilskaleeda, and ashish is already live.'
            },
            {
                icon: '🔍',
                title: 'Advanced Role Search',
                desc: 'Filter casting calls by location (Near me / Flexible / Exact), salary (₹30k–₹1L+), date posted, experience (Short Films, Reels), and employment type (Full Time, Temporary, Part Time).'
            },
            {
                icon: '✅',
                title: 'Verified Profiles',
                desc: 'Production houses like JEEVAN CREATIVE PRODUCTIONS, VAANI INNOVATIVE CREATIONS, and CINEMACASTINGCOMPANY carry a verified badge, building trust for talents reaching out.'
            },
            {
                icon: '💬',
                title: 'Direct Messaging',
                desc: 'Built-in messaging system with a Connected tab and New Chat flow. Users can privately reach out to talents or production teams — all within the platform.'
            },
            {
                icon: '👤',
                title: 'Talent Profiles',
                desc: 'Each user has a profile with posts, followers, following, an editable bio, chosen role, education, achievements, and skills — designed to showcase talent professionally.'
            },
        ],
        features: [
            'Social feed with photos, videos, likes, comments & shares',
            'Casting call board with salary, location & experience filters',
            'Verified production house & actor badge system',
            'Direct messaging with connected contacts',
            'Profile builder: role, education, achievements & skills',
            'Talent discovery with suggestions & follow system',
            'Rocket feature to boost talent visibility in search',
            'Mobile-first responsive design for on-the-go use'
        ]
    },
    'tasty-toast-cafe': {
    title: 'Tasty Toast Café',
    category: 'Web Application Development',
    overview: 'A powerful multi-restaurant admin panel built for café and food business owners to manage finances, staff, menu, vendors, and daily operations — all in one clean dashboard. Currently live across two restaurants: Tasty Toast (Mannarkkad) and Lassi Factory (Tirur).',
    heroImage: '/ttc-1.png',
    liveUrl: 'https://www.tastytoastcafe.in/',
    stats: [
        { label: 'Industry', value: 'Food & Beverage' },
        { label: 'Platform', value: 'Admin Panel' },
        { label: 'Restaurants', value: 'Multi-Branch' },
        { label: 'Finance', value: 'Real-time' },
    ],
        highlights: [
            {
                icon: '📊',
                title: 'Live Financial Dashboard',
                desc: 'Real-time overview of Total Income, Total Expenses, Net Profit, and Available Balance. Profit is calculated as (Income + Deposits) − (Expenses + Withdrawals + Salaries + Advances) with margin percentage.'
            },
            {
                icon: '💳',
                title: 'Wallet & Balance System',
                desc: 'Each restaurant has a wallet with Available Balance, Locked funds, and Effective Balance after liabilities. Owners can Deposit or Withdraw directly and track coverage percentage in real time.'
            },
            {
                icon: '📈',
                title: 'Daily Performance Charts',
                desc: 'Visual bar and composed charts showing daily Income, Expense, and Profit Margin % across any date range. Tracks Avg Daily Income, Avg Daily Expense, and highlights the Best performing day.'
            },
      {
    icon: '🗂️',
    title: 'Category Management',
    desc: 'Fully customisable expense and income categories with subcategory support. Owners can define their own category structure to match how their business tracks purchases, income, and operational costs.'
},
    {
    icon: '👨‍🍳',
    title: 'Staff & Attendance',
    desc: 'Manage staff with their assigned roles, monthly salary, join date, and contact details. Tracks attendance and handles salary settlements and advance payments per employee.'
},
            {
                icon: '📋',
                title: 'Financial Reports & Export',
                desc: 'Detailed transaction history with filters for Daily Income, Vendor Reports, Withdrawals, and Deposits. Shows totals for Purchases, Inflows, Expenses, Salaries, Advances, and Unpaid Liabilities. Export to CSV supported.'
            },
            {
                icon: '🍽️',
                title: 'Menu Management',
                desc: 'Add and manage menu items with a Gallery view. Organised per restaurant so Tasty Toast and Lassi Factory each have their own independent menu structure.'
            },
          {
    icon: '🏪',
    title: 'Multi-Restaurant Support',
    desc: 'Admins can switch between multiple restaurant branches from a single login. Each branch has fully isolated data, staff, and financials — making it ideal for growing food businesses.'
},
        ],
        features: [
            'Multi-restaurant dashboard from a single admin login',
            'Real-time profit, expense & balance tracking',
            'Wallet system with deposit, withdraw & liability coverage',
            'Daily income/expense bar & composed charts',
            'Staff management with roles, salaries & attendance',
            'Fully customisable income & expense categories',
            'Financial reports with CSV export',
            'Purchase & vendor management',
            'Menu items & gallery per restaurant',
            'Salary settlement & advance tracking per staff member'
        ]
    },
    'emassh-online-tuition': {
    title: 'eMassh – Online Tuition Platform',
    category: 'Website Development',
    overview: 'A full-featured online learning platform connecting students with industry-expert instructors. eMassh offers structured courses, live sessions, quizzes, progress tracking, and recognised certificates — making quality education accessible to everyone, everywhere.',
    heroImage: '/emash/emassh-1.png',
    liveUrl: 'https://www.emassh.in/',
    stats: [
 
    { label: 'Industry', value: 'EdTech' },
    { label: 'Platform', value: 'Web App' },
    { label: 'Sessions', value: 'Live & Recorded' },
    { label: 'Certificates', value: 'Verified' },
 
    ],
    highlights: [
        {
            icon: '🎥',
            title: 'Live & Recorded Classes',
            desc: 'Students attend live interactive sessions with instructors or catch up via recorded lectures — flexible learning that fits any schedule.'
        },
        {
            icon: '📚',
            title: 'Structured Course Library',
            desc: 'Over 500 courses organised by subject and skill level, each with video lessons, downloadable notes, and practical projects to reinforce learning.'
        },
        {
            icon: '🧠',
            title: 'Quizzes & Assessments',
            desc: 'Built-in quiz engine lets instructors create timed assessments. Students get instant feedback and scores tracked against their learning path.'
        },
        {
            icon: '📈',
            title: 'Progress Tracking Dashboard',
            desc: 'Each student has a personal dashboard showing completed lessons, quiz scores, course completion %, and upcoming sessions at a glance.'
        },
        {
            icon: '🏆',
            title: 'Recognised Certificates',
            desc: 'Students earn verifiable certificates upon course completion — shareable on LinkedIn and résumés to validate real-world skills to employers.'
        },
        {
            icon: '👩‍🏫',
            title: 'Expert Instructor Profiles',
            desc: 'Platform features 50+ verified instructors from leading companies. Each profile shows credentials, courses taught, and student ratings — helping learners pick the right mentor.'
        },
        {
            icon: '🤝',
            title: 'Learner Community',
            desc: 'Students and mentors connect through discussion threads and course communities, enabling peer learning and networking beyond the classroom.'
        },
        {
            icon: '📅',
            title: 'Tutor Booking & Scheduling',
            desc: 'Students can book 1-on-1 sessions directly via the tutor scheduling system, with calendar integration and automated reminders before each class.'
        },
    ],
    features: [
        'Live video classes and interactive sessions',
        'Structured course materials and downloadable notes',
        'Quiz and assessment engine with instant feedback',
        'Student progress tracking and analytics dashboard',
        'Tutor scheduling and 1-on-1 booking system',
        'Verified certificates upon course completion',
        'Expert instructor profiles with ratings',
        'Learner community with discussion forums',
        'Mobile-responsive design for learning on the go',
        'Newsletter and course update notifications'
    ]
},
    'bus-book-fleet-management': {
        title: 'Bus Book – Fleet Management',
        category: 'Web Application Development',
        overview: 'A dedicated fleet management and billing system built for bus operators to track daily collections, manage staff, monitor expenses, and view real-time financial health — all from a single owner dashboard. Currently live with real transaction history dating back across months.',
        heroImage: '/busbook/bus-1.png',
          liveUrl: 'https://busbook.thinkverse.co.in/',
        stats: [
           { label: 'Income Tracked', value: 'Multi-Month' },
{ label: 'Wallet System', value: 'Live Balance' },
            { label: 'Industry', value: 'Transport' },
        ],
        highlights: [
            {
                icon: '🚌',
                title: 'Bus Management',
                desc: 'Register and manage buses with Registration Number, Name, Route, Type, and Commission rate. Each bus entry supports registration number, nickname, route name, type, and commission rate.'
            },
            {
                icon: '👷',
                title: 'Staff Management',
                desc: 'Manage drivers, conductors, mechanics, cleaners & managers with Employee ID, role, phone, email, and status. All active employees are tracked in real time with their assigned roles and contact details.'
            },
            {
                icon: '📒',
                title: 'Bill Book – Daily Entry',
                desc: 'A 3-step daily entry flow: enter Collection amount → assign Staff Names → log Expenses. Each entry is tied to a specific Bus Number and Transaction Date for accurate per-bus tracking.'
            },
            {
                icon: '💰',
                title: 'Owner Financial Dashboard',
                desc: 'Live snapshot of Current Balance, Today\'s Net Profit, and quick-access actions: New Entry, Manage Buses, Manage Staff, and View Reports — designed for fast daily use.'
            },
            {
                icon: '📊',
                title: 'Transaction Records',
                desc: 'Full daily transaction history with Net profit per day. Each entry shows net profit or loss per day, giving owners clear insight into profitable and loss-making days across any period.'
            },
            {
                icon: '🔧',
                title: 'Maintenance Tracking',
                desc: 'Separate maintenance expense category tracked independently from regular expenses. Maintenance costs are tracked independently — keeping repair costs visible without mixing them into daily operational costs.'
            },
            {
                icon: '📈',
                title: 'Financial Summary',
                desc: 'At-a-glance totals: Total Income vs Regular Expenses vs Maintenance vs Wallet Balance — all updated in real time.'
            },
            {
                icon: '📋',
                title: 'Collection Sheet',
                desc: 'Dedicated Collection Sheet module for structured recording of conductor collections per trip or day, making reconciliation and commission calculation straightforward for multi-bus operators.'
            },
        ],
        features: [
            'Owner dashboard with live balance & todays profit',
            'Bus registration with route, type & commission rate',
            'Staff management: drivers, conductors, mechanics & more',
            '3-step daily entry: collection → staff → expenses',
            'Full transaction history with per-day net profit',
            'Maintenance expense tracking (separate from regular)',
            'Wallet with withdraw funds functionality',
            'Collection sheet for structured daily reconciliation',
            'Financial summary: income vs expenses vs balance',
            'Real data across months with Load More pagination'
        ]
    }
};

export default function ProjectDetail({ slug }) {
    const project = projectData[slug];
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    if (!project) return notFound();

    const isDevelopmentProject =
        project.category === 'Web Application Development' ||
        project.category === 'Website Development';

    const galleryImages = {
        'cinema-casting-company': [
            { src: '/cinema1.png', alt: 'Cinema App Screen 1' },
            { src: '/cinema2.png', alt: 'Casting Profile' },
            { src: '/cinema3.png', alt: 'Social Feed' },
        ],
        'emassh-online-tuition': [
            { src: '/emassh-1.png', alt: 'Main Dashboard' },
            { src: '/emassh-2.png', alt: 'Classes View' },
            { src: '/emassh-3.png', alt: 'Analytics' },
        ],
        'tasty-toast-cafe': [
            { src: '/ttc-1.png', alt: 'Financial Dashboard' },
            { src: '/ttc-1.png', alt: 'Financial Reports' },
            { src: '/ttc-1.png', alt: 'Staff Management' },
        ],
        'bus-book-fleet-management': [
            { src: '/busbook/bus-2.png', alt: 'Main Dashboard' },
            { src: '/busbook/busbook.png', alt: 'Fleet Overview' },
            { src: '/busbook/busbook2.png', alt: 'Fleet Details' },
        ],
    };

    const images = galleryImages[slug] || [];

    return (
        <section
            ref={sectionRef}
            className="bg-white text-gray-900 pt-20 pb-0 sm:py-24 lg:py-28 xl:py-28 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-[1200px] mx-auto">

                {/* ── Back Link ── */}
                <div className={`mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                </div>

                {/* ── Header ── */}
                <div className={`mb-6 sm:mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    <span className="inline-block px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3 uppercase tracking-widest">
                        {project.category}
                    </span>

                    <h1
                        style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#1a1a1a] leading-[1.15] mb-3 sm:mb-4 max-w-3xl"
                    >
                        {project.title}
                    </h1>

                    {/* Accent underline */}
                    <div className="flex gap-1 mb-3 sm:mb-5">
                        <div className="h-[4px] bg-[#F7D046] rounded-full" style={{ width: 'clamp(100px, 30vw, 280px)' }} />
                        <div className="h-[4px] bg-[#10B981] rounded-full" style={{ width: 'clamp(30px, 8vw, 72px)' }} />
                    </div>

                    <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed mb-4 sm:mb-6">
                        {project.overview}
                    </p>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-black text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                        >
                            View Live Project
                            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}
                </div>

                {/* ── Stats Bar ── */}
                {project.stats && (
                    <div className={`flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        {project.stats.map((s, i) => (
                            <div key={i} className="flex items-center gap-2 bg-[#fafafa] border border-gray-100 rounded-xl px-5 py-3">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{s.label}</p>
                                    <p className="text-sm font-bold text-gray-800 mt-0.5">{s.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── Features + Hero Image ── */}
                <div className={`grid lg:grid-cols-2 gap-4 sm:gap-8 items-start mb-6 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Features Card */}
                    <div className="bg-[#fafafa] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 tracking-tight">
                            Key Features
                        </h2>
                        <ul className="space-y-3.5">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDevelopmentProject ? 'bg-[#10B981]' : 'bg-gray-500'}`}>
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hero Image */}
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <img
                            src={project.heroImage}
                            alt={`${project.title} screenshot`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* ── Feature Highlights Grid (detailed breakdown) ── */}
                {project.highlights && (
                    <div className={`mb-6 sm:mb-16 transition-all duration-1000 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">How It Works</h2>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {project.highlights.map((h, i) => (
                                <div
                                    key={i}
                                    className="bg-[#fafafa] border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="text-2xl mb-3">{h.icon}</div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1.5 tracking-tight">{h.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Gallery ── */}
                {images.length > 0 && (
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Project Gallery</h2>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-56 sm:h-60 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── CTA ── */}
                <div className={`mt-6 mb-6 sm:mt-16 sm:mb-0 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative bg-[#f9fafb] rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-gray-100 overflow-hidden text-center">

                        {/* decorative blobs */}
                        <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#F7D046]/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#10B981]/15 blur-3xl" />

                        <h3 className="relative text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            Want something similar built for you?
                        </h3>
                        <p className="relative text-gray-500 mb-5 sm:mb-7 max-w-md mx-auto text-sm sm:text-base">
                            Let's discuss your project requirements and create something amazing together.
                        </p>
                        <Link
                            href="/#contact"
                            className="relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#10B981] hover:bg-[#059669] rounded-full text-base font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}