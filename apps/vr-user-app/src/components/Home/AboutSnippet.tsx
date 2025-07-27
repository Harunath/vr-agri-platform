import Link from "next/link";

export default function AboutSnippet() {
	return (
		<section className="bg-slate-100 py-20 px-6 sm:px-10">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
					About <span className="text-orange-500">VR Agri Farms</span>
				</h2>
				<p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
					At VR Agri Farms, we combine our love for agriculture with a deep
					commitment to social responsibility - fostering a stronger bond with
					nature. We specialize in farmland sales and sustainable agricultural
					practices, empowering you to embrace a lifestyle rooted in growth and
					eco-conscious living.
				</p>
				<Link
					href="/about"
					className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg shadow transition duration-300">
					Learn More
				</Link>
			</div>
		</section>
	);
}
