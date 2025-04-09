'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const images = [
    '/slider/real-estate-1.jpg',
    '/slider/real-estate-2.jpg',
    '/slider/real-estate-3.jpg'
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 grid grid-rows-[20px_1fr_20px] items-center justify-items-center sm:p-20 font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <h1 className="text-4xl font-bold text-gray-900 text-center">X3 Homes</h1>

        <div className="relative w-full max-w-4xl h-[300px] sm:h-[500px] rounded-lg overflow-hidden shadow-md">
        <img
  src={images[currentIndex]}
  alt={`Slider ${currentIndex + 1}`}
  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
/>

        </div>

        <p className="text-lg text-gray-600 text-center max-w-lg">
          Discover the best properties in New York City. We help you find your dream home with ease.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto flex items-center justify-center"
            href="/listings"
          >
            Browse Listings
          </a>
          <a
            className="rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] flex items-center justify-center"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} X3 Homes. All rights reserved.</p>
      </footer>
    </div>
  );
}
