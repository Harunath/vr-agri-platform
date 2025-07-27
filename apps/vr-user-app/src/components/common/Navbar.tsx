"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Blog", href: "/blog" },
		{ name: "Gallery", href: "/gallery" },
		{ name: "Contact", href: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}>
			<div
				className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-black`}>
				{/* Logo */}
				<Link href="/" className="block">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png"
						alt="VR Agri Farms Logo"
						width={96}
						height={96}
						className="h-full w-auto"
						priority
					/>
				</Link>
				{/* Mobile Toggle */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden focus:outline-none"
					aria-label="Toggle Menu">
					{isOpen ? (
						<FaTimes
							size={24}
							className={scrolled ? "text-black" : "text-white"}
						/>
					) : (
						<FaBars
							size={24}
							className={scrolled ? "text-black" : "text-white"}
						/>
					)}
				</button>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-6 font-medium text-base text-gray-800">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`transition-colors duration-200 ${
								pathname === link.href
									? "text-orange-500"
									: scrolled
									? " hover:text-orange-500"
									: " hover:text-orange-400"
							}`}>
							{link.name}
						</Link>
					))}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-md text-black px-4 py-4 flex flex-col gap-4">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className={`transition font-medium text-base ${
								pathname === link.href
									? "text-orange-500"
									: "hover:text-orange-500"
							}`}>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
