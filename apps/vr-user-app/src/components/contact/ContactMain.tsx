"use client";

import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiSend } from "react-icons/fi";

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
		<section className="bg-white min-h-screen py-16 px-4 text-black">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Left Section - Contact Info */}
				<div className="border border-orange-500 p-8 rounded-md">
					<h3 className="text-orange-600 font-semibold text-sm mb-2 uppercase">
						Contact Us
					</h3>
					<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
					<p className="text-gray-600 mb-6">
						Have questions or want to get started with your farmland journey?
						Reach out to us anytime.
					</p>

					<hr className="border-t border-orange-500 my-6" />

					<div className="space-y-6 text-gray-800 text-sm">
						<div className="flex gap-4">
							<FiMapPin className="text-orange-500 mt-1" />
							<div>
								<p className="font-bold">Address</p>
								<p>
									#101, Dwarakapuri Colony,
									<br />
									Hyderabad, Telangana – 500082
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<FiMail className="text-orange-500 mt-1" />
							<div>
								<p className="font-bold">Email</p>
								<p>contact@vragrifarms.com</p>
							</div>
						</div>

						<div className="flex gap-4">
							<FiPhone className="text-orange-500 mt-1" />
							<div>
								<p className="font-bold">Phone</p>
								<p>+91 9515934289</p>
							</div>
						</div>

						<div className="flex gap-4">
							<FiGlobe className="text-orange-500 mt-1" />
							<div>
								<p className="font-bold">Website</p>
								<p>www.vrkisanparivaar.co</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Section - Contact Form */}
				<form
					onSubmit={handleSubmit}
					className="bg-slate-100 shadow-2xl rounded-md p-8 space-y-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						Send us a message
					</h2>

					<div>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
							placeholder="Your Name"
							className="w-full border border-gray-300 rounded px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							placeholder="Your Email"
							className="w-full border border-gray-300 rounded px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							required
							rows={5}
							placeholder="Your Message"
							className="w-full border border-gray-300 rounded px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<button
						type="submit"
						className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded inline-flex items-center transition">
						<FiSend className="mr-2" />
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
