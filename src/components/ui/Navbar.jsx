import { useState } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	// ketika tidak scroll bg-blue-600 hilang, ketika scroll bg-blue-600
	if (typeof window !== "undefined") {
		window.onscroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
	}

	return (
		<header className="relative z-50">
			<nav className={`fixed py-3 w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-20 mx-auto transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"
				}`}>
				<div className="md:col-span-3">
					<a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 w-48" href="/" aria-label="logo">
						<img className="w-full object-cover py-2" src={isScrolled ? "src/assets/Logo_black.png" : "src/assets/Logo_white.png" } alt="" />
					</a>
				</div>

				<div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
					<button type="button" className={`hidden py-2 px-3 md:inline-flex items-center gap-x-2 text-sm font-medium rounded-xl ${isScrolled ? "bg-cyan-950 text-white" : "bg-white text-black" } border border-gray-200  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none`}>
						Start Exploring
					</button>
					{/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none">
						Hire us
					</button> */}
					<div className="md:hidden">
						<button
							type="button"
							className="size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-none disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-200 dark:hover:bg-neutral-700 dark:focus:bg-"
							onClick={toggleCollapse}
						>
							{isCollapsed ? (
								<svg className={isScrolled ? "text-cyan-950" : "text-white"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
							) : (
								<svg className={isScrolled ? "text-cyan-950" : "text-white"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
							)}
						</button>
					</div>
				</div>

				<div
					className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6 ${isCollapsed ? "block" : "hidden"
						}`}
					id="hs-navbar-hcail"
				>
					<div className="py-3 rounded-lg pl-3 bg-gray-400 lg:bg-transparent backdrop-filter lg:backdrop-blur-0 backdrop-blur-sm bg-opacity-10 flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0 font-semibold">
						{/* <div>
							<a className={`relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-green-900 dark:${isScrolled ? "text-gray-700" : "text-white"}`} href="#" aria-current="page">Work</a>
						</div> */}
						<div>
							<a className={`inline-block text-black hover:${isScrolled ? "text-cyan-600" : "text-cyan-200" } focus:outline-none focus:text-cyan-100 dark:${isScrolled ? "text-gray-700" : "text-white"}`} href="/catalog">Catalog</a>
						</div>
						<div>
							<a className={`inline-block text-black hover:${isScrolled ? "text-cyan-600" : "text-cyan-200" } focus:outline-none focus:text-gray-600 dark:${isScrolled ? "text-gray-700" : "text-white"}`} href="#">Travel Guide</a>
						</div>
						<div>
							<a className={`inline-block text-black hover:${isScrolled ? "text-cyan-600" : "text-cyan-200" } focus:outline-none focus:text-gray-600 dark:${isScrolled ? "text-gray-700" : "text-white"}`} href="#">Comunity Hub</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
