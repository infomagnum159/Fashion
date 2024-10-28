import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import PaginationControlled from "./Pagination";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  //  текущая страница
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  //  кол-во пролуктов на одной странице
  const itemPerPage = 6;
  // общее кол-во страниц
  const count = Math.ceil(products.length / itemPerPage);
  console.log(products);

  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    const endinIndex = beginIndex + itemPerPage;
    return products.slice(beginIndex, endinIndex);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} handleChange={handleChange} />
        ))}
      </Box>
      <PaginationControlled
        page={page}
        count={count}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
