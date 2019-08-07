import React, { Component } from "react";
class Banners extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <img
                src={require("../../assets/images/banners/banner-1.png")}
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src={require("../../assets/images/banners/banner-2.png")} className="img-fluid w-50" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banners;
