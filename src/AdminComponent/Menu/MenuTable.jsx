// MenuTable.js
import {
  Box, Card, CardHeader, IconButton, Paper, Table,
  TableBody, TableCell, TableContainer, TableHead,
  TableRow, Avatar, Typography, Button
} from '@mui/material';
import { Delete, AddCircleOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { MdMenuBook } from "react-icons/md";

const defaultMenus = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cheese Pizza",
    ingredients: "Cheese, Dough, Tomato Sauce",
    price: "₹150",
    availability: "Available"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Grilled Chicken",
    ingredients: "Chicken, Spices, Herbs",
    price: "₹250",
    availability: "Unavailable"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Veggie Burger",
    ingredients: "Lettuce, Tomato, Patty",
    price: "₹180",
    availability: "Available"
  }
];

export default function MenuTable() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const savedMenus = JSON.parse(localStorage.getItem("menus"));
    if (savedMenus && savedMenus.length > 0) {
      setMenus(savedMenus);
    } else {
      setMenus(defaultMenus);
      localStorage.setItem("menus", JSON.stringify(defaultMenus));
    }
  }, []);

  const handleAddMenuClick = () => {
    navigate("/admin/add-menu");
  };

  const handleDelete = (id) => {
    const updatedMenus = menus.filter(menu => menu.id !== id);
    setMenus(updatedMenus);
    localStorage.setItem("menus", JSON.stringify(updatedMenus));
  };

  return (
    <Box className="p-4">
      <Card elevation={3}>
        <CardHeader
          title={
            <Box display="flex" alignItems="center" gap={1}>
              <MdMenuBook size={24} />
              <span>Restaurant Menu</span>
            </Box>
          }
          action={
            <Button
              variant="contained"
              startIcon={<AddCircleOutline />}
              onClick={handleAddMenuClick}
              sx={{ textTransform: "none" }}
            >
              Add Menu
            </Button>
          }
          sx={{ pt: 2, pb: 3 }}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} aria-label="menu table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f50057" }}>
                <TableCell sx={{ color: "#fff" }}>Image</TableCell>
                <TableCell sx={{ color: "#fff" }}>Title</TableCell>
                <TableCell sx={{ color: "#fff" }}>Ingredients</TableCell>
                <TableCell sx={{ color: "#fff" }}>Price</TableCell>
                <TableCell sx={{ color: "#fff" }}>Availability</TableCell>
                <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menus.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Avatar variant="rounded" src={item.image} alt={item.title} sx={{ width: 56, height: 56 }} />
                  </TableCell>
                  <TableCell><Typography fontWeight={500}>{item.title}</Typography></TableCell>
                  <TableCell>{item.ingredients}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.availability}</TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => handleDelete(item.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
