'use client';

import React from 'react';

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
};

const Listings: React.FC = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: 'Modern 3-Bedroom Apartment',
      location: 'East Legon, Accra',
      price: '$120,000',
      image: '/properties/house1.jpg',
    },
    {
      id: 2,
      title: 'Luxury Villa with Pool',
      location: 'Cantonments, Accra',
      price: '$850,000',
      image: '/properties/house2.jpg',
    },
    {
      id: 3,
      title: 'Affordable 2-Bedroom Flat',
      location: 'Kasoa, Central Region',
      price: '$45,000',
      image: '/properties/house3.jpg',
    },
  ];

  return (
    <div className="min-h-screen p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Browse Listings</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div key={property.id} className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img src={property.image} alt={property.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-600 font-bold mt-2">{property.price}</p>
              <a
                href={`/listings/${property.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
