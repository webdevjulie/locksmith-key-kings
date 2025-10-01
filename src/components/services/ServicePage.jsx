import React from "react";

export default function ServicePage() {
  const servicePage = {
    title: "Locksmith Services",
    subtitle: "by Key Kings Locksmith",
    backgroundImage: "/images/servicess.webp",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Locksmith Services" }
    ],
    description: `
      Fast, professional, and affordable <strong>locksmith services by Key Kings Locksmith</strong> — 
      covering <em>emergency lockouts</em>, <em>residential security</em>, <em>commercial solutions</em>, 
      and <em>automotive locksmith needs</em>.
    `,
    form: {
      heading: "Book a Locksmith Now",
      buttonText: "Request Service",
      fields: [
        { type: "text", id: "name", name: "name", label: "Your Name *", required: true },
        { type: "tel", id: "phone", name: "phone", label: "Phone Number *", required: true },
        { type: "text", id: "address", name: "address", label: "Service Address *", required: true },
        { type: "select", id: "service_type", name: "service_type", label: "Service Type *", required: true, options: [
          "Car Lockout","House Lockout","Business Lockout","Storage Unit Lockout","Lock Replacement",
          "Lock Rekey","Lock Repair","Gate Locks","Commercial Lock Replacement","Commercial Rekey",
          "Emergency Exit Devices","Master Key Systems","Access Control","Car Key Replacement",
          "Car Key Duplicate","Car Key Cutting","Key Fob Programming","Ignition Lock Cylinder"
        ]},
        { type: "select", id: "needed", name: "needed", label: "When Needed? *", required: true, options: [
          "ASAP","Same Day","Within a few days","In a few weeks","Other"
        ]},
        { type: "textarea", id: "notes", name: "notes", label: "Additional Notes" }
      ]
    }
  };

  return (
    <section
      className="relative bg-cover bg-center text-white py-16 md:py-20"
      style={{ backgroundImage: `url('${servicePage.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm bg-transparent mt-6 relative z-10">
          <ol className="flex items-center space-x-2 text-gray-400">
            {servicePage.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <li><span className="mx-1 text-gray-500">/</span></li>}
                <li className={crumb.url ? "hover:underline hover:text-[#FD9A00] transition" : "text-gray-200"}>
                  {crumb.url ? <a href={crumb.url}>{crumb.name}</a> : crumb.name}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headline & Description */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
              {servicePage.title}
              <span className="text-[#FD9A00] block mt-2">{servicePage.subtitle}</span>
            </h1>
            <p
              className="text-lg text-gray-100 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: servicePage.description }}
            ></p>
          </div>

          {/* Right: Booking Form */}
          <div className="flex-1 relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-10 text-[#1C1C1C] w-full max-w-xl mt-12 md:mt-0 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-[#1C1C1C]">
              Book a <span className="text-[#FD9A00]">Locksmith</span> Now
            </h3>

            <form id="booking-form" className="space-y-6" noValidate>
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {servicePage.form.fields
                    .filter(f => f.id === "name" || f.id === "phone")
                    .map(field => (
                        <div className="relative" key={field.id}>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            placeholder=" "
                            required={field.required}
                            className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                        />
                        <label
                            htmlFor={field.id}
                            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                        >
                            {field.label}
                        </label>
                        </div>
                    ))}
                </div>

                {/* Address */}
                <div className="relative">
                    {servicePage.form.fields
                    .filter(f => f.id === "address")
                    .map(field => (
                        <div className="relative" key={field.id}>
                        <input
                            type="text"
                            id={field.id}
                            name={field.name}
                            placeholder=" "
                            required={field.required}
                            className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                        />
                        <label
                            htmlFor={field.id}
                            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                        >
                            {field.label}
                        </label>
                        </div>
                    ))}
                </div>

                {/* Service Type & When Needed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {servicePage.form.fields
                    .filter(f => f.id === "service_type" || f.id === "needed")
                    .map(field => (
                        <div className="relative" key={field.id}>
                        <select
                            id={field.id}
                            name={field.name}
                            required={field.required}
                            className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-white focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition"
                            defaultValue=""
                        >
                            <option value="" disabled>
                            Select {field.label.replace("*", "")}
                            </option>
                            {field.options.map(opt => (
                            <option value={opt} key={opt}>{opt}</option>
                            ))}
                        </select>
                        <label htmlFor={field.id} className="block mt-1 text-xs text-gray-500">
                            {field.label}
                        </label>
                        </div>
                    ))}
                </div>

                {/* Additional Notes */}
                {servicePage.form.fields
                    .filter(f => f.type === "textarea")
                    .map(field => (
                    <div className="relative" key={field.id}>
                        <textarea
                        id={field.id}
                        name={field.name}
                        rows="2"
                        placeholder=" "
                        className="peer w-full border rounded-xl p-3 text-sm shadow-sm bg-transparent focus:ring-2 focus:ring-[#FD9A00] focus:border-[#FD9A00] focus:outline-none transition placeholder-transparent"
                        ></textarea>
                        <label
                        htmlFor={field.id}
                        className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#FD9A00] bg-white px-1"
                        >
                        {field.label}
                        </label>
                    </div>
                    ))}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#FD9A00] to-[#F9AE19] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-lg tracking-wide"
                >
                    <span className="material-icons text-xl animate-pulse">send</span>
                    {servicePage.form.buttonText}
                </button>
                </form>

          </div>
        </div>
      </div>
    </section>
  );
}
