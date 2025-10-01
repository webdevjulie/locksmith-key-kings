import React from "react";

export default function ServiceAreasTowns() {
  const towns = [
    {
      name: "Anderson, SC",
      img: "/images/anderson.webp",
      desc: "Professional locksmith services throughout Anderson. Quick response and trusted solutions.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Greenville, SC",
      img: "/images/greenville.webp",
      desc: "Reliable locksmith services throughout Greenville for homes, businesses, and vehicles.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Clemson, SC",
      img: "/images/clemson.webp",
      desc: "Quick and professional locksmith services in Clemson. Trusted for residential, commercial, and automotive needs.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Easley, SC",
      img: "/images/easley.webp",
      desc: "Fast and reliable locksmith services in Easley for homes, businesses, and vehicles.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Pendleton, SC",
      img: "/images/pendleton.webp",
      desc: "Trusted locksmith solutions in Pendleton with fast response times.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Williamston, SC",
      img: "/images/williamston.webp",
      desc: "Comprehensive locksmith services in Williamston for home, business, and auto needs.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Belton, SC",
      img: "/images/belton.webp",
      desc: "Fast and professional locksmith services across Belton for home, business, and automotive needs.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Liberty, SC",
      img: "/images/liberty.webp",
      desc: "Trusted locksmith services in Liberty. Fast, reliable, and professional solutions.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Seneca, SC",
      img: "/images/seneca.webp",
      desc: "Full-service locksmith solutions in Seneca. Residential, commercial, and automotive services available.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
    {
      name: "Pickens, SC",
      img: "/images/pickens.webp",
      desc: "Pickens residents and businesses trust us for fast and reliable locksmith services.",
      services: ["Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
      since: "2010",
    },
  ];

  return (
    <section className="relative bg-[rgba(249,237,237,1)]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] rounded-full mb-6 animate-pulse-glow">
            <span className="material-icons text-white text-2xl">location_on</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 
                        bg-gradient-to-r from-[#FD9A00] via-[#F9AE19] to-[#FFB347] 
                        bg-clip-text text-transparent drop-shadow-md">
            Our Service Areas
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-gray-700">
            Trusted locksmith solutions in your neighborhood. Fast, professional, and reliable services tailored to each town.
          </p>
        </div>

        {/* Town Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {towns.map((town, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border-2 border-[#FD9A00] bg-white/80 flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={town.img} alt={`${town.name} Locksmith`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-2 text-[#FD9A00] drop-shadow text-left">{town.name}</h2>
                <p className="text-sm text-gray-800 mb-4 text-left">{town.desc}</p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1 text-left">
                  {town.services.map((service, i) => (
                    <li key={i}>
                      <span className="material-icons align-middle text-sm mr-2">lock</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mb-4 text-left font-semibold">Serving since {town.since}</p>
                <hr className="border-t border-gray-300 my-4 w-full" />
                <a href="#booking-form" className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] hover:opacity-90 transition inline-flex items-center justify-center gap-2 text-white">
                  <span className="material-icons text-lg">event_available</span>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
