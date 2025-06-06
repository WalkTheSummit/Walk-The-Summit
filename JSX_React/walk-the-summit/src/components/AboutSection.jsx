const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Empowering Education in the Himalayas
            </h2>
            <p className="text-lg text-gray-700">
              Walk The Summit is a student-led initiative dedicated to transforming
              education in remote Himalayan villages. Our mission is to bridge the
              educational gap and create opportunities for children who face
              geographical and economic barriers to quality education.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Student-Led Initiative
                  </h3>
                  <p className="text-gray-700">
                    Run by students who understand the importance of education and
                    are passionate about making a difference.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Local Impact
                  </h3>
                  <p className="text-gray-700">
                    Working directly with communities to understand their needs and
                    implement sustainable solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Holistic Approach
                  </h3>
                  <p className="text-gray-700">
                    Focusing on education while addressing related challenges like
                    infrastructure and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/assets/images/about-1.jpg"
                alt="Students learning"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="/assets/images/about-2.jpg"
                alt="School building"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/assets/images/about-3.jpg"
                alt="Teaching session"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/assets/images/about-4.jpg"
                alt="Community engagement"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-black">1000+</div>
            <div className="text-gray-600 mt-2">Students Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black">15+</div>
            <div className="text-gray-600 mt-2">Villages Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black">50+</div>
            <div className="text-gray-600 mt-2">Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black">5+</div>
            <div className="text-gray-600 mt-2">Years of Impact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
