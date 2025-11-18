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