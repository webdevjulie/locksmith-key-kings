import React, { useState } from "react";

// Page header content as a const
const pageHeader = {
    title: "What Our Clients Say",
    subtitle: "Trusted Locksmith Service Feedback",
    description: `Hear directly from our satisfied customers. Discover why Key Kings Locksmith is trusted for fast, reliable, and professional locksmith services in Anderson for homes, businesses, and vehicles.`,
    backgroundImage: "./hero/reviews.webp",
    breadcrumb: [
        { name: "Home", link: "/index" },
        { name: "Reviews" }
    ]
};

const reviews = [
    { id: 1, initials: "PM", name: "Thomas P.", location: "Port St. Lucie, FL", text: "Left my keys in the trunk while shopping. They came right away and helped me get back into my car safely.", stars: 5, service: "Car Lockout" },
    { id: 2, initials: "AJ", name: "Robert K.", location: "Fort Pierce, FL", text: "Professional car lockout service when I accidentally left my keys inside. Fast response and great customer service. Had my car key replaced. Quick service and fair pricing. The new key works perfectly!", stars: 5, service: "Car Lockout" },
    { id: 3, initials: "MS", name: "Maria S.", location: "Stuart, FL", text: "Excellent service when I got locked out of my vehicle at night. They arrived quickly and were very professional.", stars: 5, service: "House Lockout" },
    { id: 4, initials: "AR", name: "Amanda R.", location: "Fort Pierce, FL", text: "Locked my keys in the car at work. Their quick response saved my day. Very reliable service!", stars: 5, service: "Business Lockout" },
    { id: 5, initials: "MB", name: "Michael B.", location: "Stuart, FL", text: "Fast and efficient car lockout service. They got me back in my car without any damage. Highly recommend!", stars: 5, service: "Lock Replacement" },
    { id: 6, initials: "JM", name: "Jennifer M.", location: "Port St. Lucie, FL", text: "Got locked out of my car at the mall. They arrived within 15 minutes and got me back in my car quickly!", stars: 5, service: "Emergency Service" },
    { id: 7, initials: "KL", name: "Kevin L.", location: "Anderson, SC", text: "Amazing residential lockout service. Quick, professional, and very friendly.", stars: 5, service: "House Lockout" },
    { id: 8, initials: "SR", name: "Samantha R.", location: "Anderson, SC", text: "Needed a key fob replacement urgently. They came to my location and programmed it in minutes.", stars: 5, service: "Key Fob Replacement" },
    { id: 9, initials: "BD", name: "Brian D.", location: "Greenville, SC", text: "Highly recommend for commercial lockouts. Fast, efficient, and very professional.", stars: 5, service: "Business Lockout" },
    { id: 10, initials: "LM", name: "Laura M.", location: "Anderson, SC", text: "Installed smart locks in my home. Excellent service and very knowledgeable staff.", stars: 5, service: "Smart Lock Installation" },
    { id: 11, initials: "JP", name: "John P.", location: "Anderson, SC", text: "Replaced broken ignition on my car. On-site service was fast and hassle-free.", stars: 5, service: "Ignition Repair" },
    { id: 12, initials: "EK", name: "Emily K.", location: "Greenville, SC", text: "Duplicate keys made in minutes. Efficient, friendly, and affordable.", stars: 5, service: "Key Duplication" },
    { id: 13, initials: "TS", name: "Tony S.", location: "Anderson, SC", text: "Emergency lockout on a holiday. They arrived immediately and saved the day!", stars: 5, service: "Emergency Service" },
    { id: 14, initials: "RN", name: "Rachel N.", location: "Anderson, SC", text: "Commercial lock installation was smooth and professional. Great team!", stars: 5, service: "Commercial Lock Installation" },
    { id: 15, initials: "WM", name: "William M.", location: "Greenville, SC", text: "Car key replacement done quickly on-site. Very happy with the service.", stars: 5, service: "Car Key Replacement" },
    { id: 16, initials: "CS", name: "Cynthia S.", location: "Anderson, SC", text: "Fast and friendly service. Helped me when I locked myself out of my house late at night.", stars: 5, service: "House Lockout" },
    { id: 17, initials: "DK", name: "David K.", location: "Greenville, SC", text: "Key extraction from broken lock was painless. Professional and quick.", stars: 5, service: "Key Extraction" },
    { id: 18, initials: "AL", name: "Alice L.", location: "Anderson, SC", text: "Installed electronic locks in my office. Reliable and knowledgeable staff.", stars: 5, service: "Electronic Locks" },
    { id: 19, initials: "CM", name: "Chris M.", location: "Anderson, SC", text: "Mobile locksmith services were convenient and professional. Highly recommended.", stars: 5, service: "Mobile Service" },
    { id: 20, initials: "PH", name: "Patricia H.", location: "Greenville, SC", text: "Fast emergency lockout service. Arrived in less than 20 minutes and very professional.", stars: 5, service: "Emergency Service" },
    { id: 21, initials: "RL", name: "Ryan L.", location: "Anderson, SC", text: "Professional and fast key duplication. Great service!", stars: 5, service: "Key Duplication" },
    { id: 22, initials: "SN", name: "Sophia N.", location: "Greenville, SC", text: "Quick response for house lockout. Staff was friendly and efficient.", stars: 5, service: "House Lockout" },
    { id: 23, initials: "JT", name: "James T.", location: "Anderson, SC", text: "Installed smart lock system perfectly. Very knowledgeable team.", stars: 5, service: "Smart Lock Installation" },
    { id: 24, initials: "LR", name: "Linda R.", location: "Greenville, SC", text: "Emergency car lockout handled quickly. Highly recommend their services.", stars: 5, service: "Car Lockout" }
];


export default function ReviewsPage() {
    const [showMore, setShowMore] = useState(false);

    // Show first 12 by default, then next 12 when showMore is true
    const initialCount = 12;
    const visibleReviews = showMore
        ? reviews.slice(0, initialCount * 2) // first 24, but your array has 20, so it will show all remaining
        : reviews.slice(0, initialCount);

    return (
        <div>
        {/* Page Header */}
        <section
            className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center px-6"
            style={{ backgroundImage: `url(${pageHeader.backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 bg-transparent">
                <ol className="flex items-center justify-center space-x-2 text-gray-400">
                {pageHeader.breadcrumb.map((crumb, idx) => (
                    <li key={idx}>
                    {crumb.link ? (
                        <>
                        <a href={crumb.link} className="hover:underline hover:text-[#FD9A00] transition">{crumb.name}</a>
                        {idx < pageHeader.breadcrumb.length - 1 && <span className="mx-1 text-gray-500">/</span>}
                        </>
                    ) : (
                        <span className="text-gray-200">{crumb.name}</span>
                    )}
                    </li>
                ))}
                </ol>
            </nav>

            {/* Header Content */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                {pageHeader.title}
                <span className="text-[#FD9A00] block mt-2">
                {pageHeader.subtitle}
                </span>
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
                {pageHeader.description}
            </p>
            </div>
        </section>

        {/* Customer Reviews */}
        <section className="bg-[rgba(249,237,237,1)] py-20 px-4 sm:px-6">
            <div className="container mx-auto text-center max-w-6xl">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-brand-orange via-brand-crimson to-brand-orange-fire bg-clip-text text-transparent">
                What our Clients Say
                </h2>
                <p className="text-brand-dark text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Don't just take our word — see what our customers say.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleReviews.map((review) => (
                <div key={review.id} className="review-card p-[3px] rounded-3xl bg-gradient-to-r from-[#FD9A00] to-[#FD9A00] flex">
                    <div className="bg-[#F5F5F5] p-6 rounded-3xl shadow-xl w-full flex flex-col justify-between h-[28rem]">
                    <div>
                        <div className="flex items-center mb-4">
                        <div className="avatar w-14 h-14 rounded-full bg-[#FD9A00] flex items-center justify-center mr-4 font-bold text-white text-lg shadow-lg">
                            {review.initials}
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold text-[#1C1C1C]">{review.name}</p>
                            <p className="text-sm text-[#666666] flex items-center mt-1">
                            <span className="material-icons text-sm mr-2" style={{ color: '#FD9A00' }}>location_on</span>
                            {review.location}
                            </p>
                        </div>
                        </div>
                        <p className="text-[#1C1C1C] leading-relaxed text-left text-base italic">
                        {review.text}
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-1">
                        {Array.from({ length: review.stars }).map((_, i) => (
                            <span key={i} className="material-icons" style={{ color: '#FD9A00', fontSize: '1.125rem' }}>star</span>
                        ))}
                        </div>
                        <div className="service-tag bg-[#FFF3E0] px-4 py-2 rounded-full">
                        <span className="font-semibold text-sm" style={{ color: '#FD9A00' }}>{review.service}</span>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

                <div className="text-center mt-12">
                    {reviews.length > initialCount && (
                        <button
                        onClick={() => setShowMore(!showMore)}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                        {showMore ? "Show Less Reviews" : "Show More Reviews"}
                        <span className="material-icons text-lg">
                            {showMore ? "arrow_upward" : "arrow_downward"}
                        </span>
                        </button>
                    )}
                    </div>

            </div>
        </section>
        </div>
    );
}