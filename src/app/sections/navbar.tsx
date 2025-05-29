"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

// Throttle function to limit how often a function can be called
function throttle<T extends (...args: unknown[]) => unknown>(func: T, delay: number) {
  let lastCall = 0;
  return function (...args: Parameters<T>) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  // Use a ref to access the current active section inside the effect
  const activeSectionRef = useRef(activeSection);
  
  // Update the ref whenever activeSection changes
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Create a memoized version of the handleNavClick function
  const handleNavClick = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  useEffect(() => {
    // This order must match the visual order on the page
    const sections = ["hero", "pricing", "cta", "team"];
    
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const navbarHeight = 64; // 4rem or 64px (h-16)
      
      // If we're at the top of the page, set hero as active
      if (scrollPosition < 100) {
        if (activeSectionRef.current !== "hero") {
          setActiveSection("hero");
        }
        return;
      }
      
      // Find the section that is currently in view
      // Iterate from bottom to top to handle overlapping sections better
      let foundActive = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / rect.height;
          
          // If at least 30% of the section is visible or the top of the section is in view
          if (
            (visiblePercentage > 0.3 || (rect.top <= navbarHeight + 20 && rect.bottom >= navbarHeight)) &&
            !foundActive
          ) {
            if (activeSectionRef.current !== section) {
              setActiveSection(section);
            }
            foundActive = true;
            break;
          }
        }
      }
      
      // If no section is prominently visible, use the one closest to the top of the viewport
      if (!foundActive) {
        let closestSection = null;
        let closestDistance = Infinity;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - navbarHeight);
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = section;
            }
          }
        }
        
        if (closestSection && activeSectionRef.current !== closestSection) {
          setActiveSection(closestSection);
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Initial check with a delay to ensure DOM is ready
    const initialCheckTimeout = setTimeout(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(initialCheckTimeout);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <Disclosure as="nav" className="bg-gray-950 shadow border-b border-gray-900 sticky top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex shrink-0 items-center">
              <a 
                href="#hero" 
                onClick={() => handleNavClick("hero")}
              >
                <Image
                  alt="Dynamic fitness Sri Lanka"
                  src="/Logo.svg"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#hero"
                onClick={() => handleNavClick("hero")}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  activeSection === "hero"
                    ? "border-red-500 text-white"
                    : "border-transparent text-gray-400 hover:border-gray-200 hover:text-gray-100"
                }`}
              >
                Home
              </a>
              <a
                href="#pricing"
                onClick={() => handleNavClick("pricing")}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  activeSection === "pricing"
                    ? "border-red-500 text-white"
                    : "border-transparent text-gray-400 hover:border-gray-200 hover:text-gray-100"
                }`}
              >
                Packages
              </a>
              <a
                href="#cta"
                onClick={() => handleNavClick("cta")}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  activeSection === "cta"
                    ? "border-red-500 text-white"
                    : "border-transparent text-gray-400 hover:border-gray-200 hover:text-gray-100"
                }`}
              >
                Community
              </a>
              <a
                href="#team"
                onClick={() => handleNavClick("team")}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  activeSection === "team"
                    ? "border-red-500 text-white"
                    : "border-transparent text-gray-400 hover:border-gray-200 hover:text-gray-100"
                }`}
              >
                Team
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="shrink-0">
              <a
                href="tel:+94772403117"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <PhoneIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                Call us now
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#hero"
            onClick={() => handleNavClick("hero")}
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
              activeSection === "hero"
                ? "border-red-500 bg-gray-900 text-red-700"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:bg-gray-950 hover:text-gray-300"
            } sm:pl-5 sm:pr-6`}
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#pricing"
            onClick={() => handleNavClick("pricing")}
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
              activeSection === "pricing"
                ? "border-red-500 bg-gray-900 text-red-700"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:bg-gray-950 hover:text-gray-300"
            } sm:pl-5 sm:pr-6`}
          >
            Packages
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#cta"
            onClick={() => handleNavClick("cta")}
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
              activeSection === "cta"
                ? "border-red-500 bg-gray-900 text-red-700"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:bg-gray-950 hover:text-gray-300"
            } sm:pl-5 sm:pr-6`}
          >
            Contact
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#team"
            onClick={() => handleNavClick("team")}
            className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
              activeSection === "team"
                ? "border-red-500 bg-gray-900 text-red-700"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:bg-gray-950 hover:text-gray-300"
            } sm:pl-5 sm:pr-6`}
          >
            Team
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
