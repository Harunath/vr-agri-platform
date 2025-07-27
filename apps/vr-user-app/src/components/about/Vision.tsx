"use client";

import { FaSeedling, FaHandsHelping, FaChartLine } from "react-icons/fa";

export default function Vision() {
	return (
		<section className="bg-white py-4 pb-10 px-6 sm:px-10 lg:px-24">
			{/* Title */}
			<div className="text-center mb-10">
				<h2 className="text-4xl font-bold text-black">Our Vision</h2>
			</div>

			{/* Card */}
			<div className="bg-green-100 border border-green-800 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
				<p className="text-lg text-gray-800 leading-relaxed text-center">
					Our vision is to transform agriculture into a sustainable,
					tech-driven, and profitable ecosystem by bridging the gap between
					rural farmers and the corporate sector. We aim to empower farmers with
					tools, knowledge, and partnerships that drive innovation, increase
					yields, and enhance rural prosperity across India.
				</p>
			</div>

			{/* Icons Row */}
			<div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto text-center">
				<div className="flex flex-col items-center">
					<FaSeedling className="text-green-600 text-4xl mb-3" />
					<p className="text-gray-700 text-base font-medium">
						Promote Natural & Smart Farming
					</p>
				</div>

				<div className="flex flex-col items-center">
					<FaHandsHelping className="text-green-600 text-4xl mb-3" />
					<p className="text-gray-700 text-base font-medium">
						Connect Rural India to Corporate Sector
					</p>
				</div>

				<div className="flex flex-col items-center">
					<FaChartLine className="text-green-600 text-4xl mb-3" />
					<p className="text-gray-700 text-base font-medium">
						Drive Profitability & Innovation
					</p>
				</div>
			</div>
		</section>
	);
}
