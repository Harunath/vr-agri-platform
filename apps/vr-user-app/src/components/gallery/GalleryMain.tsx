"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const images = [
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924335/WhatsApp_Image_2025-07-29_at_2.25.19_PM_e05psb.jpg",
		alt: "Sample 1",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924335/WhatsApp_Image_2025-07-29_at_2.25.23_PM_gcglid.jpg",
		alt: "Sample 2",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924335/WhatsApp_Image_2025-07-29_at_2.25.22_PM_vlueby.jpg",
		alt: "Sample 3",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924335/WhatsApp_Image_2025-07-29_at_2.25.22_PM_1_kcs7c3.jpg",
		alt: "Sample 1",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924334/WhatsApp_Image_2025-07-29_at_2.25.19_PM_1_asofbj.jpg",
		alt: "Sample 2",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924334/WhatsApp_Image_2025-07-29_at_2.25.19_PM_2_cbu57y.jpg",
		alt: "Sample 3",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924335/WhatsApp_Image_2025-07-29_at_2.25.19_PM_3_jbgdgn.jpg",
		alt: "Sample 4",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924334/WhatsApp_Image_2025-07-29_at_2.25.18_PM_2_dnbylm.jpg",
		alt: "Sample 1",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924334/WhatsApp_Image_2025-07-29_at_2.25.18_PM_yv3qah.jpg",
		alt: "Sample 2",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924333/WhatsApp_Image_2025-07-29_at_2.25.17_PM_yehywt.jpg",
		alt: "Sample 3",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924333/WhatsApp_Image_2025-07-29_at_2.25.17_PM_2_agp8r1.jpg",
		alt: "Sample 4",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924333/WhatsApp_Image_2025-07-29_at_2.25.18_PM_1_ngv6rh.jpg",
		alt: "Sample 1",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924332/WhatsApp_Image_2025-07-29_at_2.25.16_PM_2_rlo0cd.jpg",
		alt: "Sample 2",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924332/WhatsApp_Image_2025-07-29_at_2.25.24_PM_g3rj5z.jpg",
		alt: "Sample 3",
	},
	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924332/WhatsApp_Image_2025-07-29_at_2.25.17_PM_1_uqsh7v.jpg",
		alt: "Sample 4",
	},

	{
		src: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1754924332/WhatsApp_Image_2025-07-29_at_2.25.16_PM_1_f7hmic.jpg",
		alt: "Sample 2",
	},
];

export default function GalleryMain() {
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	return (
		<main className="p-6 bg-green-700">
			{/* Masonry Gallery */}
			<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
				{images.map((img, i) => (
					<div
						key={i}
						className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer hover:opacity-90 transition"
						onClick={() => setSelectedImg(img.src)}>
						<Image
							src={img.src}
							alt={img.alt}
							width={500}
							height={0}
							className="w-full h-auto"
							unoptimized
						/>
					</div>
				))}
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedImg && (
					<motion.div
						className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={() => setSelectedImg(null)} // click background to close
					>
						{/* Close Button */}
						<button
							className="absolute top-4 right-4 z-[60] bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 transition pointer-events-auto"
							onClick={(e) => {
								e.stopPropagation();
								setSelectedImg(null);
							}}>
							<IoClose size={28} />
						</button>

						<motion.div
							className="relative w-full h-full flex items-center justify-center"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
						>
							<div className="relative w-full h-full max-w-screen max-h-screen flex items-center justify-center">
								<Image
									src={selectedImg}
									alt="Preview"
									fill
									className="object-contain"
									unoptimized
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
