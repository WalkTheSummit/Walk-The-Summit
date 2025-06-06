const AwardsSection = () => {
  const awards = [
    {
      year: "2023",
      title: "Excellence in Education",
      organization: "Global Education Initiative",
      description: "Recognized for outstanding contribution to rural education in the Himalayas.",
      image: "/assets/images/award-1.jpg"
    },
    {
      year: "2022",
      title: "Community Impact Award",
      organization: "Social Change Foundation",
      description: "Awarded for creating sustainable educational infrastructure in remote areas.",
      image: "/assets/images/award-2.jpg"
    },
    {
      year: "2022",
      title: "Youth Leadership Award",
      organization: "International Youth Council",
      description: "Honored for exemplary student-led initiatives in education.",
      image: "/assets/images/award-3.jpg"
    },
    {
      year: "2021",
      title: "Innovation in Education",
      organization: "EdTech Summit Asia",
      description: "Recognized for implementing innovative digital learning solutions.",
      image: "/assets/images/award-4.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to transforming education has been recognized by leading
            organizations worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Award Image */}
                <div className="md:w-2/5">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "200px" }}
                  />
                </div>

                {/* Award Content */}
                <div className="md:w-3/5 p-6">
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <div className="text-md font-medium text-black mb-3">
                    {award.organization}
                  </div>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 bg-black text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Making a Difference That Matters
          </h3>
          <p className="text-lg mb-6">
            Our awards reflect the impact we're making in transforming education
            in the Himalayas. But our real reward is seeing the smiles on
            children's faces as they learn and grow.
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            Learn More About Our Impact
          </a>
        </div>

        {/* Partners Recognition */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
            {/* Add partner logos here */}
            <img
              src="/assets/images/partner-1.png"
              alt="Partner 1"
              className="h-12 object-contain mx-auto"
            />
            <img
              src="/assets/images/partner-2.png"
              alt="Partner 2"
              className="h-12 object-contain mx-auto"
            />
            <img
              src="/assets/images/partner-3.png"
              alt="Partner 3"
              className="h-12 object-contain mx-auto"
            />
            <img
              src="/assets/images/partner-4.png"
              alt="Partner 4"
              className="h-12 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
