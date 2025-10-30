// src/app/page.js
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
    
      <Services />
      <About />
      <ContactUs/>
      <Footer/>

    </>
  );
}