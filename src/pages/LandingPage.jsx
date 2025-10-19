// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/sections/Home';
import ProblemSection from '../components/ProblemSection/ProblemSection';
import SolutionSection from '../components/SolutionSection/SolutionSection';
import Features from '../components/Features/Features';
import USPSection from '../components/USPSection/USPSection';
import VisionMission from '../components/VisionMission/VisionMission';
import Roadmap from '../components/Roadmap/Roadmap';
import Pricing from '../components/Pricing/Pricing';
import BrandStory from '../components/BrandStory/BrandStory';
import CTASection from '../components/CTASection/CTASection';
import Footer from '../components/Footer/Footer';
import '../styles/global.scss';

const LandingPage = () => {
  return (
    <div className="bg-darkNavy text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <USPSection />
      <VisionMission />
      <Roadmap />
      <Pricing />
      <BrandStory />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
