import { Button } from "../ui/button";
import LazyVideo from "../ui/lazyVideo";
import { projects } from "../../data/projects";

const ProjectsSection = () => (
  <section id="proyectos" className="mb-16 scroll-mt-16 pt-16 -mt-16">
    <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.name} className="border rounded-lg overflow-hidden">
          {project.placeholder.endsWith('.webm') || project.placeholder.endsWith('.mp4') ? (
            <LazyVideo
              src={project.placeholder}
              label={`Proyecto ${project.name}`}
              className="w-full h-48 object-cover"
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
);

export default ProjectsSection;
