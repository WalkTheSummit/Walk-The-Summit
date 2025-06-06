import { useState } from "react";

const PublicationsModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-12 text-center">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        View New Publications
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded max-w-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">New Publications</h2>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Annual Impact Report 2024</li>
              <li>Education for All: The Way Forward</li>
              <li>Community Development Insights</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default PublicationsModal;