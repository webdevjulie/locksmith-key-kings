import React from "react";

export default function AutoLocksmith() {
    const auto = {
        title: "Auto Locksmith Services",
        subtitle: "Fast, reliable, and secure",
        backgroundImage: "../images/auto-locksmith.webp",
        description: `
            Fast and reliable auto locksmith services in South Bend. 
            Available 24/7 to keep your vehicle safe, secure, and accessible.
        `,
        phone: "(864) 900-9597",
        form: {
        heading: "Book a Locksmith Now",
        buttonText: "Request Service",
        fields: [
            { type: "text", id: "name", name: "name", label: "Your Name *", required: true },
            { type: "tel", id: "phone", name: "phone", label: "Phone Number *", required: true },
            { type: "text", id: "address", name: "address", label: "Service Address *", required: true },
            { type: "select", id: "service_type", name: "service_type", label: "Service Type *", required: true, options: [
            "House Lockout","Lock Replacement","Lock Rekey","Lock Repair","Gate Locks",
            "Master Key Systems","Emergency Lockouts"
            ]},
            { type: "select", id: "needed", name: "needed", label: "When Needed? *", required: true, options: [
            "ASAP","Same Day","Within a few days","In a few weeks","Other"
            ]},
            { type: "textarea", id: "notes", name: "notes", label: "Additional Notes" }
        ]
        },
        badges: [
        { icon: "verified", text: "Licensed & Insured" },
        { icon: "schedule", text: "Available 24/7" },
        { icon: "speed", text: "Fast Response Time" }
        ]
    };

    const lockoutServices = {
  header: {
    title: "Our Services",
    subtitle: "Fast and reliable car locksmith solutions — tailored for all vehicles and automotive needs.",
  },
  services: [
    {
      id: 1,
      title: "Car Key Replacement",
      description: "Replace lost or damaged car keys quickly and safely for all vehicle types.",
      image: "../images/car-key-replacement.webp",
    },
    {
      id: 2,
      title: "Key Fob Programming",
      description: "Program and replace electronic key fobs to ensure vehicle security.",
      image: "../images/key-fob-programming.webp",
    },
    {
      id: 3,
      title: "Car Key Duplicate",
      description: "Create duplicate keys for your car quickly without compromising security.",
      image: "../images/car-key-duplicate.webp",
    },
    {
      id: 4,
      title: "Ignition Lock Cylinder",
      description: "Repair or replace faulty ignitions to restore access and start your vehicle safely.",
      image: "../images/ignition-lock-cylinder.webp",
    },
    {
      id: 5,
      title: "Car Key Cutting",
      description: "Precision cutting of car keys for all vehicle makes and models.",
      image: "../images/car-key-cutting.webp",
    },
  ],
};

const howItWorks = {
  header: {
    title: "How It Works",
    subtitle: "Our 4-step process guarantees fast, reliable, and professional auto locksmith services.",
  },
  steps: [
    {
      id: 1,
      title: "Request Service",
      description: "Submit your car details and the service you need — key replacement, fob programming, duplication, or ignition repair.",
    },
    {
      id: 2,
      title: "Fast On-Site Assistance",
      description: "Our mobile locksmith arrives quickly with all necessary tools to handle your vehicle safely and efficiently.",
    },
    {
      id: 3,
      title: "Service Execution",
      description: "We perform the requested service efficiently, ensuring your keys, fobs, or ignition work perfectly.",
    },
    {
      id: 4,
      title: "Car Ready",
      description: "Your vehicle is ready — keys replaced, fobs programmed, duplicates made, or ignition repaired, all done quickly and safely.",
    },
  ],
};

const lockoutTips = {
  header: {
    title: "Auto Locksmith Security Tips",
    subtitle: "Keep your vehicle safe with these practical tips.",
  },
  tips: [
    {
      id: 1,
      title: "Protect Your Keys",
      description: "Keep car keys and fobs secure. Avoid leaving them in the vehicle or unattended in public.",
    },
    {
      id: 2,
      title: "Keep Spares Handy",
      description: "Store duplicate keys securely to prevent lockouts and ensure quick access when needed.",
    },
    {
      id: 3,
      title: "Check Locks & Ignition",
      description: "Ensure all locks and the ignition are functioning properly. Regular checks prevent malfunctions and theft.",
    },
    {
      id: 4,
      title: "Stay Alert",
      description: "Be cautious in unfamiliar areas and avoid suspicious services. Always call a trusted locksmith for assistance.",
    },
  ],
};



  return (
    <>
    <section
      className="relative bg-cover bg-center text-white py-20 md:py-28 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16"
      style={{ backgroundImage: `url(${auto.backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 gap-12">
        
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 max-w-xl text-center md:text-left">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug tracking-tight drop-shadow-md">
            <span className="text-[#FD9A00] drop-shadow-lg">
              Auto Locksmith Services
            </span>
          </h1>

          <p
            className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0"
            dangerouslySetInnerHTML={{ __html: auto.description }}
          />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href={`tel:+1${auto.phone.replace(/\D/g, "")}`}
              className="group flex items-center justify-center gap-2 bg-[#FD9A00] 
              hover:bg-[#F58600] transition-all duration-300 rounded-2xl px-6 py-4 font-semibold text-white 
              text-base transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[220px] relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></span>
              <span className="material-icons text-lg">call</span>
              <span>Call {auto.phone}</span>
            </a>


            <a
              href="../book-service.html"
              className="group flex items-center justify-center gap-2 border-2 border-[#FD9A00] rounded-2xl px-6 py-4 
              font-semibold text-white text-base hover:bg-gradient-to-r hover:from-[#FD9A00] hover:to-[#F58600] 
              hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl min-w-[220px]"
            >
              <span>Book Now</span>
              <span className="material-icons text-lg transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {auto.badges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 
                text-xs sm:text-sm shadow-lg backdrop-blur-md text-white"
              >
                <span className="material-icons text-[#FD9A00] text-sm">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="flex-1 relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl 
        p-8 sm:p-10 text-[#1C1C1C] w-full max-w-lg border border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-[#1C1C1C]">
            {auto.form.heading}
          </h3>

          <form id="booking-form" className="space-y-6" noValidate>
            {/* Name & Phone side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {auto.form.fields.slice(0, 2).map((field, idx) => (
                <div key={idx} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder=" "
                    required={field.required}
                    className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent 
                    focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                  />
                  <label
                    htmlFor={field.id}
                    className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                    peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="relative">
              <input
                type="text"
                id={auto.form.fields[2].id}
                name={auto.form.fields[2].name}
                placeholder=" "
                required
                className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent 
                focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
              />
              <label
                htmlFor={auto.form.fields[2].id}
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
              >
                {auto.form.fields[2].label}
              </label>
            </div>

            {/* Service Type & Time Frame */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {auto.form.fields.slice(3, 5).map((field, idx) => (
                <div key={idx} className="relative">
                  <select
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-white 
                    focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition"
                  >
                    <option value="" disabled selected>
                      Select {field.label}
                    </option>
                    {field.options.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                  <label
                    htmlFor={field.id}
                    className="block mt-1 text-xs text-gray-500"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="relative">
              <textarea
                id={auto.form.fields[5].id}
                name={auto.form.fields[5].name}
                rows="3"
                placeholder=" "
                className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent 
                focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
              ></textarea>
              <label
                htmlFor={auto.form.fields[5].id}
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
              >
                {auto.form.fields[5].label}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] text-white font-bold 
              rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 
              flex items-center justify-center gap-2 text-lg tracking-wide"
            >
              <span className="material-icons text-xl animate-pulse">send</span>
              {auto.form.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* Services Section */}
      <section className="relative bg-[rgba(249,237,237,1)] text-white py-20 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FD9A00]">
            {lockoutServices.header.title}
          </h2>
          <div className="mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-[#FD9A00] via-[#F58600] to-[#F9AE19] rounded-full"></div>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-[#0C0000]">
            <span className="text-transparent bg-gradient-to-r from-[#F58600] to-[#FD9A00] bg-clip-text font-semibold">
              {lockoutServices.header.subtitle}
            </span>
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {lockoutServices.services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#FD9A00] flex flex-col h-72 cursor-pointer"
                style={{ background: `url('${service.image}') center/cover no-repeat` }}
              >
                <div className="bg-black/40 group-hover:bg-black/25 transition-all duration-500 flex flex-col justify-end p-6 h-full">
                  <h3 className="text-2xl font-bold mb-2 text-[#FD9A00] drop-shadow transform group-hover:scale-105 group-hover:translate-y-1 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 transform group-hover:scale-105 group-hover:translate-y-1 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lockoutServices.services.slice(3).map((service) => (
              <div
                key={service.id}
                className="group relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#FD9A00] flex flex-col h-72 cursor-pointer"
                style={{ background: `url('${service.image}') center/cover no-repeat` }}
              >
                <div className="bg-black/40 group-hover:bg-black/25 transition-all duration-500 flex flex-col justify-end p-6 h-full">
                  <h3 className="text-2xl font-bold mb-2 text-[#FD9A00] drop-shadow transform group-hover:scale-105 group-hover:translate-y-1 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 transform group-hover:scale-105 group-hover:translate-y-1 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative text-[#1C1C1C] py-20 md:py-24" style={{ backgroundColor: "rgba(249, 237, 237, 1)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FD9A00]">
            {howItWorks.header.title}
          </h2>
          <div className="mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-[#FD9A00] via-[#F58600] to-[#F9AE19] rounded-full"></div>
          <p className="text-lg md:text-xl text-[#0C0000] mb-16 max-w-3xl mx-auto">
            {howItWorks.header.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-[#FD9A00] shadow-lg hover:shadow-2xl transition text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FD9A00] text-white font-bold text-xl mb-4">
                  {step.id}
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]">{step.title}</h3>
                <p className="text-[#333] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips Section */}
      <section className="relative text-[#1C1C1C] py-20 md:py-24" style={{ backgroundColor: "rgba(249, 237, 237, 1)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FD9A00]">
            {lockoutTips.header.title}
          </h2>
          <div className="mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-[#FD9A00] via-[#F58600] to-[#F9AE19] rounded-full"></div>
          <p className="text-lg md:text-xl text-[#0C0000] mb-16 max-w-3xl mx-auto">
            {lockoutTips.header.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {lockoutTips.tips.map((tip) => (
              <div key={tip.id} className="flex flex-col items-center bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-[#FD9A00] shadow-lg hover:shadow-2xl transition text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FD9A00] text-white font-bold text-xl mb-4">
                  {tip.id}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]">{tip.title}</h3>
                <p className="text-[#333] text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
