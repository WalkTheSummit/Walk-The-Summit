const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300">
              Founded by students with a vision to transform education in the
              Himalayas, Walk The Summit has grown into a movement that's changing
              lives.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide quality education to children in remote Himalayan
                villages by building sustainable learning environments and
                empowering local communities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Establish and support educational centers in remote areas
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Train and empower local teachers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Implement innovative learning solutions
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A future where every child in the Himalayas has access to quality
                education, regardless of their geographical location or economic
                status.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    100% literacy in remote Himalayan villages
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Self-sustaining educational ecosystems
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-black mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Digital integration in remote education
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div
                  key={member}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={`/assets/images/team-${member}.jpg`}
                    alt={`Team Member ${member}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Team Member Name
                    </h3>
                    <p className="text-gray-600 mb-4">Position</p>
                    <p className="text-gray-600">
                      Brief description about the team member and their role in the
                      organization.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "Embracing new ideas and technologies to improve education",
                },
                {
                  title: "Sustainability",
                  description:
                    "Creating lasting impact through sustainable solutions",
                },
                {
                  title: "Empowerment",
                  description:
                    "Enabling communities to take charge of their future",
                },
                {
                  title: "Collaboration",
                  description:
                    "Working together with partners to achieve our goals",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 border-2 border-black rounded-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
