import Header from '../components/Header';
import Footer from '../components/Footer';
import hostImg from '../assets/host.png';
import map from '../assets/anambra-map.png';
import date from '../assets/locationHero.png';
import location from '../assets/locationHero.png';
import face1 from '../assets/face1.png';
import face2 from '../assets/face2.png';
import face3 from '../assets/face3.png';
import face4 from '../assets/face4.png';
import spons1 from '../assets/spons1.png';
import spons2 from '../assets/spons2.png';
import spons3 from '../assets/spons3.png';
import logo from '../assets/logo.png';
import backg from '../assets/background.png';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import feature5 from '../assets/feature5.png';
import feature6 from '../assets/feature6.png';
import crowdImg from '../assets/crowd.png';
import summit from '../assets/summit.png';
import arrow from '../assets/VectorArr.png';
import ShieldIcon from '../assets/shieldIcon.png';
// import sponsorPlaceholder from '../assets/sponsor-placeholder.png';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Holistic Understanding Of Regional Insecurities',
        description: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris. Nunc id turpis id sodales tincidunt aliquet nam duis augue id ac.',
        image: feature1,
    },
    {
        title: 'Informed Policy Making',
        description: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris. Nunc id turpis id sodales tincidunt aliquet nam duis augue id ac.',
        image: feature2,
    },
    {
        title: 'Technology Adoption Roadmap',
        description: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris. Nunc id turpis id sodales tincidunt aliquet nam duis augue id ac.',
        image: feature3,
    },
    {
        title: 'Enhanced Stakeholder Collaboration',
        description: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris. Nunc id turpis id sodales tincidunt aliquet nam duis augue id ac.',
        image: feature4,
    },
    {
        title: 'Investment-Grade Security Commitments',
        description: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris. Nunc id turpis id sodales tincidunt aliquet nam duis augue id ac.',
        image: feature5,
    },
    {
        title: 'Community Empowerment And Participation',
        description: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris. Nunc id turpis id sodales tincidunt aliquet nam duis augue id ac.',
        image: feature6,
    },
];

const objectives = [
    {
        title: 'Strategic Dialogue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit purus, elementum sit maecenas vel sodales vestibulum urna. Consequat.',
    },
    {
        title: 'Collaborative Security Frameworks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit purus, elementum sit maecenas vel sodales vestibulum urna. Consequat.',
    },
    {
        title: 'Technology Integration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit purus, elementum sit maecenas vel sodales vestibulum urna. Consequat.',
    },
    {
        title: 'Private Sector Engagement',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit purus, elementum sit maecenas vel sodales vestibulum urna. Consequat.',
    },
];


const deliverables = [
    { title: 'Anambra Integrated Security Strategy Document (AISS)', text: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris fr ut. Turpis id sodales tincidunt aliquet nam duis augue id ac.' },
    { title: 'Public–Private Security Partnership Charter (PPSPC)', text: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris fr ut. Turpis id sodales tincidunt aliquet nam duis augue id ac.' },
    { title: 'Tech Showcase and Solution Fair', text: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris fr ut. Turpis id sodales tincidunt aliquet nam duis augue id ac.' },
    { title: 'Community Intelligence Network Framework', text: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris fr ut. Turpis id sodales tincidunt aliquet nam duis augue id ac.' },
    { title: 'Security Skills Capacity Building Report', text: 'Lorem ipsum dolor sit amet consectetur. Felis integer eget nunc orci fames integer diam est. Non ultricies eget auctor mauris fr ut. Turpis id sodales tincidunt aliquet nam duis augue id ac.' },
];

const profiles = [
    {
        img: face1,
        name: "Mallam Nuhu Ribadu",
        title: "National Security Adviser",
    },
    {
        img: face2,
        name: "Gen. Christopher Gwabin Musa",
        title: "Chief of Defence Staff",
    },
    {
        img: face3,
        name: "Lieut. General Olufemi Oluyede",
        title: "Chief of Army Staff",
    },
    {
        img: face4,
        name: "Vice Adm. Emmanuel Ikechukwu Ogalla",
        title: "Chief Of Naval Staff",
    },
];

export default function Home() {
    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
        }),
    };
    const fadeLeft = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const fadeRight = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <>
            <Header />
            <motion.section
                className="bg-gray-100 py-24 px-4 md:px-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto overflow-x-hidden">
                    {/* Header: Title & Image */}
                    <motion.div
                        className="flex flex-col lg:flex-row gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        {/* Left Content */}
                        <motion.div
                            className="flex-1 space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeLeft}
                        >
                            {/* Title with map icon */}
                            <div className="flex items-center space-x-2 max-w-[400px]">
                                <img src={map} alt="Anambra Map" className="" />
                            </div>

                            <p className="text-gray-600 max-w-[400px]">
                                <span className="font-semibold">Theme: <br /> </span> Securing an enabling environment for business growth and sustainable society
                            </p>

                            <div className='w-[90%] h-[1px] bg-[#3333334D]' />

                            {/* Date & Location */}
                            <div className="flex flex-col space-y-7 flex-wrap space-x-6 text-gray-700 text-[15px]">
                                <div className="flex items-center space-x-2">
                                    <img src={date} alt="" className='w-[36px]' />
                                    <span>July, 30th - 31st, <br /> 9:00 AM</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                                    <img src={location} alt="" className='w-[36px]' />
                                    <span>International Conference <br /> Awka, Anambra</span>
                                </div>
                            </div>

                            {/* Register input */}
                            <div className="mt-12 flex items-center max-w-[470px] relative">
                                <input
                                    type="email"
                                    placeholder="samantha@email.com"
                                    className="flex-1 px-6 py-6 text-[#333333] bg-white rounded-md focus:outline-none w-full"
                                />
                                <button className="bg-[#C08032] absolute right-6 text-white px-6 py-2 shadow-md rounded-md">
                                    Register
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="flex-1 relative overflow-hidden" // Added overflow-hidden
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeRight}
                        >
                            {/* Outer border div */}
                            <div
                                className="relative w-full md:max-w-[72%] ml-auto mr-5" // Removed md:h-[520px]
                                style={{
                                    clipPath: 'polygon(0 0, 60% 0, 100% 40%, 100% 100%, 0 100%)',
                                    background: '#000',
                                    padding: '4px', // border thickness
                                    boxSizing: 'border-box',
                                }}
                            >
                                {/* Inner image div */}
                                <div
                                    className="h-auto min-h-[300px]" // Use min-h for structure, h-auto for flexibility
                                    style={{
                                        clipPath: 'polygon(0 0, 60% 0, 100% 40%, 100% 100%, 0 100%)',
                                        background: '#C08032',
                                        height: '100%',
                                    }}
                                >
                                    <img
                                        src={hostImg}
                                        alt="Chief Host"
                                        className="w-full h-full object-cover"
                                        style={{ display: 'block', maxHeight: '520px' }} // Prevents image from overflowing
                                    />
                                </div>
                                <div className="absolute bottom-0 rounded-sm -right-5 z-10 w-[300px] bg-black bg-opacity-75 text-white text-center py-2">
                                    Chief Host
                                </div>
                            </div>
                            <div className="absolute md:bottom-10 w-full md:w-[435px] md:right-0 mb-4 mr-4 bg-[#C08032] text-white px-4 py-2 text-sm">
                                <div className="font-semibold">His Excellency,</div>
                                <div>Prof. Charles Chukwuma Soludo, CFR</div>
                                <div className="text-xs">Executive Governor, Anambra State</div>
                            </div>
                        </motion.div>
                    </motion.div>


                </div>
            </motion.section>
            {/* Background & Rationale */}
            <motion.section
                className="bg-white py-22 px-4 md:px-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
            >
                <h3 className="text-3xl font-semibold text-gray-800 mb-2">Background and Rationale</h3>
                <div className='w-[150px] h-1.5 rounded-sm bg-[#C08032] mb-6' />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-700">
                    <p className='leading-[1.9]'>
                        Anambra State, a key economic hub in Nigeria’s South-East region, has witnessed commendable strides in industrial development, entrepreneurship, and infrastructure renewal. However, the pace of business growth and investor confidence is increasingly threatened by a surge in security challenges.
The interconnection between Security and Economic growth has become more pronounced, with businesses becoming vulnerable to operational disruptions and communities suffering from restricted access to development opportunities due to prevailing insecurity.
Against this backdrop, the Anambra Security Summit is conceived as a strategic, multi-stakeholder engagement to diagnose the underlying factors driving insecurity in the state and region and to propose technology-driven, sustainable, and collaborative responses. 
“The Anambra Security Summit is not merely a dialogue platform but a springboard for concrete, far-reaching action towards a safer and more prosperous Anambra State. With collective effort, innovative thinking, and inclusive policy, a safer, more prosperous Anambra is not only possible—it is within reach.

                    </p>
                    <img src={backg} alt="" className='max-h-[470px] w-full' />
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div />
                    <button className="bg-transparent border border-[#C08032] text-[#C08032] px-6 py-2 w-fit rounded-md font-medium hover:bg-[#C08032] hover:text-white transition">
                        Learn more
                    </button>
                </div>
            </motion.section>
            <motion.section
                className="py-12 px-4 md:px-16 bg-white overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
            >
                <div className="w-full mx-auto">
                    {/* Header */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Faces You'll See
                            </h2>
                            <div className='w-[130px] h-1 rounded-sm bg-[#C08032]' />
                            <p className="mt-2 text-gray-600">
                                Here are some of the exceptional service members attending this year’s event.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-0 border border-[#C08032] text-[#C08032] px-4 py-2 rounded hover:bg-[#C08032] hover:text-white transition">
                            View more
                        </button>
                    </motion.div>

                    {/* Profiles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-8">
                        {profiles.map((p, idx) => (
                            <motion.div
                                key={idx}
                                className="text-center"
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                            >
                                <div className="overflow-hidden mb-4">
                                    <img src={p.img} alt={p.name} className="w-full h-auto" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {p.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {p.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Banner Image */}
                    <motion.div
                        className="w-full overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <img
                            src={crowdImg}
                            alt="Summit audience"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                className="py-12 px-4 md:px-16 bg-white overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
            >
                <div className="w-full mx-auto">
                    {/* Sponsors */}
                    <motion.div
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <div className="lg:w-3/5 space-y-2">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-[#C08032]">
                                Connect with these amazing sponsors.
                            </h2>
                            <p className="text-gray-600">
                                Explore our Diamond Sponsors — innovators with solutions designed to elevate your work and impact.
                                <span className="font-bold ml-1 hover:underline cursor-pointer">View all sponsors</span>
                            </p>
                            <button className="mt-4 bg-[#C08032] text-white px-6 py-2 font-medium hover:bg-[#9c805d] transition">
                                Become a Sponsor
                            </button>
                        </div>
                        <div className="mt-6 lg:mt-0 grid grid-cols-2 gap-4 gap-x-2 lg:gap-6">
                            <img src={spons1} alt='Sponsor' className="w-30 h-auto" />
                            <img src={logo} alt='Sponsor' className="w-30 h-auto" />
                            <img src={spons2} alt='Sponsor' className="w-30 h-auto" />
                            <img src={spons3} alt='Sponsor' className="w-30 h-auto" />
                        </div>
                    </motion.div>

                    {/* Deliverables */}
                    <motion.div
                        className="bg-[#E5E5E5] py-12 px-4 sm:px-8 md:px-16 rounded-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Summit Deliverables</h3>
                            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                                These Deliverables represent the key outcomes of the summit — practical tools, frameworks, and
                                partnerships designed to drive lasting impact in security and emergency coordination across
                                Anambra State.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {deliverables.map((d, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white w-full max-w-full p-6 rounded-lg shadow"
                                    custom={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeUp}
                                >
                                    <img src={ShieldIcon} alt="" className='w-[40px] mb-3' />
                                    <h4 className="font-semibold text-gray-800 mb-3">{d.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                className="px-4 md:px-16 py-12 bg-white w-full mx-auto overflow-x-hidden overflow-y-hidden" // Added overflow-y-hidden
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
            >
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
                    {/* First 4 features: image left, text right, span 2 cols */}
                    <div className="md:col-span-2 flex flex-col gap-4 h-full justify-between">
                        {features.slice(0, 4).map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col md:flex-row items-start md:items-start gap-6 h-full bg-white rounded-lg p-2 md:p-6 overflow-hidden" // Added overflow-hidden
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeLeft}
                            >
                                <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto object-cover max-h-48 md:max-h-44" // h-auto for flexibility
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-xl text-[#183354] md:text-2xl font-semibold">{feature.title}</h3>
                                    <p className="mt-2 text-[#545E69] text-sm">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Last 2 features: image top, text below, span 1 col */}
                    <div className="md:col-span-1 flex flex-col gap-12 h-full justify-between">
                        {features.slice(4).map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center bg-white rounded-lg p-2 md:p-6 h-full justify-between overflow-hidden" // Added overflow-hidden
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto object-cover mb-4 max-h-48 md:max-h-56" // h-auto for flexibility
                                />
                                <h3 className="text-xl text-[#183354] md:text-2xl font-semibold text-left">{feature.title}</h3>
                                <p className="mt-2 text-[#545E69] text-sm text-left">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Summit Objectives */}
                <div className="mt-16 -mb-40 md:-mb-80 grid grid-cols-1 md:grid-cols-2 gap-12 h-fit items-stretch">
                    <motion.div
                        className="flex flex-col h-fit justify-between"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeRight}
                    >
                        <h2 className="text-3xl font-bold mb-1">Summit Objectives</h2>
                        <div className='w-[130px] h-1 rounded-sm bg-[#C08032] mb-6' />
                        <ul className="mt-6 space-y-6 flex-1">
                            {objectives.map((obj, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex"
                                    custom={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeUp}
                                >
                                    <div className="mt-2">
                                        {/* Arrow Icon */}
                                        <img src={arrow} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg text-[#333333] font-medium">{obj.title}</h4>
                                        <p className="mt-1 text-gray-600 text-sm">{obj.description}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="h-[60%]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeLeft}
                    >
                        <img
                            src={summit}
                            alt="Summit Event"
                            className="w-full object-cover h-full min-h-[350px]"
                            style={{ maxHeight: '100%' }}
                        />
                    </motion.div>
                </div>
            </motion.section>
            {/* --- Proposed Activities & Expected Outcomes & Target Participants --- */}
            <section className="bg-white px-4 md:px-16 py-16">
                {/* Proposed Activities */}
                <div className="max-w-7xl mx-auto mb-16">
                    <h2 className="text-2xl text-center md:text-3xl font-semibold text-[#222] mb-1">Proposed Activities</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 rounded bg-[#C08032]" />
                    </div>
                    <div className="flex flex-col gap-3">
                        { [
                            'Keynote Presentations',
                            'Thematic Panel Discussions',
                            'Case Study Presentations',
                            'Interactive Town Hall Session',
                            'Technology Exhibition',
                            'Closed-Door Roundtable With..',
                            'Launch of the Anambra State Security Fund (ASSF)',
                        ].map((title, idx) => (
                            <details key={idx} className="group border-b border-[#E5E5E5] py-3">
                                <summary className="flex items-center justify-between cursor-pointer select-none">
                                    <div className="flex items-center gap-2 text-[#C08032] font-medium">
                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-[#C08032] mr-2">
                                            <svg width="16" height="16" fill="none" stroke="#C08032" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                                        </span>
                                        <span className="text-[#222] font-medium text-base md:text-lg">{title}</span>
                                    </div>
                                    <span className="text-[#C08032] text-sm font-medium group-open:rotate-180 transition-transform duration-200">Read More <svg className="inline ml-1" width="16" height="16" fill="none" stroke="#C08032" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
                                </summary>
                                {/* Optionally add content here for expanded details */}
                            </details>
                        ))}
                    </div>
                </div>
                {/* Expected Outcomes */}
                <div className="max-w-7xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#222] mb-1">Expected Outcomes</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 rounded bg-[#C08032]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        { [
                            'A strengthened multi-layered security structure in Anambra',
                            'Formal framework for community-police partnership',
                            'Investment incentives tied to security support',
                            'A strengthened multi-layered security structure in Anambra',
                            'Formal framework for community-police partnership',
                            'Investment incentives tied to security support',
                        ].map((text, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 border-[#F2E7D9] ">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-[#C08032] mt-1">
                                    <svg width="20" height="20" fill="none" stroke="#C08032" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                                </span>
                                <span className="text-[#222] text-base md:text-lg leading-snug">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Target Participants */}
                <div className="max-w-7xl mx-auto mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#222] text-center mb-2">Target Participants</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 rounded bg-[#C08032]" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Each card: icon, label */}
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-building-columns text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Anambra State Government Officials</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-shield-halved text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Heads of Security Agencies (Army, Police, DSS, Civil Defence, etc.)</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-sitemap text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Local Government Chairmen and Traditional Rulers</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-people-group text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Community Leaders and Youth Organizations</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-user-shield text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Defence and Security Technology Providers</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-briefcase text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Members of the Organized Private Sector</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-plus text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Civil Society Organizations</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#FFF7F0] rounded-[12px] p-5 text-center shadow-sm min-h-[120px]">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-3">
                                <i className="fa-solid fa-graduation-cap text-[#C08032] text-2xl"></i>
                            </span>
                            <span className="text-[#222] text-sm md:text-base font-medium leading-tight">Academic and Research Institutions</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
