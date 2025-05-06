// src/app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-black inline-block pb-2">
          About Prestige Homes
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
  At <span className="font-semibold text-red-600">Prestige Homes</span>, 
  our homes blend modern luxury with elements of natural beauty. The minimalist design features align with our mission to deliver elegant Zen Homes.
</p>

        <p className="text-lg leading-relaxed mb-6">
         From the oldest Estates to Modern sitesreal estate, Prestige Homes blends local expertise with Minimilist homes. 
         We specialize in sales, rental, and lease.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          We are dedicated to providing seamless transactions, personalized property matches and exclusive listings.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Premium property portfolio</li>
            <li>Personalized concierge-style service</li>
            <li>Decades of combined Ghanaian Estate experience</li>
            <li>Seamless digital transactions</li>
            <li>Discretion, professionalism, and results</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
