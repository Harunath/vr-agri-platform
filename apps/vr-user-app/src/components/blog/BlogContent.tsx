import { blogPosts } from "../../lib/data/BlogPosts";
import React from "react";

type BlogPost = (typeof blogPosts)[number];

export default function BlogContent({ post }: { post: BlogPost }) {
	return (
		<article
			className="prose max-w-none prose-img:rounded-lg 
			prose-a:text-orange-600 prose-a:underline 
			prose-h1:text-black prose-h2:text-black prose-h3:text-black prose-h4:text-black prose-h5:text-black prose-h6:text-black 
			prose-p:text-black prose-li:text-black prose-strong:text-black">
			<div dangerouslySetInnerHTML={{ __html: post.content }} />

			{post.links?.length > 0 && (
				<section className="mt-8">
					<h3 className="text-black">Explore More</h3>
					<ul className="list-disc ml-5">
						{post.links.map((link, idx) => (
							<li key={idx}>
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-black hover:underline">
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
