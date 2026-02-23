"use client";

import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { projectsData } from '@/data/projectsData';

// ────────────────────────────────────────────────
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// ────────────────────────────────────────────────

export default function ProjectDetail({ slug }) {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return notFound();

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isDevelopmentProject =
    project.category === 'Web Application Development' ||
    project.category === 'Website Development';

  const {
    title,
    category,
    heroImage,
    overview = project.description, // fallback
    liveUrl,
    stats,
    features,
    highlights,
    gallery = [],
  } = project;

  return (
    <section
      ref={sectionRef}
      className="bg-white text-gray-900 pt-20 pb-0 sm:py-24 lg:py-28 xl:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Back Link */}
        <div
          className={`mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <div
          className={`mb-6 sm:mb-12 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3 uppercase tracking-widest">
            {category}
          </span>

          <h1
            style={{ fontFamily: 'Halenoir, sans-serif', fontWeight: 500 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#1a1a1a] leading-[1.15] mb-3 sm:mb-4 max-w-3xl"
          >
            {title}
          </h1>

          <div className="flex gap-1 mb-3 sm:mb-5">
            <div
              className="h-[4px] bg-[#F7D046] rounded-full"
              style={{ width: 'clamp(100px, 30vw, 280px)' }}
            />
            <div
              className="h-[4px] bg-[#10B981] rounded-full"
              style={{ width: 'clamp(30px, 8vw, 72px)' }}
            />
          </div>

          <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed mb-4 sm:mb-6">
            {overview}
          </p>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-black text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              View Live Project
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        {/* Stats Bar */}
        {stats && stats.length > 0 && (
          <div
            className={`flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#fafafa] border border-gray-100 rounded-xl px-5 py-3"
              >
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    {s.label}
                  </p>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features + Hero Image */}
        <div
          className={`grid lg:grid-cols-2 gap-4 sm:gap-8 items-start mb-6 sm:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Features Card */}
          <div className="bg-[#fafafa] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 tracking-tight">
              Key Features
            </h2>
            <ul className="space-y-3.5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDevelopmentProject ? 'bg-[#10B981]' : 'bg-gray-500'
                    }`}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl h-74 sm:h-82 lg:h-140 overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <img
              src={heroImage}
              alt={`${title} screenshot`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Feature Highlights Grid */}
        {highlights && highlights.length > 0 && (
          <div
            className={`mb-6 sm:mb-16 transition-all duration-1000 delay-250 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                How It Works
              </h2>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-[#fafafa] border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl mb-3">{h.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5 tracking-tight">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery – Now using Swiper */}
        {gallery.length > 0 && (
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                Project Gallery
              </h2>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation={{
                  nextEl: '.swiper-button-next-gallery',
                  prevEl: '.swiper-button-prev-gallery',
                }}
                pagination={{ 
                  clickable: true,
                  // You can hide pagination on desktop if you want:
                  // el: '.swiper-pagination-gallery',
                  // dynamicBullets: true,
                }}
                loop={gallery.length > 3}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="!pb-12" // space for pagination dots
              >
                {gallery.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="group relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                    >
                      <img
                        src={img.src}
                        alt={img.alt || `${title} gallery image ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Arrows – visible on all sizes, but you can hide on mobile if preferred */}
              <button
                className="swiper-button-prev-gallery absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-md hover:bg-white transition-colors disabled:opacity-40"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                className="swiper-button-next-gallery absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-md hover:bg-white transition-colors disabled:opacity-40"
              >
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Optional: Pagination dots (visible by default via Swiper) */}
              {/* If you want to customize position or hide on desktop, add: */}
              {/* <div className="swiper-pagination-gallery mt-4" /> */}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className={`mt-6 mb-6 sm:mt-16 sm:mb-0 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-[#f9fafb] rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-gray-100 overflow-hidden text-center">
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