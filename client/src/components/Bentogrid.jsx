import { Code2, Brain, Zap, Layers } from "lucide-react";
// import img from "next/img";
// import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const trainingPrograms = [
	{
		Icon: Code2,
		name: "App Development Training",
		description:
			"Comprehensive mobile app development courses with hands-on projects",
		href: "#",
		cta: "Learn More",
		className: "col-span-3 lg:col-span-1",
		background: (
			<div className="absolute inset-0 overflow-hidden rounded-lg">
				<img
					src="/mobile-dev.jpg"
					alt="App Development"
					className="h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-90"
				/>
			</div>
		),
	},
	{
		Icon: Layers,
		name: "Web Development Training",
		description:
			"Full-stack web development bootcamps from frontend to backend",
		href: "#",
		cta: "Learn More",
		className: "col-span-3 lg:col-span-2",
		background: (
			<div className="absolute inset-0 overflow-hidden rounded-lg">
				<img
					src="/web-dev.jpg"
					alt="Web Development"
					className="h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-90"
				/>
			</div>
		),
	},
	{
		Icon: Brain,
		name: "Gen-AI Solutions Training",
		description: "Cutting-edge AI and machine learning training programs",
		href: "#",
		cta: "Learn More",
		className: "col-span-3 lg:col-span-2",
		background: (
			<div className="absolute inset-0 overflow-hidden rounded-lg">
				<img
					src="/ai-dev.jpg"
					alt="AI Training"
					className="h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-90"
				/>
			</div>
		),
	},
	{
		Icon: Zap,
		name: "Python Full Stack Training",
		description:
			"Complete Python development training with real-world applications",
		href: "#",
		cta: "Learn More",
		className: "col-span-3 lg:col-span-1",
		background: (
			<div className="absolute inset-0 overflow-hidden rounded-lg">
				<img
					src="/python-dev.jpg"
					alt="Python Full Stack"
					className="h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-90"
				/>
			</div>
		),
	},
];

export function Bentogrid() {
	return (
		<div className="w-full px-4 py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl opacity-40 -translate-y-1/2" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/25 rounded-full blur-3xl opacity-35 translate-y-1/2" />

			<div className="mx-auto max-w-7xl relative z-10">
				<div className="mb-16 md:mb-20 text-center">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-300 bg-purple-100/60">
						<div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
						<span className="text-sm font-medium text-purple-700">
							Future-Ready Learning
						</span>
					</div>

					<h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black text-balance">
						Our Training
						<br />
						<span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-transparent bg-clip-text">
							Programs
						</span>
					</h2>

					<p className="mx-auto max-w-2xl text-base md:text-lg text-gray-600 text-balance leading-relaxed">
						Comprehensive learning experiences designed for the future of
						technology
					</p>
				</div>

				<BentoGrid>
					{trainingPrograms.map((program, idx) => (
						<BentoCard key={idx} {...program} />
					))}
				</BentoGrid>
			</div>
		</div>
	);
}
