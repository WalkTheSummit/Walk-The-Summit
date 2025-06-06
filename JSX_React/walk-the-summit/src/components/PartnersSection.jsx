const PartnersSection = () => {
  const partners = [
    {
      category: "Educational Institutions",
      items: [
        {
          name: "Mountain Valley School",
          logo: "/assets/images/partner-edu-1.png",
          description: "Leading K-12 education institution in the Himalayas"
        },
        {
          name: "Digital Learning Institute",
          logo: "/assets/images/partner-edu-2.png",
          description: "Provider of digital education resources"
        }
      ]
    },
    {
      category: "NGOs & Foundations",
      items: [
        {
          name: "Himalayan Education Trust",
          logo: "/assets/images/partner-ngo-1.png",
          description: "Supporting education initiatives in remote areas"
        },
        {
          name: "Global Learning Foundation",
          logo: "/assets/images/partner-ngo-2.png",
          description: "International education development organization"
        }
      ]
    },
    {
      category: "Corporate Partners",
      items: [
        {
          name: "Tech Solutions Inc.",
          logo: "/assets/images/partner-corp-1.png",
          description: "Technology and infrastructure support"
        },
        {
          name: "Education First",
          logo: "/assets/images/partner-corp-2.png",
          description: "Educational resources and training provider"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to create lasting impact in
            education across the Himalayas.
          </p>
        </div>

        {/* Partners Categories */}
        <div className="space-y-16">
          {partners.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((partner, pIndex) => (
                  <div
                    key={pIndex}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h4>
                        <p className="text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Banner */}
        <div className="mt-16 bg-black text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Become a Partner
          </h3>
          <p className="text-lg mb-6">
            Join us in our mission to transform education in the Himalayas. Together,
            we can create lasting change.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/about#partnership"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-black mb-2">20+</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">5+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">$2M+</div>
            <div className="text-gray-600">Resources Mobilized</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600">Joint Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
