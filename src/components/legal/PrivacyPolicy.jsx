import React from "react";

export default function PrivacyPolicy() {
    const policy = {
        hero: {
        title: "Privacy Policy",
        lastUpdated: "September 23, 2025",
        },
        sections: [
        {
            number: 1,
            title: "Introduction",
            content:
            "Key Kings Locksmith (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our services or visiting our website.",
        },
        {
            number: 2,
            title: "Information We Collect",
            content: "We collect and process the following types of personal data:",
            list: [
            { icon: "person", label: "Identity Data", details: "Full name, title (if applicable)" },
            { icon: "contact_mail", label: "Contact Data", details: "Physical address, email address, telephone numbers" },
            { icon: "computer", label: "Technical Data", details: "IP address, browser type, time zone, operating system" },
            { icon: "build", label: "Service Data", details: "Details about the locksmith services you request" },
            { icon: "directions_car", label: "Vehicle Data", details: "Make, model, and year of your vehicle (for automotive services)" },
            { icon: "campaign", label: "Marketing Data", details: "Preferences in receiving marketing communications from us" },
            ],
        },
        {
            number: 3,
            title: "How We Use Your Information",
            list: [
            { icon: "handyman", text: "To provide and manage locksmith services" },
            { icon: "chat", text: "To communicate with you about service requests" },
            { icon: "verified_user", text: "To verify your identity when providing services" },
            { icon: "trending_up", text: "To improve our services and website functionality" },
            { icon: "email", text: "To send relevant communications (with your consent)" },
            { icon: "gavel", text: "To comply with legal obligations" },
            ],
        },
        {
            number: 4,
            title: "Data Security",
            highlights: [
            "Encryption of data in transit and at rest",
            "Regular security assessments",
            "Access controls and authentication",
            "Employee training on data protection",
            ],
        },
        {
            number: 5,
            title: "Your Rights",
            rights: [
            { icon: "visibility", text: "Access your personal data" },
            { icon: "edit", text: "Correct inaccurate data" },
            { icon: "delete", text: "Request erasure" },
            { icon: "block", text: "Object to processing" },
            { icon: "pause", text: "Request restriction of processing" },
            { icon: "import_export", text: "Request data transfer" },
            ],
        },
        {
            number: 6,
            title: "Contact Us",
            contacts: [
            { icon: "call", label: "Call", value: "864-900-9597", extra: "Available 24/7", href: "tel:+18649009597" },
            { icon: "email", label: "Email", value: "keykingslocksmithsc@gmail.com", extra: "Quick response guaranteed", href: "mailto:keykingslocksmithsc@gmail.com" },
            { icon: "place", label: "Address", value: "4105 Liberty Highway Unit B, Anderson SC 29621", extra: "Mobile service available" },
            ],
        },
        ],
    };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FD9A00] rounded-full mb-6">
            <span className="material-icons text-2xl text-white">security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{policy.hero.title}</h1>
          <p className="text-lg text-gray-600">Last updated: {policy.hero.lastUpdated}</p>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-8 md:p-12">
          {policy.sections.map((section) => (
            <div key={section.number} className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#FD9A00] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {section.number}
                </div>
                <h2 className="text-2xl font-bold text-black">{section.title}</h2>
              </div>

              {section.content && <p className="pl-11 text-gray-700 leading-relaxed mb-4">{section.content}</p>}

              {section.list && (
                <div className="pl-11 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {section.list.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="material-icons text-[#FD9A00] mr-2 text-sm">{item.icon}</span>
                        {item.label || item.text}
                      </h4>
                      {item.details && <p className="text-sm text-gray-600">{item.details}</p>}
                    </div>
                  ))}
                </div>
              )}

              {section.highlights && (
                <div className="pl-11 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {section.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="material-icons text-[#FD9A00] mr-3">https</span>
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.rights && (
                <div className="pl-11 grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {section.rights.map((r, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className={`material-icons text-blue-600 mr-3 text-sm`}>{r.icon}</span>
                      <span className="text-gray-700 text-sm font-medium">{r.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.contacts && (
                <div className="pl-11">
                  {section.contacts.map((c, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-[#FD9A00]/10 to-[#FD9A00]/10 border border-[#FD9A00]/30 rounded-lg p-6 space-y-4 mb-4">
                      <div className="flex items-start">
                        <span className="material-icons text-[#FD9A00] mr-3 mt-1">{c.icon}</span>
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            {c.label}: {c.href ? <a href={c.href} className="font-medium text-[#FD9A00]">{c.value}</a> : c.value}
                          </p>
                          {c.extra && <p className="text-gray-600 text-sm">{c.extra}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              This privacy policy is subject to change without notice. Please review periodically for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
