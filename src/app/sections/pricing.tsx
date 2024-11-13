"use client";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Full gym access",
  "Free schdeule for beginners",
  "Personal training discounts",
  "Free online community access",
];

export default function Pricing() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-pretty font-poppins text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-6xl">
            Simple no-tricks pricing
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-md font-medium text-gray-400 sm:text-xl/8">
            Experience fitness freedom with our subscription plans. Make your
            fitness journey dynamic as you like.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 bg-black ring-gray-900 shadow-xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-300">
              1 Month membership
            </h3>
            <p className="mt-6 text-base/7 text-gray-400">
              Experience fitness freedom with our lifetime membership – a
              one-time investment in your health journey.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-red-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-gray-400">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-red-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-400">
                  Pay monthly
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    Rs 3500
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                    LKR
                  </span>
                </p>
                <a
                  aria-disabled="true"
                  className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-500"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs/5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 bg-black ring-gray-900 shadow-xl sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-300">
              3 Month membership
            </h3>
            <p className="mt-6 text-base/7 text-gray-400">
              Experience fitness freedom with our 3 months subscription package.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-red-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-gray-400">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-red-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-400">
                  Pay for 3 months
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    Rs 9000
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                    LKR
                  </span>
                </p>
                <a
                  aria-disabled="true"
                  className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-500"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs/5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 bg-black ring-gray-900 shadow-xl sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-300">
              6 Months membership
            </h3>
            <p className="mt-6 text-base/7 text-gray-400">
              Experience fitness freedom with our lifetime membership – a
              one-time investment in your health journey.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-red-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-gray-400">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-red-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-400">
                  Pay for 6 months
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    Rs 15000
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                    LKR
                  </span>
                </p>
                <a
                  aria-disabled="true"
                  className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-500"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs/5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 bg-black ring-gray-900 shadow-xl sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-300">
              Annual membership
            </h3>
            <p className="mt-6 text-base/7 text-gray-400">
              Experience fitness freedom with our lifetime membership – a
              one-time investment in your health journey.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-red-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-gray-400">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-red-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-400">
                  Pay yearly
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    Rs 25000
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                    LKR
                  </span>
                </p>
                <a
                  aria-disabled="true"
                  className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-500"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs/5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
