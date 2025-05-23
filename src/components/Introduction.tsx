import React from "react";
import { AuroraText } from "./magicui/aurora-text";

function Introduction() {
	return (
		<div className="flex flex-col  justify-start gap-2">
			<h1 className="text-4xl font-bold tracking-tighter">
				<AuroraText>Hi, I&apos;m Kien 👋</AuroraText>
			</h1>
			<div className="text-gray-500 text-[14px] w-[320px] md:w-[400px]">
				I&apos;m a full stack developer. I love building things and helping
				people.
			</div>
		</div>
	);
}

export default Introduction;
