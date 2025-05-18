import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-20">
      {/* Animated light lines effect (similar to the image) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full"
              style={{
                top: `${20 + i * 15}%`,
                background: 'linear-gradient(90deg, transparent, rgba(108, 92, 231, 0.7) 50%, transparent)',
                transform: `rotate(${i % 2 ? 1 : -1}deg)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl z-10 space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
          Payvance empowers EdTech platforms to automate payouts for
          <span className="text-paytech-accent"> thousands</span> of mentors daily.
        </h1>
        <p className="text-lg md:text-xl text-paytech-gray max-w-3xl mx-auto">
          Join our growing platform and help streamline your payment operations.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 pt-4">
          <Button asChild className="bg-white text-paytech-purple hover:bg-paytech-accent hover:text-white border-2 border-paytech-purple transition-all duration-300 shadow-lg hover:shadow-paytech-purple/20 px-8 py-6 rounded-full text-lg font-semibold">
            <Link to="/auth">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
