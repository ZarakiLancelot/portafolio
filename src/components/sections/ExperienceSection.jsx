import { useState } from "react";
import { experiences } from "../../data/experiences";
import { getTechIcon } from "../../data/techIcons";

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpand = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experiencia" className="mb-16 scroll-mt-16 pt-16 -mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="hidden md:block order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full shrink-0 mr-4 md:mr-0">
              <h1 className="mx-auto font-semibold text-lg text-background">
                {index + 1}
              </h1>
            </div>
            <div className="order-1 bg-card rounded-lg shadow-xl flex-1 md:flex-none md:w-5/12 px-6 py-4 relative perspective">
              <div
                className={`relative transition-transform duration-500 transform-style-preserve-3d ${
                  hoveredIndex === index ? "md:rotate-y-180" : ""
                }`}
              >
                <div className="backface-hidden">
                  <h3 className="font-bold text-primary text-xl mb-1">
                    {exp.company}
                  </h3>
                  <h4 className="font-semibold text-lg mb-1">
                    {exp.position}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.period}
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  {exp.responsibilities.length > 2 && (
                    <ul
                      className={`list-disc list-inside text-sm text-muted-foreground mt-1 ${
                        expandedCards[index] ? "block" : "hidden"
                      } md:block`}
                    >
                      {exp.responsibilities.slice(2).map((resp, idx) => (
                        <li key={idx + 2}>{resp}</li>
                      ))}
                    </ul>
                  )}
                  {expandedCards[index] && (
                    <div className="md:hidden mt-4">
                      <h4 className="font-semibold text-sm text-primary mb-2">
                        Tecnologías utilizadas
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 p-2 border rounded-lg text-xs"
                          >
                            {getTechIcon(tech)}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleCardExpand(index)}
                    className="md:hidden mt-3 text-primary text-sm font-medium"
                  >
                    {expandedCards[index] ? "Ver menos ▲" : "Ver más ▼"}
                  </button>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card rounded-lg shadow-xl px-6 py-4 overflow-y-auto hidden md:block">
                  <h3 className="font-bold text-primary text-xl mb-4">
                    Tecnologías utilizadas
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {exp.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-2 border rounded-lg"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
