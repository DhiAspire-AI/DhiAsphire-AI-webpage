import React from 'react';
import { DollarSign } from 'lucide-react';

const PricingSection = ({ COLORS }) => (
  <section id="pricing" className="py-20 md:py-28">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Simple Pricing, Massive Value
      </h2>
      <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-400">
        Our flexible plans are designed to scale with individual students and
        entire institutions.
      </p>

      <div
        className="p-10 rounded-xl shadow-2xl inline-block"
        style={{
          backgroundColor: COLORS.NAVY_PRIMARY,
          border: `2px solid ${COLORS.ACCENT_GREEN}`,
        }}
      >
        <h3
          className="text-2xl font-semibold mb-3"
          style={{ color: COLORS.ACCENT_GREEN }}
        >
          Pricing Details Coming Soon!
        </h3>
        <p className="text-lg text-gray-300">
          We are finalizing our tiered pricing model. Enter your email to be the
          first to know when it launches and receive an exclusive early bird
          discount.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full sm:w-2/3 p-3 rounded-lg border focus:border-opacity-100 focus:outline-none"
            style={{
              backgroundColor: COLORS.NAVY_DARK,
              borderColor: COLORS.ACCENT_GREEN,
              color: COLORS.TEXT_LIGHT,
            }}
          />
          <button
            className="w-full sm:w-1/3 p-3 rounded-full font-bold transition-colors duration-300 transform hover:scale-[1.01]"
            style={{
              backgroundColor: COLORS.ACCENT_GREEN,
              color: COLORS.NAVY_PRIMARY,
            }}
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
