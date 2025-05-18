import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Session Management",
      description: "Easily upload CSV session data or manually input mentor sessions with automatic rate calculations.",
      benefits: [
        "Auto-convert hourly rates to per-slot rates",
        "Filter by date range (7/15/30/custom days)",
        "Bulk import via CSV uploads",
        "Real-time dashboard updates"
      ]
    },
    {
      title: "Payout Calculation",
      description: "Sophisticated payout system with tax handling, platform fees, and custom deduction support.",
      benefits: [
        "Apply GST and TDS automatically",
        "Custom platform fee configurations",
        "Manual override with change logging",
        "Real-time calculation previews"
      ]
    },
    {
      title: "Receipt Generation",
      description: "Generate detailed receipts with full breakdowns of sessions, charges, and net payable amounts.",
      benefits: [
        "Professional PDF generation",
        "Custom message support",
        "One-click email sharing",
        "Downloadable receipts"
      ]
    },
    {
      title: "Secure Communication",
      description: "Built-in encrypted messaging between admins and mentors for seamless communication.",
      benefits: [
        "End-to-end encrypted chats",
        "Message history with timestamps",
        "File sharing capabilities",
        "Real-time notifications"
      ]
    },
    {
      title: "Audit & Compliance",
      description: "Comprehensive audit logging of all payout changes for compliance and transparency.",
      benefits: [
        "Detailed audit trails",
        "User identification for all changes",
        "Timestamped modification records",
        "Exportable audit logs"
      ]
    },
    {
      title: "Test & Simulation",
      description: "Run payouts in test mode to verify calculations before finalizing transactions.",
      benefits: [
        "Risk-free payout previews",
        "Complete breakdown visualization",
        "What-if scenario testing",
        "No accidental payments"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Powerful Features for EdTech Payout Automation</h1>
            <p className="text-xl text-paytech-gray max-w-3xl mx-auto">
              Payvance streamlines the entire payout process for educational platforms, saving time and reducing errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-paytech-dark/60 border border-white/10 shadow-xl hover:border-paytech-purple/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-paytech-gray">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1 text-paytech-purple"><Check size={16} /></span>
                        <span className="text-sm text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
