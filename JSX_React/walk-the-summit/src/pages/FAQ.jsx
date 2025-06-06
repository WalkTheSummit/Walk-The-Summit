import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Walk The Summit's mission?",
      answer: "Walk The Summit is dedicated to transforming education in remote Himalayan villages by providing quality education, building sustainable learning environments, and empowering local communities."
    },
    {
      question: "How can I get involved?",
      answer: "There are several ways to get involved: volunteer in our teaching programs, make a donation, partner with us as an organization, or spread awareness about our cause through social media and your networks."
    },
    {
      question: "Where does my donation go?",
      answer: "100% of your donation goes directly to our educational programs, including building and maintaining schools, providing educational materials, training teachers, and implementing digital learning solutions."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, Walk The Summit is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law."
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes, we offer various remote volunteering opportunities, including online teaching, curriculum development, and administrative support. Contact us to learn more about current remote positions."
    },
    {
      question: "How do you measure impact?",
      answer: "We track various metrics including student enrollment rates, academic performance, teacher training completion, and community engagement. We regularly publish impact reports and share success stories."
    },
    {
      question: "Do you work with local communities?",
      answer: "Yes, we believe in community-driven development. We work closely with local leaders, teachers, and families to ensure our programs meet their needs and create sustainable change."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently work in remote villages across the Himalayan region, with a focus on areas where access to quality education is limited due to geographical and economic barriers."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our work and how you can help.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-200 ${
                      openIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Please contact us directly
              and we'll be happy to help.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/about"
                className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-black transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About Us
                </h3>
                <p className="text-gray-600">Learn more about our mission</p>
              </a>
              <a
                href="/donate"
                className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-black transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Donate
                </h3>
                <p className="text-gray-600">Support our cause</p>
              </a>
              <a
                href="/contact"
                className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-black transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600">Get in touch with us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
