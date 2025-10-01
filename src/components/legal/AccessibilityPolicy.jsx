import React from "react";

export default function AccessibilityPolicy() {
  const policy = {
    hero: {
      title: "Accessibility Policy",
      lastUpdated: "October 2, 2025",
    },
    sections: [
      {
        icon: "verified_user",
        color: "#FFAA33",
        title: "Our Commitment to Accessibility",
        content: [
          "At Key Kings Locksmith, we believe that everyone deserves equal access to information and services. We are committed to providing a website and service experience that is accessible to all individuals, including those with disabilities.",
          "We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and continuously work to improve the accessibility of our digital presence and locksmith services.",
        ],
      },
      {
        icon: "language",
        color: "#FFAF1E",
        title: "Website Accessibility Features",
        list: [
          "Clear page structure & heading hierarchy",
          "Consistent navigation menu",
          "Full keyboard navigation support",
          "Skip navigation links for screen readers",
          "Breadcrumbs for page location",
          "High contrast color scheme",
          "Readable, scalable fonts up to 200%",
          "Focus indicators on interactive elements",
          "Alt text for all images & descriptive links",
          "Captions/transcripts for videos",
        ],
      },
      {
        icon: "storefront",
        color: "#FFAA33",
        title: "Physical Service Accessibility",
        list: [
          "Multiple contact options: phone, email, forms",
          "TTY/TDD relay services accepted",
          "Flexible scheduling for special needs",
          "Clear explanations of services",
          "Patient, understanding support staff",
        ],
      },
      {
        icon: "autorenew",
        color: "#FFAF1E",
        title: "Ongoing Efforts",
        list: [
          "Regular accessibility audits & testing",
          "Staff training on accessibility practices",
          "Improvements based on user feedback",
          "Staying updated with new standards",
        ],
      },
      {
        icon: "settings",
        color: "#FFAA33",
        title: "Technical Specifications",
        list: [
          "Screen readers (JAWS, NVDA, VoiceOver)",
          "Voice recognition software",
          "Keyboard navigation",
          "Browser accessibility features",
          "Mobile accessibility features",
        ],
      },
    ],
    feedback: {
      icon: "support_agent",
      color: "#FFAA33",
      title: "Accessibility Feedback",
      description: "We welcome your feedback on accessibility. If you encounter any barriers, please contact us:",
      contacts: [
        { label: "Phone", value: "864-900-9597" },
        { label: "Email", value: "keykingslocksmithsc@gmail.com", href: "mailto:keykingslocksmithsc@gmail.com" },
        { label: "Place", value: "4105 Liberty Highway Unit B, Anderson SC 29621" },
      ],
      note: "Mobile service available. Quick response guaranteed.",
    },
    notice: "These terms are subject to change without notice. Please review periodically for updates.",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#FFAA33] to-[#FFAF1E] rounded-full shadow-lg mb-6">
            <span className="material-icons text-3xl text-white">gavel</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{policy.hero.title}</h1>
          <p className="text-gray-600 text-lg">Last updated: {policy.hero.lastUpdated}</p>
        </div>

        {/* Sections */}
        <div className="grid gap-10">
          {policy.sections.map((section, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <span className="material-icons text-3xl mr-4" style={{ color: section.color }}>
                  {section.icon}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">{section.title}</h3>
              </div>

              {section.content &&
                section.content.map((para, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-3">
                    {para}
                  </p>
                ))}

              {section.list && (
                <div className="grid gap-3 mt-2 text-gray-700">
                  {section.list.map((item, j) => (
                    <div key={j} className="flex items-center text-sm md:text-base">
                      <span
                        className="material-icons mr-3"
                        style={{ color: section.color }}
                      >
                        check_circle
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Feedback */}
          <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] border-l-4 border-[#FFAA33] rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <span className="material-icons text-3xl mr-4" style={{ color: policy.feedback.color }}>
                {policy.feedback.icon}
              </span>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{policy.feedback.title}</h3>
                <p className="text-gray-700">{policy.feedback.description}</p>
                <p className="mt-3 text-gray-700">
                  {policy.feedback.contacts.map((c, i) => (
                    <span key={i} className="block">
                      <strong>{c.label}:</strong>{" "}
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-[#FFAA33] font-medium underline hover:text-orange-600 transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </span>
                  ))}
                </p>
                <p className="text-gray-700 mt-2">{policy.feedback.note}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">{policy.notice}</p>
        </div>
      </div>
    </section>
  );
}
