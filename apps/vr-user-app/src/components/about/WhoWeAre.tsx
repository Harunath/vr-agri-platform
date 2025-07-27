"use client";

import Image from "next/image";

export default function WhoWeAre() {
	return (
		<section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				{/* Text Content */}
				<div>
					<h2 className="text-4xl font-bold text-black mb-8">Who We Are</h2>

					<div className="space-y-5 text-lg text-gray-800 leading-relaxed">
						<p>
							<span className="font-semibold text-orange-600">
								VR Agri Farms
							</span>{" "}
							is more than an agricultural venture — it represents a conscious
							lifestyle rooted in sustainability, care for the land, and
							community-driven progress.
						</p>

						<p>
							We strive to reconnect people with nature by fostering
							responsible, eco-friendly farming methods that honor both the
							environment and the people who work it.
						</p>

						<p>
							Our expertise spans farmland sales, development, and management,
							enabling individuals to invest with confidence and experience the
							richness of rural life.
						</p>

						<p>
							Every landowner receives expert guidance to promote long-term
							financial growth, balanced living, and productive land use that
							aligns with both purpose and prosperity.
						</p>

						<p>
							By advancing natural farming, integrated agricultural systems, and
							self-sustaining practices, we are cultivating a new generation of
							forward-thinking landowners and farmers.
						</p>

						<p>
							With strong values, deep agricultural knowledge, and an innovative
							mindset, VR Agri Farms is where vision meets value and farming
							becomes a way to build a better future.
						</p>
					</div>
				</div>

				{/* Image */}
				<div className="relative w-full h-80 md:h-[450px] overflow-hidden shadow-xl">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474389/maxresdefault_h5ghyt.jpg"
						alt="VR Agri Farms Overview"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
