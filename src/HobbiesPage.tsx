import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hobbies = [
  {
    name: "Tennis",
    stat: "UTR: 5.95",
    description: "I play a lot of this",
    color: "from-green-500 to-emerald-600",
    image: "/Images/tennis.jpg"
  },
  {
    name: "Ping Pong",
    stat: "Rating: 1881",
    description: "and too much of this",
    color: "from-red-500 to-pink-600",
    image: "/Images/pong.jpeg"
  },
  {
    name: "One Piece",
    stat: "Episodes binged: 1130",
    description: "📺👀",
    color: "from-blue-500 to-cyan-600",
    image: "/Images/one_piece.webp"
  },
  {
    name: "Bouldering",
    stat: "Times fallen on my __: 24",
    description: "Yes i know this is hiking but it looks cooler",
    color: "from-orange-500 to-amber-600",
    image: "/Images/hiking.jpg"
  }
];

export default function HobbiesPage() {
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

      {/* Main Content */}
      <div className="pt-20 px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-indigo-400"
        >
          Hobbies & Interests
        </motion.h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group"
            >
                             <div className={`h-96 bg-gradient-to-b ${hobby.color} rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105`}>
                 {/* Content */}
                 <div className="flex flex-col h-full">
                   <div className="mb-4">
                     <h2 className="text-2xl font-bold text-white mb-2">{hobby.name}</h2>
                     <p className="text-white/90 text-sm mb-4">{hobby.description}</p>
                   </div>
                   
                   {/* Large Image */}
                   <div className="flex-1 mb-4">
                     <img 
                       src={hobby.image} 
                       alt={hobby.name}
                       className="w-full h-full object-cover rounded-lg border-2 border-white/20"
                     />
                   </div>
                   
                   {/* Stat Badge */}
                   <div className="mt-auto">
                     <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                       <span className="text-white font-semibold text-sm">{hobby.stat}</span>
                     </div>
                   </div>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <a 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            ← Back to Experience
          </a>
        </motion.div> */}
      </div>
    </div>
  );
}
