import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { createProduct } = useProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    createProduct(product);
  };
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        onChange={handleInput}
      />
      <CategorySelect handleInput={handleInput} />
      <Button onClick={handleClick} fullWidth variant="contained">
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
