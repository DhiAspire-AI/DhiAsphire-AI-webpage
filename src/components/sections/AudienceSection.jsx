import React from 'react';
import { CheckCircle } from 'lucide-react';

const AudienceSection = ({ prop, index, COLORS }) => {
  const isStudentSection = prop.id === 'students';

  // Alternate layout based on index
  const isReversed = index % 2 !== 0;
  const imageOrder = isReversed ? 'lg:order-last' : 'lg:order-first';
  const textOrder = isReversed ? 'lg:order-first' : 'lg:order-last';

  // Split title at ':' (fallback if missing)
  const titleParts =
    prop.title.split(':').length > 1
      ? prop.title.split(':')
      : [
          prop.title.substring(
            0,
            prop.title.indexOf(':') > 0 ? prop.title.indexOf(':') : 15,
          ),
          prop.title.substring(
            prop.title.indexOf(':') > 0 ? prop.title.indexOf(':') + 1 : 15,
          ),
        ];

  return (
    <section id={prop.id} className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-12`}>
          {/* Image/Placeholder Column */}
          <div className={`w-full lg:w-1/2 ${imageOrder}`}>
            <img
              src={prop.imagePlaceholder}
              alt={`${prop.title} Illustration`}
              className="w-full h-auto object-cover rounded-lg shadow-2xl transition-all duration-500 hover:shadow-3xl"
              loading="lazy"
            />
          </div>

          {/* Text Content Column */}
          <div className={`w-full lg:w-1/2 ${textOrder}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: COLORS.ACCENT_GREEN }}>
                {titleParts[0]}
              </span>
              : {titleParts[1]}
            </h2>
            <p className="text-xl mb-6 text-gray-300">{prop.subtitle}</p>

            <ul className="space-y-4 mb-8">
              {prop.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle
                    size={20}
                    className="mt-1 flex-shrink-0"
                    style={{ color: COLORS.ACCENT_GREEN }}
                  />
                  <p className="text-lg text-gray-400">{bullet}</p>
                </li>
              ))}
            </ul>

            <button
              className="px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.05]"
              style={{
                backgroundColor: COLORS.ACCENT_GREEN,
                color: COLORS.NAVY_PRIMARY,
              }}
            >
              {isStudentSection ? 'Sign Up for Free' : 'Request a Demo'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
