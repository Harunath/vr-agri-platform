import { FaLeaf, FaHandsHelping, FaHandshake } from "react-icons/fa";

const items = [
	{
		icon: <FaHandsHelping size={36} className="text-orange-500 mx-auto" />,
		text: "A unique business opportunity in India and internationally.",
	},
	{
		icon: <FaLeaf size={36} className="text-orange-500 mx-auto" />,
		text: "A hybrid model of land ownership and agriculture that fosters sustainability and connects us to our roots.",
	},
	{
		icon: <FaHandshake size={36} className="text-orange-500 mx-auto" />,
		text: "We partner with a reputed MNC across 9 Indian states in Agri Business.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="bg-white py-20 px-6 sm:px-8 lg:px-12">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12 leading-tight">
					Why Choose <span className="text-orange-500">VR Agri Farms</span>
				</h2>

				<div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
					{items.map((item, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow hover:shadow-lg transition-shadow duration-300 text-center border border-gray-100">
							{item.icon}
							<p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
