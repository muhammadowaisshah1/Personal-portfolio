
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define a simple type for props or states if needed in the future
interface HomePageProps {
  profileImageSrc: string; // Image source for profile
  name: string; // Name of the person
  description: string; // Short description of the person
}

const HomePage: React.FC<HomePageProps> = ({ profileImageSrc = "/photos/profile-picture.jpg", name = "Muhammad Owais Shah", description = "I'm Enthusiastic developer focused on creating intelligent and dynamic web applications. Currently diving into the world of AI agent development, I'm learning to build systems that drive innovation and automation." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1F2937] to-[#2D3748] flex items-center justify-center py-16 px-4">
      <motion.div
        className="flex flex-col lg:flex-row max-w-5xl w-full p-8 bg-[#1A202C] rounded-xl shadow-xl border-2 border-[#2D3748] items-center lg:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
          <motion.div
            className="w-3/4 sm:w-1/2 lg:w-3/4 rounded-full overflow-hidden shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
          

            <Image
              src={profileImageSrc} // Image passed via props
              alt={`${name}&apos;s Profile`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-serif font-bold text-[#fff] mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi I&apos;m&#44;
            <br/>
              <span className="text-[#FBBF24]">{name}</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I have honed my skills in <strong>HTML</strong>&#44; <strong>CSS</strong>&#44; <strong>Tailwind CSS</strong>&#44; <strong>JavaScript</strong>&#44; <strong>TypeScript</strong>&#44; <strong>Node.js</strong>&#44; <strong>Next.js</strong>&#44; and <strong>Figma</strong>&#44; which I use to build responsive&#44; visually engaging&#44; and accessible web experiences.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Currently&#44;
            I am expanding my expertise into <strong>AI Agents</strong>&#44; learning how to create intelligent systems that can automate tasks&#44; learn from interactions&#44; and solve real-world problems.
          </motion.p>

              <motion.p
            className="text-lg sm:text-xl text-[#E2E8F0] mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Through my work&#44; I focus on creating user-centered designs and delivering exceptional web development solutions with modern technologies.
          </motion.p>


          <motion.p
            className="text-lg sm:text-xl text-[#D1D9E6] mb-6 px-4 lg:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
             I&apos;m Committed about building adaptive&#44; smart systems that enhance digital experiences through innovative AI solutions.

          </motion.p>

          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact" passHref>
              <button className="bg-[#3B82F6] text-white py-3 px-8 sm:px-10 rounded-full text-base sm:text-lg hover:bg-[#E1B16F] transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
