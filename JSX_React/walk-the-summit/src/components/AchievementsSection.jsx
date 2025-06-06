const AchievementsSection = () => {
  const achievements = [
    {
      title: "Education Access",
      description: "Established learning centers in 15+ remote villages, providing quality education to over 1000 children.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      title: "Infrastructure Development",
      description: "Built and renovated 10 school buildings, providing safe and conducive learning environments.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Teacher Training",
      description: "Trained 50+ local teachers in modern teaching methodologies and digital education tools.",
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
    },
    {
      title: "Digital Learning",
      description: "Implemented digital learning programs in 8 schools, bridging the technology gap.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through dedication and community support, we've made significant strides
            in improving education access in the Himalayas.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-black mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Visualization */}
        <div className="mt-20">
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Growing Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">100%</div>
                <div className="text-gray-600">Enrollment Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">85%</div>
                <div className="text-gray-600">Student Retention</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">90%</div>
                <div className="text-gray-600">Community Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">75%</div>
                <div className="text-gray-600">Digital Literacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
