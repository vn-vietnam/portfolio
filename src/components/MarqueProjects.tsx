import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
	{
		name: "Blog",
		description: "A simple blog platform",
		tech: "Next.js, Tailwind CSS, TypeScript, MDX, Shadcn UI",
		link: "blog-puce-one-75.vercel.app",
	},
	{
		name: "Toiec Exam",
		description: "An online English testing platform",
		tech: "Next.js, PostgreSQL, Tailwind CSS, TypeScript, Shadcn UI",
		link: "toeic-exam.xyz",
	},
	{
		name: "QuizzLab",
		description: "An AI-powered quiz creation and online testing platform for Vietnam",
		tech: "Next.js, Supabase, Tailwind CSS, TypeScript, Shadcn UI",
		link: "quizzlab.online",
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
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className="flex flex-col gap-1">
				<figcaption className="text-sm font-medium dark:text-white line-clamp-1">
					{name}
				</figcaption>
				<p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
					{description}
				</p>
				<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
					{tech}
				</p>
				<Link
					href={`https://${link}`}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
				>
					View Project →
				</Link>
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
