import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
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
);

export default Footer;
