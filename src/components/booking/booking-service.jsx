import React from "react";

// Booking page content as a constant
const bookingPage = {
  header: {
    title: "Book Your Locksmith Service Now",
    subtitle: "Fast, Reliable & Professional",
    description:
      "Get a quick response from Key Kings Locksmith. Fill out the form below and our technicians will reach you within 15 minutes.",
    backgroundImage: "./images/bookings.webp",
    buttonText: "Book Now",
    buttonLink: "#booking",
  },
  bookingForm: {
    heading: "Book a Locksmith",
    subheading: "Get response within 15 minutes",
  },
  serviceOptions: [
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
  ],
  neededOptions: ["ASAP - Emergency", "Within 2 hours", "Same Day", "Tomorrow", "This Week"],
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303603.416124994!2d-83.35284912968414!3d33.83607313745211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a4d017d2bff7%3A0x8f44c4f7f0c7a5e!2sSouth%20Carolina%2C%20USA!5e0!3m2!1sen!2sph!4v1757943457692!5m2!1sen!2sph",
  testimonial: {
    text: "Key Kings Locksmith arrived on time and resolved my lockout issue in minutes. Highly professional and reliable!",
    author: "Julie D.",
  },
  hotline: "864-900-9597",
};

export default function BookingSection() {
  return (
    <>
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${bookingPage.header.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {bookingPage.header.title}
            <span className="text-[#FD9A00] block mt-2">{bookingPage.header.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">{bookingPage.header.description}</p>
          <a
            href={bookingPage.header.buttonLink}
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-[#FD9A00] to-[#F58600] hover:from-[#F58600] hover:to-[#FD4500] text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {bookingPage.header.buttonText}
          </a>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Booking Form */}
          <div className="flex-1 relative z-10 bg-gradient-to-br from-white via-gray-50 to-white rounded-xl sm:rounded-2xl shadow-2xl p-6 text-gray-800 w-full max-w-md border-2 border-[#FD9A00]/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl lg:text-3xl font-black mb-2">{bookingPage.bookingForm.heading}</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">{bookingPage.bookingForm.subheading}</p>
            </div>

            <form className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00]"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00]"
                />
              </div>

              <input
                type="text"
                id="address"
                name="address"
                placeholder="Service Address"
                required
                className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  id="service_type"
                  name="service_type"
                  required
                  className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Service Type
                  </option>
                  {bookingPage.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <select
                  id="needed"
                  name="needed"
                  required
                  className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    When do you need service?
                  </option>
                  {bookingPage.neededOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                id="notes"
                name="notes"
                rows="3"
                placeholder="Additional Notes (Optional)"
                className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#FD9A00] to-[#F58600] text-white font-bold rounded-lg shadow-xl hover:scale-[1.02] transition-all duration-500"
              >
                Request Service Now
              </button>
            </form>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-8">
            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 flex items-center gap-3 bg-gradient-to-r from-[#FD9A00] to-[#F58600] text-white">
                <span className="material-icons text-2xl">map</span>
                <h3 className="font-semibold text-lg">Our Service Area</h3>
              </div>
              <iframe
                src={bookingPage.mapSrc}
                className="w-full h-80 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Next Steps Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-icons text-2xl text-[#FD9A00]">schedule</span>
                <h3 className="font-semibold text-lg">Next Steps</h3>
              </div>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>
                  You will receive a confirmation via <strong>email</strong> shortly.
                </li>
                <li>
                  Emergency service? Call our <strong>24/7 hotline</strong>:{" "}
                  <span className="text-[#FD9A00] font-semibold">{bookingPage.hotline}</span>
                </li>
                <li>Our technician will arrive at the scheduled time. Be ready at your service location.</li>
              </ul>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-icons text-2xl text-[#FD9A00]">reviews</span>
                <h3 className="font-semibold text-lg">Customer Review</h3>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-[#FD9A00] pl-4">
                "{bookingPage.testimonial.text}"
                <span className="block mt-2 font-semibold">- {bookingPage.testimonial.author}</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
