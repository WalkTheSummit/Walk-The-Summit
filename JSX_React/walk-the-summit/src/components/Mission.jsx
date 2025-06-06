const Mission = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        We aim to uplift communities by promoting access to education, health, and social awareness.
      </p>
      {/* Placeholder for images */}
      <div className="flex justify-center space-x-4">
        {/* 
        <img src="/path/to/image1.jpg" alt="Mission 1" className="w-1/3 rounded shadow" />
        <img src="/path/to/image2.jpg" alt="Mission 2" className="w-1/3 rounded shadow" />
        */}
        <div className="w-1/3 h-48 bg-gray-200 rounded shadow flex items-center justify-center">[Image 1]</div>
        <div className="w-1/3 h-48 bg-gray-200 rounded shadow flex items-center justify-center">[Image 2]</div>
      </div>
    </section>
  );
};

export default Mission;