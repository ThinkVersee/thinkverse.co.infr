'use client';

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import img1 from "../../public/common/Frame 2147225213.svg";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (id, route) => {
    if (route) {
      router.push(route);
      return;
    }

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="border-t border-gray-800 max-w-7xl mx-auto px-6" />

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <Image
          src={img1}
          alt="ThinkVerse Logo"
          width={140}
          height={45}
          className="cursor-pointer"
          onClick={() => handleNavClick("home")}
        />

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <button onClick={() => handleNavClick("home")} className="hover:text-yellow-400">• Home</button>
          <button onClick={() => handleNavClick("about")} className="hover:text-yellow-400">• About Us</button>
          <button onClick={() => handleNavClick("services")} className="hover:text-yellow-400">• Services</button>
          <button onClick={() => router.push("/portfolio")} className="hover:text-yellow-400">• Portfolio</button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-yellow-400">• Contact Us</button>
        </nav>
      </div>

      <div className="border-t border-gray-800 max-w-7xl mx-auto px-6" />

      <p className="text-center text-xs text-gray-400 py-4">
        © 2025 ThinkVerse — All rights reserved.
      </p>
    </footer>
  );
}
