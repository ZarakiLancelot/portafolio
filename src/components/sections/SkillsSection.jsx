import { skillLevels, softSkills } from "../../data/skills";

const SkillsSection = () => (
  <section id="habilidades" className="mb-16 scroll-mt-16 pt-16 -mt-16">
    <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Habilidades técnicas
        </h3>
        {Object.entries(skillLevels).map(([level, { description, skills }]) => (
          <div key={level} className="mb-8">
            <h4 className="text-xl font-medium mb-2 capitalize">{level}</h4>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2 border rounded-lg"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Habilidades blandas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 border rounded-lg"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
