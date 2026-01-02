'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ThinkVerseNavbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/', id: 'services' },
    { name: 'About Us', href: '/', id: 'about' },
    { name: 'Portfolio', href: 'portfolio'  }, // No id → goes to separate page
  ];

  // Only track scroll on homepage
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const link = navLinks.find(l => l.id === sections[i]);
          if (link) setActiveLink(link.name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (link) => {
    if (link.href.startsWith('/') && link.href !== '/works') {
      // Same page scroll
      if (pathname !== '/') {
        router.push(link.href);
        setTimeout(() => {
          document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveLink(link.name);
    } else {
      // Navigate to /works
      router.push(link.href);
    }
  };

  const handleLogoClick = () => {
    router.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active state (highlight Works when on /works)
  const currentActive = pathname === '/works' ? 'Works' : activeLink;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-8 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/Group 3.svg"
          alt="ThinkVerse Logo"
          className="h-10 w-auto cursor-pointer transition-all hover:scale-105"
          onClick={handleLogoClick}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-1 bg-zinc-900 rounded-full px-6 py-3">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm flex items-center gap-2 ${
              currentActive === link.name
                ? 'text-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {currentActive === link.name && (
              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            )}
            {link.name}
          </button>
        ))}
      </div>

      {/* Contact Button */}
      <button
        onClick={() => {
          if (pathname === '/') {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            router.push('/#contact');
          }
        }}
        className="border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm"
      >
        Contact Us
        <span className="text-lg">→</span>
      </button>
    </nav>
  );
}