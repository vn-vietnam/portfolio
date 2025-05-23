import React from "react";
import { Cart } from "./Cart";

function Experience() {
	return (
		<div className="flex flex-col items-start justify-start gap-2 ">
			<div className="text-xl font-bold">Work Experience</div>
			<div className="text-gray-500 text-[14px]">
				<Cart type="experience"/>
			</div>
		</div>
	);
}

export default Experience;
