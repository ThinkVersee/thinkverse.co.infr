export default function About() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Removed background image and overlay */}

      {/* Centered White Card */}
      <div className="relative z-10 max-w-4xl mx-4 sm:mx-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl px-12 py-16 sm:px-16 sm:py-20 md:px-20 md:py-24 text-center border border-gray-100">
          {/* Pill Button */}
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-7 py-3 mb-12 text-sm font-medium text-gray-600 bg-white">
            <span className="text-gray-400">•</span>
            ABOUT THINKVERSE
          </div>

          {/* Main Heading */}
          <h2 
            className="text-gray-900 mb-8" 
            style={{ 
              fontFamily: 'Halenoir, Georgia, serif',
              fontWeight: 500,
              fontSize: '54px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            Who we are
          </h2>

          {/* Multi-color Underline (Yellow + Green) */}
          <div className="flex justify-center gap-1 mb-12">
            <div style={{ width: '315px', height: '5px', backgroundColor: '#F7D046', borderRadius: '3px' }}></div>
            <div style={{ width: '80px', height: '5px', backgroundColor: '#10B981', borderRadius: '3px' }}></div>
          </div>

          {/* Description Text */}
          <div 
            style={{ 
              maxWidth: '607px',
              fontFamily: 'Halenoir, Georgia, serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#000000B2',
              margin: '0 auto'
            }}
          >
            <p className="mb-6">
              Thinkverse is a creative IT service company focused on building modern digital experiences through design, technology, and strategy.<br></br>
              We don't just deliver projects — we collaborate, think deeply, and build products that make an impact.
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Removed decorative blurred circles for cleaner look */}
      {/* If you want to keep subtle accents, uncomment below */}
      {/* 
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
      */}
    </section>
  );
}