import { Instagram, Facebook } from 'lucide-react';
import img1 from "../../public/common/Frame 2147225213.svg";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-black text-white relative overflow-hidden">
            {/* Top border line */}
            <div className="border-t border-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            
            {/* Main footer content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
               
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={img1}
                                alt="ThinkVerse Logo"
                                width={140}
                                height={45}
                                className="object-contain w-28 sm:w-32 md:w-36 h-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
                        <a href="#home" className="hover:text-yellow-400 transition-colors whitespace-nowrap">• Home</a>
                        <a href="#about" className="hover:text-yellow-400 transition-colors whitespace-nowrap">• About Us</a>
                        <a href="#works" className="hover:text-yellow-400 transition-colors whitespace-nowrap">• Works</a>
                        <a href="#contact" className="hover:text-yellow-400 transition-colors whitespace-nowrap">• Contact Us</a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex gap-2 sm:gap-3">
                        <a href="#behance" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.5 4.5h4.8c3.4 0 5.2 1.7 5.2 4.6 0 2.1-1 3.6-2.8 4.2 2.3.5 3.3 2.3 3.3 4.7 0 3.4-2.1 5.5-5.9 5.5H6.5V4.5zm3.8 7.5h1.2c1.5 0 2.4-.8 2.4-2.2s-.9-2.1-2.4-2.1h-1.2v4.3zm0 8.4h1.5c1.7 0 2.7-.9 2.7-2.5s-1-2.4-2.7-2.4h-1.5v4.9zm8.9-12.9h5v1.5h-5V7.5z" />
                            </svg>
                        </a>
                        <a href="#instagram" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a href="#instagram2" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a href="#facebook" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 sm:mt-10 lg:mt-12"></div>
                
                <div className="text-center sm:text-right mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
                    © 2025 ThinkVerse — All rights reserved.
                </div>
            </div>
        </footer>
    );
}