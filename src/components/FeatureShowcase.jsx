
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, UserCheck } from 'lucide-react';

const FeatureShowcase = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-paytech-purple" />,
      title: "Secure Transactions",
      description: "End-to-end encrypted payment system with multi-layer security protocols and audit logging."
    },
    {
      icon: <Zap className="w-10 h-10 text-paytech-purple" />,
      title: "Instant Processing",
      description: "Automated calculations and payouts processed within minutes instead of days or weeks."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-paytech-purple" />,
      title: "Detailed Analytics",
      description: "Comprehensive reports and insights on all transactions, with customizable filters."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-paytech-purple" />,
      title: "Role-Based Access",
      description: "Separate dashboards for admins and mentors with appropriate permissions and views."
    }
  ];

  const metrics = [
    { value: "99.9%", label: "Uptime" },
    { value: "5,000+", label: "Active Mentors" },
    { value: "₹10M+", label: "Monthly Payouts" },
    { value: "50+", label: "EdTech Partners" }
  ];

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Streamline Your EdTech Payments</h2>
          <p className="text-paytech-gray text-lg max-w-2xl mx-auto">
            Our platform handles all the complexities of payment calculations, taxes, and disbursements so you can focus on education.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-paytech-dark/60 to-paytech-blue/20 border border-white/10 transition-all hover:border-white/20 hover:shadow-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-paytech-purple/10 to-paytech-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-paytech-gray">{feature.description}</p>
                <div className="mt-6 flex items-center text-paytech-accent font-medium group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="bg-paytech-dark/80 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-paytech-gray">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How Payvance Works</h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-paytech-purple to-paytech-accent hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-16 md:space-y-24 relative">
              {[
                {
                  step: "1",
                  title: "Upload Session Data",
                  description: "Easily add mentor sessions manually or bulk upload via CSV, with automatic rate calculations.",
                  align: "right"
                },
                {
                  step: "2",
                  title: "Automated Calculations",
                  description: "Our system handles all complex calculations including taxes, platform fees, and deductions.",
                  align: "left"
                },
                {
                  step: "3",
                  title: "Generate Receipts",
                  description: "Create detailed, professional receipts for mentors with a complete breakdown of earnings.",
                  align: "right"
                },
                {
                  step: "4",
                  title: "Process Payments",
                  description: "Securely process payouts to mentors with full tracking and status updates.",
                  align: "left"
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${item.align === "left" ? "md:flex-row-reverse text-right" : "text-left"}`}>
                    {/* Step Circle */}
                    <div className="relative mb-6 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-paytech-purple to-paytech-accent flex items-center justify-center text-white text-xl font-bold z-20 relative">
                        {item.step}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-paytech-purple animate-pulse opacity-20"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-[calc(50%-3rem)] ${item.align === "left" ? "md:mr-6" : "md:ml-6"}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-paytech-gray">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
