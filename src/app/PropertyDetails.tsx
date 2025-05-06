import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PropertyDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProperty = properties.find(p => p.id === parseInt(id as string));
      setProperty(foundProperty || null);
    }
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <img src={property.image} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <p>Type: {property.type}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Kitchen: {property.kitchen}</p>
    </div>
  );
};

export default PropertyDetails;
