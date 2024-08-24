import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  Mail,
  Phone,
} from "lucide-react";
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
  FaJava,
  FaGitAlt,
  FaRegFilePdf,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiWebpack,
  SiTypescript,
  SiSpring,
  SiPostgresql,
  SiHeroku,
  SiNetlify,
  SiRuby,
  SiRubyonrails,
  SiPython,
  SiNewrelic,
  SiMysql,
  SiOracle,
  SiLaravel,
  SiSonarqube,
  SiKotlin,
  SiPhp,
  SiVisualbasic,
  SiVisualstudio,
  SiVisualstudiocode,
  SiRubymine,
  SiEclipseide,
  SiIntellijidea,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiCircleci,
  SiJira,
  SiTrello,
  SiElasticsearch,
  SiMagento,
  SiRedis,
  SiGnubash,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiFirebase,
  SiJest,
  SiMicrosoftsqlserver,
  SiSqlite,
  SiMariadb,
  SiPostman,
  SiGrafana,
  SiUipath,
  SiRabbitmq,
  SiSelenium,
  SiApachekafka,
  SiApachetomcat,
  SiApachenetbeanside,
} from "react-icons/si";
import { RiAngularjsFill } from "react-icons/ri";
import { GiFox, GiGears } from "react-icons/gi";
import { DiScrum, DiAndroid, DiNginx } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { BiBrain, BiConversation } from "react-icons/bi";
import { MdOutlineGroupWork, MdOutlineAccountTree } from "react-icons/md";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const startDate = new Date(2017, 9, 1); // Octubre 1, 2017
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const totalYears = yearsDiff + monthsDiff / 12;
    setYearsOfExperience(Math.floor(totalYears));
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Resetear el formulario después del envío
    setFormData({ name: "", email: "", message: "" });
  };

  const skillLevels = {
    basico: {
      description: "Conozco los conceptos fundamentales, he realizado proyectos simples, configuraciones sencillas y en algunos casos, aprendiendo de algunas de estas tecnologías.",
      skills: [
        { name: "AWS", icon: <FaAws className="text-2xl" /> },
        { name: "Figma", icon: <FaFigma className="text-2xl" /> },
        { name: "Grafana", icon: <SiGrafana className="text-2xl" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-2xl" /> },
        { name: "Visual Basic", icon: <SiVisualbasic className="text-2xl" /> },
        { name: "React", icon: <FaReact className="text-2xl" /> },
        { name: "Vue", icon: <FaVuejs className="text-2xl" /> },
        { name: "Django", icon: <SiDjango className="text-2xl" /> },
        { name: "Firebase", icon: <SiFirebase className="text-2xl" /> },
        { name: "UIpath", icon: <SiUipath className="text-2xl" /> },
        { name: "RabbitMQ", icon: <SiRabbitmq className="text-2xl" /> },
        { name: "Selenium", icon: <SiSelenium className="text-2xl" /> },
        { name: "Kafka", icon: <SiApachekafka className="text-2xl" /> },
        { name: "Sass", icon: <FaSass className="text-2xl" /> },
        { name: "Webpack", icon: <SiWebpack className="text-2xl" /> },
        { name: "Heroku", icon: <SiHeroku className="text-2xl" /> },
        { name: "Netlify", icon: <SiNetlify className="text-2xl" /> },
        { name: "New Relic", icon: <SiNewrelic className="text-2xl" /> },
        { name: "SonarQube", icon: <SiSonarqube className="text-2xl" /> },
        { name: "Jest", icon: <SiJest className="text-2xl" /> },
        {
          name: "SQLServer",
          icon: <SiMicrosoftsqlserver className="text-2xl" />,
        },
        { name: "Visual Studio", icon: <SiVisualstudio className="text-2xl" /> },
        { name: "Eclipse IDE", icon: <SiEclipseide className="text-2xl" /> },
        { name: "CircleCI", icon: <SiCircleci className="text-2xl" /> },
        { name: "Elasticsearch", icon: <SiElasticsearch className="text-2xl" /> },
        { name: "Redis", icon: <SiRedis className="text-2xl" /> },
        { name: "AngularJS", icon: <RiAngularjsFill className="text-2xl" /> },
        { name: "Android", icon: <DiAndroid className="text-2xl" /> },
        { name: "Tomcat", icon: <SiApachetomcat className="text-2xl" /> },
        { name: "Netbeans", icon: <SiApachenetbeanside className="text-2xl" /> },
        { name: "Nginx", icon: <DiNginx className="text-2xl" /> },
        { name: "Magento", icon: <SiMagento className="text-2xl" /> },
      ]
    },
    intermedio: {
      description: "Tengo experiencia y puedo trabajar de forma independiente en proyectos de mediana complejidad y un poco más. Así como ser capaz de enseñar a otros.",
      skills: [
        { name: "Java", icon: <FaJava className="text-2xl" /> },
        { name: "Spring", icon: <SiSpring className="text-2xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-2xl" /> },
        { name: "PHP", icon: <SiPhp className="text-2xl" /> },
        { name: "Python", icon: <SiPython className="text-2xl" /> },
        { name: "Flask", icon: <SiFlask className="text-2xl" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-2xl" /> },
        { name: "Laravel", icon: <SiLaravel className="text-2xl" /> },
        { name: "Angular", icon: <FaAngular className="text-2xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
        { name: "Docker", icon: <FaDocker className="text-2xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-2xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
        { name: "Express", icon: <SiExpress className="text-2xl" /> },  
        { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },      
        { name: "CSS", icon: <FaCss3Alt className="text-2xl" /> },      
        { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },     
        { name: "MySQL", icon: <SiMysql className="text-2xl" /> },
        { name: "Oracle", icon: <SiOracle className="text-2xl" /> },     
        { name: "SQLite", icon: <SiSqlite className="text-2xl" /> },
        { name: "SQL", icon: <TbSql className="text-2xl" /> },
        { name: "MariaDB", icon: <SiMariadb className="text-2xl" /> },
        { name: "Postman", icon: <SiPostman className="text-2xl" /> },
        { name: "GitHub", icon: <SiGithub className="text-2xl" /> },
        { name: "GitLab", icon: <SiGitlab className="text-2xl" /> },
        { name: "Bitbucket", icon: <SiBitbucket className="text-2xl" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-2xl" /> },
        { name: "RubyMine", icon: <SiRubymine className="text-2xl" /> },
        { name: "GNU Bash", icon: <SiGnubash className="text-2xl" /> },
      ]
    },
    avanzado: {
      description: "Tengo mucha experiencia y conocimiento de la tecnología, puedo resolver problemas complejos y soy capaz de enseñar a otros.",
      skills: [
        { name: "Ruby", icon: <SiRuby className="text-2xl" /> },
        { name: "Ruby on Rails", icon: <SiRubyonrails className="text-2xl" /> },
        { name: "HTML", icon: <FaHtml5 className="text-2xl" /> },
        { name: "JasperReports", icon: <FaRegFilePdf className="text-2xl" /> },
        {
          name: "Visual Studio Code",
          icon: <SiVisualstudiocode className="text-2xl" />,
        },
        { name: "Jira", icon: <SiJira className="text-2xl" /> },
        { name: "Trello", icon: <SiTrello className="text-2xl" /> },
        { name: "Scrum", icon: <DiScrum className="text-2xl" /> },
      ]
    },
  };

  const projects = [
    {
      name: "Spectrum FEL",
      description: "Portal administrativo para los documentos tributarios de la corporación, así como el envío de correos individualmente y de forma masiva.",
      placeholder: "/assets/img/spectrum.gif",
      url: "https://spectrum.feel.com.gt/",
      code: "",
      technologies: "Ruby on Rails, HTML, CSS, JavaScript"
    },
    {
      name: "FigueVel",
      description: "Sitio web estático para restaurante y/o cafetería.",
      placeholder: "/assets/vids/figuevel.webm",
      url: "https://figuevel.netlify.app/",
      code: "https://github.com/ZarakiLancelot/figuevel",
      technologies: "HTML, CSS, JavaScript, Netlify"
    },
    {
      name: "Popochos",
      description: "Sitio web estático para emprendimiento de Repostería.",
      placeholder: "/assets/vids/popochos.webm",
      url: "https://popochos.shop",
      code: "https://github.com/ZarakiLancelot/popochos",
      technologies: "HTML, CSS, JavaScript"
    },
    {
      name: "Blog - DevChapin",
      description: "Blog personal para compartir conocimiento sobre diferentes tecnologías, pero principalmente de Ruby.",
      placeholder: "/assets/vids/devchapin.webm",
      url: "https://developer-chapin.com",
      code: "https://github.com/ZarakiLancelot/blog",
      technologies: "Ruby, HTML, CSS, JavaScript, Bridgetown"
    },
    {
      name: "Blog de Café",
      description: "Sitio web estático sobre un Blog de Café.",
      placeholder: "/assets/vids/blogcafe.webm",
      url: "https://blog-cafe-einsen.netlify.app/",
      code: "",
      technologies: "HTML, CSS, JavaScript"
    },
    {
      name: "Bienes Raíces",
      description: "Sitio web estático para venta y compra de Bienes Raíces.",
      placeholder: "/assets/vids/bienesraices.webm",
      url: "https://bienes-raices-einsen.netlify.app/",
      code: "https://github.com/ZarakiLancelot/bienes-raices-einsen",
      technologies: "HTML, CSS, JavaScript"
    }
  ]

  const softSkills = [
    {
      name: "Trabajo en equipo",
      icon: <MdOutlineGroupWork className="text-2xl" />,
    },
    {
      name: "Comunicación efectiva",
      icon: <BiConversation className="text-2xl" />,
    },
    {
      name: "Resolución de problemas",
      icon: <MdOutlineAccountTree className="text-2xl" />,
    },
    { name: "Adaptabilidad", icon: <GiGears className="text-2xl" /> },
    { name: "Aprendizaje continuo", icon: <BiBrain className="text-2xl" /> },
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      HTML: FaHtml5,
      CSS: FaCss3Alt,
      JavaScript: FaJs,
      React: FaReact,
      "Vue.js": FaVuejs,
      Angular: FaAngular,
      "Node.js": FaNodeJs,
      Databases: FaDatabase,
      MongoDB: SiMongodb,
      Express: SiExpress,
      Sass: FaSass,
      Webpack: SiWebpack,
      TypeScript: SiTypescript,
      Docker: FaDocker,
      AWS: FaAws,
      Java: FaJava,
      Spring: SiSpring,
      Git: FaGitAlt,
      PostgreSQL: SiPostgresql,
      Heroku: SiHeroku,
      Netlify: SiNetlify,
      Ruby: SiRuby,
      "Ruby on Rails": SiRubyonrails,
      Python: SiPython,
      "New Relic": SiNewrelic,
      MySQL: SiMysql,
      Oracle: SiOracle,
      Laravel: SiLaravel,
      SonarQube: SiSonarqube,
      Kotlin: SiKotlin,
      PHP: SiPhp,
      "Visual Basic": SiVisualbasic,
      "Visual Studio": SiVisualstudio,
      "Visual Studio Code": SiVisualstudiocode,
      RubyMine: SiRubymine,
      "Eclipse IDE": SiEclipseide,
      "IntelliJ IDEA": SiIntellijidea,
      GitHub: SiGithub,
      GitLab: SiGitlab,
      Bitbucket: SiBitbucket,
      CircleCI: SiCircleci,
      Jira: SiJira,
      Trello: SiTrello,
      Elasticsearch: SiElasticsearch,
      Magento: SiMagento,
      Redis: SiRedis,
      "GNU Bash": SiGnubash,
      AngularJS: RiAngularjsFill,
      Scrum: DiScrum,
      "Visual Fox": GiFox,
      JasperReports: FaRegFilePdf,
      Android: DiAndroid,
      Flask: SiFlask,
      FastAPI: SiFastapi,
      Django: SiDjango,
      Firebase: SiFirebase,
      Jest: SiJest,
      SQLServer: SiMicrosoftsqlserver,
      SQLite: SiSqlite,
      SQL: TbSql,
      MariaDB: SiMariadb,
      Postman: SiPostman,
      Grafana: SiGrafana,
      UIpath: SiUipath,
      RabbitMQ: SiRabbitmq,
      Selenium: SiSelenium,
      Kafka: SiApachekafka,
      Tomcat: SiApachetomcat,
      Netbeans: SiApachenetbeanside,
      Nginx: DiNginx,
      Figma: FaFigma,
    };
    const IconComponent = iconMap[tech] || FaDatabase;
    return <IconComponent className="text-2xl mr-2" />;
  };

  const menuItems = [
    { href: "#sobre-mi", title: "Sobre mí" },
    { href: "#experiencia", title: "Experiencia" },
    { href: "#habilidades", title: "Habilidades" },
    { href: "#proyectos", title: "Proyectos" },
    { href: "#contacto", title: "Contacto" },
  ];

  const experiences = [
    {
      company: "Freelance",
      position: "Desarrollador Full Stack",
      period: "Octubre 2018 - Presente",
      responsibilities: [
        "Desarrollo e implementación de API para factura electrónica FEL",
        "Diseño y desarrollo de serivicos web y RESTful APIs con .NET Framework",
        "Creación de reportes con JasperReports",
        "Desarrollo de aplicación móvil para proveer de asistencia médica a los usuarios mediante geolocalización y sensor de movimiento",
        "Desarrollo de sistemas a la medida en diferentes tecnologías",
        "Desarrollo de Sistema de tickets para proveer soporte en tiempo real, mejorando la respuesta en la resolución de estos en un 65%",
        "Generación de prototipos, mockups, y wireframes en Figma"
      ],
      technologies: [
        "Ruby on Rails",
        "Laravel",
        "Java",
        "Spring",
        "JasperReports",
        "API Rest",
        "Docker",
        "Git",
        "GitLab",
        "Angular",
        "React",
        "JavaScript",
        "Oracle",
        "MySQL",
        "SQL",
        "Jira",
        "Trello",
        "Kotlin",
        "Android",
        "Python",
        "Flask",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "AWS",
        "Netlify",
        "Figma",
      ],
    },
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
        "Spring",
        "JasperReports",
        "API Rest",
        "Docker",
        "Git",
        "GitLab",
        "Angular",
        "AngularJS",
        "JavaScript",
        "UIpath",
        "SonarQube",
        "Grafana",
        "MariaDB",
        "Oracle",
        "MySQL",
        "SQL",
        "Jira",
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
        "Oracle APEX",
        "JasperReports",
        "PHP",
        "Laravel",
        "Ruby on Rails",
        "JavaScript",
        "Git",
        "GitHub",
        "Docker",
        "HTML",
        "CSS",
        "Oracle",
        "SQL",
      ],
    },
    {
      company: "Silicon Development",
      position: "Desarrollador Ruby on Rails",
      period: "Julio 2022 - Junio 2023",
      responsibilities: [
        "Creación de nuevos endpoints para la API de inversiones interna, así como nuevas funcionalidades en el sistema multitenant",
        "Integración con APIs de terceros (i.e. Docusign), para expandir las capacidades del sistema a la vez que se aseguraba la comunicación con servicios externos",
        "Asistencia en el proceso de migración, contribuyendo en la transición de Rails 5 a Rails 7, y de Ruby 2 a Ruby 3",
        "Desarrollo con orientación a TDD, contribuyendo a una cultura de calidad y seguridad a través de todo el ciclo de desarrollo",
        "Documentación de código y procesos",
      ],
      technologies: [
        "Ruby on Rails",
        "React",
        "JavaScript",
        "API Rest",
        "Git",
        "GitHub",
        "Docker",
        "Heroku",
        "AWS",
        "Redis",
        "PostgreSQL",
        "Scrum",
        "CircleCI",
        "Jira",
      ],
    },
    {
      company: "TektonLabs",
      position: "Desarrollador Full Stack",
      period: "Agosto 2022 - Diciembre 2022",
      responsibilities: [
        "Desarrollo e implementación con éxito de un sistema de reservas sólido y robusto para programar citas o eventos con celebridades y oradores de diferentes ámbitos, a través de interfaces fáciles de utilizar y procesos optimizados para una excelente experiencia",
        "Diseño e implementación de un sistema de búsqueda con múltiples filtros en el sitio web principal, mejorando la navegación y brindando experiencia personalizada",
        "Se crearon y lanzaron sitios web secundarios individuales para diferentes categorías y clientes, optimizando la participación del usuario para adaptar el contenido y funcionalidades a los intereses específicos de sus audiencias",
        "Desarrollo con orientación a TDD, contribuyendo a una cultura de calidad y seguridad a través de todo el ciclo de desarrollo",
        "Creación de sección administrativa para todos los sitios web, esta sección mejoró la usabilidad y control general del sistema",
        "Documentación de código y procesos",
      ],
      technologies: [
        "Ruby on Rails",
        "JavaScript",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Redis",
        "PostgreSQL",
        "Scrum",
        "Jira",
      ],
    },
    {
      company: "Agropecuaria Popoyán",
      position: "Desarrollador y Consultor de Software",
      period: "Mayo 2022 - Septiembre 2022",
      responsibilities: [
        "Implementación del módulo de Private Shops dentro de Magento para tener tiendas privadas con productos génericos",
        "Investigación de integración de módulos de terceros para las tiendas B2B y B2C, facilitando la integración de diferentes productos dentro de los dos tipos de tiendas",
      ],
      technologies: [
        "Magento",
        "PHP",
        "JavaScript",
        "API Rest",
        "Git",
        "GitHub",
        "Docker",
        "Nginx",
        "Elasticsearch",
        "MySQL",
        "Scrum",
        "Jira",
      ],
    },
    {
      company: "PDC Latinoamerica",
      position: "Desarrollador y Consultor de Aplicaciones",
      period: "Mayo 2020 - Enero 2022",
      responsibilities: [
        "Desarollo de un módulo de reservas (espacios administrativos, oficinas, salas, parqueos, citas), optimizando el uso y administración de los recursos",
        "Desarrollo de mejoras en el módulo de vacaciones, contribuyendo a la optimización de procesos y un mejor seguimiento de los días de licencias de los empleados",
        "Implementación de mejoras en el módulo de datos demográficos, lo que mejoró la precisión y relevancia de los datos organizacionales para la toma de decisiones estratégicas",
        "Desarrollo de interfaz gráfica para la visualización de módulo del sistema ERP",
        "Diseño e implementación de un sistema de encuestas de satisfacción y fidelidad para clientes, lo que proporcionó información valiosa para las estrategias de la empresa",
        "Soporte sobre procesos en el sistema ERP",
      ],
      technologies: [
        "Ruby on Rails",
        "Python",
        "JavaScript",
        "TypeScript",
        "Git",
        "GitHub",
        "Node.js",
        "Angular",
        "Oracle",
        "Redis",
        "HTML",
        "CSS",
      ],
    },
    {
      company: "INFILE",
      position:
        "Desarrollador Web | Jefe de Implementación | Implementador y Soporte Técnico",
      period: "Diciembre 2012 - Abril 2020",
      responsibilities: [
        "Desarollo de un pequeño ecosistema de facturación electrónica FEL para BAC Credomatic (API, Portal Web, Aplicación lectora de archivos, Colas, Envío de Correos) utilizando Docker para procesar archivos, convertir archivos, consumir API, almacenar en base de datos y envío de correos electrónicos de forma individual y masiva",
        "Interfaz de factura electrónica FEL para inmobiliaria Spectrum",
        "Mejoras y actualizaciones en el CRM corporativo para FEL y conecciones a SAP",
        "Desarrollo y modificación de bibliotecas (DLL) para reutilización de código en diferentes proyectos",
        "Desarrollo de aplicación de escritorio para consumir servicios SOAP, obteniendo información de los contribuyentes y almacenándolos en una base de datos, proceso que se ejecutaba periódicamente a través de un cronjob",
        "A cargo de la coordinación de el equipo de implementaciones y soporte técnico para ayudar a los clientes en el uso de los sistemas para la facturación electrónica",
        "Soporte en diferentes tecnologías y lenguajes para clientes en implementación de factura electrónica",
      ],
      technologies: [
        "Java",
        "PHP",
        "Ruby on Rails",
        "Python",
        "JavaScript",
        "TypeScript",
        "C#",
        "Angular",
        "Node.js",
        "Git",
        "GitHub",
        "Redis",
        "HTML",
        "CSS",
        "Docker",
        "Oracle",
        "MySQL",
        "SQLServer",
        "Visual Basic",
        "Visual Fox",
      ],
    },
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
        <section id="sobre-mi" className="mb-16 scroll-mt-16 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-muted-foreground mb-4">
            Desarrollador de software con {yearsOfExperience} años de
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

        <section id="experiencia" className="mb-16 scroll-mt-16 pt-16 -mt-16">
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

        <section id="proyectos" className="mb-16 scroll-mt-16 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="border rounded-lg overflow-hidden">
                {project.placeholder.endsWith('.webm') || project.placeholder.endsWith('.mp4') ? (
                  <video
                    src={`${project.placeholder}`}
                    alt={`Proyecto ${project.name}`}
                    className="w-full h-48 object-cover"
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={`${project.placeholder}`}
                    alt={`Proyecto ${project.name}`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Proyecto: {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-2">
                    {project.code && (
                      <Button variant="outline" size="sm" onClick={() => window.open(project.code)}>
                        Ver código
                      </Button>
                    )}
                    {project.url && (
                      <Button variant="outline" size="sm" onClick={() => window.open(project.url)}>
                        Ver proyecto
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mb-16 scroll-mt-16 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <a
                    href="mailto:einsen.vasquez.velasquez@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    einsen.vasquez.velasquez@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <a
                    href="tel:+50255353148"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +502 5535-3148
                  </a>
                </div>
              </div>
            </div>
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
