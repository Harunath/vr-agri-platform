"use client";

import { useState } from "react";

export default function ContactMain() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", form);
		setSubmitted(true);
		setForm({ name: "", email: "", message: "" });
	};

	return (
		<section className="bg-[#FDFCF5] min-h-screen py-16 px-4">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Contact Info */}
				<div>
					<h1 className="text-4xl font-bold text-[#2F855A] mb-6">Contact Us</h1>
					<p className="text-[#2D3748] mb-8">
						Have questions or want to get started with your farmland journey?
						Reach out to us anytime.
					</p>

					<div className="space-y-4 text-[#2D3748] text-base">
						<p>
							📍 <strong>Address:</strong>
							<br />
							#101, Dwarakapuri Colony,
							<br />
							Hyderabad, Telangana – 500082
						</p>

						<p>
							✉️ <strong>Email:</strong>
							<br />
							<a
								href="mailto:contact@vrkisanparivaar.com"
								className="text-[#2F855A] hover:underline">
								contact@vrkisanparivaar.com
							</a>
						</p>

						<p>
							📞 <strong>Phone:</strong>
							<br />
							<a
								href="tel:+919515934289"
								className="text-[#2F855A] hover:underline">
								+91 9515934289
							</a>
						</p>

						<p>
							🌐 <strong>Website:</strong>
							<br />
							<a
								href="https://www.vrkisanparivaar.co"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#2F855A] hover:underline">
								www.vrkisanparivaar.co
							</a>
						</p>
					</div>
				</div>

				{/* Contact Form */}
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-lg rounded-lg border border-[#A0C49D] p-8 space-y-6">
					<h2 className="text-2xl font-semibold text-[#2F855A]">
						Send us a message
					</h2>

					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Your Name"
						required
						className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
					/>

					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						placeholder="Your Email"
						required
						className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
					/>

					<textarea
						name="message"
						value={form.message}
						onChange={handleChange}
						placeholder="Your Message"
						rows={5}
						required
						className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F855A]"></textarea>

					<button
						type="submit"
						className="bg-[#F6BE00] hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded transition">
						Send Message
					</button>

					{submitted && (
						<p className="text-green-600 text-sm pt-2">
							✅ Thank you! Your message has been sent.
						</p>
					)}
				</form>
			</div>
		</section>
	);
}
