import React from "react";
import { MarqueProjects } from "./MarqueProjects";



function Projects() {
	return (
		<div className="flex flex-col items-start justify-start gap-2 ">
			<div className="text-xl font-bold">Projects</div>
			<div className="text-gray-500 py-3">
				<MarqueProjects />
			</div>
		</div>
	);
}

export default Projects;
