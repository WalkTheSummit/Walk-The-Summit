import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Walk The Summit
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/donate" className="hover:underline">
            Donate
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/faqs" className="hover:underline">
            FAQs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
