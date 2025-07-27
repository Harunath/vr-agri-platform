import React from "react";
import Image from "next/image";
import { blogPosts } from "../../lib/data/BlogPosts";

type BlogPost = (typeof blogPosts)[number];

export default function BlogMeta({ post }: { post: BlogPost }) {
	return (
		<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 border-t pt-4 text-sm text-black">
			<div className="flex items-center gap-2">
				<Image
					src={post.author.avatar}
					alt={post.author.name}
					width={28}
					height={28}
					className="rounded-full"
				/>
				<span>
					{post.author.name} • {post.date}
				</span>
			</div>
			<div className="flex gap-2 flex-wrap">
				{post.hashtags.map((tag, idx) => (
					<span
						key={idx}
						className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}
