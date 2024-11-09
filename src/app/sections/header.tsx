"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const Header = () => {
  const featurableWidgetId = "606a865e-ea5f-4c1f-a49f-c63b5ece55c8";
  return (
    <div className="min-h-[900px] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gym-hero.webp"
          alt="Gym Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Header Content */}
      <div className="relative z-10 bg-slate-900 bg-opacity-40 min-h-[900px]">
        <div className="border-b border-gray-800 font-poppins bg-slate-900 bg-opacity-20">
          <div className="flex text-sm justify-between container max-w-[1400px] px-4 py-3 lg:px-10 lg:py-6 mx-auto text-white">
            <div>Gym facility in Maharagama</div>
            <div>
              <Link
                href="tel:+94772403117"
                className="hover:text-red-600 font-medium"
              >
                Nadun: +9477 240 3117
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-sm justify-between container max-w-[1400px] px-4 py-2 lg:px-10 lg:py-5 mx-auto">
            <div>
              <Image
                src="/logo.png"
                alt="dynamicfitness.lk"
                width={120}
                height={20}
                className="w-auto h-12"
              />
            </div>
            <div>
              <Button size="lg" className="rounded-full">Join us today</Button>
            </div>
          </div>
        </div>
        <div className="container max-w-[1400px] mx-auto px-6 lg:px-10 mt-48 text-center text-white h-full">
          <div className="max-w-[768px] mx-auto">
            <h1 className="text-3xl lg:text-[58px] font-semibold font-sans !leading-[120%]">
              Crush your health and fitness goals in no time
            </h1>
            <p className="text-sm lg:text-lg mt-8 mb-6 font-poppins max-w-[540px] mx-auto">
              It doesn’t matter if your goal is to get stronger, burn fat, or to
              just stay fit our world class coaches will guide you every step of
              the way.
            </p>
            <div>
              <Button className="rounded-full" size="lg">
                Membership Packages
              </Button>
            </div>
            <div className="mt-20">
              <ReactGoogleReviews
                layout="badge"
                featurableId={featurableWidgetId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
