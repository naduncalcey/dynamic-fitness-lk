"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

type PricingTier = {
  name: string;
  id: string;
  href: string;
  price: string;
  description: string;
  features: string[];
  mostPopular: boolean;
};

const individualPricing: PricingTier[] = [
  {
    name: "Monthly",
    id: "tier-individual-monthly",
    href: "#",
    price: "LKR 3500",
    description: "Monthly plan for individuals.",
    features: ["Full gym access", "Free training schedule"],
    mostPopular: false,
  },
  {
    name: "3 Months",
    id: "tier-individual-3months",
    href: "#",
    price: "LKR 9000",
    description: "3-month plan for individuals.",
    features: ["Full gym access", "Free training schedule"],
    mostPopular: false,
  },
  {
    name: "6 Months",
    id: "tier-individual-6months",
    href: "#",
    price: "LKR 15000",
    description: "6-month plan for individuals.",
    features: ["Full gym access", "Free training schedule"],
    mostPopular: true,
  },
  {
    name: "12 Months",
    id: "tier-individual-12months",
    href: "#",
    price: "LKR 25000",
    description: "12-month plan for individuals.",
    features: ["Full gym access", "Free training schedule"],
    mostPopular: false,
  },
];

const couplePricing: PricingTier[] = [
  {
    name: "6 Months",
    id: "tier-couple-6months",
    href: "#",
    price: "LKR 22000",
    description: "6-month plan for couples.",
    features: ["Full gym access", "Free training schedule"],
    mostPopular: false,
  },
  {
    name: "12 Months",
    id: "tier-couple-12months",
    href: "#",
    price: "LKR 35000",
    description: "12-month plan for couples.",
    features: ["Full gym access", "Free training schedule"],
    mostPopular: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [tab, setTab] = useState<"individual" | "couple">("individual");

  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl font-poppins">
            Simple no-tricks pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
        Experience fitness freedom with our subscription plans. Make your fitness journey dynamic as you like.
        </p>
        <div className="flex justify-center w-full">
        <div className="mt-8 flex justify-center border border-red-600 w-fit rounded-lg p-1">
          <button
            onClick={() => setTab("individual")}
            className={classNames(
              tab === "individual"
                ? "bg-red-600 text-white"
                : "text-red-600 font-medium",
              "px-4 py-2 rounded-md"
            )}
          >
            Individual
          </button>
          <button
            onClick={() => setTab("couple")}
            className={classNames(
              tab === "couple" ? "bg-red-600 text-white" : "text-red-600 font-medium",
              "ml-4 px-4 py-2 rounded-md"
            )}
          >
            Couple
          </button>
        </div>
        </div>
        <div className="flex justify-center mt-10">
          {tab === "individual" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {individualPricing.map((tier: PricingTier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "ring-2 ring-red-600"
                      : "ring-1 ring-gray-500",
                    "rounded-3xl p-8 bg-black"
                  )}
                >
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-red-600" : "text-gray-400",
                      "text-lg/8 font-semibold"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm/6 text-gray-300">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {tier.price}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm/6 text-gray-600"
                  >
                    {tier.features.map((feature: string) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="h-6 w-5 flex-none text-red-600"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {tab === "couple" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-content">
              {couplePricing.map((tier: PricingTier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "ring-2 ring-red-600"
                      : "ring-1 ring-gray-500",
                    "rounded-3xl p-8"
                  )}
                >
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-red-600" : "text-gray-400",
                      "text-lg/8 font-semibold"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm/6 text-gray-300">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {tier.price}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm/6 text-gray-600"
                  >
                    {tier.features.map((feature: string) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="h-6 w-5 flex-none text-red-600"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
