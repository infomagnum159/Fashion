import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";
import { ADMIN } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";

const ProductCard = ({ elem }) => {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { deleteProduct } = useProduct();
  const handleDelete = () => {
    deleteProduct(elem.id);
    deleteProductFromCart(elem.id);
  };
  const { user } = useAuth();

  return (
    <Card
      sx={{
        height: 750,
        boxShadow: "none",
        margin: "6px",
        width: { md: "30vw", lg: "19vw" },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia sx={{ height: 440, borderRadius: 4 }} image={elem.image} />
      </CardActionArea>
      <CardContent
        sx={{
          padding: "20px 5px 0px 5px",
          display: "flex",
          height: 300,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontSize="20" fontWeight={200} component="div">
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="24px" fontWeight={200}>
          {elem.price}kgs
        </Typography>
        <Typography color="gray" fontSize="20px" fontWeight={200}>
          {elem.description}
        </Typography>

        {user && user.email === ADMIN ? (
          <>
            <Button
              onClick={handleDelete}
              color="secondary"
              variant="outlined"
              size="medium"
            >
              Delete
            </Button>
            <Button
              onClick={() => navigate(`/edit/${elem.id}`)}
              variant="outlined"
              color="primary"
              size="medium"
            >
              Edit
            </Button>
          </>
        ) : (
          <IconButton
            sx={{
              backgroundColor: checkProductInCart(elem.id) ? "black" : "",
              color: checkProductInCart(elem.id) ? "white" : "",
            }}
            onClick={() => addProductToCart(elem)}
          >
            <AddShoppingCart />
          </IconButton>
        )}
      </CardContent>
      <Detail elem={elem} open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProductCard;
