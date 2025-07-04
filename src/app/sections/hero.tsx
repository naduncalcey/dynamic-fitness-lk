"use client";

import { useState } from "react";

export default function Hero() {
  const [video1Loading, setVideo1Loading] = useState(true);
  const [video2Loading, setVideo2Loading] = useState(true);
  const [video3Loading, setVideo3Loading] = useState(true);

  const VideoSkeleton = () => (
    <div className="aspect-[2/3] w-full rounded-xl bg-gray-800 animate-pulse shadow-lg">
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-gray-600 border-t-red-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-950">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-red-900 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-red-500/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f34646] to-[#46010f] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <a href="https://ebadge.bestweb.lk/api/v1/clicked/dynamicfitness.lk/BestWeb/2025/Rate_Us">
                    <img
                      src="https://ebadge.bestweb.lk/eBadgeSystem/domainNames/dynamicfitness.lk/BestWeb/2025/Rate_Us/image.png"
                      alt="logo"
                      width="200"
                      height="200"
                    />
                  </a>
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl font-poppins">
                    Unleash Your Potential at Dynamic Fitness!
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Transform your workouts and redefine your limits at Dynamic
                    Fitness, where innovation meets inspiration. Elevate your
                    fitness game today and discover the dynamic difference!
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-red-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Call us now
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      {video1Loading && <VideoSkeleton />}
                      <video
                        src="/hero/video1.mp4"
                        className={`aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg ${
                          video1Loading
                            ? "opacity-0 absolute inset-0"
                            : "opacity-100"
                        }`}
                        autoPlay
                        loop
                        muted
                        onLoadedData={() => setVideo1Loading(false)}
                        onCanPlay={() => setVideo1Loading(false)}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="/gym-1.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      {video2Loading && <VideoSkeleton />}
                      <video
                        src="/hero/video2.mp4"
                        className={`aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg ${
                          video2Loading
                            ? "opacity-0 absolute inset-0"
                            : "opacity-100"
                        }`}
                        autoPlay
                        loop
                        muted
                        onLoadedData={() => setVideo2Loading(false)}
                        onCanPlay={() => setVideo2Loading(false)}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="/gym-2.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      {video3Loading && <VideoSkeleton />}
                      <video
                        src="/hero/video3.mp4"
                        className={`aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg ${
                          video3Loading
                            ? "opacity-0 absolute inset-0"
                            : "opacity-100"
                        }`}
                        autoPlay
                        loop
                        muted
                        onLoadedData={() => setVideo3Loading(false)}
                        onCanPlay={() => setVideo3Loading(false)}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
