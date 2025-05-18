
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-xl text-paytech-gray mb-8">Oops! Page not found</p>
          <Link to="/" className="bg-paytech-purple hover:bg-paytech-accent text-white px-6 py-3 rounded-md transition-colors inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
