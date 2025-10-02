import React from "react";

export default function TermAndConditions() {
  const terms = {
    hero: {
      title: "Terms & Conditions",
      subtitle: "Key Kings Locksmith",
      description: "Please read these Terms & Conditions carefully before using our services.",
      lastUpdated: "October 2, 2025",
    },
    sections: [
      {
        number: 1,
        title: "Acceptance of Terms",
        content: "By accessing and using the services of Key Kings Locksmith, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
      },
      {
        number: 2,
        title: "Service Terms",
        list: [
          "All services are provided on an 'as is' and 'as available' basis",
          "Service rates may vary based on time of day, location, and complexity",
          "Emergency services are available 24/7 but may incur additional charges",
          "We reserve the right to refuse service at our discretion",
        ],
      },
      {
        number: 3,
        title: "Payment Terms",
        content: "Payment is due upon completion of service. We accept major credit cards, cash, and approved payment methods. Additional fees may apply for:",
        list: ["After-hours service calls", "Holiday or weekend service", "Emergency response", "Travel beyond our standard service area"],
      },
      {
        number: 4,
        title: "Warranty & Guarantees",
        list: ["Covers defects in workmanship", "Does not cover damage from misuse or normal wear and tear", "Is non-transferable", "Requires proof of service"],
      },
      {
        number: 5,
        title: "Limitation of Liability",
        content: "Key Kings Locksmith shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.",
        type: "warning",
      },
      {
        number: 6,
        title: "Identity Verification",
        list: ["Government-issued photo ID", "Proof of residence or vehicle ownership", "Property management credentials"],
      },
      {
        number: 7,
        title: "Cancellation Policy",
        content: "Please provide at least 2 hours notice for cancellations. Late cancellations or no-shows may incur a service charge.",
        type: "info",
      },
      {
        number: 8,
        title: "Google reCAPTCHA",
        content: "This site is protected by reCAPTCHA.",
      },
      {
        number: 9,
        title: "Contact Information",
        contact: {
          email: "keykingslocksmithsc@gmail.com",
        },
      },
    ],
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FD9A00] rounded-full mb-6 shadow-lg">
            <span className="material-icons text-3xl text-white">gavel</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-3">{terms.hero.title}</h1>
          <span className="text-[#FD9A00] block mb-2 text-xl">{terms.hero.subtitle}</span>
          <p className="text-lg text-gray-700 mb-1">{terms.hero.description}</p>
          <p className="text-gray-500 text-sm">Last updated: {terms.hero.lastUpdated}</p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {terms.sections.map((section) => (
            <div key={section.number} className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#FD9A00] text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {section.number}
                </div>
                <h2 className="text-3xl font-semibold text-black">{section.title}</h2>
              </div>

              {section.content && <p className="pl-14 text-gray-700 leading-relaxed mb-6">{section.content}</p>}

              {section.list && (
                <ul className="pl-14 space-y-4">
                  {section.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 text-sm md:text-base"
                    >
                      <span
                        className={`material-icons mr-3 mt-1 text-sm ${
                          section.type === "warning"
                            ? "text-amber-600"
                            : section.type === "info"
                            ? "text-blue-500"
                            : "text-[#FD9A00]"
                        }`}
                      >
                        {section.type === "warning"
                          ? "warning"
                          : section.type === "info"
                          ? "info"
                          : "check_circle"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.contact && (
                <div className="pl-14 mt-4">
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-[#FD9A00] hover:text-orange-600 font-medium underline transition-colors"
                  >
                    {section.contact.email}
                  </a>
                </div>
              )}
            </div>
          ))}

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              These terms are subject to change without notice. Please review periodically for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
