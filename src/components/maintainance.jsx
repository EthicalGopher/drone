import React from "react";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'; // Using outline icons for variety

// Define the maintenance options data structure
const maintenanceOptions = [
  {
    category: "Annual Maintenance Plan",
    coverage: [
      "Regular drone servicing & cleaning",
      "Comprehensive firmware updates",
      "System performance diagnostics",
      "Battery health checks",
    ],
    pricingModel: "Subscription (Yearly Fee)",
    description: "Ensures drone longevity and optimal performance with scheduled checkups and updates.",
  },
  {
    category: "Hardware Upgrade Plans",
    coverage: [
      "Camera module enhancements",
      "Flight controller replacements",
      "Extended-life battery upgrades",
      "Sensor additions (e.g., thermal)",
    ],
    pricingModel: "Pay-per-upgrade or Custom Bundles",
    description: "Flexible options to enhance drone capabilities for specific operational needs.",
  },
  {
    category: "Service Center Support",
    coverage: [
      "Accidental damage repairs",
      "Component replacement (non-upgrade)",
      "Software troubleshooting & fixes",
      "Emergency repair services",
      "On-demand technical support",
    ],
    pricingModel: "Pay-per-service / Priority Add-on",
    description: "Covers unexpected issues, damage, and provides access to expert technical help.",
  },
];

export default function Maintainance() {
  return (
    <React.Fragment>
      {/* Section styling consistent with pricing.jsx */}
      <section id="maintainance" className="mainbackground  py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        {/* Optional: Add background elements like pricing */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[#a31d56]/10 blur-3xl"></div>
          <div className="absolute bottom-0 -left-1/4 w-80 h-80 rounded-full bg-[#DB4C00]/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            {/* Optional: Badge similar to pricing */}
            {/* <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4 border border-white/10">
              Keep Flying High
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Maintenance & Upgrade Plans
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your investment and enhance capabilities with our dedicated support plans.
            </p>
          </div>

          {/* Maintenance Options Grid - Replacing the table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {maintenanceOptions.map((option, index) => (
              <div
                key={index}
                // Card styling similar to pricing cards
                className="flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-white/30"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-xl font-semibold text-center text-white mb-2">
                    {option.category}
                  </h3>
                   <p className="text-sm text-gray-300 text-center min-h-[40px]">{option.description}</p>
                </div>

                {/* Coverage Details */}
                <div className="p-6 flex-grow">
                  <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Coverage Includes:</h4>
                  <ul className="space-y-3 mb-6">
                    {option.coverage.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <WrenchScrewdriverIcon className="h-5 w-5 text-[#DB4C00] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Model Footer */}
                <div className="p-6 mt-auto border-t border-white/10 bg-white/5">
                  <p className="text-center text-base font-medium text-gray-300">
                    <span className="text-gray-400 text-sm block mb-1">Pricing Model</span>
                    {option.pricingModel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Add a concluding remark or contact link */}
          <div className="text-center mt-16 max-w-2xl mx-auto">
            
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}
