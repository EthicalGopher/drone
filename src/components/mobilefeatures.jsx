import React from "react";
import "../assets/styles/mobilefeature.scss"
const features = [
  { text: "Live Surveillance and Monitoring", afterhover: "Mini drone cam detects humans/animals." },
  { text: "Data Logging", afterhover: "Dual backup: SD card + cloud storage." },
  { text: "Live Human and Animal Detection System", afterhover: "Real-time human/animal classification." },
  { text: "Autonomous Flight with manual contro", afterhover: "Automated or supervisor-controlled flights." },
  { text: "Payload Delivery", afterhover: "Emergency payload drop capability" },
  { text: "Leaf Disease Detection System", afterhover: "Automated plant disease detection." },
];

export default function Mobilefeature() {
  return (
    <React.Fragment>
      <section
        id="mobilefeature"
        className="lg:hidden block p-5 sm:p-8 bg-gradient-to-br from-[#DB4C00] to-[#a31d56]"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#001220] text-white p-5 rounded-xl shadow-lg
                         flex items-center justify-center text-center 
                         font-semibold text-sm sm:text-base min-h-[110px] sm:min-h-[130px]
                         hover:bg-[#a31d56] transition-all duration-300 ease-out
                         transform hover:scale-[1.02] border-2 border-transparent
                         hover:border-white/20 focus:outline-none focus:ring-2
                         focus:ring-white/50 cursor-pointer box"
            >
              <span className="drop-shadow-md text">{feature.text}</span>
              <span className="drop-shadow-md afterhover">{feature.afterhover}</span>

            </div>
          ))}
          
        </div>
      </section>
    </React.Fragment>
  );
}