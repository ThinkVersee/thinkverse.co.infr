'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ThinkVerseNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to show icon immediately

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/', id: 'services' },
    { name: 'About Us', href: '/', id: 'about' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMobile && menuOpen ? 'hidden' : '';
    }
  }, [menuOpen, isMobile]);

  // Active link from route
  useEffect(() => {
    if (pathname === '/') setActiveLink('Home');
    else if (pathname === '/portfolio') setActiveLink('Portfolio');
  }, [pathname]);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.href === '/') {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById(link.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.getElementById(link.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveLink(link.name);
    } else {
      router.push(link.href);
      setActiveLink(link.name);
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    router.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveLink('Home');
  };

  const handleContactClick = () => {
    setMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-zinc-900">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 py-4 min-h-[64px]">
          {/* Logo */}
          <img
            src="/Group 3.svg"
            alt="ThinkVerse Logo"
            className="h-8 w-auto cursor-pointer hover:scale-105 transition-transform"
            onClick={handleLogoClick}
          />

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-zinc-900 rounded-full px-4 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`px-5 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-200 ${
                    activeLink === link.name ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeLink === link.name && (
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  )}
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleContactClick}
              className="border border-gray-700 hover:border-gray-400 text-white px-5 py-2.5 rounded-full text-sm flex items-center gap-2 hover:bg-zinc-900 transition-all"
            >
              Contact Us <span>→</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER - ALWAYS VISIBLE ON SMALL SCREENS */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <div className="w-5 h-4 flex flex-col justify-between items-center">
              <span 
                className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
                }}
              />
              <span 
                className="block w-5 h-0.5 bg-white transition-all duration-300"
                style={{
                  opacity: menuOpen ? 0 : 1
                }}
              />
              <span 
                className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
                }}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div 
          className="md:hidden overflow-hidden bg-zinc-950 border-t border-zinc-900 transition-all duration-300"
          style={{
            maxHeight: menuOpen ? '400px' : '0px',
            opacity: menuOpen ? 1 : 0
          }}
        >
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm flex items-center gap-3 transition-all ${
                  activeLink === link.name ? 'bg-zinc-900 text-blue-400' : 'text-gray-400 hover:bg-zinc-900/50 hover:text-white'
                }`}
              >
                {activeLink === link.name && (
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                )}
                {link.name}
              </button>
            ))}

            <button
              onClick={handleContactClick}
              className="mt-2 w-full px-4 py-3 rounded-full border border-zinc-700 text-white text-sm flex items-center justify-center gap-2 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
            >
              Contact Us <span>→</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        />
      )}
    </>
  );
}