import Link from "next/link";
import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhone,
	FaGlobe,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-black text-white ">
			<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{/* Company Info */}
				<div>
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png"
						alt="VR Agri Farms Logo"
						width={160}
						height={60}
						className="h-16 w-auto mb-4 bg-white p-2"
					/>

					<p className="text-sm leading-relaxed text-gray-300">
						Grow Naturally. Live Sustainably.
					</p>

					{/* Social Icons */}
					<div className="flex gap-4 mt-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-orange-500 transition">
							<FaFacebookF size={18} />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-orange-500 transition">
							<FaInstagram size={18} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-orange-500 transition">
							<FaLinkedinIn size={18} />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-lg font-semibold mb-3">Quick Links</h4>
					<ul className="space-y-2 text-sm">
						{["Home", "About Us", "Projects", "Contact"].map((name, i) => (
							<li key={i}>
								<Link
									href={`/${
										name.toLowerCase().replace(/\s/g, "-") === "home"
											? ""
											: name.toLowerCase().replace(/\s/g, "-")
									}`}
									className="hover:text-orange-500 transition-colors">
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Explore */}
				<div>
					<h4 className="text-lg font-semibold mb-3">Explore</h4>
					<ul className="space-y-2 text-sm">
						{[
							{ name: "Blog", href: "/blog" },
							{ name: "Gallery", href: "/gallery" },
							{ name: "Privacy Policy", href: "#" },
						].map((item, i) => (
							<li key={i}>
								<Link
									href={item.href}
									className="hover:text-orange-500 transition-colors">
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h4 className="text-lg font-semibold mb-3">Contact</h4>
					<ul className="space-y-2 text-sm text-gray-300">
						<li className="flex items-start gap-2">
							<FaMapMarkerAlt className="mt-1 text-orange-500" />
							<div>
								<p>#101, Dwarakapuri Colony</p>
								<p>Hyderabad, Telangana – 500082</p>
							</div>
						</li>
						<li className="flex items-center gap-2">
							<FaEnvelope className="text-orange-500" />
							<a
								href="mailto:contact@vrkisanparivaar.com"
								className="hover:text-orange-500 transition-colors">
								contact@vrkisanparivaar.com
							</a>
						</li>
						<li className="flex items-center gap-2">
							<FaPhone className="text-orange-500" />
							<a
								href="tel:+919515934289"
								className="hover:text-orange-500 transition-colors">
								+91 9515934289
							</a>
						</li>
						<li className="flex items-center gap-2">
							<FaGlobe className="text-orange-500" />
							<a
								href="https://www.vrkisanparivaar.co"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-orange-500 transition-colors">
								vrkisanparivaar.com
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="bg-[#111] text-center text-sm py-4 text-gray-400">
				© {new Date().getFullYear()}{" "}
				<span className="text-orange-500 font-semibold">VR Agri Farms</span>.
				All rights reserved.
				<br />
				Developed by{" "}
				<a
					href="https://www.hsdev.in/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-orange-500 hover:underline font-medium">
					HSDEV
				</a>
			</div>
		</footer>
	);
}
