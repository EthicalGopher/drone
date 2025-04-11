import React from "react";
import { CheckIcon } from '@heroicons/react/24/solid';
import "../assets/styles/pricing.scss"
const plans = [
  {
    name: "Basic",
    features: [
      "Live Surveillance",
      "Manual Control",
      "Data Logging (Limited Storage)",
    ],
    pricingModel: "Free",
    ctaText: "Get Started",
    description: "Entry-level access with core functionalities."
  },
  {
    name: "Standard",
    features: [
      "All Basic Features",
      "AI Detection (Human/Animal)",
      "Automated Flight Paths",
      "Audio Warning System",
      "Unlimited Cloud Storage",
    ],
    pricingModel: "Rs 99",
    ctaText: "Start Free Trial",
    description: "Adds automation, AI detection, and unlimited storage."
  },
  {
    name: "Premium",
    features: [
      "All Standard Features",
      "Custom AI Model Training",
      "Priority Support",
      "Real-Time Alert System",
      "Advanced Obstacle Avoidance",
      "Payload Delivery Support",
    ],
    pricingModel: "Custom",
    ctaText: "Contact Sales",
    description: "Advanced AI, support, and features for enterprise needs."
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className=" mainbackground py-24 px-4 sm:px-6 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-[#DB4C00]/5 blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4 border border-white/10">
            Choose Your Plan
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-whtie">
            Service Subscriptions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect surveillance plan for your plantation needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="h-full flex flex-col backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl relative z-10">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl overflow-hidden opacity-10"></div>
                
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold">
                      {plan.pricingModel}
                    </span>
                    {plan.pricingModel !== "Free" && plan.pricingModel !== "Custom" && (
                      <span className="text-lg font-normal text-gray-300 ml-1">/month</span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-8 min-h-12">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <div className="rounded-full p-1 mr-3 flex-shrink-0 bg-white/10">
                          <CheckIcon className="h-4 w-4 text-[#DB4C00]" />
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto p-8 pt-0 relative z-10 ">
                    <div className="hidden xl:block ">

                <button className="  fancy w-full">
              <span className="top-key"></span>
              <span className="text">  {plan.ctaText}</span>

              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
                    </div>
                  <button
                    className="xl:hidden block w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r from-[#DB4C00] to-[#e05a1a] hover:shadow-lg hover:shadow-[#DB4C00]/20 hover:from-[#e05a1a] hover:to-[#f06830] text-white cursor-pointer"
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
            <p className="text-gray-300 mb-4">
              * All plans include basic security features and regular system updates
            </p>
            <p className="text-gray-300">
              Not sure which plan is right for you? <a href="#contact" className="text-[#DB4C00] hover:underline font-medium">Talk to our experts</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}