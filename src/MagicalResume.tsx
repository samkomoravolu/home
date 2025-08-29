import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "Amazon — SDE Intern (Fall 2025)",
    location: "Minneapolis, MN",
    logo: "/Images/amazon.png",
    description:
      "I will be joining Amazon as a Software Development Engineer Intern, where I'll work on large-scale distributed systems powering customer experiences at global scale. My focus will be on backend services, reliability, and optimizing performance across high-volume infrastructure.",
  },
  {
    title: "Grammarly — ML Research Intern (Summer 2025)",
    location: "San Francisco, CA",
    logo: "/Images/grammarly.png",
    description:
      "At Grammarly, I contributed as a Machine Learning Research Intern in agentic AI safety. I developed a meta-agent that evaluates codebases and related literature to automatically design and test adaptive dialogues. I also led the synthesis of multiple research papers into technical specifications, benchmarked the system against human annotations, and first-authored a paper that is being submitted to NLP venues and released open source.",
  },
  {
    title: "Chamberlain Group — SWE Intern (2023 & 2024)",
    location: "Oak Brook, IL",
    logo: "/Images/chamberlain_group.jpg",
    description:
      "I spent two summers as a Software Engineering Intern at Chamberlain Group, modernizing and automating their engineering workflows. I built a dependency graph tool that automatically generated API documentation, saving engineers time across repositories. I also migrated production services to .NET 6, cutting runtimes dramatically, and worked with Azure DevOps and CosmosDB to manage high-volume user data migrations.",
  },
  {
    title: "Fermilab — Student Researcher (2020–2022)",
    location: "Batavia, IL",
    logo: "/Images/fermilab.png",
    description:
      "I began my research journey at Fermilab, where I worked on deep learning methods for high-energy physics. Using DNNs, I filtered lepton events with high efficiency in the search for dark photons, while processing tens of thousands of simulated particle interactions. I authored custom C++ packages to analyze and store experimental data, and my work contributed to multiple publications on arXiv, along with conference presentations.",
  },
];

export default function MagicalResume() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 right-0 z-50 p-6 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex space-x-6">
          <a 
            href="/" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="/hobbies" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Hobbies
          </a>
          <a 
            href="/publications" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Publications
          </a>
          <a 
            href="/Sameer_K_2025_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Resume
          </a>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 fixed top-0 left-0 h-full flex flex-col items-center justify-center border-r border-gray-800 p-6">
          <div className="h-40 w-40 rounded-full border-4 border-indigo-500 shadow-lg bg-gray-700 flex items-center justify-center">
            <img 
              src="/Images/IMG_4308.jpg" 
              alt="Sameer Komoravolu" 
              className="h-36 w-36 rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">Sameer Komoravolu</h1>
          <p className="text-sm text-gray-400">ML Researcher • Software Engineer</p>
          <div className="w-full h-px bg-gray-700 my-6"></div>
          <p className="text-xs text-gray-500 text-center">
            skomo2@illinois.edu<br />
            linkedin.com/in/sameer-komoravolu-80a7ba229
          </p>
        </div>

                 {/* Experience Timeline */}
         <div className="ml-[25%] w-3/4 p-12 space-y-12">
           {experiences.map((exp, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
               className={`max-w-4xl ${idx === 0 ? 'pt-8' : ''}`}
             >
              <div className="bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl hover:shadow-indigo-500/30 transition-all duration-300 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.title} logo`}
                      className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                    />
                    <h2 className="text-xl font-semibold text-indigo-400">
                      {exp.title}
                    </h2>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">
                    {exp.location}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
