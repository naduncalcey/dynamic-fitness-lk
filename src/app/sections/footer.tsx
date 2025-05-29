"use client";

import { Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const navigation = {
  company: [
    { name: "About Us", href: "#team" },
    { name: "Our Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#cta" },
  ],
  services: [
    { name: "Personal Training", href: "#pricing" },
    { name: "Group Classes", href: "#pricing" },
    { name: "Membership Plans", href: "#pricing" },
    { name: "Equipment Access", href: "#pricing" },
  ],
  support: [
    { name: "Help Center", href: "#cta" },
    { name: "Safety Guidelines", href: "#cta" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://ca.linkedin.com/company/dynamic-fitness-lk",
      icon: <Linkedin aria-hidden="true" className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dynamicfitness.lk/",
      icon: <Instagram aria-hidden="true" className="h-5 w-5" />,
    },
  ],
};

const contactInfo = {
  address: "349/A Avissawella Rd, Maharagama 10280",
  phone: "+94 77 240 3117",
  email: "nadun.n@dynamicfitness.lk",
  hours: {
    weekdays: "Mon - Sat: 5:00 AM - 11:00 PM",
    sunday: "Sunday: 5:30 AM - 11:30 AM"
  }
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
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Company info section */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                alt="Dynamic Fitness Sri Lanka"
                src="/Logo.svg"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Transform your workouts and redefine your limits at Dynamic Fitness, 
              where innovation meets inspiration. Elevate your fitness game today and 
              discover the dynamic difference!
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-6 lg:gap-12">
            {/* Company links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Company</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(item.href.substring(1));
                        }
                      }}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Services</h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(item.href.substring(1));
                        }
                      }}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Support</h4>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(item.href.substring(1));
                        }
                      }}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operating hours */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins flex items-center">
              <Clock className="h-5 w-5 text-red-600 mr-2" />
              Opening Hours
            </h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-xs leading-relaxed">
                {contactInfo.hours.weekdays}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                {contactInfo.hours.sunday}
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-6">
              <a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('cta');
                }}
                className="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-900 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Dynamic Fitness (Pvt) Ltd. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
