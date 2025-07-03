import Header from '../components/Header';
import Footer from '../components/Footer';
import about1 from '../assets/about1.png'; // handshake image
import about2 from '../assets/about2.jpg'; // mission image
import ceo1 from '../assets/ceo1.png';
import ceo2 from '../assets/ceo2.png';
import ceo3 from '../assets/ceo3.png';
import { useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const team = [
    { img: ceo1, name: 'Bassey Sikiru', title: 'CEO, Dico-Xshield' },
    { img: ceo2, name: 'Tunde Elvis', title: 'CEO, Dico-Xshield' },
    { img: ceo3, name: 'Kalechi Tonness', title: 'CEO, Dico-Xshield' },
    { img: ceo1, name: 'Jane Doe', title: 'COO, Dico-Xshield' },
    { img: ceo2, name: 'John Smith', title: 'CTO, Dico-Xshield' },
];

export default function About() {
    const scrollRef = useRef(null);
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
        }),
    };
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const scroll = (dir) => {
        if (scrollRef.current) {
            const width = scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({ left: dir * (width * 0.4), behavior: 'smooth' });
        }
    };
    return (
        <>
            <Header />
            <motion.section
                className="bg-white py-0 pt-24 px-4 md:px-16 min-h-[70vh]"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Who we are */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <div>
                            <h2 className="text-3xl md:text-3xl font-bold text-[#183354] mb-4">
                                Who <span className="text-[#C08032]">we are....</span>
                            </h2>
                            <div className="text-gray-700 space-y-3 text-[15px] leading-[1.8] md:max-w-[90%]">
                                <p>Lorem ipsum dolor sit amet consectetur. Integer risus et luctus neque eros erat. Tempus morbi tortor aliquet metus fusce massa laoreet velit. Et lorem in consectetur et neque congue dictum enim. Pellentesque in consectetur praesent ipsum diam velit euismod.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Integer risus et luctus neque eros erat. Tempus morbi tortor aliquet metus fusce massa laoreet velit. Et lorem in consectetur et neque congue dictum enim. Pellentesque in consectetur praesent ipsum diam velit euismod.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Integer risus et luctus neque eros erat. Tempus morbi tortor aliquet metus fusce massa laoreet velit. Et lorem in consectetur et neque congue dictum enim. Pellentesque in consectetur praesent ipsum diam velit euismod.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Integer risus et luctus neque eros erat. Tempus morbi tortor aliquet metus fusce massa laoreet velit. Et lorem in consectetur et neque congue dictum enim. Pellentesque in consectetur praesent ipsum diam velit euismod.</p>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end md:max-w-[90%]">
                            <img src={about1} alt="About handshake" className="w-full min-h-[320px] object-cover" />
                        </div>
                    </motion.div>
                    {/* Mission */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <div className="flex justify-center md:justify-start order-2 md:order-1">
                            <img src={about2} alt="Mission" className="rounded-lg w-full object-cover" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-semibold text-[#183354] mb-4">Our Mission</h3>
                            <p className="text-gray-700 text-[15px] leading-[1.9] max-w-[90%]">
                                Lorem ipsum dolor sit amet consectetur. Pellentesque cursus eu velit malesuada. In accumsan risus vitae bibendum cubilia suspendisse. Faucibus varius enim risus vulputate non. Quis rhoncus aliquam laoreet sed sit nibh euismod eu rutrum. Id volutpat inceptos facilisis fermentum eu sapien euismod pellentesque. Pellentesque bibendum felis facilisis vulputate. Sed erat non tortor mauris nec tincidunt purus facilisis sed.
                                Lorem ipsum dolor sit amet consectetur. Pellentesque cursus eu velit malesuada. In accumsan risus vitae bibendum cubilia suspendisse. Faucibus varius enim risus vulputate non. Quis rhoncus aliquam laoreet sed sit nibh euismod eu rutrum. Id volutpat inceptos facilisis fermentum eu sapien euismod pellentesque. Pellentesque bibendum felis facilisis vulputate. Sed erat non tortor mauris nec tincidunt purus facilisis sed.
                            </p>
                        </div>
                    </motion.div>
                    {/* Meet Our Team */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#183354] mb-6">Meet Our Team</h3>
                        <div className="relative">
                            <button
                                className="hidden md:flex absolute left-0 top-2/5 -translate-y-1/2 z-10 bg-white border border-[#C08032] text-[#C08032] p-2 rounded-full shadow hover:bg-[#C08032] hover:text-white transition"
                                onClick={() => scroll(-1)}
                                aria-label="Scroll left"
                                style={{ left: '-2.5rem' }}
                            >
                                <FaChevronLeft />
                            </button>
                            <div
                                ref={scrollRef}
                                className="flex gap-8 overflow-x-auto pb-2 no-scrollbar"
                                style={{ scrollBehavior: 'smooth', maxWidth: '100%' }}
                            >
                                {team.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white flex-shrink-0 flex flex-col items-center text-center"
                                        custom={idx}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={fadeUp}
                                    >
                                        <img src={member.img} alt={member.name} className="!w-[380px] rounded-2xl h-[350px] object-cover mb-4" />
                                        <h4 className="text-base font-semibold text-[#183354] mb-1">{member.name}</h4>
                                        <p className="text-[#C08032] text-xs font-medium mb-1">{member.title}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="hidden md:flex absolute right-0 top-2/5 -translate-y-1/2 z-10 bg-white border border-[#C08032] text-[#C08032] p-2 rounded-full shadow hover:bg-[#C08032] hover:text-white transition"
                                onClick={() => scroll(1)}
                                aria-label="Scroll right"
                                style={{ right: '-2.5rem' }}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    );
}

/* Add this to your global CSS (e.g., index.css):
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
