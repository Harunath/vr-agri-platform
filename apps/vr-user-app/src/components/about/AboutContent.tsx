"use client";

export default function WhatWeDoSection() {
	return (
		<section className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-24 space-y-10">
			{/* What We Do */}
			<div className="grid lg:grid-cols-2 gap-14 items-center">
				{/* Text */}
				<div>
					<h2 className="text-4xl font-bold text-black mb-6 mt-0 flex items-center gap-3">
						What We Do
					</h2>
					<div className="space-y-5 text-lg text-gray-700 leading-relaxed">
						<p>
							We help farmland buyers explore growth opportunities through smart
							agriculture, connecting them with reliable support for livestock
							management and crop cultivation.
						</p>
						<p>
							With deep market expertise and strong networks, we simplify the
							process of farmland investment and create meaningful long-term
							value for our clients.
						</p>
					</div>
				</div>

				{/* Image */}
				<div className="w-full h-72 md:h-[420px] overflow-hidden shadow-lg rounded-2xl">
					<div
						className="w-full h-full bg-cover bg-center transition-all duration-300 hover:scale-[1.02] rounded-2xl"
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1752473766/farmers-shaking-hands-during-harvest_cp2837.jpg')",
						}}
					/>
				</div>
			</div>

			{/* Our Approach */}
			<div className="grid lg:grid-cols-2 gap-14 items-center">
				{/* Image */}
				<div className="w-full h-72 md:h-[420px] overflow-hidden shadow-lg rounded-2xl">
					<div
						className="w-full h-full bg-cover bg-center transition-all duration-300 hover:scale-[1.02] rounded-2xl"
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474120/Agricultural-Systems-of-the-World_uf0f5q.jpg')",
						}}
					/>
				</div>

				{/* Text */}
				<div>
					<h2 className="text-4xl font-bold text-black mb-6 mt-0 flex items-center gap-3">
						Our Approach
					</h2>
					<div className="space-y-5 text-lg text-gray-700 leading-relaxed">
						<p>
							We combine advanced farming technologies with eco-friendly methods
							to build agricultural ecosystems that are both productive and
							sustainable.
						</p>
						<p>
							Our vision is rooted in long-term land stewardship, where
							innovation enhances yield while preserving the natural environment
							for future generations.
						</p>
					</div>
				</div>
			</div>

			{/* Join the Movement */}
			<div className="text-center max-w-3xl mx-auto">
				<h2 className="text-4xl font-bold text-black mb-6 mt-0 flex justify-center items-center gap-3">
					Join the Movement
				</h2>
				<p className="text-lg text-gray-800 leading-relaxed mb-6">
					Whether you&apos;re a first-time investor or a seasoned landowner,{" "}
					<span className="font-semibold text-orange-600">VR Agri Farms</span>{" "}
					welcomes you to be part of a forward-thinking farming revolution where
					growth meets sustainability.
				</p>
				<p className="text-lg text-gray-800 leading-relaxed mb-10">
					Together, we grow green, grow smart, and build a thriving future for
					Indian agriculture.
				</p>
				<button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 shadow-md">
					Get Started
				</button>
			</div>
		</section>
	);
}
