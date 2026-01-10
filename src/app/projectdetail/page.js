// src/app/works/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";


export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gray-50 min-h-screen">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Our Works | ThinkVerse",
  description: "Explore our portfolio of innovative web applications, websites, and digital solutions.",
};