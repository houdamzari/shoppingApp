import React from "react";
import { Product, BestSellingProducts } from "../compoenents";
const HomePage = ({ bestSellingProducts }) => {
  return (
    <>
      <BestSellingProducts bestSellingProducts={bestSellingProducts} />
    </>
  );
};

export default HomePage;
