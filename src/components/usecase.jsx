import React, { useEffect, useRef } from "react";
import "../assets/styles/usecase.scss"; // Styles for section, animation
import "../assets/styles/hero.scss";    // Styles for .fancy list items
import "../assets/styles/mobilefeature.scss"; // Styles for .box hover effect

export default function Usecase() {
  // Use Case data structure
  const useCases = [
    {
      title: "Worker Safety & Security",
      points: [
        "Monitors remote workers in challenging environments.",
        "Detects theft of raw materials (tea leaves, machinery).",
        "Prevents illegal activities with real-time alerts.",
      ],
    },
    {
      title: "Productivity Optimization",
      points: [
        "Tracks worker activity to ensure optimal performance.",
        "Identifies inefficiencies in workflows for process improvement.",
      ],
    },
    {
      title: "Environmental & Crop Health Monitoring",
      points: [
        "Assesses weather impact on plantations.",
        "Detects plant diseases early for timely intervention.",
        "Classifies leaf species for better crop management.",
      ],
    },
    {
      title: "Emergency Response",
      points: [
        "Delivers first-aid kits via secure payload drop.",
        "Supports manual control for emergency inspections.",
      ],
    },
  ];

  // --- Animation Refs ---
  const sectionRef = useRef(null);
  // Refs for desktop items
  const featureRefsDesktop = useRef([]);
  // Refs for mobile items (optional, if you want separate animation triggers)
  const featureRefsMobile = useRef([]);

  // --- Animation Effect ---
  useEffect(() => {
    // Section animation
    if (sectionRef.current) {
      // Using IntersectionObserver might be more robust, but keeping simple class add for now
      sectionRef.current.classList.add('section-visible');
    }

    // Staggered animation for desktop features (li.fancy)
    featureRefsDesktop.current.forEach((featureElement, index) => {
      if (featureElement) {
        setTimeout(() => {
          featureElement.classList.add('feature-visible');
        }, 150 * index);
      }
    });

    // Staggered animation for mobile features (div.box) - Optional
    // You might want different classes/timing or none at all for mobile
    featureRefsMobile.current.forEach((featureElement, index) => {
      if (featureElement) {
        // Example: Add a simple fade-in class for mobile cards
        setTimeout(() => {
          featureElement.classList.add('mobile-feature-visible'); // Use a different class if needed
        }, 100 * index); // Maybe faster stagger for mobile
      }
    });

  }, [useCases]); // Dependency array

  return (
    <section
      id="usecase"
      ref={sectionRef}
      // Adjusted classes: removed flex centering to allow natural block flow
      className="feature-section min-h-screen bg-[#001220] py-16 px-4 opacity-0 transition-opacity duration-700 relative"
    >
      {/* Kept divider */}
      <div className="background-divider divider2 w-full absolute top-0 "></div>

      {/* Container */}
      <div className="container mx-auto max-w-6xl z-10 ">

        {/* Title (visible on all screen sizes) */}
        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Use Case: AI-Powered Drone Surveillance for Tea Plantations
        </h2>

        {/* --- Desktop View (using li.fancy) --- */}
        <div className="hidden md:grid grid-cols-2 gap-8 md:gap-12"> {/* Changed md:grid-cols-2 to lg:grid */}
          {useCases.map((feature, index) => (
            <li
              key={`desktop-${index}`}
              ref={el => featureRefsDesktop.current[index] = el}
              // Added unique key prefix
              // Kept existing classes for desktop view
              className="fancy feature-card bg-gradient-to-br from-[#DB4C00]/10 to-[#a31d56]/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg opacity-0 transform translate-y-8 transition-all duration-500 flex flex-col p-5"
              style={{ listStyle: 'none' }}
            >
              <span className="top-key"></span>
              <span className="text flex-grow">
                <h3 className="font-semibold text-base md:text-lg mb-2">{`${index + 1}. ${feature.title}`}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                  {feature.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
          ))}
        </div>



        {/* Mobile */}
        <div className="sm:block md:hidden p-1 sm:p-2">
  <div className="grid grid-cols-1 gap-4 sm:gap-5">
    {useCases.map((feature, index) => (
      <div
        key={index}
        className="bg-[#DB4C00] text-white p-5  rounded-xl shadow-lg
                 flex items-center justify-center 
                 font-semibold text-sm sm:text-base min-h-[110px] sm:min-h-[130px]
                 hover:bg-[#a31d56] transition-all duration-300 ease-out
                 transform hover:scale-[1.02] border-2 border-transparent
                 hover:border-white/20 focus:outline-none focus:ring-2
                 focus:ring-white/50 cursor-pointer box
                 relative overflow-hidden group" // Added group class and overflow-hidden
      >
        {/* Animated background layer */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content container */}
        <div className="relative z-10 w-full h-full flex flex-col ">
          {/* Title with improved spacing */}
          <span className="drop-shadow-md text font-bold mb-2 text-center ">
            {feature.title}
          </span>
          
          {/* Points list with better formatting */}
          <span className="drop-shadow-md afterhover 
                          text-[0.9em] font-normal opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300
                          overflow-auto flex-1 px-2 text-center
                          flex items-center justify-center">
            {/* Add bullet points and proper spacing */}
            <ul className="list-disc list-inside space-y-1 text-left">
              {feature.points.map((point, pIndex) => (
                <li key={pIndex} className="leading-tight">
                  {point}
                </li>
              ))}
            </ul>
          </span>
        </div>

        {/* Interactive indicator */}
        <div className="absolute bottom-2 right-2 text-xs opacity-50 
                        group-hover:opacity-100 transition-opacity">
          Tap for details
        </div>
      </div>
    ))}
  </div>
</div>
</div>
    </section>
  );
}
