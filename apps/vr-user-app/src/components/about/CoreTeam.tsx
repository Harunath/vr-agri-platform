"use client";

import Image from "next/image";

const teamMembers = [
	{
		name: "MR. ARUN K.",
		title: "FOUNDER & MANAGING DIRECTOR",
		description:
			"He is a visionary entrepreneur known for pioneering sustainable farming ventures across India. With a passion for innovation and rural empowerment, he leads the company with a clear focus on social impact and scalable agricultural growth.",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752476517/smiling_man_in_business_suit_at_laptop_GettyIma.original_exbbvb.jpg",
	},
	{
		name: "PRIYA REDDY",
		title: "CEO – Strategy & Communications",
		description:
			"Priya brings 15+ years of leadership across agri-policy, media, and investor relations. She has led several high-impact campaigns and continues to drive the firm’s mission of connecting farmers with global opportunities.",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752476575/business-8458541_1280_buzoye.jpg",
	},
];

export default function CoreTeam() {
	return (
		<section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
			<h2 className="text-4xl font-bold text-black mb-12 text-center">
				Our Core Team
			</h2>

			<div className="space-y-20">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className={`grid md:grid-cols-2 gap-10 items-start ${
							index % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}>
						{/* Image */}
						<div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md">
							<Image
								src={member.image}
								alt={member.name}
								fill
								className="object-cover"
							/>
						</div>

						{/* Text */}
						<div>
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								{member.name}
							</h3>
							<h4 className="text-md font-semibold text-gray-600 mb-4 uppercase tracking-wide">
								{member.title}
							</h4>
							<p className="text-gray-700 text-justify leading-relaxed text-[17px]">
								{member.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
