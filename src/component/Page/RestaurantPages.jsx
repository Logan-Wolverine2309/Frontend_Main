// src/pages/RestaurantPage.jsx
import { useParams } from 'react-router-dom';
import demoRestaurants from '../Home/DemoRestaurants';

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = demoRestaurants.find(r => r.id === Number(id));

  if (!restaurant) {
    return <div style={{ color: 'white' }}>Restaurant not found</div>;
  }

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} width="400" />
      <p>{restaurant.description}</p>
      <p>Location: {restaurant.city}</p>
      <p>Status: {restaurant.isOpen ? 'Open' : 'Closed'}</p>
    </div>
  );
}
