
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureShowcase from '../components/FeatureShowcase';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default Home;
