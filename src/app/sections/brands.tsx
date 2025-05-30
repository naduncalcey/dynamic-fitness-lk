import React from 'react';
import Image from 'next/image';

const Brands: React.FC = () => {
  const brands = [
    {
      name: 'Track',
      logo: '/brand-1.svg',
      width: 200,
      height: 28,
    },
    {
      name: 'Sterling Club',
      logo: '/brand-2.svg',
      width: 300,
      height: 28,
    },
    {
      name: 'Sterling Club',
      logo: '/brand-3.svg',
      width: 300,
      height: 28,
    },
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-16 tracking-wide font-poppins">
            Brands We&apos;re Working With
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-32">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group flex items-center justify-center"
              >
                <div className="relative transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="h-auto max-w-full filter brightness-90 hover:brightness-100 transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands; 