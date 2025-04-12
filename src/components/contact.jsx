import React, { useState } from "react";
// Removed: import { motion } from "framer-motion";
import { PaperAirplaneIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Check console for data)");
  };

 
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.177810312398!2d91.6260089741983!3d26.12577819308931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b91f8d8d6c7%3A0x8e1a6f1b8c7b4c6d!2sHathkhowapara%2C%20Azara%2C%20Guwahati%2C%20Assam%20781017!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <React.Fragment>
      <section
        id="contact"
        className="bg-[#001220] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden min-h-screen flex flex-col justify-center"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[#a31d56]/10 blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 -left-1/4 w-80 h-80 rounded-full bg-[#DB4C00]/10 blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions or want to discuss how Jatayu can elevate your operations? Reach out below or use the form.
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            <div
              className="space-y-8 lg:sticky lg:top-24"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  We're available via email or phone during business hours. Find us at:
                </p>
                <div className="space-y-4">
                  <a href="mailto:contact@jatayu-drones.com" className="flex items-center group">
                    <EnvelopeIcon className="h-6 w-6 text-[#DB4C00] mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-200 hover:text-white transition-colors duration-300">
                      contact@jatayu-drones.com
                    </span>
                  </a>
                  <a href="tel:+15551234567" className="flex items-center group">
                    <PhoneIcon className="h-6 w-6 text-[#DB4C00] mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-200 hover:text-white transition-colors duration-300">
                    +91 97067 99644
                    </span>
                  </a>
                   <div className="flex items-start group pt-2">
                    <MapPinIcon className="h-6 w-6 text-[#DB4C00] mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-300">
                      Hathkhowapara, Azara, <br/>
                      Guwahati – 781017 <br/>
                      Assam, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-8">
                 <h4 className="text-lg font-medium text-white mb-3">Our Location</h4>
                 <iframe
                    src={mapEmbedUrl}
                    className="w-full h-64 rounded-lg border border-white/10 shadow-md"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location Map"
                 ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form - Changed motion.form to form */}
            <form
              // Removed Framer Motion props: variants
              onSubmit={handleSubmit}
              className="space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            >
              {/* Form fields remain the same */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4C00] focus:border-transparent backdrop-blur-sm transition duration-300 shadow-sm hover:border-white/30 focus:shadow-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4C00] focus:border-transparent backdrop-blur-sm transition duration-300 shadow-sm hover:border-white/30 focus:shadow-md"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4C00] focus:border-transparent backdrop-blur-sm transition duration-300 shadow-sm hover:border-white/30 focus:shadow-md"
                  placeholder="Inquiry about Jatayu Drone"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  name="message" id="message" rows="5" required value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4C00] focus:border-transparent backdrop-blur-sm transition duration-300 shadow-sm hover:border-white/30 focus:shadow-md"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              <div className="text-right pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#DB4C00] hover:bg-[#a31d56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#001220] focus:ring-[#DB4C00] transition-colors duration-300 group"
                >
                  Send Message
                  <PaperAirplaneIcon className="ml-3 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
