"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-950 shadow border-b border-gray-900 sticky top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex shrink-0 items-center">
              <img
                alt="Dynamic fitness Sri Lanka"
                src="/Logo.png"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-red-500 px-1 pt-1 text-sm font-medium text-white"
              >
                Packages
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-200 hover:text-gray-100"
              >
                Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-200 hover:text-gray-100"
              >
                Gallery
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <PhoneIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                Call us now
              </button>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-red-500 bg-gray-900 py-2 pl-3 pr-4 text-base font-medium text-red-700 sm:pl-5 sm:pr-6"
          >
            Packages
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-400 hover:border-gray-300 hover:bg-gray-950 hover:text-gray-300 sm:pl-5 sm:pr-6"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-400 hover:border-gray-300 hover:bg-gray-950 hover:text-gray-300 sm:pl-5 sm:pr-6"
          >
            Gallery
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
