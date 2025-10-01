import React from "react";

export default function Footer() {
  // Footer data
  const contacts = [
    { type: "Phone", value: "864-900-9597", subtitle: "Available 24/7", icon: "call" },
    { type: "Email", value: "keykingslocksmithsc@gmail.com", subtitle: "Quick response guaranteed", icon: "email" },
    { type: "Address", value: "4105 Liberty Highway Unit B, Anderson SC 29621", subtitle: "Mobile service available", icon: "place" }
  ];

  const services = [
    { name: "Residential Locksmith", icon: "home", url: "../../services/residential-locksmith" },
    { name: "Commercial Locksmith", icon: "business", url: "/commercial-locksmith" },
    { name: "Automotive Locksmith", icon: "directions_car", url: "/automotive-locksmith" },
    { name: "Emergency Locksmith", icon: "lock_clock", url: "/emergency-locksmith" }
  ];

  const serviceAreas = [
    'Anderson, SC', 'Greenville, SC', 'Clemson, SC', 'Easley, SC',
    'Pendleton, SC', 'Williamston, SC', 'Belton, SC', 'Liberty, SC',
    'Seneca, SC', 'Pickens, SC'
  ];

  const quickLinks = [
    { name: 'Services', icon: 'build', url: '/services' },
    { name: 'Service Areas', icon: 'map', url: '/service-areas' },
    { name: 'FAQ', icon: 'help', url: '/faq' },
    { name: 'Reviews', icon: 'star', url: '/reviews' },
    { name: 'About Us', icon: 'info', url: '/about' },
    { name: 'Contact', icon: 'article', url: '/contact' }
  ];

  const socialLinks = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@keykingslcksmt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-6 h-6">
          <path d="M128,0a128,128,0,1,0,128,128A128.14,128.14,0,0,0,128,0Zm49.46,114.77a48,48,0,0,1-48-48v91.59A44,44,0,1,1,85,107.86V131.6a68.05,68.05,0,1,0,92.46-16.83Z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/keykingslcksmt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/keykingslcksmt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.252-1.667 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.667-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.148-3.227 1.667-4.771 4.919-4.919 1.265-.058 1.645-.07 4.849-.07zm0 1.838c-3.142 0-3.513.012-4.754.068-2.17.099-3.06 1.022-3.158 3.158-.056 1.241-.068 1.612-.068 4.754s.012 3.513.068 4.754c.098 2.136.988 3.059 3.158 3.158 1.241.056 1.612.068 4.754.068s3.513-.012 4.754-.068c2.17-.099 3.06-1.022 3.158-3.158.056-1.241.068-1.612.068-4.754s-.012-3.513-.068-4.754c-.098-2.136-.988-3.059-3.158-3.158-1.241-.056-1.612-.068-4.754-.068zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.169 6.169 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 3.999-3.999A4.004 4.004 0 0 1 12 16zm6.406-10.562a1.44 1.44 0 1 1-1.44-1.44 1.442 1.442 0 0 1 1.44 1.44z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@keykingslcksmt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  const bottomBar = {
    madeWith: {
      text: "Made with",
      heart: "❤️",
      byText: "by",
      company: {
        name: "Gett Marketing",
        url: "https://gettmarketing.com/"
      }
    },
    copyright: "© 2025 Key Kings Locksmith. All rights reserved.",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Accessibility", url: "/accessibility-policy" }
    ]
  };

  return (
    <footer className="text-gray-300 pt-20 pb-10 px-6 md:px-12 border-t-4 border-brand-orange relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0C0000 0%, rgba(245, 134, 0, 1) 100%)" }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-brand-orange rounded-full"></div>
        <div className="absolute top-32 right-20 w-32 h-32 border border-brand-orange rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-brand-orange rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Contact Us */}
        <div className="space-y-6">
          <h4 className="text-white font-black text-lg mb-4 relative">
            Contact Us
            <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-orange-hover rounded-full"></div>
          </h4>
          <ul className="space-y-4">
            {contacts.map((contact, i) => (
              <li key={i} className="flex items-start group hover:translate-x-1 transition-transform duration-200">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md bg-gradient-to-br from-brand-orange to-brand-orange-hover flex-shrink-0">
                  <span className="material-icons text-white text-lg">{contact.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{contact.value}</p>
                  <p className="text-xs text-gray-400">{contact.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-white font-black text-xl mb-6 relative">
            Services
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-orange-hover rounded-full"></div>
          </h4>
          <ul className="space-y-3">
            {services.map((service, i) => (
              <li key={i}>
                <a href={service.url} className="flex items-center hover:text-brand-orange transition-all duration-300">
                  <span className="material-icons text-brand-orange text-lg mr-3">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div className="space-y-6">
          <h4 className="text-white font-black text-xl mb-6 relative">
            Service Areas
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-orange-hover rounded-full"></div>
          </h4>
          <ul className="space-y-3">
            {serviceAreas.map((area, i) => (
              <li key={i} className="flex items-center hover:text-brand-orange transition-all duration-300">
                <span className="material-icons text-brand-orange text-sm mr-2">location_on</span>
                <a href="/service-areas" className="text-white font-medium hover:text-brand-orange">{area}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links & Social */}
        <div className="space-y-6">
          <h4 className="text-white font-black text-xl mb-6 relative">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-orange-hover rounded-full"></div>
          </h4>
          <ul className="space-y-3 mb-8">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="flex items-center hover:text-brand-orange transition-all duration-300">
                  <span className="material-icons text-brand-orange text-lg mr-3">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-hover rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-16 pt-8 border-t-2 border-brand-orange/30 text-center">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 justify-center">
                <span className="text-gray-200">{bottomBar.madeWith.text}</span>
                <span className="text-yellow-400 animate-bounce text-xl">{bottomBar.madeWith.heart}</span>
                <span className="text-gray-200">{bottomBar.madeWith.byText}</span>
                <a 
                    href={bottomBar.madeWith.company.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-brand-orange to-brand-orange-hover bg-clip-text text-transparent font-bold"
                >
                    {bottomBar.madeWith.company.name}
                </a>
                </div>
                <p className="text-gray-300 font-medium">{bottomBar.copyright}</p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm mt-4">
                {bottomBar.links.map((link, i) => (
                    <a key={i} href={link.url} className="text-gray-200 hover:text-brand-orange">{link.name}</a>
                ))}
                </div>
            </div>
        </div>

    </footer>
  );
}
