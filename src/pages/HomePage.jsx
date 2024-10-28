import React from "react";
import HeaderHomePage from "../components/homePage/HeaderHomePage";
import NewArrivals from "../components/homePage/NewArrivals";
import TopSelling from "../components/homePage/TopSeling";
import BrowseDress from "../components/homePage/BrowseDress";

const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <NewArrivals />
      <TopSelling />
      <BrowseDress />
    </div>
  );
};

export default HomePage;
