import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProgramEvent() {
  return (
    <>
      <Header />
      <section className="bg-white py-16 pt-24 px-4 md:px-0 min-h-[70vh]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222] mb-3">
            Summit Programme & Event Schedule
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Explore the full two-day agenda of the Anambra Security Summit 2025. From keynote addresses and high-level panel discussions to strategic workshops and expert-led sessions, this schedule outlines every key moment designed to shape the future of community-driven security in Anambra State.
          </p>
          <div className="mb-8">
            <span className="text-2xl font-bold text-[#222]">
              Day <span className="text-[#C08032]">1</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="border border-[#E5E5E5] rounded bg-white p-6">
              <div className="space-y-6">
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">8:00 AM – 9:00 AM</div>
                  <div className="font-bold text-[#222] text-base">Arrival and Registration</div>
                  <div className="text-gray-500 text-sm">Secretariat / Ushers</div>
                </div>
                <hr className="my-1 border-[#E5E5E5]" />
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">9:00 AM – 9:15 AM</div>
                  <div className="font-bold text-[#222] text-base">Opening Prayer (Christian & Muslim Prayers)</div>
                  <div className="text-gray-500 text-sm">Clerics</div>
                </div>
                <hr className="my-1 border-[#E5E5E5]" />
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">9:15 AM – 9:30 AM</div>
                  <div className="font-bold text-[#222] text-base">Welcome Address</div>
                  <div className="text-gray-500 text-sm">Chairman, Organizing Committee</div>
                </div>
                <hr className="my-1 border-[#E5E5E5]" />
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">9:30 AM – 9:50 AM</div>
                  <div className="font-bold text-[#222] text-base">Goodwill Messages</div>
                  <div className="text-gray-500 text-sm">Representatives of Traditional Rulers, Religious Leaders</div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="border border-[#E5E5E5] rounded bg-white p-6">
              <div className="space-y-6">
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">8:50 AM – 10:10 AM</div>
                  <div className="font-bold text-[#222] text-base">Opening Remarks & Setting the Context</div>
                  <div className="text-gray-500 text-sm">Representative of Anambra State Government</div>
                </div>
                <hr className="my-1 border-[#E5E5E5]" />
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">10:10 AM – 10:30 AM</div>
                  <div className="font-bold text-[#222] text-base">
                    Keynote Address: <span className="italic font-normal">“National Security Outlook and Inclusive Strategies for Regional Stability”</span>
                  </div>
                  <div className="text-gray-500 text-sm">Representatives of Traditional Rulers, Religious Leaders</div>
                </div>
                <hr className="my-1 border-[#E5E5E5]" />
                <div>
                  <div className="text-[#C08032] font-semibold text-sm mb-1">10:30 AM – 11:00 AM</div>
                  <div className="font-bold text-[#222] text-base">Coffee/Tea Break and Networking</div>
                  <div className="text-gray-500 text-sm">All Participants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plenary Sessions Section */}
      <section className="bg-white px-4 md:px-0 pb-5">
        <div className="max-w-5xl mx-auto">
          {/* Plenary Session I */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-[#C08032]">Plenary Session I</span>
              <span className="text-[#222]"> : The Current Security Landscape (High-Level Security Leaders Panel)</span>
            </h3>
            <div className="border border-[#E5E5E5] rounded mb-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="align-top">
                    <td className="w-[220px] border-b border-[#E5E5E5] p-4 text-sm text-[#222] font-medium align-top">11:00 – 12:30 PM</td>
                    <td className="border-b border-[#E5E5E5] p-4 align-top">
                      <div className="font-semibold text-[#222] mb-2">Panel Discussion: <span className="font-normal">Understanding the Emerging Security Threats in Anambra and the South-East Region</span></div>
                      <div className="mb-2">
                        <span className="font-bold">Panelists:</span>
                        <ul className="list-disc ml-6 text-sm mt-1 text-[#222]">
                          <li>Inspector General of Police (IGP)</li>
                          <li>Chief of Army Staff (COAS)</li>
                          <li>Director-General, DSS</li>
                          <li>Commandant-General, NSCDC</li>
                          <li>Comptroller-General, Customs</li>
                          <li>Commander-General, Nigerian Forest Security Services</li>
                          <li>Chairman, NDLEA</li>
                          <li>Security Consultant or Academic Exper</li>
                        </ul>
                      </div>
                      <div className="text-sm mt-2">
                        <span className="font-bold">Moderator:</span> Security Analyst / Academic
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Plenary Session II */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-[#C08032]">Plenary Session II</span>
              <span className="text-[#222]"> : Non-kinetic Approach: Inclusive and Community-Driven Security Solutions</span>
            </h3>
            <div className="border border-[#E5E5E5] rounded mb-4 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="align-top">
                    <td className="w-[220px] border-b border-[#E5E5E5] p-4 text-sm text-[#222] font-medium align-top">12:30 – 2:00 PM</td>
                    <td className="border-b border-[#E5E5E5] p-4 align-top">
                      <div className="font-semibold text-[#222] mb-2">Panel Discussion: <span className="italic font-normal">The Role of Traditional Institutions, Religious Leaders, and Youth in Community Security</span></div>
                      <div className="mb-2">
                        <span className="font-bold">Panelists:</span>
                        <span className="text-sm text-[#222] ml-1">Traditional Rulers, Religious Leaders, Youth Leaders, NSCDC, Forest Guards, Police</span>
                      </div>
                      <div className="text-sm mt-2">
                        <span className="font-bold">Moderator:</span> Security Analyst / Academic Expert
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Lunch Break */}
            <div className="w-fit bg-[#C08032] text-white font-semibold px-6 py-2 rounded-md text-base mt-4 mb-2 shadow-sm">
              2:00 – 3:00 PM | Lunch Break
            </div>
          </div>

          {/* Plenary Session III */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-[#C08032]">Plenary Session III</span>
              <span className="text-[#222]"> : Root Causes of Insecurity: Diagnoses and Joint Strategic Pathways</span>
            </h3>
            <div className="border border-[#E5E5E5] rounded mb-4 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="align-top">
                    <td className="w-[220px] border-b border-[#E5E5E5] p-4 text-sm text-[#222] font-medium align-top">3:00 – 3:45 PM</td>
                    <td className="border-b border-[#E5E5E5] p-4 align-top">
                      <div className="font-semibold text-[#222] mb-2">Panel Discussion: <span className="italic font-normal">Reimagining Security through Multi-Stakeholder Engagement</span></div>
                      <div className="mb-2">
                        <span className="font-bold">Panelists:</span>
                        <span className="text-sm text-[#222] ml-1">Maj. Gen. Victor Ezugwu, Capt. Aliyu, Traditional Rulers, Religious Leaders, Youth Leaders, NSCDC, Forest Guards, Police</span>
                      </div>
                      <div className="text-sm mt-2">
                        <span className="font-bold">Moderator:</span> Security Analyst / Academic Expert
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Expert Presentations */}
            <div className="font-semibold text-[#C08032] text-base mb-2 mt-6">3:45 – 4:30 PM : Expert Presentations (15mins Per Presentation)</div>
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded p-5 mb-4">
              <div className="font-bold mb-2 text-[#222]">Focus Areas:</div>
              <ul className="list-disc ml-6 text-sm text-[#222] space-y-1">
                <li>Technology-Enabled Policing and Community Surveillance</li>
                <li>Local Defence Mechanisms: Intelligence Sharing & Synergy</li>
                <li>Strategic Innovations in Community Policing & Surveillance</li>
                <li>Public-Private Partnerships in Security Infrastructure</li>
                <li>Youth Reorientation & Counter-Cultism Programmes</li>
                <li>Role of Traditional & Religious Institutions in Peacebuilding</li>
              </ul>
            </div>
            <div className="font-semibold text-[#222] mb-2">Each Speaker will discuss and generate actionable recommendations.</div>
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded p-5 mb-4">
              <div className="font-bold mb-2 text-[#222]">Presenters:</div>
              <ul className="list-disc ml-6 text-sm text-[#222] space-y-1">
                <li>Tech Solution Providers</li>
                <li>Security Analysts</li>
                <li>Community Security Volunteers</li>
              </ul>
              <div className="mt-2 text-sm"><span className="font-bold">Moderator:</span> Summit Rapporteur</div>
            </div>
            {/* Q&A and Dialogue */}
            <div className="font-semibold text-[#C08032] text-base mb-2">4:30 – 4:45 PM – Plenary – Structured Q&A & Interactive Dialogue</div>
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded p-5 mb-4">
              <ul className="list-disc ml-6 text-sm text-[#222] space-y-1">
                <li>Audience members provide inputs and responses</li>
                <li>Security heads respond to questions and concerns</li>
                <li>Summary presentations from each breakout group</li>
                <li>Rapporteurs present highlights and proposals</li>
              </ul>
            </div>
            {/* Closing Remarks */}
            <div className="font-semibold text-[#C08032] text-base mb-2">4:45 – 5:00 PM | Closing Remarks and Next Steps (Announcements for Day 2 proceedings)</div>
            <div className="text-sm mb-2">Speaker: Lead Convener / Host</div>
            <div className="text-sm text-gray-600">5:00 PM | Departure of Participants</div>
          </div>
        </div>
      </section>

      {/* Day 2 - Closed-Door Strategic Security Roundtable */}
      <section className="bg-white px-4 md:px-0 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-6 mt-5">Day 2 - Closed-Door Strategic Security Roundtable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">9:00 AM – 10:00 AM</div>
                <div className="font-bold text-[#222] text-base">Arrival, Registration & Security Clearance</div>
                <ul className="list-disc ml-6 text-sm text-[#222] mt-1">
                  <li>Verification of invitees</li>
                  <li>Issuance of access passes</li>
                  <li>Light breakfast and networking</li>
                </ul>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">10:00 AM – 10:15 AM</div>
                <div className="font-bold text-[#222] text-base">Opening Remarks & Welcome Address</div>
                <div className="text-sm text-[#222] mt-1">By the Host and Moderator</div>
                <div className="text-sm text-[#222]">Brief overview of objectives and rules of engagement</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">10:15 AM – 10:30 AM</div>
                <div className="font-bold text-[#222] text-base">Special Address by His Excellency, the Executive Governor of Anambra State</div>
                <div className="text-sm text-[#222] mt-1">The Governor’s vision for non-kinetic and people-centered security approaches</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">10:30 AM – 11:00 AM</div>
                <div className="font-bold text-[#222] text-base">Setting the Context: Overview of Current Security Landscape in Anambra State</div>
                <div className="text-sm text-[#222] mt-1">Presented by the Commissioner of Police / State Director, DSS</div>
                <div className="text-sm text-[#222]">Highlight of emerging threats: kidnapping, cultism, targeted killings, etc.</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">11:00 AM – 12:00 PM</div>
                <div className="font-bold text-[#222] text-base">Session 1: Intelligence–Led Policing & Neighborhood Surveillance</div>
                <div className="text-sm text-[#222] mt-1">Strategies for expanding community-based intelligence systems</div>
                <div className="text-sm text-[#222]">Role of technology in surveillance and information gathering.</div>
                <div className="text-sm text-[#222] font-semibold mt-1">Resource Person: Mike Ejiofor (Director, DSS) Rtd.</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">12:00 PM – 1:00 PM</div>
                <div className="font-bold text-[#222] text-base">Session 2: Community Vigilance and Empowerment</div>
                <div className="text-sm text-[#222] mt-1">Structuring and formalizing local vigilante groups</div>
                <div className="text-sm text-[#222]">Training, oversight, and integration with law enforcement</div>
                <div className="text-sm text-[#222] font-semibold mt-1">Resource Person: Mr. Ben Igwe (AIG) Rtd.</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">1:00 PM – 2:00 PM</div>
                <div className="font-bold text-[#222] text-base">Lunch Break (Private Executive Networking Session)</div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">2:00 PM – 3:00 PM</div>
                <div className="font-bold text-[#222] text-base">Session 3: Rehabilitation, Reintegration & Youth Engagement</div>
                <ul className="list-disc ml-6 text-sm text-[#222] mt-1">
                  <li>Designing and implementing programs for at-risk youth</li>
                  <li>Creating sustainable alternatives to criminal activities</li>
                  <li>Training, oversight, and integration with law enforcement</li>
                </ul>
                <div className="text-sm text-[#222] font-semibold mt-1">Resource Person: Maj. Gen. Okoro</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">3:00 PM – 3:45 PM</div>
                <div className="font-bold text-[#222] text-base">Session 4: Non-Kinetic Tools and Technology for Early Intervention</div>
                <ul className="list-disc ml-6 text-sm text-[#222] mt-1">
                  <li>Community hotlines, early warning systems, social media watch</li>
                  <li>Embedding security awareness in schools, churches, mosques, and town halls</li>
                </ul>
                <div className="text-sm text-[#222] font-semibold mt-1">Resource Person: Lt. Gen. Ihejirika</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">3:45 PM – 4:15 PM</div>
                <div className="font-bold text-[#222] text-base">Session 5: Strengthening Multi-Agency Collaboration</div>
                <ul className="list-disc ml-6 text-sm text-[#222] mt-1">
                  <li>How agencies can work together without intimidating the public</li>
                  <li>Framework for shared intelligence and joint operations</li>
                </ul>
                <div className="text-sm text-[#222] font-semibold mt-1">Resource Person: Capt. Umar Aliyu</div>
              </div>
              <div>
                <div className="text-[#C08032] font-semibold text-sm mb-1">4:15 PM – 4:30 PM</div>
                <div className="font-bold text-[#222] text-base">Closing Session: Summary of Key Outcomes & Way Forward</div>
                <ul className="list-disc ml-6 text-sm text-[#222] mt-1">
                  <li>Presentation of preliminary resolutions</li>
                  <li>Outline of next steps for the development of the State Security Implementation Framework</li>
                </ul>
              </div>
              <div>
                <div className="text-[#222] text-sm mt-2">Speaker: Lead Convener / Host</div>
                <div className="text-gray-600 text-sm">5:00 PM | Departure of Participants</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}