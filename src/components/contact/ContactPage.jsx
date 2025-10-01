import React from "react";

export default function ContactPage() {
  const contact = {
    hero: {
      title: "Contact Key Kings Locksmith",
      subtitle: "Anderson Trusted Mobile Locksmith Service",
      description:
        "Have a question or need immediate assistance? Reach out to Key Kings Locksmith for fast, reliable, and professional locksmith service in Anderson. Our team is ready to help with homes, businesses, and vehicle lock emergencies.",
      backgroundImage: "../images/contacts.webp",
      breadcrumbs: [
        { name: "Home", url: "/index" },
        { name: "Contact Us", url: "/contact" },
      ],
    },
    info: {
      header: "Get in Touch",
      description:
        "Contact Key Kings Locksmith via phone, email, or visit our office. Our team is ready to help with all locksmith needs!",
      phone: "(864) 900-9597",
      email: "keykingslocksmithsc@gmail.com",
      address: "4105 Liberty Hwy Unit B, Anderson, SC 29621",
      hours: [
        "Sun - Thurs: 7:00 AM - 10:00 PM",
        "Fri: 6:30 AM - 5:30 PM",
        "Sat: Closed",
      ],
    },
    booking: {
      header: "Book Now Key Kings Locksmith",
      subheader: "Fill out the form below and our locksmith team will respond within 15 minutes.",
      formFields: {
        name: "Your Name *",
        phone: "Phone Number *",
        address: "Service Address *",
        serviceTypes: [
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
        serviceTimes: [
          "ASAP - Emergency",
          "Within 2 hours",
          "Same Day",
          "Tomorrow",
          "This Week",
        ],
        notes: "Additional Notes (Optional)",
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${contact.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 bg-transparent">
            <ol className="flex items-center justify-center space-x-2 text-gray-400">
              {contact.hero.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li>
                    <a href={crumb.url} className="hover:underline hover:text-[#FD9A00] transition">
                      {crumb.name}
                    </a>
                  </li>
                  {index < contact.hero.breadcrumbs.length - 1 && (
                    <li>
                      <span className="mx-1 text-gray-500">/</span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {contact.hero.title}
            <span className="text-[#FD9A00] block mt-2">{contact.hero.subtitle}</span>
          </h1>

          <p className="text-lg text-gray-100 leading-relaxed">{contact.hero.description}</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative bg-[rgba(249,237,237,1)] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-[#FD9A00] overflow-hidden md:flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center gap-6">
              <h2 className="text-4xl font-extrabold text-[#FD9A00] mb-2">{contact.info.header}</h2>
              <p className="text-[#0C0000] text-lg leading-relaxed">{contact.info.description}</p>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-[#FD9A00] text-3xl">call</span>
                  <span className="text-gray-800 text-lg font-medium">{contact.info.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-[#FD9A00] text-3xl">email</span>
                  <span className="text-gray-800 text-lg font-medium">{contact.info.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-[#FD9A00] text-3xl">location_on</span>
                  <span className="text-gray-800 text-lg font-medium">{contact.info.address}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#FD9A00] mb-2">Hours of Operation</h3>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-1">
                  {contact.info.hours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 h-96 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.123456789!2d-82.65065128477083!3d34.50371768062019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88587d1e0a0b0b0b%3A0x123456789abcdef!2sAnderson%2C%20SC!5e0!3m2!1sen!2sus!4v0000000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative bg-[rgba(249,237,237,1)] py-20 px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{contact.booking.header}</h2>
          <p className="text-brand-dark text-lg md:text-xl leading-relaxed">{contact.booking.subheader}</p>
        </div>

        {/* Booking Form */}
        <div className="w-full max-w-lg bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-2xl p-6 md:p-10 border-2 border-[#FD9A00] animate-fade-in hover:shadow-[#FD9A00]/20 transition-shadow duration-500">
          <form id="booking-form" className="space-y-4" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder={contact.booking.formFields.name} className="p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD9A00] w-full" required />
              <input type="tel" placeholder={contact.booking.formFields.phone} className="p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD9A00] w-full" required />
            </div>
            <input type="text" placeholder={contact.booking.formFields.address} className="p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD9A00] w-full" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD9A00] w-full" required>
                <option disabled selected>Select Service Type</option>
                {contact.booking.formFields.serviceTypes.map((service, index) => (
                  <option key={index}>{service}</option>
                ))}
              </select>
              <select className="p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD9A00] w-full" required>
                <option disabled selected>When do you need service?</option>
                {contact.booking.formFields.serviceTimes.map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </select>
            </div>
            <textarea placeholder={contact.booking.formFields.notes} className="p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD9A00] w-full resize-none" rows="3"></textarea>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-2">
              <span className="material-icons">send</span> Request Service Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
