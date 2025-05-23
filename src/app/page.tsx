import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Introduction from "@/components/Introduction";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div className="relative  w-full rounded-lg border bg-background flex flex-col items-center justify-start ">
			<div className="fixed w-full h-full inset-0 pointer-events-none">
				<DotPattern
					className={cn(
						"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
					)}
				/>
			</div>
			<div className="flex flex-col items-center justify-start h-full py-10 px-2 gap-10">
				<Introduction />
				<Experience />
				<Education />
				<Skills />
				<Projects />
				<Footer />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-background"></div>
			</div>
		</div>
	);
}
