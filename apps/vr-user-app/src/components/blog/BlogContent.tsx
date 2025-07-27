import { blogPosts } from "@/lib/data/BlogPosts";
import React from "react";

type BlogPost = (typeof blogPosts)[number];

export default function BlogContent({ post }: { post: BlogPost }) {
	return (
		<article className="prose max-w-none prose-img:rounded-lg prose-a:text-blue-600 prose-a:underline">
			<div dangerouslySetInnerHTML={{ __html: post.content }} />

			{post.links?.length > 0 && (
				<section className="mt-8">
					<h3>Explore More</h3>
					<ul className="list-disc ml-5">
						{post.links.map((link, idx) => (
							<li key={idx}>
								<a href={link.url} target="_blank" rel="noopener noreferrer">
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</section>
			)}
		</article>
	);
}
