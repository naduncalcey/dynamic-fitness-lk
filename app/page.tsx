"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  MenuIcon,
} from "lucide-react";

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
                    <a href="..">Home</a>
                  </li>
                  <li className="link">
                    <a href="..">Services</a>
                  </li>
                  <li className="link">
                    <a href="..">Packages</a>
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
      <footer className="footer">
        <div className="container">
          <div className="sub-container-1">
            <div className="instagram">
              <a href="..">
                <Instagram className="instagram-icon" />
              </a>
            </div>
            <div className="linkedin">
              <a href="..">
                <Linkedin />
              </a>
            </div>
            <div className="facebook">
              <a>
                <Facebook />
              </a>
            </div>
          </div>

          <div className="sub-container-2">
            <ul className="section-1">
              <li>©2024 Lakindu</li>
              <li>
                <a href="..">Section</a>
              </li>
              <li>
                <a href="..">Terms</a>
              </li>
              <li>
                <a href="..">Privacy</a>
              </li>
              <li>
                <a href="..">Home</a>
              </li>
              <li>
                <a href="..">About</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
