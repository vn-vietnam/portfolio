import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Portfolio Website",
    description: "A modern portfolio built with Next.js and Tailwind CSS",
    tech: "Next.js, Tailwind CSS, TypeScript",
    link: "https://github.com/vn-vietnam",
  },
  {
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tech: "React, Node.js, MongoDB",
    link: "https://github.com/vn-vietnam",
  },
  {
    name: "Task Management App",
    description: "Real-time task management with collaborative features",
    tech: "React, Firebase, Material-UI",
    link: "https://github.com/vn-vietnam",
  },
  {
    name: "Weather Dashboard",
    description: "Weather forecast application with location tracking",
    tech: "React, OpenWeather API, Chart.js",
    link: "https://github.com/vn-vietnam",
  },
];

const ProjectCard = ({
  name,
  description,
  tech,
  link,
}: {
  name: string;
  description: string;
  tech: string;
  link: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col gap-1">
        <figcaption className="text-sm font-medium dark:text-white line-clamp-1">
          {name}
        </figcaption>
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{tech}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Project →
        </a>
      </div>
    </figure>
  );
};

export function MarqueProjects() {
  return (
    <div className="flex flex-col gap-2 items-start justify-start w-[320px] md:w-[400px] ">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
