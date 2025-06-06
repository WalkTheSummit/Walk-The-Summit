const ImpactHighlights = () => {
  return (
    <section className="py-16 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Impact Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">5000+ Lives Touched</h3>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">250+ Scholarships Awarded</h3>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">30+ Community Drives</h3>
        </div>
      </div>
    </section>
  );
};

export default ImpactHighlights;