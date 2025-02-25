import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Dynamic Fitness',
  description: 'Sorry, the page you are looking for does not exist. Return to Dynamic Fitness homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
      >
        Return to Homepage
      </Link>
      
      <div className="mt-12">
        <h3 className="text-xl font-medium mb-4">You might be looking for:</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="text-red-400 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#pricing" className="text-red-400 hover:underline">
              Membership Plans
            </Link>
          </li>
          <li>
            <Link href="/#team" className="text-red-400 hover:underline">
              Our Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 