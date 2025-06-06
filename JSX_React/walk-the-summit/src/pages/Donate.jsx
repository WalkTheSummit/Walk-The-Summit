const Donate = () => {
  const donationOptions = [
    {
      amount: 25,
      impact: "Provides school supplies for one student",
      frequency: "one-time"
    },
    {
      amount: 50,
      impact: "Supports teacher training programs",
      frequency: "one-time"
    },
    {
      amount: 100,
      impact: "Funds digital learning resources",
      frequency: "one-time"
    },
    {
      amount: 500,
      impact: "Helps build classroom infrastructure",
      frequency: "one-time"
    }
  ];

  const monthlyOptions = [
    {
      amount: 10,
      impact: "Sponsors ongoing educational support",
      frequency: "monthly"
    },
    {
      amount: 25,
      impact: "Provides continuous learning materials",
      frequency: "monthly"
    },
    {
      amount: 50,
      impact: "Supports sustainable program development",
      frequency: "monthly"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Make a Difference
            </h1>
            <p className="text-xl text-gray-300">
              Your donation helps us provide quality education to children in remote
              Himalayan villages.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Options */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* One-time Donations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                One-time Donation
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {donationOptions.map((option, index) => (
                  <div
                    key={index}
                    className="border-2 border-black rounded-lg p-6 text-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <div className="text-3xl font-bold mb-4">
                      ${option.amount}
                    </div>
                    <p className="text-sm mb-4">{option.impact}</p>
                    <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                      Donate
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Donations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Monthly Donation
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {monthlyOptions.map((option, index) => (
                  <div
                    key={index}
                    className="border-2 border-black rounded-lg p-6 text-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <div className="text-3xl font-bold mb-4">
                      ${option.amount}/mo
                    </div>
                    <p className="text-sm mb-4">{option.impact}</p>
                    <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                      Subscribe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Amount */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Custom Amount
            </h2>
            <div className="mb-8">
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-3 text-xl border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button className="px-8 py-3 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition-colors duration-200">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Your Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-4">100%</div>
                <p className="text-gray-600">
                  of your donation goes directly to educational programs
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-4">1000+</div>
                <p className="text-gray-600">
                  students benefiting from donor support
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-4">15+</div>
                <p className="text-gray-600">
                  villages reached through your generosity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Information */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tax Deductible
            </h2>
            <p className="text-gray-600 mb-8">
              Walk The Summit is a registered 501(c)(3) nonprofit organization.
              Your donation is tax-deductible to the extent allowed by law.
            </p>
            <p className="text-sm text-gray-500">
              Tax ID: XX-XXXXXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
