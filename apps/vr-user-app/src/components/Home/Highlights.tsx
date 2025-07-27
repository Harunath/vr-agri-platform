"use client";

import { FaSeedling, FaTractor, FaLeaf } from "react-icons/fa";

const highlights = [
	{
		icon: <FaSeedling className="text-green-700 text-4xl" />,
		title: "Natural Farming",
		description:
			"We promote chemical-free, eco-conscious practices that enrich the soil and preserve biodiversity.",
	},
	{
		icon: <FaTractor className="text-orange-600 text-4xl" />,
		title: "Livestock Management",
		description:
			"From grazing plans to feeding systems, we ensure healthy, ethical, and productive animal care.",
	},
	{
		icon: <FaLeaf className="text-green-700 text-4xl" />,
		title: "Organic Growth",
		description:
			"Our solutions support long-term sustainability, market demand, and natural crop cycles.",
	},
];

export default function Highlights() {
	return (
		<section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
			<h2 className="text-4xl font-bold text-center text-black mb-12">
				Sustainable Farming Highlights
			</h2>

			<div className="grid md:grid-cols-3 gap-10">
				{highlights.map((item, idx) => (
					<div
						key={idx}
						className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-all duration-300">
						<div className="mb-4 flex justify-center">{item.icon}</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							{item.title}
						</h3>
						<p className="text-gray-600 leading-relaxed text-[16px]">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
