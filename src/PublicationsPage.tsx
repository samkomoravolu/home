import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const publications = [
  {
    title: "A Meta-Agent for Automated Testing and Evaluation of Conversational AI Agents",
    company: "Grammarly",
    authors: "Sameer Komoravolu, Khalil Mrini",
    year: "2025",
    arxiv: "https://arxiv.org/abs/...",
    github: "https://github.com/...",
    description: "First-authored paper on AI safety and automated testing of conversational agents.",
    logo: "/Images/grammarly.png"
  }
];

export default function PublicationsPage() {
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
          <p className="text-sm text-gray-400">Software Engineer • Researcher</p>
          <div className="w-full h-px bg-gray-700 my-6"></div>
          <p className="text-xs text-gray-500 text-center">
            skomo2@illinois.edu<br />
            linkedin.com/in/sameer-komoravolu-80a7ba229
          </p>
        </div>

        {/* Publications List */}
        <div className="ml-[25%] w-3/4 p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl font-bold mb-2 text-indigo-400">Publications</h1>
            <p className="text-base text-gray-400 mb-8 italic">"One's a start!"</p>

            <div className="space-y-6">
              {publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <div className="bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl hover:shadow-indigo-500/30 transition-all duration-300 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={pub.logo} 
                          alt={`${pub.company} logo`}
                          className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                        />
                        <div>
                          <h2 className="text-lg font-semibold text-indigo-400 mb-1">
                            {pub.title}
                          </h2>
                          <p className="text-gray-400 text-sm">
                            {pub.authors} • {pub.year}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">
                        {pub.company}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                      {pub.description}
                    </p>
                    
                                         <div className="flex space-x-6">
                       <a 
                         href={pub.arxiv} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-bold"
                       >
                         arXiv
                       </a>
                       <a 
                         href={pub.github} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-bold"
                       >
                         GitHub
                       </a>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Future Publications Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-gray-400 mb-2">More Coming Soon!</h3>
                <p className="text-gray-500 text-sm">
                  Working on more research papers and publications...
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
