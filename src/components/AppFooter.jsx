import React from 'react';

const AppFooter = ({ COLORS }) => (
  <footer
    className="py-10 border-t"
    style={{
      backgroundColor: COLORS.NAVY_PRIMARY,
      borderColor: COLORS.GRAY_CARD,
    }}
  >
    <div className="container mx-auto px-6 text-sm text-gray-400">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Column 1: Logo & Mission */}
        <div>
          <h3
            className="text-2xl font-extrabold tracking-tight mb-3"
            style={{ color: COLORS.ACCENT_GREEN }}
          >
            DhiAspire AI
          </h3>
          <p>
            Empowering the next generation of talent through predictive AI and
            personalized career paths.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-white transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="hover:text-white transition-colors duration-200"
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="#colleges"
                className="hover:text-white transition-colors duration-200"
              >
                Colleges
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources (Coming Soon) */}
        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li className="text-gray-500">Blog (Soon)</li>
            <li className="text-gray-500">Case Studies (Soon)</li>
            <li className="text-gray-500">Support Center (Soon)</li>
            <li className="text-gray-500">Careers (Soon)</li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li className="text-gray-500">Terms of Service</li>
            <li className="text-gray-500">Privacy Policy</li>
            <li className="text-gray-500">Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div
        className="text-center pt-6 border-t"
        style={{ borderColor: COLORS.GRAY_CARD }}
      >
        &copy; {new Date().getFullYear()} DhiAspire AI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default AppFooter;
