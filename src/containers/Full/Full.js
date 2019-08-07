import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Banners from "../../components/Banners/Banners";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import BannerBottom from "../../components/BannerBottom/BannerBottom";
import Footer from "../../components/Footer/Footer";
class Full extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body" style={{ backgroundColor: "#f6f7f9" }}>
          <Banners />
          <Categories />
          <Products />
          <BannerBottom />
        
          <Footer />
        </div>
      </div>
    );
  }
}

export default Full;
