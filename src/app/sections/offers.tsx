import React from "react";
import Image from "next/image";

const offerCards = [
  {
    title: "CrossFit Group Classes",
    image: "/placeholder.png", // Replace with actual image path
  },
  {
    title: "Strength Training",
    image: "/placeholder.png", // Replace with actual image path
  },
  {
    title: "Personal Training",
    image: "/placeholder.png", // Replace with actual image path
  },
  {
    title: "Member Only Events",
    image: "/placeholder.png", // Replace with actual image path
  },
];

const Offers = () => {
  return (
    <section className="bg-gray-900">
      <div className="container max-w-[1400px] mx-auto py-20 lg:py-32">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-16 px-6">
          We offer something for{" "}
          <span className="block mt-2">everybody</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {offerCards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-2xl md:text-3xl font-medium text-white text-center font-poppins">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
