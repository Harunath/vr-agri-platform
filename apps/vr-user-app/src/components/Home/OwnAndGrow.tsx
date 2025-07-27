"use client";
import Image from "next/image";

export default function OwnAndGrow() {
	return (
		<section className="bg-gradient-to-b from-white to-gray-100 py-20 px-4 sm:px-6 lg:px-12">
			<div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
				{/* Text Content */}
				<div>
					<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 leading-tight">
						Own <span className="text-orange-500">&apos;N&apos;</span> Grow
					</h2>
					<ul className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
						<li className="flex items-start gap-4">
							<span className="text-orange-500 text-xl">🌱</span>
							<span>
								A unique business opportunity with presence in both India and
								international markets.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="text-orange-500 text-xl">🌿</span>
							<span>
								A hybrid model of land ownership and agriculture fostering
								sustainability and reconnecting us to our roots.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="text-orange-500 text-xl">📈</span>
							<span>
								Best-in-class returns, growth potential, and portfolio
								diversification opportunities.
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="text-orange-500 text-xl">🤝</span>
							<span>
								Exclusive MNC partnership operating across 9 Indian states
								delivering consistent results.
							</span>
						</li>
					</ul>
				</div>

				{/* Image Content */}
				<div className="w-full">
					<div className="rounded-2xl overflow-hidden shadow-xl">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1750923873/1154575_ejfwd4.jpg"
							alt="Growth"
							width={800}
							height={600}
							className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
