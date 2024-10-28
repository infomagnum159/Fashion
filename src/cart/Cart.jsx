import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { cart, changeProductCount, deleteProductFromCart, getCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>SubPrice</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((elem) => (
              <TableRow
                key={elem.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component={"th"} scope="row">
                  <img src={elem.item.image} alt="" width={70} />
                </TableCell>
                <TableCell>{elem.item.title}</TableCell>
                <TableCell>{elem.item.category}</TableCell>
                <TableCell>{elem.item.price}</TableCell>
                <TableCell>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={elem.count}
                    onChange={(e) =>
                      changeProductCount(elem.item.id, e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>{elem.subPrice}</TableCell>
                <TableCell>
                  <Button onClick={() => deleteProductFromCart(elem.item.id)}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button>BUY NOW FOR {cart.totalPrice} </Button>
    </div>
  );
};

export default Cart;
