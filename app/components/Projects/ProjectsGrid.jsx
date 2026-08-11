import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <div
      className="
        grid
        items-start
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
