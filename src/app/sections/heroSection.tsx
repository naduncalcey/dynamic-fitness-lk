import React from "react";
import { Button } from "@/components/ui/button";

const heroSection = () => {
  return (
          <div
        className="max-w-[1300px] mx-auto border text-gray-50 rounded-3xl mt-6 h-fit lg:h-[700px] bg-[url('/hero-mobile.webp')] lg:bg-[url('/hero.webp')] bg-cover lg:bg-cover bg-center lg:bg-center bg-no-repeat lg:bg-no-repeat"
      >
      <div className="px-8 pt-[140px] py-12  lg:py-60 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl lg:text-5xl font-semibold font-sans text-gray-700">
            Unleash Your Potential at
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold font-sans text-red-500">
            Dynamic Fitness
          </h1>
        </div>
        <div className="mt-6 mb-12">
          <p className="font-mono text-base lg:text-base text-gray-500 max-w-lg">
            Transform your workouts and redefine your limits at Dynamic Fitness,
            where innovation meets inspiration. Elevate your fitness game today
            and discover the dynamic difference!
          </p>
        </div>
        <Button size="lg" className="font-sans text-base font-medium py-4 px-6 lg:py-6 lg:px-8 rounded-full">View Pricing</Button>
      </div>
    </div>
  );
};

export default heroSection;
