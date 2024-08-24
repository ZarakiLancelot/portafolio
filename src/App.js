import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, Moon, Sun } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaDatabase,
  FaSass,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiWebpack, SiTypescript } from "react-icons/si";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getTechIcon = (tech) => {
    const iconMap = {
      HTML: FaHtml5,
      CSS: FaCss3Alt,
      JavaScript: FaJs,
      React: FaReact,
      "Vue.js": FaVuejs,
      Angular: FaAngular,
      "Node.js": FaNodeJs,
      MongoDB: SiMongodb,
      Express: SiExpress,
      Sass: FaSass,
      Webpack: SiWebpack,
      TypeScript: SiTypescript,
      Docker: FaDocker,
      AWS: FaAws,
    };
    const IconComponent = iconMap[tech] || FaDatabase;
    return <IconComponent className="text-2xl mr-2" />;
  };

  const menuItems = [
    { href: "#sobre-mi", title: "Sobre mí" },
    { href: "#experiencia", title: "Experiencia" },
    { href: "#habilidades", title: "Habilidades" },
    { href: "#proyectos", title: "Proyectos" },
  ];

  const experiences = [
    {
      company: "PAKAI Consultores",
      position: "Desarrollador Full Stack",
      period: "Noviembre 2023 - Agosto 2024",
      responsibilities: [
        "Desarrollo de nuevas funcionalidades para un sistema de seguros de gastos médicos",
        "Microservicios con SpringBoot para generación de pólizas, exclusión de riesgos, y creación de cotizaciones",
        "Creación de reportes con JasperReports para pólizas y endosos",
        "Desarrollo de nuevas funcionalidades para sistemas legacy (AngularJS) donde se realizaban autorizaciones para medicamentos y laboratorios de los asegurados a través de una API de terceros",
        "Creación y modificación de procesos automatizados (RPA) con UIPath",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "JasperReports",
        "AngularJS",
        "UIPath",
        "Angular",
        "SonarQube",
        "Git",
        "Docker",
        "Grafana",
      ],
    },
    {
      company: "EMPAGUA",
      position: "Desarrollador Full Stack",
      period: "Julio 2023 - Diciembre 2023",
      responsibilities: [
        "Desarrollo de un módulo para el pago del servicio de agua para los residentes de la ciudad de Guatemala, a través de un quiosco de la Municipalidad",
        "Desarrollo de una aplicación lowcode con Oracle APEX para la administración de herramientas e inventario en las bodegas de la empresa",
        "Creación de una aplicación con Oracle APEX para",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "JasperReports",
        "AngularJS",
        "UIPath",
        "Angular",
        "SonarQube",
        "Git",
        "Docker",
        "Grafana",
      ],
    },
    {
      company: "Empresa C",
      position: "Pasante de Desarrollo",
      period: "Enero 2018 - Mayo 2018",
      responsibilities: [
        "Asistencia en el desarrollo de componentes de UI",
        "Pruebas de unidad y de integración",
        "Documentación de código y procesos",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "JasperReports",
        "AngularJS",
        "UIPath",
        "Angular",
        "SonarQube",
        "Git",
        "Docker",
        "Grafana",
      ],
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-2xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-2xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-2xl" /> },
    { name: "React", icon: <FaReact className="text-2xl" /> },
    { name: "Vue", icon: <FaVuejs className="text-2xl" /> },
    { name: "Angular", icon: <FaAngular className="text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
    { name: "Bases de datos", icon: <FaDatabase className="text-2xl" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary cursor-default">
                Edwin Einsen
              </span>
            </div>
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <div className="flex items-center">
              {theme && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="mr-4"
                >
                  {theme === "light" ? (
                    <Moon className="h-6 w-6" />
                  ) : (
                    <Sun className="h-6 w-6" />
                  )}
                  <span className="sr-only">Cambiar tema</span>
                </Button>
              )}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4 px-4 bg-background">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="sobre-mi" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-muted-foreground">
            Aquí puedes escribir una breve introducción sobre ti, tu experiencia
            y tus objetivos profesionales.
          </p>
        </section>

        <section id="experiencia" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-background">
                    {index + 1}
                  </h1>
                </div>
                <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 relative perspective">
                  <div
                    className={`relative transition-transform duration-500 transform-style-preserve-3d ${
                      hoveredIndex === index ? "rotate-y-180" : ""
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
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card rounded-lg shadow-xl px-6 py-4 overflow-y-auto">
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

        <section id="habilidades" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Habilidades técnicas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft skills</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Trabajo en equipo</li>
                <li>Comunicación efectiva</li>
                <li>Resolución de problemas</li>
                <li>Adaptabilidad</li>
                {/* Agrega más soft skills aquí */}
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div key={project} className="border rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Proyecto ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Nombre del Proyecto {project}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Breve descripción del proyecto y las tecnologías utilizadas.
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Ver demo
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver código
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ZarakiLancelot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/edwin-einsen-vasquez-velasquez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/DevChapin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            © {new Date().getFullYear()} Edwin Einsen Vásquez Velásquez. Todos
            los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
