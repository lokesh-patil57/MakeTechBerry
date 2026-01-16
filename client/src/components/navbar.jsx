import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [expanded, setExpanded] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (
			savedTheme === "dark" ||
			(!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDark(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		if (isDark) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		}
	};

	return (
		<header className="bg-[#FCF8F1] bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-95 transition-colors duration-300">
			<div className="px-4 mx-auto sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a href="#" className="flex">
							<img className="w-auto h-18" src="/logo-no_bg.png" alt="Logo" />
						</a>
					</div>

					<div className="flex-1 flex justify-end lg:hidden">
						{/* Mobile Dark Toggle */}
						<button
							onClick={toggleTheme}
							className="p-2 mr-2 text-black dark:text-gray-200 transition-all duration-200 rounded-full focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							{isDark ? (
								<svg
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							)}
						</button>

						{/* Mobile Menu Button */}
						<button
							type="button"
							className="inline-flex p-2 text-black dark:text-white transition-all duration-200 rounded-md focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
							onClick={() => setExpanded(!expanded)}
						>
							{/* Menu open: "hidden", Menu closed: "block" */}
							<svg
								className={`${expanded ? "hidden" : "block"} w-6 h-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 8h16M4 16h16"
								/>
							</svg>

							{/* Menu open: "block", Menu closed: "hidden" */}
							<svg
								className={`${expanded ? "block" : "hidden"} w-6 h-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
						<a
							href="#"
							className="text-base text-black dark:text-gray-200 transition-all duration-200 hover:text-opacity-80 dark:hover:text-white"
						>
							Features
						</a>
						<a
							href="#"
							className="text-base text-black dark:text-gray-200 transition-all duration-200 hover:text-opacity-80 dark:hover:text-white"
						>
							Solutions
						</a>
						<a
							href="#"
							className="text-base text-black dark:text-gray-200 transition-all duration-200 hover:text-opacity-80 dark:hover:text-white"
						>
							Resources
						</a>
						<a
							href="#"
							className="text-base text-black dark:text-gray-200 transition-all duration-200 hover:text-opacity-80 dark:hover:text-white"
						>
							Pricing
						</a>
					</div>

					{/* CTA Button & Dark Toggle */}
					<div className="hidden lg:flex items-center space-x-4">
						<button
							onClick={toggleTheme}
							className="p-2 text-black dark:text-white transition-all duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800"
						>
							{isDark ? (
								<svg
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							)}
						</button>
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-black dark:bg-white dark:text-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black dark:hover:bg-gray-200 focus:bg-yellow-300 focus:text-black"
						>
							Join Now
						</a>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{expanded && (
					<motion.nav
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
					>
						<div className="flex flex-col space-y-4 px-4 pt-2 pb-4 text-center">
							{[
								{ name: "Features", href: "#" },
								{ name: "Solutions", href: "#" },
								{ name: "Resources", href: "#" },
								{ name: "Pricing", href: "#" },
							].map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -20, opacity: 0 }}
									transition={{ delay: index * 0.1, duration: 0.2 }}
									className="text-base text-black dark:text-gray-200 transition-all duration-200 hover:text-opacity-80 dark:hover:text-white"
								>
									{item.name}
								</motion.a>
							))}
							<motion.a
								href="#"
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ delay: 0.4, duration: 0.2 }}
								className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-black dark:bg-white dark:text-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black dark:hover:bg-gray-200 focus:bg-yellow-300 focus:text-black"
							>
								Join Now
							</motion.a>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
