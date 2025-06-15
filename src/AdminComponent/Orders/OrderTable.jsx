import React, { useState } from 'react';
import {
  Box,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Chip,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';
import { IoFastFoodSharp } from "react-icons/io5";

export default function OrderTable({ filter = "All" }) {
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg",
      customerEmail: "shruti18@gmail.com",
      price: "₹250",
      name: "Biryani",
      ingredients: "Rice, Chicken, Spices",
      status: "Completed",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg",
      customerEmail: "rahul02@gmail.com",
      price: "₹180",
      name: "Biryani",
      ingredients: "Rice, Spices",
      status: "Preparing",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/17433352/pexels-photo-17433352/free-photo-of-combination-plate-with-maharstrian-food.jpeg",
      customerEmail: "shruti@gmail.com",
      price: "₹250",
      name: "Biryani",
      ingredients: "Rice, Chicken, Spices",
      status: "Completed",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/17433352/pexels-photo-17433352/free-photo-of-combination-plate-with-maharstrian-food.jpeg",
      customerEmail: "rahul@gmail.com",
      price: "₹180",
      name: "Paneer Tikka",
      ingredients: "",
      status: "Cancelled",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
      customerEmail: "shruti@gmail.com",
      price: "₹250",
      name: "Pizza",
      ingredients: "Rice, Chicken, Spices",
      status: "Completed",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
      customerEmail: "rahul@gmail.com",
      price: "₹250",
      name: "Paneer Tikka",
      ingredients: "Extra cheese and Chicken",
      status: "Preparing",
    },
     {
    id: 7,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 10,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 13,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 14,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 15,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 16,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 17,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 18,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 19,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 20,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 21,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 22,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 23,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 24,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "success";
      case "preparing":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const handleStatusClick = (order) => {
    if (order.status === "Preparing") {
      setSelectedOrder(order);
      setDialogOpen(true);
    }
  };

  const handleConfirm = () => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === selectedOrder.id
          ? { ...order, status: "Completed" }
          : order
      )
    );
    setDialogOpen(false);
    setSnackbarOpen(true);
    setSelectedOrder(null);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true;
    if (filter === "Pending") return order.status.toLowerCase() === "preparing";
    if (filter === "Completed") return order.status.toLowerCase() === "completed";
    if (filter === "Cancelled") return order.status.toLowerCase() === "cancelled";
    return true;
  });

  return (
    <Box className="p-4">
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#f50057' }}>
              <IoFastFoodSharp />
            </Avatar>
          }
          title={<Typography variant="h6">All Orders</Typography>}
          sx={{ pt: 2, pb: 2 }}
        />

        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ minWidth: 750 }} aria-label="order table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f50057' }}>
                <TableCell sx={{ color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ color: '#fff' }}>Image</TableCell>
                <TableCell sx={{ color: '#fff' }}>Customer Email</TableCell>
                <TableCell sx={{ color: '#fff' }}>Price</TableCell>
                <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                <TableCell sx={{ color: '#fff' }}>Ingredients</TableCell>
                <TableCell sx={{ color: '#fff' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No orders found for selected status.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Avatar src={row.image} alt={row.name} variant="rounded" />
                    </TableCell>
                    <TableCell>{row.customerEmail}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.ingredients || '-'}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        clickable={row.status === "Preparing"}
                        onClick={() => handleStatusClick(row)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirm Status Change</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to mark this order as <strong>Completed</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Order status updated to "Completed"
        </Alert>
      </Snackbar>
    </Box>
  );
}