import React, { useEffect, useState, useRef } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import AnimatedHero from "../components/register/AnimatedHero";
import "../styles/register.css";
import {
	Smartphone,
	Globe,
	Code2,
	Brain,
	Cpu,
	Building2,
	Cog,
	Gauge,
	Settings2,
	CircuitBoard,
} from "lucide-react";

const ServiceIcon = ({ icon: Icon, gradient }) => (
	<div
		className="w-full h-full rounded-[24px] flex items-center justify-center"
		style={{ background: gradient }}
	>
		<div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
			<Icon className="w-12 h-12 text-white drop-shadow-lg" strokeWidth={1.5} />
		</div>
	</div>
);

// Development Services Content
const developmentContent = [
	{
		title: "Mobile Application Development",
		description:
			"We build native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android, our apps are designed for performance, security, and scalability.",
		content: (
			<ServiceIcon
				icon={Smartphone}
				gradient="linear-gradient(to bottom right, #8b5cf6, #ec4899)"
			/>
		),
	},
	{
		title: "Web Application Development",
		description:
			"Modern, responsive web applications built with cutting-edge technologies. We create fast, accessible, and SEO-friendly websites that drive business growth.",
		content: (
			<ServiceIcon
				icon={Globe}
				gradient="linear-gradient(to bottom right, #7c3aed, #3b82f6)"
			/>
		),
	},
	{
		title: "Full Stack Development (Python-based)",
		description:
			"End-to-end Python development with Django, Flask, and FastAPI. We handle everything from database design to API development and frontend integration.",
		content: (
			<ServiceIcon
				icon={Code2}
				gradient="linear-gradient(to bottom right, #22c55e, #10b981)"
			/>
		),
	},
	{
		title: "Artificial Intelligence Solutions",
		description:
			"Custom AI solutions including natural language processing, computer vision, and predictive analytics. We transform your data into actionable intelligence.",
		content: (
			<ServiceIcon
				icon={Brain}
				gradient="linear-gradient(to bottom right, #f97316, #ef4444)"
			/>
		),
	},
	{
		title: "Machine Learning Applications",
		description:
			"From model development to deployment, we build ML systems that learn, adapt, and improve. Our solutions include recommendation engines, fraud detection, and automated decision systems.",
		content: (
			<ServiceIcon
				icon={Cpu}
				gradient="linear-gradient(to bottom right, #a855f7, #6366f1)"
			/>
		),
	},
];

// Engineering Excellence Content
const engineeringContent = [
	{
		title: "Civil Engineering Projects",
		description:
			"Innovative solutions for structural analysis, construction management, and infrastructure development. We combine engineering expertise with modern technology.",
		content: (
			<ServiceIcon
				icon={Building2}
				gradient="linear-gradient(to bottom right, #64748b, #475569)"
			/>
		),
	},
	{
		title: "Mechanical Engineering Projects",
		description:
			"CAD/CAM solutions, thermal analysis, and mechanical system design. We bring precision engineering to manufacturing and product development.",
		content: (
			<ServiceIcon
				icon={Cog}
				gradient="linear-gradient(to bottom right, #71717a, #52525b)"
			/>
		),
	},
	{
		title: "Instrumentation Engineering Projects",
		description:
			"Process control, sensor integration, and automation systems. We design and implement measurement and control solutions for industrial applications.",
		content: (
			<ServiceIcon
				icon={Gauge}
				gradient="linear-gradient(to bottom right, #0ea5e9, #0284c7)"
			/>
		),
	},
	{
		title: "Mechatronics Engineering Projects",
		description:
			"Integration of mechanical, electrical, and software systems. We create smart machines and automated systems that push the boundaries of innovation.",
		content: (
			<ServiceIcon
				icon={Settings2}
				gradient="linear-gradient(to bottom right, #14b8a6, #0d9488)"
			/>
		),
	},
	{
		title: "Embedded Systems & Electronics (EMB)",
		description:
			"Custom embedded solutions, PCB design, and IoT development. We build the intelligent hardware that powers the connected world.",
		content: (
			<ServiceIcon
				icon={CircuitBoard}
				gradient="linear-gradient(to bottom right, #f59e0b, #d97706)"
			/>
		),
	},
];

const Services = () => {
	const [isVisible, setIsVisible] = useState(false);
	const formRef = useRef(null);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleGetStarted = () => {
		if (formRef.current) {
			const element = formRef.current;
			const offset = window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 110 : 120;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#f4efff] to-white pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 md:px-6 pb-8 sm:pb-12 hide-scrollbar">
			{/* Animated Hero Section */}
			<div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
				<style>{`
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes fadeInDown {
						from {
							opacity: 0;
							transform: translateY(-20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes scaleIn {
						from {
							opacity: 0;
							transform: scale(0.9);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}

					@keyframes float {
						0%, 100% {
							transform: translateY(0px);
						}
						50% {
							transform: translateY(-10px);
						}
					}

					@keyframes shimmer {
						0% {
							background-position: -1000px 0;
						}
						100% {
							background-position: 1000px 0;
						}
					}

					.animate-fade-in-up {
						animation: fadeInUp 0.8s ease-out forwards;
					}

					.animate-fade-in-down {
						animation: fadeInDown 0.6s ease-out forwards;
					}

					.animate-scale-in {
						animation: scaleIn 0.6s ease-out forwards;
					}

					.animate-float {
						animation: float 3s ease-in-out infinite;
					}

					.gradient-text {
						background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;
					}

					.shimmer-effect {
						background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
						background-size: 1000px 100%;
						animation: shimmer 2s infinite;
					}

					.glass-effect {
						background: rgba(255, 255, 255, 0.7);
						backdrop-filter: blur(10px);
						border: 1px solid rgba(255, 255, 255, 0.3);
					}

					.delay-100 {
						animation-delay: 0.1s;
					}

					.delay-200 {
						animation-delay: 0.2s;
					}

					.delay-300 {
						animation-delay: 0.3s;
					}
				`}</style>

				{/* Floating decorative elements - hidden on mobile */}
				<div className="hidden sm:block absolute top-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-purple-300 rounded-full opacity-20 animate-float blur-xl"></div>
				<div className="hidden sm:block absolute bottom-20 right-4 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-300 rounded-full opacity-20 animate-float blur-xl" style={{animationDelay: '1s'}}></div>
				<div className="hidden md:block absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-pink-300 rounded-full opacity-20 animate-float blur-xl" style={{animationDelay: '0.5s'}}></div>

				<div className="text-center max-w-4xl mx-auto relative z-10 w-full px-2 sm:px-4">
					{/* Badge */}
					<div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
						<div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
						<span className="text-xs sm:text-sm font-medium text-purple-700">🚀 Our Expertise</span>
					</div>

					{/* Main Heading */}
					<h1 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 ${isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}>
						<span className="text-gray-900">What </span>
						<span className="gradient-text relative inline-block">
							We Do
							<div className="absolute inset-0 shimmer-effect"></div>
						</span>
					</h1>

					{/* Subheading */}
					<p className={`text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-200' : 'opacity-0'}`}>
						We specialize in building modern, scalable, and intelligent solutions across multiple domains. Our expertise spans from cutting-edge software development to innovative engineering projects.
					</p>

					

					{/* Feature Pills */}
					<div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-300' : 'opacity-0'}`}>
						{['AI & ML', 'Engineering', 'Web & Mobile', 'Innovation'].map((feature, index) => (
							<span
								key={index}
								className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default"
								style={{animationDelay: `${0.4 + index * 0.1}s`}}
							>
								✨ {feature}
							</span>
						))}
					</div>

					{/* Stats Section */}
					<div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-300' : 'opacity-0'}`}>
						{[
							{ number: '10+', label: 'Services' },
							{ number: '100+', label: 'Projects Completed' },
							{ number: '24/7', label: 'Support' }
						].map((stat, index) => (
							<div key={index} className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
								<div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</div>
								<div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto w-full" ref={formRef}>

				{/* Sticky Scroll Services Section */}
				<section className="px-4 sm:px-6 lg:px-8 pb-20">
					<div className="max-w-7xl mx-auto">
						{/* Development Services Header */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-2">
								<div className="h-1 w-12 bg-[#7C3AED] rounded-full" />
								<span className="text-[#7C3AED] font-semibold uppercase tracking-wider text-sm">
									Development Services
								</span>
							</div>
							<p className="text-[#5E6282] max-w-2xl text-sm">
								From mobile apps to AI solutions, we deliver end-to-end
								development services.
							</p>
						</div>

						{/* Sticky Scroll Component with hidden scrollbar */}
						<div className="development-scroll-container">
							<style>{`
								.development-scroll-container > div {
									scrollbar-width: none;
									-ms-overflow-style: none;
								}
								.development-scroll-container > div::-webkit-scrollbar {
									display: none;
								}
							`}</style>
							<StickyScroll
								content={developmentContent}
								contentClassName="rounded-[24px] shadow-2xl"
							/>
						</div>

						{/* Engineering Excellence Header */}
						<div className="mt-12 mb-8">
							<div className="flex items-center gap-3 mb-2">
								<div className="h-1 w-12 bg-[#DF6951] rounded-full" />
								<span className="text-[#DF6951] font-semibold uppercase tracking-wider text-sm">
									Engineering Excellence
								</span>
							</div>
							<p className="text-[#5E6282] max-w-2xl text-sm">
								Beyond software, we bring technical expertise to complex
								engineering challenges across Civil, Mechanical,
								Instrumentation, Mechatronics, and Embedded Systems.
							</p>
						</div>

						{/* Engineering Sticky Scroll Component with hidden scrollbar */}
						<div className="engineering-scroll-container">
							<style>{`
								.engineering-scroll-container > div {
									scrollbar-width: none;
									-ms-overflow-style: none;
								}
								.engineering-scroll-container > div::-webkit-scrollbar {
									display: none;
								}
							`}</style>
							<StickyScroll
								content={engineeringContent}
								contentClassName="rounded-[24px] shadow-2xl"
							/>
						</div>
					</div>
				</section>

				{/* Why Choose Us Section */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
								Why Choose Our Services?
							</h2>
							<p className="text-gray-500 max-w-xl mx-auto">
								What makes our approach different
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{/* Card 1 - Hands-on Approach */}
							<div className="group bg-white rounded-[24px] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-purple-50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all duration-500 hover:-translate-y-2">
								<div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-200">
									<svg
										className="w-7 h-7 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 text-center mb-3">
									Hands-on Approach
								</h3>
								<p className="text-gray-500 text-center text-sm leading-relaxed">
									We build real solutions with real impact. Every project is
									crafted with precision and delivered with excellence.
								</p>
							</div>

							{/* Card 2 - Industry Expertise */}
							<div className="group bg-white rounded-[24px] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-purple-50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all duration-500 hover:-translate-y-2">
								<div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-200">
									<svg
										className="w-7 h-7 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 text-center mb-3">
									Industry Expertise
								</h3>
								<p className="text-gray-500 text-center text-sm leading-relaxed">
									Get guidance from experienced professionals who understand
									current industry requirements and best practices.
								</p>
							</div>

							{/* Card 3 - End-to-End Support */}
							<div className="group bg-white rounded-[24px] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-purple-50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all duration-500 hover:-translate-y-2">
								<div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-200">
									<svg
										className="w-7 h-7 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 7l5 5m0 0l-5 5m5-5H6"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 text-center mb-3">
									End-to-End Support
								</h3>
								<p className="text-gray-500 text-center text-sm leading-relaxed">
									Comprehensive support from ideation to deployment, including
									maintenance and continuous improvement.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Get Service Information Form */}
				<section className="py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(124,58,237,0.08)] border border-purple-100">
							<div className="text-center mb-10">
								<p className="text-[#DF6951] font-bold text-sm uppercase tracking-widest mb-3">
									Get In Touch
								</p>
								<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
									Get Service Information
								</h2>
								<p className="text-gray-500">
									Interested in our services? Get in touch for detailed
									information
								</p>
							</div>

							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Full Name *
										</label>
										<input
											type="text"
											className="w-full px-4 py-3 bg-[#f8f5ff] border border-purple-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Email Address *
										</label>
										<input
											type="email"
											className="w-full px-4 py-3 bg-[#f8f5ff] border border-purple-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
											placeholder="your@email.com"
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Phone Number *
										</label>
										<input
											type="tel"
											className="w-full px-4 py-3 bg-[#f8f5ff] border border-purple-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
											placeholder="+91 XXXXX XXXXX"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Service Type *
										</label>
										<select className="w-full px-4 py-3 bg-[#f8f5ff] border border-purple-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
											<option value="">Select a service</option>
											<option value="mobile">Mobile App Development</option>
											<option value="web">Web Development</option>
											<option value="fullstack">Full Stack Development</option>
											<option value="ai">AI Solutions</option>
											<option value="ml">Machine Learning</option>
											<option value="engineering">Engineering Projects</option>
										</select>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Message
									</label>
									<textarea
										rows={4}
										className="w-full px-4 py-3 bg-[#f8f5ff] border border-purple-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
										placeholder="Tell us about your project requirements..."
									/>
								</div>

								<button
									type="submit"
									className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
										/>
									</svg>
									Get Service Information
								</button>
							</form>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="bg-gradient-to-br from-[#aa92e8] to-[#c591fa] rounded-[32px] p-12 text-center shadow-[0_20px_50px_rgba(124,58,237,0.3)]">
							<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
								Ready to Build Something Amazing?
							</h2>
							<p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
								Let's discuss how our expertise can help bring your vision to
								life.
							</p>
							<a
								href="/contact"
								className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7C3AED] font-semibold rounded-full hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
							>
								Get Started
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Services;
