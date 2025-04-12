import React from "react";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  const teamMembers = [
    { name: "Nabajit Choudhury", role: "Project Lead & Hardware" },
    { name: "Sankhyahrick Swami", role: "Website Development" },
    { name: "Ritanjit Das", role: "AI/ML Engineer" },
    { name: "Hritikesh Das", role: "Hardware & Integration" },
    { name: "Akash Bora", role: "Desktop Application" },
  ];

  return (
    <footer className="bg-[#001220] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          <div className="md:col-span-2"> 
            <h3 className="text-lg font-semibold text-white mb-3">About Jatayu</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Jatayu provides cutting-edge AI-powered drone solutions designed for efficient surveillance, monitoring, and management of large-scale plantations like tea gardens. Our technology aims to reduce costs, enhance security, and optimize productivity through advanced computer vision and autonomous flight capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero_section" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#mobilefeature" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#usecase" className="hover:text-white transition-colors duration-200">Use Cases</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#maintainance" className="hover:text-white transition-colors duration-200">Maintenance</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Our Team</h3>
            <ul className="space-y-2 text-sm">
                {teamMembers.map((member, index) => (
                    <li key={index}>
                        <span className="font-medium text-gray-200">{member.name}</span>
                        <span className="block text-xs text-gray-400">{member.role}</span>
                    </li>
                ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Jatayu Drones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
