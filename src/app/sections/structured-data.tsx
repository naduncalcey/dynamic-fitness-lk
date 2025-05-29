"use client";

import React from "react";
import Script from "next/script";

export default function StructuredData() {
  // JSON-LD structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Dynamic Fitness (Pvt) Ltd",
    "image": "https://dynamicfitness.lk/",
    "url": "https://dynamicfitness.lk",
    "telephone": "+94XXXXXXXXX", // Replace with actual phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street", // Replace with actual address
      "addressLocality": "Maharagama",
      "addressRegion": "Western Province",
      "postalCode": "10280",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.8481, // Replace with actual coordinates
      "longitude": 79.9211
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "description": "Dynamic Fitness is a premium gym and fitness center in Maharagama, Colombo, Sri Lanka. We offer personal training, group classes, and state-of-the-art equipment for all fitness levels."
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 