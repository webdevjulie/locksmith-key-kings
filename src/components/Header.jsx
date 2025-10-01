// components/Header.jsx
import { useState, useEffect } from "react";

export default function HeaderPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // Track current URL path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const logo = {
    src: "../images/key-kings.jpeg",
    alt: "Key Kings Locksmith",
    link: "/",
    width: 12,
    height: 12
  };

  const navLinks = [
    { name: "Services", url: "/services", icon: "build" },
    { name: "Service Areas", url: "/service-areas", icon: "place" },
    { name: "FAQs", url: "/faq", icon: "help" },
    { name: "Reviews", url: "/reviews", icon: "star" },
    { name: "About", url: "/about", icon: "info" },
    { name: "Contact", url: "/contact", icon: "call" }
  ];

  const callInfo = {
    phone: "+18649009597",
    display: "(864) 900-9597"
  };

  const bookServiceLink = "/book-service";

  const linkClass = (linkUrl) =>
    `nav-link ${currentPath === linkUrl ? 'bg-brand-orange-light text-brand-orange font-bold' : ''}`;

  const mobileLinkClass = (linkUrl) =>
    `flex items-center px-3 py-3 rounded-lg transition-all duration-200 ${
      currentPath === linkUrl
        ? 'bg-brand-orange-light text-brand-orange font-bold'
        : 'text-gray-700 hover:bg-brand-orange-light hover:text-brand-orange'
    }`;

  return (
    <nav className="bg-white shadow-xl fixed top-0 w-full z-50 border-b-2 border-brand-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={logo.link} className="flex items-center group">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`w-${logo.width} h-${logo.height} object-contain rounded-xl group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.url} className={linkClass(link.url)}>
                {link.name}
              </a>
            ))}

            <div className="flex items-center space-x-3 ml-4">
              <a href={`tel:${callInfo.phone}`} className="flex items-center space-x-1 bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 animate-glow">
                <span className="material-icons">call</span>
                <span>Call {callInfo.display}</span>
              </a>
              <a href={bookServiceLink} className="flex items-center space-x-1 border-2 border-brand-orange text-brand-orange px-6 py-3 rounded-xl font-semibold hover:bg-brand-orange hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span className="material-icons">schedule</span>
                <span>Book Service</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-end w-full space-x-2">
            <a href={`tel:${callInfo.phone}`} className="flex items-center space-x-1 bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white px-3 py-2 rounded-lg font-semibold shadow-lg text-sm">
              <span className="material-icons text-base">call</span>
              <span>Call</span>
            </a>
            <a href={bookServiceLink} className="flex items-center space-x-1 border-2 border-brand-orange text-brand-orange px-3 py-2 rounded-lg font-semibold text-sm">
              <span className="material-icons text-base">schedule</span>
              <span>Book</span>
            </a>
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-brand-orange focus:outline-none p-2 rounded-lg hover:bg-brand-orange-light transition-colors duration-300"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-orange/20 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <a key={link.name} href={link.url} className={mobileLinkClass(link.url)}>
                <span className="material-icons mr-3">{link.icon}</span>
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href={`tel:${callInfo.phone}`} className="flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white py-3 rounded-xl font-semibold shadow-lg">
                <span className="material-icons">call</span>
                <span>Call {callInfo.display}</span>
              </a>
              <a href={bookServiceLink} className="flex items-center justify-center space-x-2 border-2 border-brand-orange text-brand-orange py-3 rounded-xl font-semibold">
                <span className="material-icons">schedule</span>
                <span>Book Service</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
