import {
	Accordion as UI_Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
	{
		id: "1",
		title: "Industry-relevant project experience",
		content:
			"We focus on real-world application, ensuring every project mirrors current industry standards and practices.",
	},
	{
		id: "2",
		title: "Multi-domain expertise",
		content:
			"From web and mobile development to AI and cloud computing, our knowledge spans across diverse technology landscapes.",
	},
	{
		id: "3",
		title: "Research-focused approach",
		content:
			"We dive deep into problem-solving, basing our solutions on thorough research and innovative methodologies.",
	},
	{
		id: "4",
		title: "Student-friendly solutions",
		content:
			"Tailored specifically for learners, our solutions are designed to be accessible, educational, and easy to understand.",
	},
	{
		id: "5",
		title: "Strong mentorship culture",
		content:
			"Tailored guidance from experienced mentors to help you navigate challenges and accelerate your growth.",
	},
	{
		id: "6",
		title: "Commitment to deadlines",
		content:
			"We understand the value of time, delivering high-quality results strictly within the agreed-upon timeframe.",
	},
	{
		id: "7",
		title: "Quality-first development mindset",
		content:
			"Excellence is our standard. We prioritize clean code, robust architecture, and superior performance in every build.",
	},
];

export function Accordion() {
	return (
		<section className="bg-[#faf5ff] py-20">
			<div className="w-full max-w-3xl mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-tight">
					Why Choose Us
				</h2>
				<UI_Accordion
					type="single"
					defaultValue="2"
					collapsible
					className="w-full"
				>
					{items.map((item) => (
						<AccordionItem
							value={item.id}
							key={item.id}
							className="last:border-b border-black/5"
						>
							<AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-foreground/40 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-primary [&>svg]:hidden hover:text-foreground">
								<div className="flex flex-1 items-start gap-4">
									<p className="text-xs font-mono">{item.id}</p>
									<h3 className="uppercase relative text-left text-2xl md:text-4xl font-medium tracking-wide">
										{item.title}
									</h3>
								</div>
							</AccordionTrigger>

							<AccordionContent className="text-muted-foreground pb-8 pl-6 md:pl-20 pr-4 text-lg leading-relaxed">
								{item.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</UI_Accordion>
			</div>
		</section>
	);
}
