import Image from "next/image";

const sections = [
	{
		title: "Who We Are",
		content:
			"At VR Agri Farms, we combine our love for agriculture with a commitment to social responsibility, fostering a deep connection with nature. As experts in farmland sales and management, we empower our clients to embrace a fulfilling lifestyle.",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1718358325/about_who_we_are.jpg",
	},
	{
		title: "What We Do",
		content:
			"We support farmland buyers by creating the best financial growth opportunities — including livestock management and crop cultivation — through our extensive market network and domain expertise.",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1718358350/about_what_we_do.jpg",
	},
	{
		title: "Our Approach",
		content:
			"We focus on implementing advanced farming technologies and natural methods. Our approach ensures long-term sustainability, better yields, and environmentally responsible land stewardship.",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1718358391/about_approach.jpg",
	},
	{
		title: "Join the Movement",
		content:
			"Whether you’re a first-time investor or a seasoned landowner, VR Agri Farms invites you to be a part of a future-forward, sustainable, and profitable farming revolution. Together, we grow green and grow smart.",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1718358434/about_join.jpg",
	},
];

export default function AboutContent() {
	return (
		<section className="bg-white py-16 px-4">
			<div className="max-w-6xl mx-auto space-y-24">
				{sections.map((section, index) => (
					<div
						key={index}
						className={`flex flex-col-reverse md:flex-row ${
							index % 2 !== 0 ? "md:flex-row-reverse" : ""
						} items-center gap-10`}>
						{/* Text */}
						<div className="md:w-1/2">
							<h3 className="text-3xl font-semibold text-[#2F855A] mb-4">
								{section.title}
							</h3>
							<p className="text-lg text-[#2D3748] leading-relaxed">
								{section.content}
							</p>
						</div>

						{/* Image */}
						<div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
							<Image
								src={section.image}
								alt={section.title}
								width={600}
								height={400}
								className="w-full h-auto object-cover rounded-md"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
