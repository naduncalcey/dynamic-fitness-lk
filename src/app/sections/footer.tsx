"use client";

import { Instagram, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Packages", href: "#" },
    { name: "Team", href: "#" },
    { name: "Gallery", href: "#" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/100536682",
      icon: <Linkedin aria-hidden="true" className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Instagram aria-hidden="true" className="h-6 w-6" />,
    },
  ],
};

export default function Footer() {
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
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; 2024 Dynamic Fitness Sri Lankna, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
