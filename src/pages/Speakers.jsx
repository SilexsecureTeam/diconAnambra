import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import face1 from '../assets/face1.png';
import face2 from '../assets/face2.png';
import face3 from '../assets/face3.png';
import face4 from '../assets/face4.png';

const speakers = [
	{
		img: face1,
		name: 'Mallam Nuhu Ribadu',
		title: 'National Security Adviser',
	},
	{
		img: face2,
		name: 'Gen. Christopher Gwabin Musa',
		title: 'Chief of Defence Staff',
	},
	{
		img: face3,
		name: 'Lieut. General Olufemi Oluyede',
		title: 'Chief of Army Staff',
	},
	{
		img: face4,
		name: 'Vice Adm. Emmanuel Ikechukwu Ogalla',
		title: 'Chief Of Naval Staff',
	},
	{
		img: face3,
		name: 'Air Marshall Hasan Bala Abubakar',
		title: 'Chief of Air Staff',
	},
	{
		img: face2,
		name: 'Major Gen B. Akaya',
		title: 'General Officer Commanding',
	},
	{
		img: face4,
		name: 'Dr. Kayode Adeolu Egbetokun',
		title: 'Inspector General of Police',
	},
	{
		img: face1,
		name: 'Mr. Adeola O. Adeyinka',
		title: 'Director, State Security Services',
	},
	{
		img: face2,
		name: 'Bashir Adewale Adeniyi mni',
		title: 'Comptroller General of Customs',
	},
	{
		img: face3,
		name: 'AMB. Joshua Wale Olatunji',
		title: 'Controller, NIS',
	},
];

export default function Speakers() {
	// Animation variants
	const fadeUp = {
		hidden: { opacity: 0, y: 40 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
		}),
	};
	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
	};
	return (
		<>
			<Header />
			<motion.section
				className="py-16 pt-24 px-4 md:px-16 bg-gray-50 min-h-[60vh]"
				initial="hidden"
				animate="visible"
				variants={fadeIn}
			>
				<div className="w-full mx-auto">
					{/* Top Headline and Subtext */}
					<motion.div
						className="mb-10"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
					>
						<h1 className="text-3xl md:text-4xl font-bold text-[#C08032] mb-4 leading-tight">
							Engage with Visionary Leaders
							<br />
							Driving Security and Development
						</h1>
						<p className="text-gray-700 mb-6 max-w-lg">
							Join government leaders, security heads, and top-level decision-makers
							at the summit. Build meaningful connections that shape regional
							security and collaboration.
						</p>
					</motion.div>
					{/* Divider */}
					<motion.div
						className="border-t border-gray-200 mb-10"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeIn}
					/>
					{/* Speakers Grid with Quote */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
						{/* Quote box as first grid item, col-span-2 on md+ */}
						<motion.div
							className="bg-white border border-[#E5E5E5] p-8 flex flex-col justify-center col-span-1 md:col-span-2 min-h-[270px]"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={fadeUp}
						>
							<div className="text-3xl text-[#C08032] font-bold mb-2">“</div>
							<div className="text-[#C08032] font-medium text-lg mb-4">
								The strength of a nation derives
								<br />
								from the integrity of the home
							</div>
							<button className="border border-[#C08032] text-[#C08032] px-4 py-2 rounded-md font-medium hover:bg-[#C08032] hover:text-white transition text-sm w-fit">
								Click to register
							</button>
						</motion.div>
						{/* Speaker cards */}
						{speakers.map((sp, idx) => (
							<motion.div
								key={idx}
								className="bg-white border border-[#E5E5E5] p-6 flex flex-col items-center text-center min-h-[270px] rounded-none"
								custom={idx}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeUp}
							>
								<img
									src={sp.img}
									alt={sp.name}
									className="w-28 h-28 object-cover mb-4"
								/>
								<h3 className="text-lg font-semibold text-[#183354] mb-1">
									{sp.name}
								</h3>
								<p className="text-[#545E69] text-sm font-medium">
									{sp.title}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
			<Footer />
		</>
	);
}
