import React from "react";

const ctaContent = {
  colors: {
    text: "hsla(0,50%,95%,1)",
    gradientStart: "hsla(33,100%,48%,1)",
    gradientEnd: "hsla(37,100%,50%,1)",
    buttonHoverBg: "hsla(40,95%,54%,1)",
    buttonHoverText: "hsla(0,100%,2%,1)",
  },
  phone: "(864) 900-9597",
  heading: "Need Key Kings Help Fast?",
  subtext: "Immediate assistance whenever you need it. Protect your home, office, and family with our trusted and certified locksmiths.",
  bookServiceLink: "/book-service", // <-- added here
  features: [
    { icon: "schedule", text: "24/7 Service", color: "hsla(33,100%,48%,1)" },
    { icon: "verified", text: "Licensed & Insured", color: "hsla(37,100%,50%,1)" },
    { icon: "star", text: "5-Star Rated", color: "hsla(33,100%,48%,1)" },
  ],
};

export default function CTASection() {
  const { colors, phone, heading, subtext, features, bookServiceLink } = ctaContent;

  return (
    <section className="relative bg-black py-20 overflow-hidden text-[hsla(0,50%,95%,1)]">
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text & Buttons */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[hsla(0,50%,95%,0.1)] backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className={`material-icons text-5xl animate-bounce-subtle`} style={{ color: colors.gradientStart }}>
                call
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-snug animate-fade-in text-[hsla(33,100%,48%,1)]">
            {heading}
          </h2>

          <p className="text-base md:text-lg leading-relaxed animate-slide-down">
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <a
              href={`tel:${phone.replace(/[^\d]/g, "")}`}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow"
              style={{ background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`, color: colors.text }}
            >
              <span className="material-icons text-xl animate-bounce-subtle">call</span>
              <span>Call {phone}</span>
            </a>

            <a
              href={bookServiceLink} // <-- use const here
              className="flex items-center gap-3 px-8 py-4 border-2 bg-transparent font-bold rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{
                borderColor: colors.text,
                color: colors.text,
              }}
            >
              <span className="material-icons text-lg">calendar_month</span>
              <span>Book Service</span>
            </a>
          </div>

          <div className="flex flex-nowrap justify-center md:justify-start gap-6 mt-6 text-sm">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 hover:scale-105 transition-transform duration-300"
              >
                <span className="material-icons text-base animate-bounce-subtle" style={{ color: f.color }}>
                  {f.icon}
                </span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Panel */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-[hsla(33,100%,48%,0.15)] rounded-full top-0 right-0 blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-[hsla(37,100%,50%,0.15)] rounded-full bottom-0 left-0 blur-3xl animate-pulse"></div>

          <div className="w-80 h-80 bg-[hsla(33,100%,48%,0.1)] backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg">
            <span className="material-icons text-8xl animate-bounce" style={{ color: colors.gradientStart }}>
              lock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
