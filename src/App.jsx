import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/sections/Home';
import Features from './components/sections/features';
import AudienceSection from './components/sections/AudienceSection';
import Pricing from './components/sections/pricing';
import Contact from './components/sections/contact';
import AppFooter from './components/AppFooter';

const COLORS = {
  NAVY_PRIMARY: '#0a1d3a',
  NAVY_DARK: '#071629',
  ACCENT_GREEN: '#00b894',
  TEXT_LIGHT: '#e0e7ff',
  GRAY_CARD: '#1e293b',
};

const featuresList = [
  {
    title: 'AI Resume Evaluation & Optimization',
    description:
      'Get AI-driven resume feedback for ATS compliance, content, and formatting. Automatically align your profile with job-specific skills and keywords to increase shortlisting chances.',
    icon: 'BarChart2',
  },
  {
    title: 'Coding & Skill Assessments',
    description:
      'Practice coding problems and domain challenges on an integrated platform with automated scoring and skill-gap analysis to improve technical readiness.',
    icon: 'Briefcase',
  },
  {
    title: 'AI-Powered Mock Interviews',
    description:
      'Simulate real interview scenarios and receive instant AI feedback on communication, technical accuracy, and confidence. Helps students identify weaknesses before facing real recruiters.',
    icon: 'Target',
  },
];

const valueProps = [
  {
    id: 'students',
    title: 'For Students: Your AI Career Navigator',
    subtitle:
      'Empower your career journey with personalized, AI-driven preparation that makes you truly job-ready — not just interview-ready.',
    bullets: [
      'AI Resume Evaluation & Optimization for ATS compliance, keyword enhancement, and professional formatting.',
      'Coding & Skill Assessments with automated scoring, real-time progress tracking, and gap analysis to improve technical readiness.',
      'AI-Powered Mock Interviews with instant feedback on technical, behavioral, and communication skills.',
    ],
    imagePlaceholder:
      'https://placehold.co/400x300/0a1d3a/a8a8a8?text=AI+Career+Readiness+Platform',
  },

  {
    id: 'colleges',
    title: 'For Colleges: Data-Driven Placement Excellence',
    subtitle:
      'Automate your placement ecosystem with AI-driven insights, saving administrative time while improving student employability outcomes.',
    bullets: [
      'Student Tracking & Readiness Analytics to monitor skill levels, placement eligibility, and performance in real time.',
      'Placement Workflow & Job Management for posting jobs, managing applications, and scheduling interviews with ease.',
      'Automated Notifications & Communication that keep students informed and placement officers organized without manual follow-ups.',
    ],
    imagePlaceholder:
      'https://placehold.co/400x300/0a1d3a/a8a8a8?text=College+Placement+Analytics+Dashboard',
  },
];

const App = () => {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: COLORS.NAVY_DARK, color: COLORS.TEXT_LIGHT }}
    >
      <Navbar COLORS={COLORS} />

      <main className="pt-20">
        <Home COLORS={COLORS} />
        <Features featuresList={featuresList} COLORS={COLORS} />
        {valueProps.map((prop, index) => (
          <AudienceSection
            key={prop.id}
            prop={prop}
            index={index}
            COLORS={COLORS}
          />
        ))}
        <Pricing COLORS={COLORS} />
        <Contact COLORS={COLORS} />
      </main>

      <AppFooter COLORS={COLORS} />
    </div>
  );
};

export default App;
