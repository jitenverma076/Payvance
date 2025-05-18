
import React from 'react';

const timelineItems = [
  {
    date: 'JANUARY 2023',
    title: 'Payvance MVP launched',
    description: 'Our founding team launched Payvance with an integrated payment solution for EdTech platforms.'
  },
  {
    date: 'MARCH 2023',
    title: '₹500k',
    description: 'First round of investment to help build out the platform and expand features.'
  },
  {
    date: 'JUNE 2023',
    title: 'First Enterprise Client',
    description: 'Partnered with LearnMaster to handle payments for 200+ mentors.'
  },
  {
    date: 'OCTOBER 2023',
    title: 'Tax API Integration',
    description: 'Added automatic GST and TDS calculations for Indian regulations.'
  },
  {
    date: 'JANUARY 2024',
    title: '₹5M',
    description: 'Secured seed funding to scale operations and improve the platform.'
  },
  {
    date: 'MARCH 2024',
    title: '1M Transactions',
    description: 'Reached 1 million transactions processed through our platform.'
  },
  {
    date: 'APRIL 2024',
    title: 'Opened office in Bangalore',
    description: 'We expanded our operations with a new office to support our growing team.'
  },
  {
    date: 'MAY 2024',
    title: 'Global Expansion',
    description: 'Started processing international payments for clients across Asia.'
  }
];

const Timeline = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-paytech-dark to-paytech-blue/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Journey</h2>
          <p className="text-paytech-gray mt-4">Milestones in our mission to revolutionize EdTech payments</p>
        </div>
        <div className="timeline-line grid grid-cols-1 md:grid-cols-4 gap-8">
          {timelineItems.slice(0, 4).map((item, index) => (
            <div key={index} className="relative z-10">
              <div className="absolute top-[19px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-paytech-purple rounded-full border-4 border-paytech-dark"></div>
              <p className="text-xs font-medium text-paytech-gray uppercase mb-12">{item.date}</p>
              <div className="metric-card p-6 rounded-xl h-full hover:border-paytech-purple/50 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-paytech-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="timeline-line grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {timelineItems.slice(4).map((item, index) => (
            <div key={index} className="relative z-10">
              <div className="absolute top-[19px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-paytech-purple rounded-full border-4 border-paytech-dark"></div>
              <p className="text-xs font-medium text-paytech-gray uppercase mb-12">{item.date}</p>
              <div className="metric-card p-6 rounded-xl h-full hover:border-paytech-purple/50 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-paytech-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
