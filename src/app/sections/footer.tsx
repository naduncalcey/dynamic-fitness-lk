"use client";

import { Instagram, Linkedin } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const navigation = {
  main: [
    { name: "Packages", href: "#pricing" },
    { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://ca.linkedin.com/company/dynamic-fitness-lk",
      icon: <Linkedin aria-hidden="true" className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dynamicfitness.lk/",
      icon: <Instagram aria-hidden="true" className="h-6 w-6" />,
    },
  ],
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  // Create a memoized version of the handleNavClick function
  const handleNavClick = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(item.href.substring(1));
                }
              }}
              className="text-gray-400 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; {currentYear} Dynamic Fitness Sri Lanka, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
