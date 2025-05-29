"use client";

import { useState } from "react";
import { Instagram, Linkedin, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Team member data
const people = [
  {
    name: "Nadun Nissanka",
    role: "Co-founder",
    imageUrl: "nadun.jpg",
    xUrl: "https://www.instagram.com/_vodka_98",
    linkedinUrl: "https://lk.linkedin.com/in/nadun-nissanka-31782b19b",
    bio: "Passionate about fitness and helping others achieve their goals."
  },
  {
    name: "Pradeep Tharanga",
    role: "Co-founder/Manager",
    imageUrl: "/tharanga.jpeg",
    xUrl: "https://www.instagram.com/tharanga1134/",
    bio: "Dedicated to creating an inclusive fitness environment for all."
  },
  {
    name: "Champika",
    role: "Co-founder/Manager",
    imageUrl: "frank.jpg",
    xUrl: "https://www.instagram.com/fitness_with_franka/",
    bio: "Specializes in holistic fitness approaches and nutrition guidance."
  },
  {
    name: "Lahiru Jayarathna",
    role: "Trainer",
    imageUrl: "/lahiru.jpeg",
    xUrl: "#",
    bio: "Expert in strength training and functional fitness programs."
  },
  {
    name: "Namina Jayasinghe",
    role: "Trainer",
    imageUrl: "/namina.jpeg",
    xUrl: "#",
    bio: "Focuses on personalized training plans and rehabilitation."
  },
  {
    name: "Adeesha Sulakshana",
    role: "Junior Trainer",
    imageUrl: "/adeesha.jpg",
    xUrl: "#",
    bio: "Bringing fresh energy and innovative workout techniques."
  },
];

// Team member card component
const TeamMemberCard = ({ person }: { person: typeof people[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl bg-black border border-gray-800 shadow-lg",
        "transition-all duration-300 ease-in-out cursor-pointer",
        isExpanded ? "h-[380px]" : "h-[320px]"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600/20 z-0"
        animate={{
          opacity: isHovered ? 0.8 : 0.4
        }}
      />

      {/* Image container with hover effect */}
      <motion.div 
        className="relative w-full h-48 overflow-hidden"
      >
        <motion.img
          src={person.imageUrl}
          alt={person.name}
          className="w-full h-full object-cover object-top"
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(1.1)" : "brightness(1)"
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 py-4">
        <motion.h3 
          className="text-xl font-semibold tracking-tight text-white"
          animate={{
            y: isHovered ? -2 : 0,
            color: isHovered ? "#3b82f6" : "#ffffff"
          }}
        >
          {person.name}
        </motion.h3>
        
        <motion.p 
          className="text-sm text-gray-400"
          animate={{
            y: isHovered ? -1 : 0
          }}
        >
          {person.role}
        </motion.p>

        {/* Bio - shows when expanded */}
        <motion.div
          className="mt-3 text-sm text-gray-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <p>{person.bio}</p>
        </motion.div>

        {/* Social links */}
        <motion.div 
          className="mt-4 flex items-center gap-3"
          animate={{
            y: isExpanded ? 0 : 0
          }}
        >
          <a
            href={person.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="sr-only">Instagram</span>
            <Instagram size={18} />
          </a>
          
          {person.linkedinUrl && (
            <a
              href={person.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={18} />
            </a>
          )}
        </motion.div>

        {/* Expand indicator */}
        <motion.div 
          className="absolute bottom-4 right-4 p-1 rounded-full bg-gray-800/50"
          animate={{
            rotate: isExpanded ? 180 : 0,
            opacity: isHovered ? 1 : 0.6
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp size={16} className="text-gray-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Staggered animation for the grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Team() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2 
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet our team
          </motion.h2>
          
          <motion.p 
            className="mt-6 text-lg/8 text-gray-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </motion.p>
        </div>
        
        <motion.ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {people.map((person) => (
            <motion.li
              key={person.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <TeamMemberCard person={person} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
