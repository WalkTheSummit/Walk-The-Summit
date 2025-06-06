const MediaSection = () => {
  const mediaItems = [
    {
      type: "news",
      title: "Walk The Summit Reaches 1000+ Students Milestone",
      source: "Education Weekly",
      date: "December 2023",
      image: "/assets/images/news-1.jpg",
      link: "#"
    },
    {
      type: "video",
      title: "A Day in the Life: Teaching in the Himalayas",
      duration: "5:32",
      thumbnail: "/assets/images/video-1.jpg",
      link: "#"
    },
    {
      type: "photo",
      title: "New Learning Center Opening Ceremony",
      location: "Mustang Valley",
      image: "/assets/images/photo-1.jpg",
      link: "#"
    },
    {
      type: "news",
      title: "Digital Learning Initiative Transforms Rural Education",
      source: "Tech for Good",
      date: "November 2023",
      image: "/assets/images/news-2.jpg",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest activities, news coverage, and stories from
            the field.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Media Image/Thumbnail */}
              <div className="relative">
                <img
                  src={item.image || item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <span className="absolute bottom-2 right-2 text-white text-sm">
                      {item.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-semibold text-gray-500 uppercase">
                    {item.type}
                  </span>
                  {item.source && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-gray-500">{item.source}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                )}
                {item.location && (
                  <p className="text-sm text-gray-600 mb-2">
                    📍 {item.location}
                  </p>
                )}
                <a
                  href={item.link}
                  className="text-black font-medium hover:text-gray-700 transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Press Kit Banner */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Press & Media Kit
          </h3>
          <p className="text-gray-600 mb-6">
            Download our press kit for high-resolution logos, photos, and
            information about our organization.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Download Press Kit
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Follow Our Journey
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
