// footer.js
export const contacts = [
  { type: "Phone", value: "864-900-9597", subtitle: "Available 24/7", icon: "call" },
  { type: "Email", value: "keykingslocksmithsc@gmail.com", subtitle: "Quick response guaranteed", icon: "email" },
  { type: "Address", value: "4105 Liberty Highway Unit B, Anderson SC 29621", subtitle: "Mobile service available", icon: "place" }
];

export const services = [
  { name: "Residential Locksmith", icon: "home", url: "../../sevices/residential-locksmith" },
  { name: "Commercial Locksmith", icon: "business", url: "/commercial-locksmith" },
  { name: "Automotive Locksmith", icon: "directions_car", url: "/automotive-locksmith" },
  { name: "Emergency Locksmith", icon: "lock_clock", url: "/emergency-locksmith" }
];

export const serviceAreas = [
  'Anderson, SC', 'Greenville, SC', 'Clemson, SC', 'Easley, SC',
  'Pendleton, SC', 'Williamston, SC', 'Belton, SC', 'Liberty, SC',
  'Seneca, SC', 'Pickens, SC'
];

export const quickLinks = [
  { name: 'Services', icon: 'build', url: '/services' },
  { name: 'Service Areas', icon: 'map', url: '/service-areas' },
  { name: 'FAQ', icon: 'help', url: '/faq' },
  { name: 'Reviews', icon: 'star', url: '/reviews' },
  { name: 'About Us', icon: 'info', url: '/about' },
  { name: 'Contact', icon: 'article', url: '/contact' }
];

// Full SVG icons for proper rendering
export const socialLinks = [
  { 
    name: "TikTok", 
    url: "https://www.tiktok.com/@keykingslcksmt", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.523 0 10-4.477 10-10v-2h-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8v3l4-4-4-4v3z"/></svg>` 
  },
  { 
    name: "Facebook", 
    url: "https://www.facebook.com/keykingslcksmt", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/></svg>` 
  },
  { 
    name: "Instagram", 
    url: "https://www.instagram.com/keykingslcksmt", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.252-1.667 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.667-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.148-3.227 1.667-4.771 4.919-4.919 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.741 0 8.332.014 7.052.072 2.694.272.272 2.69.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.668.014 15.259 0 12 0z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4z"/><circle cx="18.406" cy="6.406" r="1.44"/></svg>` 
  },
  { 
    name: "X (Twitter)", 
    url: "https://x.com/keykingslcksmt", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733  .962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.906-2.062-1.472-3.404-1.472-2.574 0-4.658 2.084-4.658 4.658 0 .366.042.723.12 1.065C7.691 8.094 4.066 6.13 1.64 3.161c-.402.69-.633 1.49-.633 2.345 0 1.617.823 3.044 2.073 3.878-.764-.024-1.482-.234-2.11-.583v.06c0 2.26 1.607 4.146 3.741 4.573-.392.107-.805.164-1.231.164-.301 0-.593-.029-.878-.084.594 1.855 2.315 3.206 4.355 3.243-1.595 1.25-3.604 1.994-5.789 1.994-.376 0-.747-.022-1.114-.065 2.062 1.322 4.513 2.092 7.146 2.092 8.578 0 13.26-7.104 13.26-13.26 0-.202-.004-.403-.013-.604.91-.657 1.698-1.48 2.323-2.415z"/></svg>` 
  },
  { 
    name: "YouTube", 
    url: "https://www.youtube.com/@keykingslcksmt", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>` 
  }
];

// Bottom Bar
export const bottomBar = {
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