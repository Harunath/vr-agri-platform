import Image from "next/image";

type BannerProps = {
	title: string;
	bgImageUrl: string;
};

export default function Banner({ title, bgImageUrl }: BannerProps) {
	return (
		<section className="relative overflow-hidden h-[60vh] md:h-[70vh] flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src={bgImageUrl}
					alt="Banner background"
					fill
					sizes="100vw"
					className="object-cover"
					priority
					quality={100} // Highest quality
				/>
				<div className="absolute inset-0 bg-black/40" />{" "}
				{/* Optional overlay */}
			</div>

			{/* Title Overlay */}
			<div className="relative z-10 w-full text-center px-4">
				<h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
					{title}
				</h1>
			</div>
		</section>
	);
}
