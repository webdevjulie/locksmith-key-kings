import React, { useState } from "react";

export default function FAQPage() {
  const pageHeader = {
    title: "Frequently Asked Questions",
    subtitle: "Key Kings Locksmith Help Center",
    description: `Find answers to the most common questions about our locksmith services. From emergency lockouts to key replacements, Key Kings Locksmith provides clear guidance to help you quickly and safely.`,
    backgroundImage: "/images/faqs.webp", // or faqsImage if imported
    breadcrumb: [
      { name: "Home", link: "/index" },
      { name: "FAQs" }
    ]
  };

  const faq = [
    { id: 1, question: "How fast is your emergency response?", answer: "Our locksmiths are available 24/7 and typically arrive within 15–30 minutes.", icon: "flash_on", category: "Emergency" },
    { id: 2, question: "Can you make a new car key on the spot?", answer: "Yes! We provide on-site car key replacement for most makes and models, including transponder keys.", icon: "vpn_key", category: "Auto" },
    { id: 3, question: "Do you install high-security locks?", answer: "Absolutely! We specialize in high-security and smart lock installation for homes and businesses.", icon: "lock", category: "General" },
    { id: 4, question: "Are you available 24/7?", answer: "Yes, our team is on call day and night, weekends, and holidays for all lock & key emergencies.", icon: "schedule", category: "Emergency" },
    { id: 5, question: "Do you offer residential & commercial services?", answer: "We handle residential, commercial, and automotive locksmithing with certified technicians.", icon: "home_repair_service", category: "Residential" },
    { id: 6, question: "Do you guarantee your work?", answer: "Yes, all our work is backed by a warranty and we are licensed, bonded & insured.", icon: "star", category: "General" },
    { id: 7, question: "Can you unlock my car if I’m locked out?", answer: "Yes, our locksmiths can safely unlock vehicles without causing damage.", icon: "directions_car", category: "Auto" },
    { id: 8, question: "Do you repair ignitions?", answer: "We repair and replace faulty car ignitions on-site quickly and reliably.", icon: "build", category: "Auto" },
    { id: 9, question: "Can you program transponder keys?", answer: "Yes, we program most transponder and smart keys for modern vehicles.", icon: "key", category: "Auto" },
    { id: 10, question: "Do you handle commercial lockouts?", answer: "Absolutely! We provide 24/7 commercial lockout assistance for businesses.", icon: "business", category: "Commercial" },
    { id: 11, question: "Are your technicians certified?", answer: "All our technicians are fully licensed, bonded, and insured professionals.", icon: "verified", category: "General" },
    { id: 12, question: "Can you make duplicate keys?", answer: "Yes, we can duplicate most car and house keys on-site.", icon: "content_copy", category: "General" },
    { id: 13, question: "Do you provide key fob replacement?", answer: "We replace and program key fobs for many vehicle makes and models.", icon: "smartphone", category: "Auto" },
    { id: 14, question: "Do you offer emergency services on holidays?", answer: "Yes, we are available 24/7 including holidays and weekends.", icon: "holiday_village", category: "Emergency" },
    { id: 15, question: "Can you install electronic locks?", answer: "Yes, we specialize in installing smart and electronic locks.", icon: "electrical_services", category: "Residential" },
    { id: 16, question: "Do you provide free estimates?", answer: "Yes, we offer free quotes for most locksmith services.", icon: "request_quote", category: "General" },
    { id: 17, question: "Can you extract broken keys?", answer: "Yes, we safely remove broken keys from locks and ignitions.", icon: "construction", category: "Auto" },
    { id: 18, question: "Do you offer mobile services?", answer: "All our locksmith services are mobile and performed on-site.", icon: "directions", category: "General" },
    { id: 19, question: "Are your services guaranteed?", answer: "Yes, all work is guaranteed for your peace of mind.", icon: "verified_user", category: "General" },
    { id: 20, question: "How can I contact you?", answer: "Call us anytime at (864) 900-9597 for fast locksmith assistance.", icon: "call", category: "General" }
  ];
  
  const [visibleCount, setVisibleCount] = useState(6);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFaq = faq.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      (item.question.toLowerCase().includes(search.toLowerCase()) ||
       item.answer.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleVisible = () => {
    setVisibleCount(visibleCount === 6 ? filteredFaq.length : 6);
  };

  return (
    <div>
      {/* Page Header */}
      <section
         className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center px-6"
      style={{ backgroundImage: `url(${pageHeader.backgroundImage})` }}
    >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <nav className="text-sm mb-6 bg-transparent">
            <ol className="flex items-center justify-center space-x-2 text-gray-400">
              {pageHeader.breadcrumb.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {crumb.link ? (
                    <li><a href={crumb.link} className="hover:underline hover:text-[#FD9A00] transition">{crumb.name}</a></li>
                  ) : (
                    <li className="text-gray-200">{crumb.name}</li>
                  )}
                  {idx < pageHeader.breadcrumb.length - 1 && <li><span className="mx-1 text-gray-500">/</span></li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {pageHeader.title}
            <span className="text-[#FD9A00] block mt-2">
              {pageHeader.subtitle}
            </span>
          </h1>

          <p className="text-lg text-gray-100 leading-relaxed">{pageHeader.description}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-[rgba(249,237,237,1)] text-brand-dark py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Search Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">FAQ:
                <span class="bg-gradient-to-r from-brand-orange via-brand-crimson to-brand-orange-fire bg-clip-text text-transparent">
                Key Kings Locksmith
                </span>
            </h2>
            <p className="text-brand-dark text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Get answers instantly by clicking each question below.</p>
          </div>

          {/* Search Box */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full md:w-1/2 px-4 py-2 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-brand-orange"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["All", "General", "Auto", "Residential", "Commercial", "Emergency"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  category === cat
                    ? "bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white"
                    : "bg-white border-2 border-brand-orange text-brand-orange"
                } transition-all duration-300`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredFaq.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="faq-card bg-white/70 backdrop-blur-md rounded-3xl p-6 border-2 border-brand-orange group cursor-pointer overflow-hidden transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
                    <span className="material-icons text-brand-orange mr-2 align-middle">{item.icon}</span>
                    {item.question}
                  </h3>
                  <span className="material-icons text-brand-orange transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                </div>
                <div className="mt-4 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-96">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {filteredFaq.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={toggleVisible}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {visibleCount === 6 ? "Show More FAQs" : "Show Less FAQs"}
                <span className="material-icons text-lg">
                  {visibleCount === 6 ? "arrow_downward" : "arrow_upward"}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
