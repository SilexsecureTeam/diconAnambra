import Header from '../components/Header';
import Footer from '../components/Footer';
import sponsor1 from '../assets/sponsor1.png'; // Replace with your actual image path
import sponsor2 from '../assets/sponsor2.png'; // Replace with your actual image path
import dxlogo from '../assets/dxlogo.png';
import spons1 from '../assets/spons1.png';
import spons2 from '../assets/spons2.png';
import spons3 from '../assets/spons3.png';

const spons = [dxlogo, spons1, spons2, spons3];

export default function Sponsorship() {
  return (
    <>
      <Header />
      <section className="bg-white py-16 pt-24 px-4 md:px-16 min-h-[70vh]">
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
            {spons.map((n) => (
              <div key={n} className="flex flex-col items-center">
                <img src={n} alt="" className="h-30 mb-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsorship Packages Section */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="md:max-w-[35%] text-2xl md:text-3xl font-semibold text-[#C08032] mb-4">Explore Our Sponsorship Packages</h2>
          <p className='md:max-w-[65%] leading-[1.8]'>The Anambra State Security Summit 2025, themed “Securing an Enabling Environment for Business Growth and Sustainable Security,” provides a premium opportunity for your organization to support a transformative initiative while gaining strategic visibility. Outlined below are the revised sponsorship categories and associated benefits designed to deliver high-value exposure, networking, and CSR alignment.
</p>
          <div className="border-t border-gray-200 mb-8 mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
            {/* Top Row */}
            { [
              {
                title: 'Category A',
                price: '₦100,000,000 +',
                features: [
                  "Official title as 'Headline Partner' of the summit.",
                  'Exclusive keynote speaking slot during the opening session',
                  'Primary logo placement on all event materials, including banners, digital promotions, press backdrops, and delegate kits.',
                  'Dedicated premium exhibition space at the Security Innovation Showcase.',
                  'Full-page feature in the summit brochure and post-event report.',
                  'Brand video (up to 3 minutes) played during the Gala Night',
                  'Invitation for 20 VIP delegates with reserved seating',
                  'Customized plaque presentation and spotlight during Gala Night.',
                  'Logo featured on summit live-stream broadcasts and interviews',
                  'Private courtesy visit and media mention by summit leadership',
                ],
              },
              {
                title: 'Category B',
                price: '₦50,000,000 - ₦99,999,999',
                features: [
                  "Recognition as 'Strategic Partner' in summit materials and publicity.",
                  'Panelist slot or moderator role during a high-level session',
                  'Logo featured prominently in select print and digital media.',
                  'Exhibition booth at Security Showcase.',
                  'Half-page advert in the official brochure',
                  'Invitation for 20 VIP delegates with reserved seating',
                  'On-stage recognition and appreciation plaque.',
                ],
              },
              {
                title: 'Category C',
                price: '₦30,000,000 - ₦49,999,999',
                features: [
                  "Recognition as 'Supporting Partner' in the official programme",
                  'Quarter-page advert in the summit brochure',
                  'Logo on directional signs and select event materials',
                  'Passes for 5 guests with priority seating',
                  'Official thank-you certificate and name listing in event records',
                ],
              }
            ].map((cat, idx) => (
              <div key={cat.title} className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start h-full">
                <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
                <div className="text-2xl font-bold mb-4">{cat.price}</div>
                <ul className="mb-6 space-y-2">
                  {cat.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto w-full">
                  <button className="bg-[#F5E7D7] text-[#C08032] hover:bg-[#C08032] hover:text-white px-6 py-2 rounded-none font-medium w-full transition-colors duration-200">Choose Plan</button>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Bottom Row */}
            {[{
                title: 'Platinum',
                price: '₦20,000,000 +',
                features: [
                  'Designation as Headline Sponsor of the Summit',
                  'Keynote speaking opportunity during the opening session',
                  'Premium logo placement across all event banners, media, and digital channels',
                  'Brand video (2 minutes) played on the LED Stage screen during summit the Gala Night',
                  'Exclusive exhibition booth and display rights',
                  'Front row seating and VIP Gala table',
                  'Complimentary registration for 10 guests',
                  'Full-page ad in the Summit Brochure',
                  'Post-event media and PR acknowledgment',
                ],
              },
              {
                title: 'Gold',
                price: '₦10,000,000 +',
                features: [
                  'Prominent logo on event materials',
                  'Speaking slot in a breakout session',
                  'Exhibition booth at the Security Showcase',
                  'Reserved seating for 6 guests',
                  'Half-page ad in the Summit Brochure',
                  'Plaque presented at Gala Night',
                ],
              },
              {
                title: 'Silver',
                price: '₦5,000,000 +',
                features: [
                  'Logo featured on roll-up banners and stage backdrops',
                  'Sponsorship of specific sessions or activities',
                  'Registration for 4 guests',
                  'Quarter-page ad in the brochure',
                  'Recognition certificate',
                ],
              }
            ].map((cat, idx) => (
              <div key={cat.title} className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start h-full">
                <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
                <div className="text-2xl font-bold mb-4">{cat.price}</div>
                <ul className="mb-6 space-y-2">
                  {cat.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto w-full">
                  <button className="bg-[#F5E7D7] text-[#C08032] hover:bg-[#C08032] hover:text-white px-6 py-2 rounded-none font-medium w-full transition-colors duration-200">Choose Plan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Custom Sponsorship Options Section */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Bronze Plan */}
          <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start h-full">
            <h3 className="text-lg font-semibold mb-1">Bronze</h3>
            <div className="text-2xl font-bold mb-4">₦3,000,000</div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Logo inclusion in Supporters’ List</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Social media and publication mentions</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Closing session acknowledgment</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Pass for 2 guests</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Certificate and appreciation letter</li>
            </ul>
            <div className="mt-auto w-full">
              <button className="bg-[#F5E7D7] text-[#C08032] hover:bg-[#C08032] hover:text-white px-6 py-2 rounded-none font-medium w-full transition-colors duration-200">Choose Plan</button>
            </div>
          </div>
          {/* Custom Sponsorship Plan */}
          <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col items-start h-full">
            <h3 className="text-lg font-semibold mb-1">Custom Sponsorship</h3>
            <div className="text-2xl font-bold mb-4">Flexible</div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Gala Night or Dinner</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Security Innovation Showcase</li>
              <li className="flex items-center text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" />Legacy Projects (e.g., patrol units, surveillance hubs, peace centers)</li>
            </ul>
            <div className="flex items-center text-sm text-red-600 font-semibold mb-4">
              <span className="w-3 h-3 text-[10px] rounded-full bg-red-200 text-red-600 mr-2 flex items-center justify-center">&#33;</span>
              <span><em>Legacy Projects (e.g., patrol units, surveillance hubs, peace centers)</em></span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
