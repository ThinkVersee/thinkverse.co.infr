export default function About() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#d9cfae] via-[#adc8ec] to-[#6aa7e0] text-gray-900 text-center relative overflow-hidden">
      {/* Decorative circles - matching hero style */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 sm:top-20 -left-10 sm:-left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 -right-10 sm:-right-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-300 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900">About Us</h2>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed">
          <p className="text-gray-800">
            At ThinkVerse, we are passionate about transforming innovative ideas into powerful digital solutions. With years of experience in the IT industry, we specialize in delivering cutting-edge software, web, and mobile applications that drive business growth and success.
          </p>
          <p className="text-gray-800">
            Our team of skilled developers, designers, and strategists work collaboratively to understand your unique needs and create tailored solutions that exceed expectations. We believe in building long-term partnerships with our clients, ensuring every project is executed with precision, creativity, and dedication.
          </p>
        </div>
      </div>
    </section>
  );
}