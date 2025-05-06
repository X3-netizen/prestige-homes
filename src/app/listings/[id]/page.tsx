const properties: Property[] = [
    {
      id: 1,
      title: 'Modern 3-Bedroom Apartment',
      location: 'East Legon, Accra',
      price: '$120,000',
      image: '/properties/house1.jpg',
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      type: 'Apartment',
    },
    // Add more properties
  ];
  
  export const Listings: React.FC = () => (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <img src={property.image} alt={property.title} />
          <h2>{property.title}</h2>
          <p>{property.price}</p>
          <a href={`/listings/${property.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
  