import React from 'react';

const ContactSection = ({ COLORS }) => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 text-center"
      style={{
        backgroundColor: COLORS.NAVY_PRIMARY,
        color: COLORS.TEXT_LIGHT,
      }}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span style={{ color: COLORS.ACCENT_GREEN }}>Touch</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Have a question, feedback, or partnership idea? We’d love to hear from
          you. Use the form below or reach us directly via email.
        </p>

        {/* Contact Form */}
        <form
          className="space-y-6 text-left bg-gray-900 p-8 rounded-2xl shadow-2xl"
          style={{ borderColor: COLORS.ACCENT_GREEN, borderWidth: '1px' }}
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2"
              style={{ focusRingColor: COLORS.ACCENT_GREEN }}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2"
              style={{ focusRingColor: COLORS.ACCENT_GREEN }}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2"
              style={{ focusRingColor: COLORS.ACCENT_GREEN }}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: COLORS.ACCENT_GREEN,
                color: COLORS.NAVY_PRIMARY,
              }}
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional Footer Note */}
        <p className="mt-10 text-gray-400 text-sm">
          Or email us directly at{' '}
          <a
            href="mailto:contact@dhiaspireai.com"
            className="none"
            style={{ color: COLORS.ACCENT_GREEN }}
          >
            contact@dhiaspireai.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
