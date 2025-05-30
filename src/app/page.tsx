import React from "react";
import type { Metadata } from "next";
import Navbar from "./sections/navbar";
import Pricing from "./sections/pricing";
import Team from "./sections/team";
import Footer from "./sections/footer";
import CTA from "./sections/cta";
import Hero from "./sections/hero";
import Brands from "./sections/brands";
import StructuredData from "./sections/structured-data";

export const metadata: Metadata = {
  title: "Dynamic Fitness | Premium Gym in Maharagama, Colombo",
  description: "Join Dynamic Fitness, the premier gym in Maharagama offering personal training, group classes, and state-of-the-art equipment for all fitness levels.",
  alternates: {
    canonical: "https://dynamicfitness.lk",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="brands" className="scroll-mt-16">
          <Brands />
        </section>
        <section id="pricing" className="scroll-mt-16">
          <Pricing />
        </section>
        <section id="cta" className="scroll-mt-16">
          <CTA />
        </section>
        <section id="team" className="scroll-mt-16">
          <Team />
        </section>
        <Footer />
      </main>
    </>
  );
}
