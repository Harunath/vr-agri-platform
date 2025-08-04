"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754285435/Screenshot_2025-08-02_151329_ed7dta.png",
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754285450/Screenshot_2025-08-02_151411_tpyshu.png",
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286400/Screenshot_2025-08-04_111212_tj9mgx.png",
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286398/Screenshot_2025-08-04_111332_gcpig7.png",
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286395/Screenshot_2025-08-04_111401_cdeabu.png",
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286394/Screenshot_2025-08-04_111440_qejxqe.png",
	"https://res.cloudinary.com/diaoy3wzi/image/upload/v1754286389/Screenshot_2025-08-04_111537_kp3r40.png",
];

export default function HeroCarousel() {
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

	return (
		<div className="w-screen h-[calc(100vh/2)] lg:h-screen relative overflow-hidden">
			<Slider {...settings}>
				{carouselImages.map((src, index) => (
					<div key={index} className="relative h-[calc(100vh/2)] lg:h-screen">
						<Image
							src={src}
							alt={`Slide ${index + 1}`}
							height={1080}
							width={1920}
							className="h-full w-full object-contain opacity-90"
							priority={index === 0}
						/>
					</div>
				))}
			</Slider>

			{/* Text Overlay */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				viewport={{ once: true }}
				className="absolute top-1/4 lg:top-[30%] left-0 md:left-12 lg:left-24 ml-4 sm:ml-8 p-4 sm:p-6 max-w-xl w-[90%] sm:w-[80%] bg-black/10 rounded-lg">
				<h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
					<span className="block">Grow Naturally.</span>
					<span className="block">Live Sustainably.</span>
				</h1>

				<p className="text-white text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
					At VR Agri Farms, we help you own and cultivate farmland with ease.
					From organic crops to livestock integration, our fully managed
					solutions make it simple to live closer to nature while building real,
					lasting value.
				</p>
				<Link
					href="/about"
					className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-md transition duration-300 text-sm sm:text-base">
					Learn More
				</Link>
			</motion.div>

			{/* Custom Dots Style */}
			<style jsx global>{`
				.slick-dots li button:before {
					color: #f6be00 !important;
					font-size: 10px;
					opacity: 1 !important;
				}
				.slick-dots li.slick-active button:before {
					color: #2f855a !important;
				}
			`}</style>
		</div>
	);
}
