'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const images = [
    '/slider/real-estate-1.jpg',
    '/slider/real-estate-2.jpg',
    '/slider/real-estate-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen p-8 pb-20 grid grid-rows-[20px_1fr_20px] items-center justify-items-center sm:p-20 font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Prestige Homes</h1>

        {/* Image Slider */}
        <div className="relative w-full max-w-full h-[300px] sm:h-[500px] rounded-lg overflow-hidden shadow-md mx-auto">
          <img
            src={images[currentIndex]}
            alt={`Slider ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Property Search */}
        <div className="w-full max-w-xl mx-auto mt-8">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
          />
          <div className="mt-4 flex gap-4">
            <input
              type="number"
              placeholder="Min Rooms"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600 w-1/2"
            />
            <input
              type="number"
              placeholder="Max Rooms"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600 w-1/2"
            />
            <button
              className="bg-blue-600 text-white rounded-full px-6 py-3 mt-4 sm:mt-0 hover:bg-blue-700 w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
            href="/listings"
            className="rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto flex items-center justify-center"
          >
            Browse Listings
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-gray-600">
        {year && <p>&copy; {year} Prestige Homes. All rights reserved.</p>
        

   } </footer>
    </div>
  );
}
