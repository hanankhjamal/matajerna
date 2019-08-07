import React, { Component } from "react";

import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import mobileBrand from "../../assets/images/banners/mobile-brand.png";
import playstore from "../../assets/images/banners/playstore.png";
import appstore from "../../assets/images/banners/appstore.png";
class BannerBottom extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid px-0 mt-4 mb-5">
        <div class="row mx-0">
          <div
            class="col-12 px-0 d-flex flex-row  justify-content-center"
            style={{
              backgroundImage:
                "linear-gradient(109deg, #39b1e8 0%, #0042c6 100%)",
              width: "100%",
              height: 165,
              overflow: "hidden"
            }}
          >
            <div className="d-flex justify-content-center mt-2">
              <img src={mobileBrand} style={{ height: 270 }} />
            </div>
            <div
              className="d-flex  align-items-center"
              style={{
                width: "25%"
              }}
            >
              <p
                style={{
                  color: "#ffffff",
                  fontSize: 32,
                  fontWeight: 400,
                  marginRight: 30,
                  fontFamily:'Noto Kufi Arabic',
                  textAlign: "right"
                }}
              >
                {"حمل تطبيق متاجرنا على موبايلك"}
              </p>
            </div>
            <div
              className="d-flex flex-row align-items-center"
              style={{ marginRight: 50 }}
            >
              <div>
                <img src={playstore} style={{ width: 158, height: 53 }} />
                <img src={appstore} style={{ width: 143, height: 39 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerBottom;
