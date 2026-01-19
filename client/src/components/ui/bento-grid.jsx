// "use client"

import React from "react";
import { cn } from "@/lib/utils";

export function BentoCard({
	Icon,
	name,
	description,
	href,
	cta,
	className,
	background,
}) {
	return (
		<div
			className={cn(
				"group relative overflow-hidden rounded-2xl border border-purple-200 bg-gradient-to-br from-white via-purple-50/50 to-white p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:border-purple-400 hover:shadow-purple-200/50",
				className,
			)}
		>
			{/* Layered background shields */}
			<div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
				<svg
					className="absolute top-1/2 right-1/4 w-64 h-64 transform -translate-y-1/2"
					viewBox="0 0 200 200"
					fill="none"
				>
					<path
						d="M100,20 L160,50 L160,120 Q100,170 100,170 Q100,170 40,120 L40,50 Z"
						stroke="currentColor"
						strokeWidth="1"
					/>
					<path
						d="M100,35 L145,60 L145,115 Q100,155 100,155 Q100,155 55,115 L55,60 Z"
						stroke="currentColor"
						strokeWidth="0.5"
						opacity="0.5"
					/>
				</svg>
			</div>

			{/* Code text background */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 text-xs text-black/30 whitespace-pre-wrap break-words leading-relaxed">
					{`const training = { security: true, innovation: true, growth: true }
if (learner.readyToGrow) { 
  return masterTech(); 
} // bytecode: 0x1A2F3D4E
<module>framework</module>
data-transform="encode"
hash: 8F9E2D4C1B5A7E3F...`}
				</div>
			</div>

			{/* Image background */}
			<div className="absolute inset-0">{background}</div>

			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-purple-100/50 to-white/85" />

			{/* Content */}
			<div className="relative z-10 flex flex-col justify-between h-full min-h-[240px] md:min-h-[280px]">
				<div>
					<div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-300 group-hover:from-purple-200 group-hover:to-purple-100 transition-all duration-300">
						<Icon className="h-6 w-6 text-purple-700 group-hover:text-purple-800 transition-colors duration-300" />
					</div>
					<h3 className="mb-3 text-xl md:text-2xl font-bold text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 transition-all duration-300">
						{name}
					</h3>
					<p className="text-sm md:text-base text-gray-700 leading-relaxed">
						{description}
					</p>
				</div>
				<a
					href={href}
					className="inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-600/40 mt-6 group/btn"
				>
					{cta}
					<span className="group-hover/btn:translate-x-1 transition-transform duration-300">
						→
					</span>
				</a>
			</div>
		</div>
	);
}

export function BentoGrid({ children }) {
	return (
		<div className="grid auto-rows-max grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative">
			<div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl" />
			{children}
		</div>
	);
}
