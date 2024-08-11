"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

export default function Home() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <>
      <nav className="navigation">
        <div className="container">
          <Image
            src="/branding/LogoCLear.png"
            alt="dynamic-fitness-logo"
            width="120"
            height="48"
          />
          <div className="links">
            <ul className="nav-ul">
              <li id="home" className="link">
                <a href="..">Home</a>
              </li>
              <li id="service" className="link">
                <a href="..">Service</a>
              </li>
              <li id="packages" className="link">
                <a href="..">Packages</a>
              </li>
              <li id="contact" className="link">
                <a href="..">Contact</a>
              </li>
            </ul>
          </div>
          <div className="btn-container">
            <button className="menu-btn" onClick={togglePopover}>
              <MenuIcon className="icon" />
            </button>
            {isPopoverVisible && (
              <div className="popover">
                <ul>
                  
                  <li className="link">
                    <a href=".." >
                      Home
                    </a>
                  </li>
                  <li className="link">
                    <a href=".." >
                      Services
                    </a>
                  </li>
                  <li className="link">
                    <a href=".." >
                      Packages
                    </a>
                  </li>
                  <li className="link">
                    <a href=".." className="link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
