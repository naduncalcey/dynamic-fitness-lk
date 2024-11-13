"use client";

import React from "react";
import Navbar from "./sections/navbar";
import Pricing from "./sections/pricing";
import Team from "./sections/team";
import Footer from "./sections/footer";
import CTA from "./sections/cta";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      <CTA />
      <Team />
      <Footer />
    </main>
  );
}
