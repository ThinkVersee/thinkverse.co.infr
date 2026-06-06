'use client';

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
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

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="xl:col-span-2">
            <Image
              src={img1}
              alt="ThinkVerse Logo"
              width={140}
              height={45}
              className="cursor-pointer mb-5"
              onClick={() => handleNavClick("home")}
            />

            <p className="text-sm text-gray-300 leading-relaxed max-w-xl mb-5">
              ThinkVerse builds smart digital systems, automation workflows, and customer support tools
              that help businesses reduce manual work and operate with more clarity and speed.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "AI Solutions",
                "Automation",
                "Customer Support Systems",
                "Web Applications",
                "Workflow Automation",
                "Website Development",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Quick Links
            </h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Explore our studio, services, portfolio, and contact page.
            </p>
            <nav className="flex flex-col gap-3 text-sm">
              <button onClick={() => handleNavClick("home")} className="text-left hover:text-yellow-400">Home</button>
              <button onClick={() => handleNavClick("about")} className="text-left hover:text-yellow-400">About Us</button>
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-yellow-400">Services</button>
              <button onClick={() => router.push("/portfolio")} className="text-left hover:text-yellow-400">Portfolio</button>
              <button onClick={() => handleNavClick("contact")} className="text-left hover:text-yellow-400">Contact Us</button>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" />
                <div>
                  <p>+91 9567435550</p>
                  <p>+91 8848792898</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" />
                <p className="break-all">thinkverse.mail@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" />
                <div>
                  <p>Kottakkal</p>
                  <p>Kerala, India</p>
                </div>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                Available for automation projects, customer support systems, custom software, and ongoing product support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 max-w-7xl mx-auto px-6" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <p>© 2025 ThinkVerse — All rights reserved.</p>
        <p>Building smarter systems, automations, and digital products for growing businesses.</p>
      </div>
    </footer>
  );
}
