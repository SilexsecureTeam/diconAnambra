import Header from '../components/Header';
import Footer from '../components/Footer';
import contactImg from '../assets/contact-img.png'; // Replace with your actual image path
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Header />
      <section className="bg-white py-16 pt-24 px-4 md:px-16 min-h-[70vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start mb-12">
            {/* Contact Form */}
            <form className="space-y-6 w-full max-w-lg">
              <h2 className="text-3xl font-semibold text-[#183354] mb-8">
                Contact <span className="text-[#C08032]">Us</span>
              </h2>
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" placeholder="Write your name" className="w-full border border-gray-300 rounded-none px-4 py-2 focus:outline-none focus:border-[#C08032]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Email</label>
                <input type="email" placeholder="Sample@gmail.com" className="w-full border border-gray-300 rounded-none px-4 py-2 focus:outline-none focus:border-[#C08032]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea placeholder="Write here......." rows={4} className="w-full border border-gray-300 rounded-none px-4 py-2 focus:outline-none focus:border-[#C08032] resize-none" />
              </div>
              <button type="submit" className="bg-[#C08032] text-white px-8 py-2 flex justify-end items-center gap-2 font-medium mt-2 hover:bg-[#a66a2e] transition">
                Send <span className="ml-2">→</span>
              </button>
            </form>
            {/* Image */}
            <div className="flex justify-center items-center w-full">
              <img src={contactImg} alt="Contact" className="w-full object-cover rounded-none" />
            </div>
          </div>
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-center text-center">
              <FaPhoneAlt className="text-[#C08032] text-2xl mb-2" />
              <div className="font-semibold mb-1">Contact Detail</div>
              <div className="text-gray-700 text-sm">+234-902-434-1737<br />+234-708-780-8102</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-[#C08032] text-2xl mb-2" />
              <div className="font-semibold mb-1">Event Location</div>
              <div className="text-gray-700 text-sm">International Conference Center,<br />Awka, Anambra</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-center text-center">
              <FaEnvelope className="text-[#C08032] text-2xl mb-2" />
              <div className="font-semibold mb-1">Email Address</div>
              <div className="text-gray-700 text-sm">info@dicoshield.com</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
