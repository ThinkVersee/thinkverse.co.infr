"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item) => {
    setIsOpen(false);

    // PORTFOLIO → separate page
    if (item === "portfolio") {
      router.push("/portfolio");
      return;
    }

    // IF already on home → scroll
    if (pathname === "/") {
      scrollToSection(item);
    } 
    // IF on another page → go home with hash
    else {
      router.push(`/#${item}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* LOGO */}
          <img
            src="/Group3.svg"
            alt="ThinkVerse Logo"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            {["home", "services", "about", "contact", "portfolio"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="capitalize text-gray-700 hover:text-blue-600 font-medium"
              >
                {label}
                <span
                  id={`dot-${id}`}
                  className="nav-dot absolute -left-6 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-0 transition-opacity duration-300"
                />
              </button>
            );
          })}
        </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {["home", "services", "about", "contact", "portfolio"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full px-4 py-3 text-left hover:bg-blue-50 capitalize"
              >
                {item === "home" ? "Home" : item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
