import React from 'react';

const Home = ({ COLORS }) => (
  <section
    id="home"
    className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    style={{
      background: `radial-gradient(circle at top, ${COLORS.NAVY_PRIMARY} 0%, ${COLORS.NAVY_DARK} 80%)`,
    }}
  >
    <div className="container mx-auto px-6 text-center z-10">
      <p
        className="text-sm font-semibold uppercase tracking-widest mb-3"
        style={{ color: COLORS.ACCENT_GREEN }}
      >
        The Future of Employability
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
        Bridge the{' '}
        <span className="relative inline-block">
          Skill Gap
          <span
            className="absolute bottom-0 left-0 w-full h-1 rounded-full"
            style={{ backgroundColor: COLORS.ACCENT_GREEN, opacity: 0.5 }}
          ></span>
        </span>{' '}
        with AI-Powered Career Intelligence.
      </h1>
      <p
        className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
        style={{ color: COLORS.TEXT_LIGHT }}
      >
        DhiAspire connects education, skills, and industry demands, ensuring
        every student is job-ready and every college is data-driven.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
          style={{
            backgroundColor: COLORS.ACCENT_GREEN,
            color: COLORS.NAVY_PRIMARY,
          }}
        >
          Start Your Journey Today
        </button>
        <button
          className="px-8 py-3 rounded-full font-bold border-2 transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
          style={{
            borderColor: COLORS.ACCENT_GREEN,
            color: COLORS.ACCENT_GREEN,
          }}
        >
          Explore Platform Demo
        </button>
      </div>
    </div>
  </section>
);

export default Home;
