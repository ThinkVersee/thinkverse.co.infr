"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import img1 from "../../public/common/Group 3.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={img1}
              alt="ThinkVerse Logo"
              width={140}
              height={45}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-gray-600 font-normal text-base">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/works" className="hover:text-blue-600 transition-colors">
              Works
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md"
        >
          Contact Us
          <span className="text-lg">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg px-6 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 py-2">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 py-2">
            About Us
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-blue-600 py-2"
          >
            Services
          </Link>
          <Link href="/works" className="block text-gray-700 hover:text-blue-600 py-2">
            Works
          </Link>
          <Link
            href="/contact"
            className="block text-center bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 mt-4"
          >
            Contact Us →
          </Link>
        </div>
      )}
    </nav>
  );
}