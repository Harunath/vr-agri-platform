import Image from "next/image";

type BannerProps = {
	title: string;
	subtitle?: string;
	bgImageUrl: string;
};

export default function Banner({ title, subtitle, bgImageUrl }: BannerProps) {
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
					quality={100}
				/>
				<div className="absolute inset-0 bg-black/40" />
			</div>

			{/* Title + Subtitle */}
			<div className="relative z-10 w-full text-center px-4">
				<h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
					{title}
				</h1>
				{subtitle && (
					<p className="mt-4 text-lg md:text-2xl text-white drop-shadow">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
}
