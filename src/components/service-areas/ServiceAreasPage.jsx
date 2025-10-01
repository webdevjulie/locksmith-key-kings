import React from "react";

export default function ServiceAreasPage() {
  const servicePage = {
    title: "Service Areas",
    subtitle: "Fast, Reliable & Professional in Anderson",
    description: `
      Key Kings Locksmith proudly provides fast and professional locksmith services across multiple cities and neighborhoods.  
      Whether you need emergency lockouts, residential security, commercial solutions, or automotive locksmith assistance, we've got you covered.
    `,
    backgroundImage: "/images/servicess.webp",
    breadcrumbs: [
      { name: "Home", url: "/index" },
      { name: "Locksmith Services" },
    ],
  };

  // Options as constants
  const serviceTypes = [
    "Car Lockout",
    "House Lockout",
    "Business Lockout",
    "Storage Unit Lockout",
    "Lock Replacement",
    "Lock Rekey",
    "Lock Repair",
    "Gate Locks",
    "Commercial Lock Replacement",
    "Commercial Rekey",
    "Emergency Exit Devices",
    "Master Key Systems",
    "Access Control",
    "Car Key Replacement",
    "Car Key Duplicate",
    "Car Key Cutting",
    "Key Fob Programming",
    "Ignition Lock Cylinder",
  ];

  const timeFrames = ["ASAP", "Same Day", "Within a few days", "In a few weeks", "Other"];

  return (
    <section
      className="relative bg-cover bg-center text-white py-16 md:py-20"
      style={{ backgroundImage: `url('${servicePage.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm bg-transparent mt-6 relative z-10">
          <ol className="flex items-center space-x-2 text-gray-400">
            {servicePage.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <li><span className="mx-1 text-gray-500">/</span></li>}
                <li className={crumb.url ? "hover:underline hover:text-[#FD9A00] transition" : "text-gray-200"}>
                  {crumb.url ? <a href={crumb.url}>{crumb.name}</a> : crumb.name}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headline & Description */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
              {servicePage.title}
              <span className="text-[#FD9A00] block mt-2">{servicePage.subtitle}</span>
            </h1>
            <p
              className="text-lg text-gray-100 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: servicePage.description }}
            ></p>
          </div>

          {/* Right: Booking Form */}
          <div className="flex-1 relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-10 text-[#1C1C1C] w-full max-w-xl mt-12 md:mt-0 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-[#1C1C1C]">
              Book a <span className="text-[#FD9A00]">Locksmith</span> Now
            </h3>

            <form id="booking-form" className="space-y-6" noValidate>
              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    required
                    className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                  >
                    Your Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=" "
                    required
                    className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                  >
                    Phone Number *
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder=" "
                  required
                  className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                />
                <label
                  htmlFor="address"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                >
                  Service Address *
                </label>
              </div>

              {/* Service Type & Needed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-white focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Service Type</option>
                    {serviceTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                  <label htmlFor="service_type" className="block mt-1 text-xs text-gray-500">
                    Service Type *
                  </label>
                </div>

                <div className="relative">
                  <select
                    id="needed"
                    name="needed"
                    required
                    className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-white focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Time Frame</option>
                    {timeFrames.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                  <label htmlFor="needed" className="block mt-1 text-xs text-gray-500">
                    When Needed? *
                  </label>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  rows="2"
                  placeholder=" "
                  className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                ></textarea>
                <label
                  htmlFor="notes"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                >
                  Additional Notes
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-lg tracking-wide"
              >
                <span className="material-icons text-xl animate-pulse">send</span>
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
