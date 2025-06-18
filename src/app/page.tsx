import React from "react";
import type { Metadata } from "next";
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
      </main>
    </>
  );
}
