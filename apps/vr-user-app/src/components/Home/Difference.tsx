import { FaCheckCircle } from "react-icons/fa";

const features = [
	{
		title: "Trusted Farming Experts",
		description:
			"Our experienced team helps you invest in farmland with full confidence. We have supported many happy clients in building secure farm assets.",
	},
	{
		title: "Eco Friendly Organic Practices",
		description:
			"We grow crops naturally without using harmful chemicals. This keeps the soil healthy and supports a better environment.",
	},
	{
		title: "Support for Every Investor",
		description:
			"Whether you are new or experienced, our team guides you every step of the way and keeps you updated on your farmland progress.",
	},
	{
		title: "Smooth and Transparent Process",
		description:
			"Our team handles all paperwork and provides regular updates so your investment journey is easy and stress free.",
	},
];

export default function Difference() {
	return (
		<section className="bg-slate-100 text-gray-800 py-20 px-6 sm:px-10">
			<div className="max-w-6xl mx-auto space-y-10">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
						How <span className="text-orange-500">VR Agri </span>
						Makes a Difference
					</h2>
					<p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
						VR Agri makes it simple to own and enjoy farmland. Whether you want
						a peaceful green space or a smart investment, we offer a complete
						and caring service that puts you first.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 pt-4">
					{features.map((item, index) => (
						<div
							key={index}
							className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
							<div className="text-green-600 mt-1 shrink-0">
								<FaCheckCircle size={24} />
							</div>
							<div>
								<h4 className="font-semibold text-lg text-gray-900 mb-1">
									{item.title}
								</h4>
								<p className="text-sm text-gray-700 leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
