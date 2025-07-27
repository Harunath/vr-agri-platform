import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/BlogPosts";

type BlogPost = (typeof blogPosts)[number];

export default function BlogCard({ post }: { post: BlogPost }) {
	return (
		<div className="rounded-2xl overflow-hidden shadow-md  bg-white transition hover:shadow-xl">
			<Image
				src={post.image}
				alt={post.title}
				width={600}
				height={400}
				className="w-full h-48 object-cover"
			/>
			<div className="p-5">
				<h2 className="text-2xl text-black font-semibold mb-2">{post.title}</h2>
				<p className="text-gray-600 mb-4">{post.excerpt}</p>

				<div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
					<Image
						src={post.author.avatar}
						alt={post.author.name}
						width={24}
						height={24}
						className="rounded-full"
					/>
					<span>{post.author.name}</span> • <span>{post.date}</span>
				</div>

				<Link
					href={`/blog/${post.slug}`}
					className="inline-block text-blue-600 font-medium hover:underline">
					Read More →
				</Link>
			</div>
		</div>
	);
}
