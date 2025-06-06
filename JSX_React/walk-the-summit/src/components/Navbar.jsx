import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/assets/Logo.svg"
                alt="Walk The Summit"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2">
              About
            </Link>
            <Link to="/donate" className="text-gray-800 hover:text-gray-600 px-3 py-2">
              Donate
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2">
              Contact
            </Link>
            <Link to="/faq" className="text-gray-800 hover:text-gray-600 px-3 py-2">
              FAQ
            </Link>
            <a
              href="https://milaap.org/fundraisers/support-underprivileged-children-of-himalayas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/donate"
            className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <a
            href="https://milaap.org/fundraisers/support-underprivileged-children-of-himalayas"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
