import React, { useEffect, useRef } from "react";
import "../assets/styles/usecase.scss";
import "../assets/styles/hero.scss";
import "../assets/styles/mobilefeature.scss";
import { motion } from "framer-motion";
import Lenis from '@studio-freight/lenis';

export default function Usecase() {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

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

  const sectionRef = useRef(null);
  const featureRefsDesktop = useRef([]);
  const featureRefsMobile = useRef([]);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('section-visible');
    }

    featureRefsDesktop.current.forEach((featureElement, index) => {
      if (featureElement) {
        setTimeout(() => {
          featureElement.classList.add('feature-visible');
        }, 150 * index);
      }
    });

    featureRefsMobile.current.forEach((featureElement, index) => {
      if (featureElement) {
        setTimeout(() => {
          featureElement.classList.add('mobile-feature-visible');
        }, 100 * index);
      }
    });

  }, [useCases]);

  return (
    <section
      id="usecase"
      ref={sectionRef}
      className="feature-section min-h-screen bg-[#001220] py-16 px-4 opacity-0 transition-opacity duration-700 relative"
    >
      <div className="background-divider divider2 w-full absolute top-0 "></div>
      <div className="container mx-auto max-w-6xl z-10 ">
        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Use Case: AI-Powered Drone Surveillance for Tea Plantations
        </h2>
        <div className="hidden md:grid grid-cols-2 gap-8 md:gap-12">
          {useCases.map((feature, index) => (
            <motion.li
              initial={{scale:0,opacity:0}}
              whileInView={{scale:1,opacity:1}}
              transition={{duration:0.7,ease:"easeOut"}}
              key={`desktop-${index}`}
              ref={el => featureRefsDesktop.current[index] = el}
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
            </motion.li>
          ))}
        </div>
        <div className="sm:block md:hidden p-1 sm:p-2">
          <div className="grid grid-cols-1 gap-5 px-11 ">
            {useCases.map((feature, index) => (
              <div
                key={index}
                className="bg-[#DB4C00] text-white p-5  rounded-xl depthbox border
                           flex items-center justify-center
                           font-semibold text-sm sm:text-base min-h-[110px] sm:min-h-[130px]
                           hover:bg-[#a31d56] transition-all duration-300 ease-out
                           transform hover:scale-[1.02] border-2 border-transparent
                           hover:border-white/20 focus:outline-none focus:ring-2
                           focus:ring-white/50 cursor-pointer box
                           relative overflow-hidden group "
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 w-full h-full flex flex-col ">
                  <span className="drop-shadow-md text font-bold mb-2 text-center ">
                    {feature.title}
                  </span>
                  <span className="drop-shadow-md afterhover
                                      text-[0.9em] font-normal opacity-0
                                      group-hover:opacity-100 transition-opacity duration-300
                                      overflow-auto flex-1 px-2 text-center
                                      flex items-center justify-center ">
                    <ul className="list-disc list-inside space-y-1 text-left secondary_text">
                      {feature.points.map((point, pIndex) => (
                        <li key={pIndex} className="leading-tight">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 text-xs opacity-50
                                    group-hover:opacity-100 transition-opacity ">
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