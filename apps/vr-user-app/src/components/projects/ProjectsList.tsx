"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const projects = [
	{
		id: 1,
		title: "Kangti Project",
		description:
			"500-acre mega project with premium amenities, flexible EMIs, and registration at just 50% upfront.",
		brochure:
			"https://drive.google.com/file/d/18HAyxaBhvFGSdgwoRdyVIau74k6RNOvv/view?usp=drive_link",
		images: [
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754285435/Screenshot_2025-08-02_151329_ed7dta.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754285450/Screenshot_2025-08-02_151411_tpyshu.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286400/Screenshot_2025-08-04_111212_tj9mgx.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286398/Screenshot_2025-08-04_111332_gcpig7.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286395/Screenshot_2025-08-04_111401_cdeabu.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286394/Screenshot_2025-08-04_111440_qejxqe.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286389/Screenshot_2025-08-04_111537_kp3r40.png",
		],
	},
	{
		id: 2,
		title: "Ongole",
		description: "500 Acres mega project.",
		brochure:
			"https://drive.google.com/file/d/1um_rb_aYEVOPpMyE_wGSGhsJw4dGwD52/view?usp=drive_link",
		images: [
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754285435/Screenshot_2025-08-02_151329_ed7dta.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754285450/Screenshot_2025-08-02_151411_tpyshu.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286400/Screenshot_2025-08-04_111212_tj9mgx.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286398/Screenshot_2025-08-04_111332_gcpig7.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286395/Screenshot_2025-08-04_111401_cdeabu.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286394/Screenshot_2025-08-04_111440_qejxqe.png",
			"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286389/Screenshot_2025-08-04_111537_kp3r40.png",
		],
	},
];

const settings = {
	dots: true,
	infinite: true,
	speed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: false,
	focusOnSelect: true,
	arrows: false,
};

export default function ProjectsList() {
	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
			<div className="grid gap-10 justify-between">
				<div className="bg-white p-8 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
					<div className="flex flex-col items-center lg:flex-row gap-4">
						<div className="w-1/2">
							<Slider {...settings}>
								{projects[0].images.length > 0 &&
									projects[0].images.map((src, idx) => (
										<div key={idx} className="h-60 md:h-72 lg:h-80">
											<Image
												src={src}
												alt={`${projects[0].title} screenshot ${idx + 1}`}
												height={1080}
												width={1920}
												className="h-full w-full object-contain opacity-90"
												priority={idx === 0}
											/>
										</div>
									))}
							</Slider>
						</div>
						<div className="p-4 flex-1 flex flex-col justify-between gap-4 border-t lg:border-t-0 mt-2 lg:mt-0 lg:border-l border-dotted border-gray-300">
							<div>
								<h2 className="text-2xl font-semibold text-gray-800">
									{projects[0].title}
								</h2>
								<p className="text-gray-600 mt-2 text-lg">
									{projects[0].description}
								</p>
								<ul className="list-disc list-inside mt-4 text-gray-700 space-y-1 ml-4">
									<li>
										100% clear Title | 10,000 Sq. Ft. Clubhouse | Swimming Pool
									</li>
									<li className="mt-4 text-gray-700 text-base">
										<span className="font-medium">Farmland Sizes</span>
										<div className="overflow-x-auto mt-2">
											<table className="min-w-full text-left border border-gray-300 rounded-lg shadow-sm">
												<thead>
													<tr className="bg-gray-100 text-gray-700">
														<th className="px-4 py-2 border-b border-gray-300">
															A
														</th>
														<th className="px-4 py-2 border-b border-gray-300">
															B
														</th>
													</tr>
												</thead>
												<tbody>
													<tr className="even:bg-gray-50">
														<td className="px-4 py-2 border-b border-gray-200 before:content-['•'] before:mr-2">
															1/4 Acre
														</td>
														<td className="px-4 py-2 border-b border-gray-200 before:content-['•'] before:mr-2">
															1 Gunta
														</td>
													</tr>
													<tr className="even:bg-gray-50">
														<td className="px-4 py-2 border-b border-gray-200 before:content-['•'] before:mr-2">
															1/2 Acre
														</td>
														<td className="px-4 py-2 border-b border-gray-200 before:content-['•'] before:mr-2">
															2.5 Square Yards
														</td>
													</tr>
													<tr className="even:bg-gray-50">
														<td className="px-4 py-2 before:content-['•'] before:mr-2">
															1 Acre
														</td>
														<td className="px-4 py-2"></td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
									<li>Near Proposed NIMZ Central Govt. Mega Project</li>
								</ul>
							</div>
							<div className="mt-6">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://drive.google.com/file/d/18HAyxaBhvFGSdgwoRdyVIau74k6RNOvv/view?usp=drive_link"
									download="kangati_project_brochure.pdf"
									className="inline-block px-6 py-2 rounded-xl text-white bg-emerald-600 font-medium text-lg shadow hover:bg-gray-100 hover:shadow-lg transition-all duration-200">
									Brochure
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
