import React from 'react';
import { Target, BarChart2, Briefcase } from 'lucide-react';

// Utility to map string name to Lucide icon component
const Icon = ({ name, size = 30, className }) => {
  const LucideIcon = { Target, BarChart2, Briefcase }[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Features = ({ featuresList, COLORS }) => (
  <section id="features" className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Core{' '}
        <span style={{ color: COLORS.ACCENT_GREEN }}>Platform Features</span>
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-16 text-gray-400">
        Our proprietary AI engine provides deep insights and personalized
        actions, transforming traditional education models into career
        launchpads.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {featuresList.map((feature, index) => {
          // Resolve icon based on the 'icon' string property (simulating dynamic imports)
          let IconComponent;
          switch (feature.icon) {
            case 'Target':
              IconComponent = Target;
              break;
            case 'BarChart2':
              IconComponent = BarChart2;
              break;
            case 'Briefcase':
              IconComponent = Briefcase;
              break;
            default:
              IconComponent = Zap; // Fallback icon
          }

          return (
            <div
              key={index}
              className="p-8 rounded-xl shadow-2xl border transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
              style={{
                backgroundColor: COLORS.GRAY_CARD,
                borderColor: COLORS.NAVY_PRIMARY,
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="p-3 rounded-full"
                  style={{
                    backgroundColor: COLORS.ACCENT_GREEN,
                    color: COLORS.NAVY_PRIMARY,
                  }}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features;
