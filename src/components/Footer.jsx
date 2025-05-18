import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-paytech-dark/95 backdrop-blur-md">
      <div className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold gradient-text hover:opacity-90 transition-opacity">
              Payvance
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/features" className="text-paytech-gray/60 hover:text-white transition-colors duration-300 text-sm">
                Features
              </Link>
              <Link to="/about" className="text-paytech-gray/60 hover:text-white transition-colors duration-300 text-sm">
                About
              </Link>
              <Link to="/customers" className="text-paytech-gray/60 hover:text-white transition-colors duration-300 text-sm">
                Customers
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-paytech-gray/60 hover:text-white transition-colors duration-300 text-sm">
              Privacy
            </a>
            <a href="#" className="text-paytech-gray/60 hover:text-white transition-colors duration-300 text-sm">
              Terms
            </a>
            <p className="text-paytech-gray/60 text-sm">
              &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
