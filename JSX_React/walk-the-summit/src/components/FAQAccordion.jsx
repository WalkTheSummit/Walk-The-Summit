// import { useState } from "react";

// const FAQItem = ({ question, answer }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border-b pb-2">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full text-left font-medium text-lg flex justify-between items-center"
//       >
//         {question}
//         <span>{open ? "−" : "+"}</span>
//       </button>
//       {open && <p className="mt-2 text-gray-600">{answer}</p>}
//     </div>
//   );
// };

// const FAQAccordion = () => {
//   const faqList = x

//   return (
//     <section className="py-16 px-6 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
//       <div className="space-y-4">
//         {faqList.map((item, index) => (
//           <FAQItem key={index} question={item.question} answer={item.answer} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQAccordion;







import { useState } from "react";

const faqList = [
    {
      question: "What is Walk The Summit's mission?",
      answer:
        "Walk The Summit is dedicated to transforming the lives of children in remote Himalayan villages by providing them with education, resources, and opportunities that transcend the limitations of their local schools.",
    },
    {
      question: "How does Walk The Summit aim to achieve its mission?",
      answer:
        "By setting up educational infrastructure such as computer labs, providing access to Wi-Fi, and empowering children with essential 21st-century life skills.",
    },
    {
      question: "Why focus on remote Himalayan villages?",
      answer:
        "These areas often lack access to basic educational resources and opportunities, and children face significant challenges in accessing quality education.",
    },
    {
      question: "What specific programs does Walk The Summit offer?",
      answer:
        "Programs include computer literacy classes, English language workshops, STEM education initiatives, and mentorship programs.",
    },
    {
      question: "How does Walk The Summit ensure sustainability of its programs?",
      answer:
        "Through community involvement, continuous assessment, and adapting programs to meet the evolving needs of the students and communities.",
    },
  ];
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqList.map((faq, index) => (
        <div key={index} className="border-b pb-2">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left flex justify-between items-center font-semibold text-lg"
          >
            {faq.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;