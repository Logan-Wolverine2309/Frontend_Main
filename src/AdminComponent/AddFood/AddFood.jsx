import { useState, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, Grid, Card,
  CardMedia, CardContent
} from '@mui/material';
import DemoRestaurants from './MockData'; // ✅ Ensure this path is correct

const AddFood = () => {
  // Assuming Admin only manages the first restaurant in the mock data
  const restaurant = DemoRestaurants[0];

  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: '', description: '', price: '', image: '' });

  useEffect(() => {
    if (restaurant && restaurant.dishes) {
      setDishes(restaurant.dishes);
    }
  }, []);

  const handleAddDish = () => {
    if (!newDish.name || !newDish.price) return;

    const dishId = Date.now();
    const updatedDish = {
      ...newDish,
      id: dishId,
      restaurantId: restaurant.id
    };

    setDishes(prev => [...prev, updatedDish]);
    setNewDish({ name: '', description: '', price: '', image: '' });
  };

  return (
    <Box p={4}>
      <Typography variant="h4">{restaurant.name}</Typography>
      <Typography variant="body1" mb={3}>{restaurant.description}</Typography>

      <Typography variant="h6" mb={2}>Add a New Dish</Typography>
      <Grid container spacing={2}>
        {['name', 'price', 'description', 'image'].map(field => (
          <Grid item xs={12} sm={6} key={field}>
            <TextField
              fullWidth
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={newDish[field]}
              onChange={(e) => setNewDish({ ...newDish, [field]: e.target.value })}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddDish}>
            Add Dish
          </Button>
        </Grid>
      </Grid>

      {dishes.length > 0 && (
        <>
          <Typography variant="h6" mt={4}>Existing Dishes</Typography>
          <Grid container spacing={2} mt={1}>
            {dishes.map(dish => (
              <Grid item key={dish.id} xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={dish.image || 'https://via.placeholder.com/140'}
                    alt={dish.name}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">{dish.name}</Typography>
                    <Typography variant="body2">{dish.description}</Typography>
                    <Typography variant="body2">₹{dish.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default AddFood;