
"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true); // Set loading state to true
    try {
      await emailjs.send(
        "service_6m1blxk",
        "template_v2rq79h",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "cI8VS8q0vTdbHkFtX"
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0F4B6E] to-[#E1B16F] min-h-screen flex items-center justify-center py-16">
      <motion.div
        className="max-w-2xl w-full p-12 bg-white rounded-xl shadow-2xl border-2 border-[#4A6E71]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-4xl font-serif font-bold text-center text-[#2A3D34] mb-8">
          Contact Me
        </motion.h1>

        {isSubmitted ? (
          <motion.div className="text-center text-xl text-[#2A3D34] mt-10">
            <p>Thank you for your message! I will get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-serif text-[#2A3D34]" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 mt-2 border-2 border-[#4A6E71] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E1B16F] text-[#2A3D34] shadow-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-serif text-[#2A3D34]" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 mt-2 border-2 border-[#4A6E71] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E1B16F] text-[#2A3D34] shadow-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-serif text-[#2A3D34]" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-4 mt-2 border-2 border-[#4A6E71] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E1B16F] text-[#2A3D34] shadow-lg "
                required
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-[#0F4B6E] text-white py-3 px-10 rounded-full text-lg hover:bg-[#E1B16F] transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;
