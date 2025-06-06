const GetInvolvedSection = () => {
  const ways = [
    {
      title: "Volunteer",
      description: "Join our teaching and community development programs in the Himalayas.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      link: "/volunteer"
    },
    {
      title: "Donate",
      description: "Support our mission with a one-time or monthly donation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      link: "/donate"
    },
    {
      title: "Partner",
      description: "Collaborate with us as an organization or institution.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      link: "/partner"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in our mission to transform education in the Himalayas. Every
            contribution makes a difference.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-black mb-6 flex justify-center">
                {way.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {way.title}
              </h3>
              <p className="text-gray-600 mb-6">{way.description}</p>
              <a
                href={way.link}
                className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for updates on our projects, impact
              stories, and ways to get involved.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex-grow max-w-md"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Reach out to us directly. We're here to help.
          </p>
          <div className="flex justify-center space-x-8">
            <div>
              <div className="text-lg font-semibold mb-2">Email</div>
              <a
                href="mailto:info@walkthesummit.org"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                info@walkthesummit.org
              </a>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Phone</div>
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
