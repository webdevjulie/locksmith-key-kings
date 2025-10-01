// src/data/heroBookingData.js
export const heroBookingData = {
  heading: [
    { text: "Professional", gradient: "from-brand-crimson via-brand-orange to-brand-orange-hover" },
    { text: "Locksmith Services", color: "text-white" },
    { text: "in Anderson, SC", color: "text-brand-orange font-bold" }
  ],
  subtext: {
    icon: "support_agent",
    text: "24/7 Emergency • Licensed & Insured",
    bgGradient: "from-brand-orange to-brand-orange-hover"
  },
  ctaButtons: [
    {
      type: "call",
      text: "Call (864) 900-9597",
      phone: "+18649009597",
      icon: "call",
      style: "bg-gradient-to-r from-brand-orange to-brand-orange-hover hover:from-brand-orange-hover hover:to-brand-crimson"
    },
    {
      type: "link",
      text: "Our Services",
      link: "/services",
      icon: "arrow_forward",
      style: "border-2 border-brand-orange hover:bg-gradient-to-r hover:from-brand-orange hover:to-brand-orange-hover hover:border-transparent"
    }
  ],
  trustBadges: [
    { icon: "verified", text: "Licensed & Insured" },
    { icon: "schedule", text: "Available 24/7" },
    { icon: "speed", text: "Fast Response Time" }
  ],
  form: {
    heading: "Book a Locksmith",
    subtext: "Get response within 15 minutes",
    fields: [
      { id: "name", name: "name", type: "text", placeholder: "Your Name", required: true },
      { id: "phone", name: "phone", type: "tel", placeholder: "Phone Number", required: true },
      { id: "address", name: "address", type: "text", placeholder: "Service Address", required: true },
      {
        id: "service_type",
        name: "service_type",
        type: "select",
        placeholder: "Select Service Type",
        required: true,
        options: [
          "Car Lockout", "House Lockout", "Business Lockout", "Storage Unit Lockout",
          "Lock Replacement", "Lock Rekey", "Lock Repair", "Gate Locks",
          "Commercial Lock Replacement", "Commercial Rekey", "Emergency Exit Devices",
          "Master Key Systems", "Access Control", "Car Key Replacement",
          "Car Key Duplicate", "Car Key Cutting", "Key Fob Programming",
          "Ignition Lock Cylinder"
        ]
      },
      {
        id: "needed",
        name: "needed",
        type: "select",
        placeholder: "When do you need service?",
        required: true,
        options: ["ASAP - Emergency", "Within 2 hours", "Same Day", "Tomorrow", "This Week"]
      },
      { id: "notes", name: "notes", type: "textarea", placeholder: "Additional Notes (Optional)", required: false }
    ],
    submit: {
      text: "Request Service Now",
      icon: "send"
    }
  }
};
