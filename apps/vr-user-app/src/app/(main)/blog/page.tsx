import React from "react";
import BlogCard from "../../../components/blog/BlogCard";
import { blogPosts } from "../../../lib/data/BlogPosts";

export default function Page() {
	return (
		<main className="px-4 md:px-8 lg:px-12 py-16 max-w-7xl mx-auto bg-[#FDFCF5] min-h-screen">
			{/* Page Header */}
			<header className="text-center mb-20">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-[#2F855A] mb-4 mt-12">
					Agri Insights & Resources
				</h1>
				<p className="text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto">
					Dive into articles on natural farming, sustainable practices, and land
					investment strategies—curated to help you grow smarter.
				</p>
				<div className="mt-2 h-1 w-24 bg-[#F6BE00] rounded mx-auto" />
			</header>

			{/* Blog Cards Grid */}
			<section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				{blogPosts.map((post, idx) => (
					<BlogCard key={idx} post={post} />
				))}
			</section>
		</main>
	);
}
