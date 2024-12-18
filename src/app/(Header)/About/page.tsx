
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F4B6E] to-[#E1B16F] flex flex-col items-center py-16 px-6">
      {/* Header */}
      <motion.header
        className="text-center text-white mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-[#FFFFFFB3]">Explore my journey&#44; skills&#44; and expertise.</p>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl w-full bg-white rounded-lg shadow-lg p-10 space-y-10 text-[#2A3D34]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Intro Section */}
        <section>
          <motion.h2
            className="text-3xl font-semibold text-[#0F4B6E]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Front-end Developer
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I&apos;m a Enthusiastic Front-End Developer with expertise in HTML&#44; CSS&#44; JavaScript&#44; TypeScript&#44; Node.js&#44; Next.js&#44; and Figma. Currently&#44; I Am diving into the world of AI agent development&#44; learning to harness AI is potential to build intelligent solutions.
          <br />
          <br />
           My goal is to bridge the gap between innovative AI technologies and real-world applications. I design user-friendly&#44; adaptive systems that enhance user experience and drive meaningful change across industries.I&apos;m excited to connect with like-minded individuals who share my passion for AI&#44; development&#44; and technology.

          </motion.p>
        </section>

        {/* Skills Section */}
        <section>
          <motion.h2
            className="text-3xl font-semibold text-[#0F4B6E]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            My Expertise
          </motion.h2>
          <motion.ul
            className="mt-4 space-y-2 text-lg list-disc list-inside text-[#0e0d0d]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <li>HTML&#44; CSS&#44; Tailwind</li>
             <li> JavaScript&#44; TypeScript</li>
            <li>Node.js&#44; Next.js</li>
            <li>Figma for UI/UX design</li>
            <li>AI Agent Development (in progress)</li>
          </motion.ul>
        </section>

        {/* Education Section */}
        <section>
          <motion.h2
            className="text-3xl font-semibold text-[#0F4B6E]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <strong> Matriculation</strong> from [ <strong><em>The New Beacon Acadmy </em></strong> ]. <br />
          <strong> College </strong>from [ <strong><em> Degree College Kohsar </em></strong> ] .<br />
          <strong> Currently university from </strong>[ <strong><em>Sindh University.</em></strong> Undergraduate  ]...
           <br />
            Currently <strong> pursuing AI Agent Development </strong> through the <em>Governors Initiative in Karachi&#44;</em> focusing on emerging AI technologies.

          </motion.p>
        </section>

        {/* CV Section */}
        <section>
          <motion.h2
            className="text-3xl font-semibold text-[#0F4B6E]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Download My CV
          </motion.h2>
          <motion.div
            className="mt-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="https://milestone-1-resume-muhammadowais1.vercel.app/" passHref>
              <span className="text-lg bg-[#0F4B6E] text-white py-3 px-8 rounded-full hover:bg-[#E1B16F] transition duration-300 cursor-pointer">
                View CV
              </span>
            </Link>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutPage;
