import React from "react";

export default function ServiceAreaOverview() {
  const features = [
    {
      icon: "flash_on",
      title: "Fast Response",
      text: "Our team responds quickly to emergencies in Anderson, Greenville, Clemson, and surrounding areas.",
      color: "#F58600ff",
    },
    {
      icon: "schedule",
      title: "Flexible Scheduling",
      text: "Book standard appointments Monday through Saturday at your preferred time and location.",
      color: "#F58600ff",
    },
    {
      icon: "support_agent",
      title: "24/7 Coverage",
      text: "Available around the clock for lockouts, key replacements, and urgent locksmith needs in all our service areas.",
      color: "#F58600ff",
    },
  ];

  return (
    <section className="relative bg-[rgba(249,237,237,1)] text-[#0C0000] py-20 md:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4
                         bg-gradient-to-r from-brand-orange via-brand-crimson to-brand-orange-fire bg-clip-text text-transparent">
            Service Area Overview
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-[#0C0000]">
            Key Kings Locksmith provides fast, reliable, and professional locksmith services across multiple cities in South Carolina.  
            From emergency lockouts to residential, commercial, and automotive solutions, we are ready to assist you wherever you are.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent backdrop-blur-md rounded-3xl p-6 border-2 border-[#FD9A00] shadow-lg"
            >
              <span className="material-icons text-4xl mb-4" style={{ color: feature.color }}>
                {feature.icon}
              </span>
              <h3 className="text-xl font-bold mb-2" style={{ color: feature.color }}>
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
