import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavBar, Products } from "./compoenents";
import { URL, config } from "./config/config";
import HomePage from "./pages/HomePage";
const App = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  const fetchBestSellingProducts = async () => {
    const req = await axios.get(URL, config).then(({ data }) => {
      setBestSellingProducts(data?.docs);
      console.log(data?.docs);
    });
  };

  useEffect(() => {
    fetchBestSellingProducts();
  }, [URL]);
  return (
    <>
      <NavBar />
      <HomePage bestSellingProducts={bestSellingProducts} />
    </>
  );
};

export default App;
