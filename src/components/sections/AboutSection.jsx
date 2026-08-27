import { useState, useEffect } from "react";
import SequentialText from "../ui/sequentialText";

const sequentialWords = [
  "Desarrollador Frontend",
  "Desarrollador Backend",
  "Desarrollador Fullstack",
];

const AboutSection = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const startDate = new Date(2017, 9, 1); // Octubre 1, 2017
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const totalYears = yearsDiff + monthsDiff / 12;
    setYearsOfExperience(Math.floor(totalYears));
  }, []);

  return (
    <section id="sobre-mi" className="mb-16 scroll-mt-16 pt-16 -mt-16">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p className="text-muted-foreground mb-4">
        <SequentialText words={sequentialWords} interval={3000} /> con {yearsOfExperience} años de
        experiencia, con la actitud adecuada para adquirir las habilidades
        necesarias para mejorar constantemente. Con hambre de conocimiento
        continuo, siempre dispuesto a aprender y mejorar. Experiencia con
        diferentes stacks tanto en front-end como en back-end.
      </p>
      <p className="text-muted-foreground">
        Mi pasión por la tecnología y mi compromiso con la excelencia me
        impulsan a mantenerme actualizado con las últimas tendencias y
        mejores prácticas en el desarrollo de software. Siempre estoy
        buscando nuevos desafíos que me permitan crecer profesionalmente y
        contribuir de manera significativa a proyectos innovadores.
      </p>
    </section>
  );
};

export default AboutSection;
