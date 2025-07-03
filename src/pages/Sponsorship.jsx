import Header from '../components/Header';
import Footer from '../components/Footer';
import sponsor1 from '../assets/sponsor1.png'; // Replace with your actual image path
import sponsor2 from '../assets/sponsor2.png'; // Replace with your actual image path
import dxlogo from '../assets/dxlogo.png'; // Replace with your actual logo path

export default function Sponsorship() {
  return (
    <>
      <Header />
      <section className="bg-white py-16 pt-18 px-4 md:px-16 min-h-[70vh]">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center mb-12">
            {/* Images */}
            <div className="col-span-3 md:col-span-2 flex gap-4">
              <img src={sponsor1} alt="Summit" className="w-full h-[400px] object-cover" />
              
            </div>
            <div className="col-span-3 md:col-span-2 flex gap-4">
              <img src={sponsor2} alt="Summit" className="w-full h-[400px] object-cover" />

            </div>
            {/* Text */}
            <div className="col-span-3 flex flex-col justify-center md:pl-8">
              <h2 className="text-4xl font-semibold text-[#C08032] mb-4">Meet Our Esteemed Sponsors</h2>
              <p className="text-gray-700 mb-4 max-w-lg">
                Discover the organizations driving impact through innovation, collaboration, and support for national security goals.
              </p>
              <a href="#" className=" font-semibold underline hover:text-[#a66a2e] transition w-fit">
                Interested in becoming a Diamond sponsor?
              </a>
            </div>
          </div>
          {/* Sponsor Logos */}
          <div className="flex flex-wrap justify-between items-center gap-4 mt-16">
            {[1,2,3,4,5].map((n) => (
              <div key={n} className="flex flex-col items-center">
                <img src={dxlogo} alt="DX Dicon-X-Shield" className="h-24 w-auto mb-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsorship Packages Section */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#C08032] mb-2">Explore Our Sponsorship Packages</h2>
          <div className="border-t border-gray-200 mb-8 mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
            {/* Top Row */}
            { [
              {
                title: 'Category A',
                price: '₦100,000,000 +',
                features: [1,2,3,4,5,6,7,8,9],
              },
              {
                title: 'Category B',
                price: '₦50,000,000 +',
                features: [1,2,3,4,5,6,7,8,9],
              },
              {
                title: 'Category C',
                price: '₦30,000,000 +',
                features: [1,2,3,4,5,6,7,8,9],
              }
            ].map((cat, idx) => (
              <div key={cat.title} className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
                <div className="text-2xl font-bold mb-4">{cat.price}</div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Access to member gallery</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />3 concurrent fast jobs</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />12 concurrent fast jobs</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Access to member gallery</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
                </ul>
                <button className="bg-[#F5E7D7] text-[#C08032] px-6 py-2 rounded-none font-medium w-full">Choose Plan</button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Bottom Row */}
            { [
              {
                title: 'Platinum',
                price: '₦20,000,000 +',
                features: [1,2,3,4,5,6,7,8,9],
              },
              {
                title: 'Gold',
                price: '₦10,000,000 +',
                features: [1,2,3,4,5,6,7,8,9],
              },
              {
                title: 'Silver',
                price: '₦5,000,000 +',
                features: [1,2,3,4,5,6,7,8,9],
              }
            ].map((cat, idx) => (
              <div key={cat.title} className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
                <div className="text-2xl font-bold mb-4">{cat.price}</div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Access to member gallery</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />3 concurrent fast jobs</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />12 concurrent fast jobs</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Access to member gallery</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
                </ul>
                <button className="bg-[#F5E7D7] text-[#C08032] hover:bg-[#C08032] hover:text-white px-6 py-2 rounded-none font-medium w-full">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Bronze Plan */}
          <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-1">Bronze</h3>
            <div className="text-2xl font-bold mb-4">₦5,000,000 +</div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Lorem ipsum dolor sit amet consectetur.</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Lorem ipsum dolor sit amet consectetur.</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Access to member gallery</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />3 concurrent fast jobs</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />12 concurrent fast jobs</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Access to member gallery</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Optional credit top ups</li>
            </ul>
            <button className="bg-[#F5E7D7] text-[#C08032] hover:bg-[#C08032] hover:text-white px-6 py-2 rounded-none font-medium w-full">Choose Plan</button>
          </div>
          {/* FAQ Accordion */}
          <div>
            <h2 className="text-2xl md:text-2xl font-bold text-[#C08032] mb-4">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-200 border border-gray-100 rounded-none bg-white">
              {Array(6).fill(0).map((_, idx) => (
                <details key={idx} className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-4 px-4 text-gray-800 font-medium select-none">
                    Lorem ipsum dolor sit amet consectetur.
                    <span className="ml-2 transition-transform group-open:rotate-180">&#9660;</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi.
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
