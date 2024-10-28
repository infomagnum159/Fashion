import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { useCart } from "../../context/CartContextProvider";

const Detail = ({ elem, open, handleClose }) => {
  const { addProductToCart, checkProductInCart } = useCart();
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px sollid black",
    boxChadox: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div>
          <img width={300} src={elem.image} alt="" />
        </div>
        <div>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p>{elem.price}</p>
        </div>
        <div style={{ marginTop: "auto" }}>
          {checkProductInCart(elem.id) ? (
            <Button>Already in cart</Button>
          ) : (
            <Button onClick={() => addProductToCart(elem)}>
              Buy for {elem.price}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;

// {AddProduc - принимает объект
