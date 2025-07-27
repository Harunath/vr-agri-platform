"use client";
import Image from "next/image";

const images = [
	{
		src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1751022001/Farm-Security-Gates_if9sw3.jpg",
		alt: "Entrance Gate",
	},
	{
		src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1751022092/72_cxhyxj.jpg",
		alt: "Protected Cultivation",
	},
	{
		src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1751022153/Farm-Security-Cameras_zxs9fq.png",
		alt: "CCTV Surveillance",
	},
	{
		src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1751022178/Building-Layout-1024x1006_l6djdf.jpg",
		alt: "Vastu Compliant Layout",
	},
	{
		src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1751022206/2017-04-13-15-24-09_liitoy.jpg",
		alt: "Internal Roads",
	},
];

export default function Gallery() {
	return (
		<section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center mb-12">
				<h2 className="text-4xl font-bold text-gray-900">Gallery</h2>
				<p className="text-gray-700 mt-3 max-w-2xl mx-auto">
					Explore visuals of our secure, vastu-compliant, and well-equipped
					farmland development - where nature meets planning.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{images.map((image, idx) => (
					<div
						key={idx}
						className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-md transition">
						<div className="aspect-[4/3] w-full">
							<Image
								src={image.src}
								alt={image.alt}
								width={500}
								height={375}
								className="w-full h-full object-cover"
							/>
						</div>
						<p className="text-center text-gray-800 text-sm font-medium p-4">
							{image.alt}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
