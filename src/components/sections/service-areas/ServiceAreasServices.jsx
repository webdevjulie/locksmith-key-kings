import React from "react";

export default function ServiceAreasServices() {
  const services = [
    {
      title: "Emergency Locksmith",
      img: "/hero/emergency-locksmith.webp",
      desc: "Locked out? Key Kings Locksmith provides fast and reliable emergency lockout services for cars, homes, businesses, and storage units. Available 24/7.",
      bullets: [
        { icon: "flash_on", text: "Quick Response in 15-30 minutes" },
        { icon: "support_agent", text: "Professional & Certified Technicians" },
        { icon: "security", text: "Safe & Damage-Free Entry" },
      ],
      howItWorks: "Call our emergency line, provide your location, and our mobile locksmith arrives ready to unlock your property safely.",
      link: "./services/commercial-locksmith.html",
    },
    {
      title: "Residential Locksmith",
      img: "/hero/residential-locksmith.webp",
      desc: "Secure your home with Key Kings Locksmith. We handle lock replacement, rekeying, repairs, and gate locks to keep your family safe.",
      bullets: [
        { icon: "home", text: "Enhanced Home Security" },
        { icon: "lock", text: "Fast & Professional Service" },
        { icon: "verified_user", text: "Certified & Insured Technicians" },
      ],
      howItWorks: "Schedule a visit, our technician evaluates your locks, and upgrades or repairs them efficiently while ensuring your safety.",
      link: "./services/residential-locksmith.html",
    },
    {
      title: "Commercial Locksmith",
      img: "/hero/commercial-locksmith.webp",
      desc: "Protect your business with our expert commercial locksmith services. Master keys, access control, and emergency exit devices for offices, warehouses, and stores.",
      bullets: [
        { icon: "business", text: "Advanced Access Control" },
        { icon: "security", text: "Emergency Lock Solutions" },
        { icon: "verified", text: "Licensed & Insured Experts" },
      ],
      howItWorks: "Contact us for a consultation, we analyze your property security, install or maintain locks efficiently.",
      link: "./services/commercial-locksmith.html",
    },
    {
      title: "Automotive Locksmith",
      img: "/hero/auto-locksmith.webp",
      desc: "Locked out of your car or need a new key? We provide car key replacement, fob programming, duplicates, and ignition repairs for all makes and models.",
      bullets: [
        { icon: "directions_car", text: "Quick On-Site Service" },
        { icon: "key", text: "Duplicate & Replacement Keys" },
        { icon: "speed", text: "Ignition & Key Fob Solutions" },
      ],
      howItWorks: "Call us, provide your car make/model, our technician programs or cuts a key and gets you back on the road quickly.",
      link: "./services/auto-locksmith.html",
    },
  ];

  return (
    <section className="bg-[rgba(249,237,237,1)] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Our <span className="text-[#FD9A00]">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-[#0C0000] mb-16 max-w-3xl mx-auto">
          Key Kings Locksmith offers 24/7 emergency, residential, commercial, and automotive locksmith services to keep you secure.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-3xl shadow-xl border-2 border-[#FD9A00] hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-56 w-full overflow-hidden rounded-t-3xl">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-left">{service.desc}</p>
                <ul className="text-gray-600 text-left space-y-2 mb-4">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center">
                      <span className="material-icons text-[#FD9A00] mr-2">{bullet.icon}</span>
                      {bullet.text}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-left mb-4"><strong>How it Works:</strong> {service.howItWorks}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] rounded-2xl shadow-lg hover:from-[#F9AE19] hover:to-[#FD9A00] transform hover:scale-105 transition-all duration-300 mt-auto"
                >
                  Learn More <span className="material-icons text-lg">arrow_right_alt</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
