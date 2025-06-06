// import FAQItem from "../components/FAQItem";

// const faqList = [
//   {
//     question: "What is Walk The Summit?",
//     answer: "Walk The Summit is a mission-driven platform empowering underprivileged communities.",
//   },
//   {
//     question: "How can I contribute?",
//     answer: "You can contribute by donating, volunteering, or spreading the word on social media.",
//   },
// ];

// const Faqs = () => {
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
//       <div className="space-y-2">
//         {faqList.map((item, index) => (
//           <FAQItem key={index} question={item.question} answer={item.answer} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faqs;


import FAQAccordion from "../components/FAQAccordion";

const Faqs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <FAQAccordion />
    </div>
  );
};

export default Faqs;x