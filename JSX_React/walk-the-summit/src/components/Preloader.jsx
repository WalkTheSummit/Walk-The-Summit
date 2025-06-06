import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800); // faster load
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
    </div>
  );
};

export default Preloader;