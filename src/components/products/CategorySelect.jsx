import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const CategorySelect = ({ handleInput }) => {
  const { categories, getCategories } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          name="category"
          onChange={handleInput}
        >
          {categories.map((elem) => (
            <MenuItem key={elem.id} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
