import React, { useState } from "react";
import AddProduct from "../components/products/AddProduct";
import AddCategory from "../components/products/AddCategory";
import { Button } from "@mui/material";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Add Category</Button>
      <AddProduct />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
