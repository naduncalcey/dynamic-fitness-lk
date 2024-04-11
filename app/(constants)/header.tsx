"use client";

import React, { useState } from "react";
import Button from "../components/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed z-40 w-full top-0 bg-black">
      <div className="flex justify-between mx-auto max-w-[1200px] px-5 py-4">
        <div>
          <img
            src="LogoClear.svg"
            alt="brand-logo"
            className="w-auto h-[40px]"
          />
        </div>
        <div className="flex gap-5 items-center relative">
          <div className="hidden md:inline-block">
            <a
              className="text-white hover:text-brand-ternary transition-all duration-300 hidden md:inline-block"
              href="#"
            >
              Services
            </a>
          </div>
          <div className="hidden md:inline-block">
            <a
              className="text-white hover:text-brand-ternary transition-all duration-300"
              href="#"
            >
              Pricing
            </a>
          </div>
          <div className="hidden md:inline-block">
            <a
              className="text-white hover:text-brand-ternary transition-all duration-300"
              href="#"
            >
              Opening Hours
            </a>
          </div>
          <div className="hidden md:inline-block">
            <Button variant="primary">Join Us</Button>
          </div>
          {/* Mobile menu icon */}
          <div
            className="md:hidden inline-block"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu color="white" />
          </div>
          {isMobileMenuOpen && (
            <div className="absolute top-[35px] right-0 bg-white rounded-md md:hidden">
              <div className="relative p-6">
                <div className="absolute top-2 right-2">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X color="black" />
                  </button>
                </div>
                <div className="flex flex-col w-[160px] py-2 gap-4">
                  <div>Services</div>
                  <div>Pricing</div>
                  <div>Open Hours</div>
                  <div>
                    <Button variant="primary">Join Us</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
