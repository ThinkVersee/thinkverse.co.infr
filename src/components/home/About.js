export default function About() {
  return (
    <section className="relative bg-white flex items-center justify-center overflow-hidden    px-4 sm:px-6 lg:px-8">

      {/* Centered White Card */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-white rounded-[1rem] sm:rounded-[1rem] lg:rounded-[2rem]   px-6 py-5 sm:px-5 sm:py-7 md:px-16 md:py-18 lg:px-20 lg:py-12 text-center border border-gray-200">

          {/* Pill Button */}
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-3 mb-8 sm:mb-10 lg:mb-12 text-xs sm:text-sm font-medium text-gray-600 bg-white">
            <span className="text-gray-400">•</span>
            ABOUT THINKVERSE
          </div>

          {/* Main Heading */}
          <h2
            className="text-gray-900 mb-6 sm:mb-7 lg:mb-8 text-4xl sm:text-5xl lg:text-[54px]"
            style={{
              fontFamily: 'Halenoir, Georgia, serif',
              fontWeight: 500,
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Who we are
          </h2>

          {/* Multi-color Underline */}
          <div className="flex justify-center gap-1 mb-8 sm:mb-10 lg:mb-12">
            <div
              className="h-[4px] sm:h-[5px] rounded-[3px]"
              style={{
                width: 'clamp(140px, 40vw, 315px)',
                backgroundColor: '#F7D046',
              }}
            />
            <div
              className="h-[4px] sm:h-[5px] rounded-[3px]"
              style={{
                width: 'clamp(40px, 10vw, 80px)',
                backgroundColor: '#10B981',
              }}
            />
          </div>

          {/* Description Text */}
          <div
            className="text-sm sm:text-base mx-auto px-0 sm:px-4 md:px-0"
            style={{
              maxWidth: '607px',
              fontFamily: 'Halenoir, Georgia, serif',
              fontWeight: 400,
              lineHeight: '1.6',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#000000B2',
            }}
          >
            <p>
              Thinkverse is a creative IT service company focused on building modern digital
              experiences through design, technology, and strategy.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              We don't just deliver projects — we collaborate, think deeply, and build products
              that make an impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}