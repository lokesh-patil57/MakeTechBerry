const Hero = () => {
	return (
		<div className="bg-white dark:bg-gray-900 transition-colors duration-300">
			{/* Header */}

			{/* Hero Section */}
			<section className="bg-[#FCF8F1] bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-100 py-10 sm:py-16 lg:py-24 transition-colors duration-300">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
						{/* Text Content */}
						<div>
							<p className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
								MakeTechBerry – Build Real Apps & Learn with Experts{" "}
							</p>

							<h1 className="mt-4 text-4xl font-bold text-black dark:text-white lg:mt-8 sm:text-6xl xl:text-8xl transition-colors duration-300">
								Build. Learn. Innovate.
							</h1>

							<p className="mt-4 text-base text-black dark:text-gray-300 lg:mt-8 sm:text-xl transition-colors duration-300">
								MakeTechBerry LLP, based in Pune, empowers learners and startups
								with hands-on training, real tech projects, and expert
								mentorship in Android, Web, AI/ML, and full-stack development.
							</p>

							<a
								href="#"
								className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
							>
								Join for free
								<svg
									className="w-6 h-6 ml-8 -mr-2"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</a>

							<p className="mt-5 text-gray-600 dark:text-gray-400">
								Already joined us?{" "}
								<a
									href="#"
									className="text-black dark:text-white transition-all duration-200 hover:underline"
								>
									Log in
								</a>
							</p>
						</div>

						{/* Image */}
						<div>
							<img className="w-full" src="/hero-png.png" alt="Hero" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
