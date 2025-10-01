import React from "react";

export default function AboutPage() {
  const about = {
  title: "About Key Kings Locksmith",
  subtitle: "Anderson Trusted Mobile Locksmith Service",
  description:
    "Learn more about Key Kings Locksmith — your reliable Anderson locksmith company. As a licensed locksmith in Anderson, we provide fast, professional, and affordable mobile locksmith service for homes, businesses, and vehicles across the community.",
  backgroundImage: "./images/about-us.webp",
  breadcrumbs: [
    { name: "Home", url: "/index" },
    { name: "Locksmith About", url: "/about" },
  ],
  ourStory: {
    header: "Our Story",
    subheader:
      "Learn about who we are, our mission, and our vision at Key Kings Locksmith.",
    image: "../images/company-story.jpg",
    text: "Founded in South Bend, Key Kings Locksmith has been providing fast, reliable, and professional mobile locksmith services for homes, businesses, and vehicles. Our goal is to deliver security and peace of mind to our community with integrity and expertise.",
  },
  mission: {
    title: "Our Mission",
    icon: "flag",
    text: "To provide fast, professional, and trustworthy locksmith services that ensure the safety and security of our clients at all times.",
  },
  vision: {
    title: "Our Vision",
    icon: "visibility",
    text: "To be the most trusted mobile locksmith company in the region, recognized for exceptional service, reliability, and innovation in security solutions.",
  },
  certifications: {
    header: "Our Certifications",
    image: "../images/certifications.jpg",
    title: "Licensed & Certified",
    text: "Our team is licensed, bonded, and insured. We have certifications in high-security, residential, and automotive locksmithing. Every technician is trained and recognized for professional and reliable service.",
  },
  trust: {
    header: "Why Trust Us",
    subheader:
      "Our clients trust us because we prioritize professionalism, safety, and community impact.",
    cards: [
      {
        title: "Professional Memberships",
        icon: "group",
        text: "We are active members of recognized locksmith associations ensuring best practices and ethical service.",
      },
      {
        title: "Fully Insured",
        icon: "verified",
        text: "Our company is licensed and insured, protecting both our clients and team during all projects.",
      },
      {
        title: "Positive Community Impact",
        icon: "emoji_events",
        text: "We contribute to our local community by supporting security awareness and local initiatives.",
      },
      {
        title: "Awards & Recognition",
        icon: "stars",
        text: "Recognized for excellence in locksmith services, our team has received awards for outstanding professionalism.",
      },
    ],
  },
};

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${about.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <nav className="text-sm mb-6 bg-transparent">
            <ol className="flex items-center justify-center space-x-2 text-gray-400">
              {about.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li>
                    <a
                      href={crumb.url}
                      className="hover:underline hover:text-[#FD9A00] transition"
                    >
                      {crumb.name}
                    </a>
                  </li>
                  {index < about.breadcrumbs.length - 1 && (
                    <li>
                      <span className="mx-1 text-gray-500">/</span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {about.title}
            <span className="text-[#FD9A00] block mt-2">{about.subtitle}</span>
          </h1>

          <p className="text-lg text-gray-100 leading-relaxed">
            {about.description}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative bg-[rgba(249,237,237,1)] py-20 px-6 md:px-12 text-[#3B2F2F]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0C0000]">
              Our <span className="text-[#FD9A00]">{about.ourStory.header}</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {about.ourStory.subheader}
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#FD9A00] shadow-lg flex flex-col md:flex-row items-center gap-6 transition-transform hover:scale-105 duration-300">
            <img
              src={about.ourStory.image}
              alt="Company Story"
              className="w-full md:w-1/3 rounded-2xl shadow-md"
            />
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-semibold text-[#FD9A00]">
                {about.ourStory.header}
              </h3>
              <p className="text-gray-700 leading-relaxed">{about.ourStory.text}</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#FD9A00] shadow-lg text-center transition-transform hover:scale-105 duration-300">
              <span className="material-icons text-4xl text-[#FD9A00] mb-4">
                {about.mission.icon}
              </span>
              <h4 className="text-2xl font-semibold text-[#FD9A00] mb-2">
                {about.mission.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{about.mission.text}</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#FD9A00] shadow-lg text-center transition-transform hover:scale-105 duration-300">
              <span className="material-icons text-4xl text-[#FD9A00] mb-4">
                {about.vision.icon}
              </span>
              <h4 className="text-2xl font-semibold text-[#FD9A00] mb-2">
                {about.vision.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{about.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative bg-[rgba(249,237,237,1)] py-20 px-6 md:px-12 text-[#0C0000]">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
            {about.certifications.header.split(" ")[0]}{" "}
            <span className="text-[#FD9A00]">
              {about.certifications.header.split(" ")[1]}
            </span>
          </h2>
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#FD9A00] shadow-lg flex flex-col md:flex-row items-center gap-6 transition-transform hover:scale-105 duration-300">
            <img
              src={about.certifications.image}
              alt="Certifications"
              className="w-full md:w-1/3 rounded-2xl shadow-md"
            />
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-semibold text-[#FD9A00]">
                {about.certifications.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{about.certifications.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative bg-[rgba(249,237,237,1)] py-20 px-6 md:px-12 text-[#0C0000]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {about.trust.header.split(" ")[0]}{" "}
              <span className="text-[#FD9A00]">
                {about.trust.header.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {about.trust.subheader}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {about.trust.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#FD9A00] shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
              >
                <span className="material-icons text-4xl text-[#FD9A00] mb-4">{card.icon}</span>
                <h4 className="text-2xl font-semibold text-[#FD9A00] mb-2">{card.title}</h4>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
