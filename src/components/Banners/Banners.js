import React, { Component } from "react";
import banner1 from "../../assets/images/banners/banner-1.png";
import banner2 from "../../assets/images/banners/banner-2.png";
class Banners extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid px-0">
          <div class="row mx-0">
            <div class="col-12 px-0">
              <img src={banner1} class="img-fluid w-100" />
            </div>
          </div>
        </div>

        <div class="container-fluid mt-3">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <img src={banner2} class="img-fluid w-50" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banners;
