"use client";
import { Instagram, Linkedin } from "lucide-react";

const people = [
  {
    name: "Nadun Nissanka",
    role: "Co-founder",
    imageUrl:
      "nadun.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Pradeep Tharanga",
    role: "Co-founder/Manager",
    imageUrl:
      "/tharanga.jpeg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Champika",
    role: "Co-founder/Manager",
    imageUrl:
      "frank.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Lahiru Jayarathna",
    role: "Trainer",
    imageUrl:
      "/lahiru.jpeg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Namina Jayasinghe",
    role: "Trainer",
    imageUrl:
      "/namina.jpeg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Adeesha Sulakshana",
    role: "Junior Trainer",
    imageUrl:
      "/adeesha.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl font-poppins">
            Meet our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-black border border-gray-900 shadow-lg px-8 py-10"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">X</span>
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
