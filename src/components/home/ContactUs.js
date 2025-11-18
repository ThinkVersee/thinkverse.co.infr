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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Let's Build Something Amazing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Ready to turn your vision into reality? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className={`lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-200 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">Send us a message</h3>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Fill out the form below and we'll be in touch soon.</p>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-sm sm:text-black"
                />
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none text-sm sm:text-black"
                  required
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className={`space-y-5 sm:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Quick Contact Card */}
            <div className="bg-blue-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get in Touch</h4>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                We're here to help and answer any question you might have. We look forward to hearing from you!
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">Response Time</p>
                    <p className="text-white/80 text-xs">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 space-y-3 sm:space-y-4 border border-gray-200 transform transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer transform hover:translate-x-2">
                <div className="bg-blue-500 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">PHONE</p>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">+91 9567435550<br></br>+91 8848792898</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer transform hover:translate-x-2">
                <div className="bg-yellow-400 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">EMAIL</p>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base break-all">thinkverse.mail@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer transform hover:translate-x-2">
                <div className="bg-teal-600 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">OFFICE</p>
                  <p className="text-gray-900 font-semibold text-xs sm:text-sm"><br />Kerala,India</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <h5 className="font-bold mb-3 text-base sm:text-lg">Business Hours</h5>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between transition-all duration-300 hover:translate-x-2">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-semibold">9am - 6pm EST</span>
                </div>
                <div className="flex justify-between transition-all duration-300 hover:translate-x-2">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-semibold">10am - 4pm EST</span>
                </div>
                <div className="flex justify-between transition-all duration-300 hover:translate-x-2">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}