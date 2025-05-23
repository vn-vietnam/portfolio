import React from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const skills = [
	{
		name: "React",
		color: "from-blue-500 to-blue-600",
	},
	{
		name: "Next.js",
		color: "from-black to-gray-800",
	},
	{
		name: "Tailwind CSS",
		color: "from-cyan-500 to-cyan-600",
	},
	{
		name: "Typescript",
		color: "from-blue-600 to-blue-700",
	},
	{
		name: "Javascript",
		color: "from-yellow-400 to-yellow-500",
	},
	{
		name: "Node.js",
		color: "from-green-500 to-green-600",
	},
	{
		name: "Express",
		color: "from-gray-600 to-gray-700",
	},
	{
		name: "PostgreSQL",
		color: "from-blue-400 to-blue-500",
	},
	{
		name: "MongoDB",
		color: "from-green-600 to-green-700",
	},
];

function Skills() {
	return (
		<div className="flex flex-col justify-start w-[320px] gap-2 text-[12px] sm:text-sm md:w-[400px]">
			<div className="text-xl font-bold">Skills</div>
			<div className="text-gray-500 text-xs flex justify-center items-center flex-col py-3">
				<div className="flex flex-row items-center justify-start gap-2 flex-wrap  md:w-[400px]">
					{skills.map((skill) => (
						<ShimmerButton 
							key={skill.name}
							className={`shadow-lg bg-gradient-to-r ${skill.color} hover:opacity-90 transition-opacity`}
						>
							<span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
								{skill.name}
							</span>
						</ShimmerButton>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;
