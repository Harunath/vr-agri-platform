import { FaCheckCircle } from "react-icons/fa";

const developments = [
	"Entrance gate",
	"Protected cultivation",
	"24x7 Security",
	"CCTV Surveillance",
	"100% Vastu compliant",
	"The roads measure 30 feet and 20 feet in width each",
];

export default function ProjectDevelopments() {
	return (
		<section className="bg-slate-100 p-16 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-gray-800 mb-8 ">
					Project Developments
				</h2>

				<div className="grid md:grid-cols-2 gap-6 text-lg text-slate-800">
					{developments.map((item, idx) => (
						<div key={idx} className="flex items-start gap-3">
							<FaCheckCircle className="text-green-600 mt-1" />
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
