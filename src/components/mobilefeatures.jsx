import React from "react";

const features = [
  "Audio Announcements and Warnings",
  "Geofencing and Obstacle Avoidance",
  "Real Time Alert System",
  "Thermo-graphic/ IR cameras",
  "Laser scanner / LIDAR / LADAR",
  "RGB & Multi-Spectral Sensor",
];

export default function Mobilefeature() {
  return (
    <React.Fragment>
      <section
        id="mobilefeature"
        className="lg:hidden block p-5 sm:p-8 bg-gradient-to-br from-[#c62368] to-[#a31d56]"
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
                         focus:ring-white/50 cursor-pointer"
            >
              <span className="drop-shadow-md">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}