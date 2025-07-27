"use client";

import Image from "next/image";

export default function MissionSection() {
	return (
		<section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
			{/* Title */}
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-black">Our Mission</h2>
			</div>

			{/* Side-by-side layout with no spacing between image and text */}
			<div className="flex flex-col lg:flex-row  overflow-hidden shadow-xl">
				{/* Left Image */}
				<div className="relative w-full lg:w-1/2 h-72 md:h-[400px]">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474531/Comp4_xlcf1s.jpg"
						alt="Our Mission"
						fill
						className="object-cover"
					/>
				</div>

				{/* Right Text */}
				<div className="bg-green-900 text-white w-full lg:w-1/2 p-6 md:p-8 text-base leading-relaxed">
					<p className="mb-4">
						To be the trusted partner of our investors, encouraging them to
						embrace agro-farming and assisting farmers in adopting cutting-edge
						solutions that ensure profitability for all and long-term success.
					</p>
					<p className="mb-4">
						We aim to bridge the gap between modern technologies and traditional
						practices to make agriculture not only sustainable, but empowering
						for every participant in the ecosystem.
					</p>
					<p>
						Together, we cultivate growth, foster innovation, and build a green
						foundation for future generations.
					</p>
				</div>
			</div>
		</section>
	);
}
