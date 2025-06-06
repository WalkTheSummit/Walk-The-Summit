import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">WalkTheSummit</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/faqs" className="hover:underline">FAQs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;