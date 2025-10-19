import React, { useState, useEffect } from 'react';

const Home = ({ COLORS }) => {
  const words = ['Employability', 'Skill', 'Workforce'];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 70 : 120;

    const type = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, words]);

  return (
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
          AI-driven employability infrastructure
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto text-white">
          Bridge the{' '}
          <span
            className="relative inline-block text-accent font-extrabold"
            style={{ color: COLORS.ACCENT_GREEN }}
          >
            {displayedText}
            <span
              className="inline-block w-[3px] h-7 bg-green-400 ml-[2px] animate-blink align-middle"
              style={{ backgroundColor: COLORS.ACCENT_GREEN }}
            ></span>
          </span>{' '}
          Gap with AI-Powered Talent EcoSystem.
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          style={{ color: COLORS.TEXT_LIGHT }}
        >
          DhiAspire AI connects education, skills, and industry demands,
          ensuring every student is job-ready and every college is data-driven.
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

      {/* Cursor blink animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            50.01%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Home;
