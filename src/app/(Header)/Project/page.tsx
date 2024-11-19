"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  repoLink?: string;
  npxCommand?: string;
}

const cliProjects: Project[] = [
  
      {
        title: "Number Guessing Game",
        description: "A CLI-based number guessing game built in TypeScript, where players guess the hidden number within limited tries.",
        techStack: ["TypeScript", "Node.js"],
        image: "/photos/number-guessing-game.jpg",
        npxCommand: "@muhammadowaisshah/number-guessing-game",
        repoLink: "https://github.com/muhammadowaisshah1/CLI-number-guessing-game.git",
      },
      {
        title: "To-Do App CLI",
        description: "A to-do list application via CLI that allows users to manage list easily.",
        techStack: ["TypeScript", "Node.js"],
        image: "/photos/todo.jpg",
        npxCommand: "@muhammadowaisshah/to-do-list",
        repoLink: "https://github.com/muhammadowaisshah1/CLI-todo-list.git",
      },
      {
        title: "CLI ATM Machine",
        description: "Simulates an ATM environment, where users can withdraw and deposit using CLI commands.",
        techStack: ["TypeScript", "Node.js"],
        image: "/photos/atms.jpg",
        npxCommand: "@muhammadowaisshah/cli-atm-machine",
        repoLink: "https://github.com/muhammadowaisshah1/project-ATM-machine.git",
      },
      {
        title: "Currency Converter",
        description: "Converts currency values in real-time using this simple TypeScript CLI App.",
        techStack: ["TypeScript", "Node.js"],
        image: "/photos/currencyConverter.jpg",
        npxCommand:  "@muhammadowaisshah/currency-convertor",
        repoLink: "https://github.com/muhammadowaisshah1/currency_cunvertor-app.git",
      },{
        title: "Words Counter",
        description: " Give the Words that app Counts words and characters in text or user input.",
        techStack: ["TypeScript", "Node.js"],
        image: "/photos/word counter.jpg",
        npxCommand: "@muhammadowaisshah/word_counter",
        repoLink: "https://github.com/muhammadowaisshah1/project-word-counter-.git",
      },
      {
        title: "CLI Calculator",
        description: "A command-line calculator capable of basic arithmetic operations.",
        techStack: ["TypeScript", "Node.js"],
        image: "/photos/calculat.jpg",
        npxCommand: "@muhammadowaisshah/simple-calculator",
        repoLink: "https://github.com/muhammadowaisshah1/-CLI-Calculator.git",
      },



  // Add more CLI projects...
];

const nextJsProjects: Project[] = [
  {
    title: "personal Portfolio using Tailwind ",
    description: "An interactive, animated AI developer portfolio with responsive design using Next.js.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/photos/Ai.jpg",
    liveLink: "https://muhammad-owais-portfolio.vercel.app/",
    repoLink: "https://github.com/your-username/ai-portfolio",
  },
  {
    title: "AI Portfolio using CSS",
    description: "An interactive, animated AI developer portfolio with responsive design using Next.js using CSS in this .",
    techStack: ["Next.js", "TypeScript", "Custom CSS"],
    image: "/photos/digital calculator.jpg",
    liveLink: "/ai-portfolio",
    repoLink: "https://github.com/your-username/ai-portfolio",
  },
  {
    title: "Editable Resume Application",
    description: "This is Dynamic Resume Application That ",
    techStack: ["HTML", "CSS", "TypeScript"],
    image: "/photos/currency.jpg",
    liveLink: "https://milestone4-editable-resume-pied.vercel.app/",
    repoLink: "https://github.com/muhammadowaisshah1/Resume--builder-app-milestone-4-Editable-.git",
  },
  {
    title: "Downladable PDF Resume Application",
    description: "This is Dynamic Resume Application That ",
    techStack: [ "HTML", "CSS", "TypeScript"],
    image: "/photos/digital calculator.jpg",
    liveLink: "https://milestone5-resume-pdf.vercel.app/",
    repoLink: "https://github.com/muhammadowaisshah1/Resume--builder-app-milestone-5.git",
  },{
    title: "Dynamic Resume Application",
    description: "This is Dynamic Resume Application That ",
    techStack: ["HTML", "CSS", "Typescript"],
    image: "/photos/calculator.jpg",
    liveLink: "https://milestone2-resume-three.vercel.app/",
    repoLink: "https://github.com/muhammadowaisshah1/Resume-builder-milestone2-dynamic-resume.git",
  },
  // Add more Next.js projects...
];

const htmlCssProjects: Project[] = [
  {
    title: "Responsive Layout",
    description: "A flexible layout made with HTML and CSS, adapting to all screen sizes.",
    techStack: ["HTML", "CSS"],
    image: "/photos/currency.jpg",
    liveLink: "/responsive-layout",
    repoLink: "https://github.com/your-username/responsive-layout",
  },
  
  // Add more HTML & CSS projects...
];

const SectionDivider: FC = () => (
  <div className="my-8 h-[1px] bg-gradient-to-r from-green-500 to-blue-500" />
);

const ProjectSection: FC<{ title: string; projects: Project[] }> = ({ title, projects }) => (
  <section className="mb-16">
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-center text-white mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-48 object-fit rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <li key={i} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                {tech}
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <span className="text-green-400 hover:underline cursor-pointer">
                  Live Demo
                </span>
              </Link>
            )}
            {project.repoLink && (
              <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <span className="text-blue-400 hover:underline cursor-pointer">
                  GitHub Repository
                </span>
              </Link>
            )}
            {project.npxCommand && (
              <div className="text-gray-300">
                Run via NPX:{" "}
                <code className="bg-gray-700 px-2 py-1 rounded">{project.npxCommand}</code>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectsPage: FC = () => (
  <div className="bg-black min-h-screen p-6">
    <motion.h1
      className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h1>


    <motion.p
      className="text-center text-[#E1B16F] mb-12 max-w-3xl mx-auto text-lg sm:text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Welcome to my portfolio&#44; where technology meets creativity. I am a passionate developer with expertise in building cutting-edge applications using modern web technologies. Currently&#44; I am expanding my knowledge in <strong>AI Agents</strong>&#44; a field that excites me and promises to revolutionize how we interact with machines.
      <br /><br />
      Explore my projects below to see how I&apos;m combining my passion for development with the exciting possibilities.
    </motion.p>

    <ProjectSection title="CLI Projects (TypeScript)" projects={cliProjects} />
    <SectionDivider />
    <ProjectSection title="Next.js Projects" projects={nextJsProjects} />
    <SectionDivider />
    <ProjectSection title="HTML & CSS Projects" projects={htmlCssProjects} />
  </div>
);

export default ProjectsPage;
