import React from 'react';
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
    <div>Not Found</div>
  );
} 