"use client";
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent successfully! We'll get back to you soon");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (err) {
      alert('Network error. Please check your connection.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 lg:py-10 xl:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900 leading-tight">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
            Ready to turn your vision into reality? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Main Grid — items-stretch so sidebar matches form height on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:items-stretch">

          {/* ── Contact Form ── */}
          <div className={`
            lg:col-span-2
            bg-white rounded-2xl sm:rounded-3xl shadow-xl
            p-5 sm:p-7 lg:p-10
            border border-gray-200
            flex flex-col
            transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
              Send us a message
            </h3>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Fill out the form below and we'll be in touch soon.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Full Name *</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Email Address *</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Phone Number</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Message — grows to fill remaining space on desktop */}
              <div className="flex flex-col flex-1">
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Your Message *</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required
                  className="w-full flex-1 min-h-[120px] px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 px-7 rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70"
                >
                  <Send className="w-3.5 h-3.5 flex-shrink-0" />
                  {isSending ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* ── Sidebar ── stretches to match form height on desktop */}
          <div className={`
            flex flex-col gap-5 sm:gap-6
            transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>

            {/* Mobile/tablet: two cards side by side. Desktop: stacked, filling full height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:h-full gap-5 sm:gap-6">

              {/* Blue "Get in Touch" card — flex-1 on desktop so it fills space */}
              <div className="bg-blue-500 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-col lg:flex-1">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Get in Touch</h4>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6 flex-1">
                  We're here to help and answer any question you might have. We look forward to hearing from you!
                  Our team is dedicated to providing quick and friendly support, so feel free to reach out anytime.
                </p>
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 mt-auto">
                  <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">Response Time</p>
                    <p className="text-white/80 text-xs">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* White contact details card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4">

                {/* Phone */}
                <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer hover:translate-x-1">
                  <div className="bg-blue-500 rounded-xl w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 font-medium tracking-wider">PHONE</p>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm lg:text-base">+91 9567435550</p>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm lg:text-base">+91 8848792898</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 mx-2" />

                {/* Email */}
                <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer hover:translate-x-1">
                  <div className="bg-yellow-400 rounded-xl w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 font-medium tracking-wider">EMAIL</p>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm lg:text-base break-all">
                      thinkverse.mail@gmail.com
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 mx-2" />

                {/* Office */}
                <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer hover:translate-x-1">
                  <div className="bg-teal-600 rounded-xl w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 font-medium tracking-wider">OFFICE</p>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm lg:text-base">Kottakkal</p>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm lg:text-base">Kerala, India</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}