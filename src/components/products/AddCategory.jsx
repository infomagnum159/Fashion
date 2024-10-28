import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const AddCategory = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "30%",
    lest: "30%",
    width: 700,
    display: "flex",
    border: "2px sollid black",
    boxChadox: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const { createcategory } = useProduct();
  const [category, setCategory] = useState("");
  const gandleClick = () => {
    if (!category.trim()) {
      alert("Введите данные");
      return;
    }
    const newCategory = {
      name: category,
    };
    createcategory(newCategory);
    setCategory("");
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title">Add new category</Typography>
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button onClick={gandleClick}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategory;
