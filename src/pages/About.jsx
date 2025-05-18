import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const About = () => {
  const features = [
    {
      title: "Automated Payouts",
      description: "Streamline your mentor payment process with our automated payout system that handles everything from calculation to disbursement.",
      icon: "⚡"
    },
    {
      title: "Compliance & Security",
      description: "Built-in compliance checks and bank-grade security ensure your payments meet all regulatory requirements.",
      icon: "🔒"
    },
    {
      title: "Real-time Tracking",
      description: "Monitor payment status, track disbursements, and access detailed reports in real-time.",
      icon: "📊"
    },
    {
      title: "Multi-currency Support",
      description: "Support for multiple currencies and payment methods to serve your global mentor network.",
      icon: "🌍"
    },
    {
      title: "Customizable Rules",
      description: "Set up custom payment rules, schedules, and approval workflows that match your platform's needs.",
      icon: "⚙️"
    },
    {
      title: "Dedicated Support",
      description: "24/7 support team ready to help with any payment-related queries or issues.",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h1>
              <p className="text-xl text-paytech-gray mb-8">
                At Payvance, we're dedicated to solving the complex payout challenges that EdTech platforms face when managing mentor payments.
              </p>
              <p className="text-lg text-white/80">
                We believe that mentors are the backbone of quality education, and they deserve to be paid accurately and promptly for their valuable contributions. Our platform ensures transparency, compliance, and efficiency in the entire payout lifecycle.
              </p>
            </div>

            <Separator className="my-16 bg-white/10" />

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Payvance?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-paytech-dark/60 border border-white/10 rounded-lg p-6 hover:border-paytech-purple/50 transition-colors duration-300">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-paytech-gray">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-16 bg-white/10" />

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="p-6 bg-paytech-dark/60 border border-white/10 rounded-lg hover:border-paytech-purple/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
                  <p className="text-paytech-gray">We believe in complete transparency in all payment calculations and deductions.</p>
                </div>
                <div className="p-6 bg-paytech-dark/60 border border-white/10 rounded-lg hover:border-paytech-purple/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Efficiency</h3>
                  <p className="text-paytech-gray">Our systems are designed to save time and reduce administrative burden.</p>
                </div>
                <div className="p-6 bg-paytech-dark/60 border border-white/10 rounded-lg hover:border-paytech-purple/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Accuracy</h3>
                  <p className="text-paytech-gray">We ensure precise calculations and prevent costly payment errors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
