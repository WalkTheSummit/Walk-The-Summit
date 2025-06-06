const Contact = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4 text-lg">
        We'd love to hear from you! Use the form below or reach out via email.
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
};

export default Contact;
