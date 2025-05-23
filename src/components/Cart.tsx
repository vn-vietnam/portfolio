"use client";

import { cn } from "@/lib/utils";

interface Item {
	name: string;
	description: string;
	icon: string;
	color: string;
	time: string;
}

let experience = [
	{
		name: "Lemar Pte. Ltd",
		description: "Software Developer",
		time: "Aug 2024 - March 2025",
		icon: "👤",
		color: "#00C9A7",
	},
	{
		name: "TVD Media",
		description: "Content SEO Intern",
		time: "Aug 2023 - December 2023",
		icon: "👤",
		color: "#FFB800",
	},
	{
		name: "Online CRM",
		description: "Frontend Developer Intern",
		time: "Aug 2022 - December 2022",
		icon: "👤",
		color: "#1E86FF",
	},
];

let education = [
	{
		name: "University of Information Technology",
		description: "Bachelor of E-Commerce ",
		time: "2019 - 2023",
		icon: "🎓",
		color: "#00C9A7",
	},
];
experience = Array.from({ length: 1 }, () => experience).flat();
education = Array.from({ length: 1 }, () => education).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
	return (
		<figure
			className={cn(
				"relative cursor-pointer overflow-hidden rounded-2xl",
				// animation styles
				"transition-all duration-200 ease-in-out hover:scale-[103%]",
				"py-3"
			)}
		>
			<div className="flex flex-row items-center gap-3 w-[320px] md:w-[400px]">
				<div
					className="flex size-10 items-center justify-center rounded-2xl"
					style={{
						backgroundColor: color,
					}}
				>
					<span className="text-lg">{icon}</span>
				</div>
				<div className="flex flex-col overflow-hidden w-full">
					<figcaption className="flex flex-row items-center justify-between flex-wrap  whitespace-pre text-sm font-medium dark:text-white ">
						<span className="text-[12px] sm:text-sm">{name}</span>
						<span className="text-[12px] sm:text-sm text-gray-500 ">
							{time}
						</span>
					</figcaption>
					<p className="text-[12px] sm:text-sm font-normal dark:text-white/60">
						{description}
					</p>
				</div>
			</div>
		</figure>
	);
};

export function Cart({
	className,
	type,
}: {
	className?: string;
	type?: string;
}) {
	return (
		<div className={cn("relative flex w-full flex-col", className)}>
			<div>
				{type === "experience"
					? experience.map((item, idx) => <Notification {...item} key={idx} />)
					: education.map((item, idx) => <Notification {...item} key={idx} />)}
			</div>
		</div>
	);
}
