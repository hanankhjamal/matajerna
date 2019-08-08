import React, { Component } from "react";

import mobileBrand from "../../assets/images/banners/mobile-brand.png";
import playstore from "../../assets/images/banners/playstore.png";
import appstore from "../../assets/images/banners/appstore.png";
import { Row, Col } from "reactstrap";
class BannerBottom extends Component {
  state = {};
  render() {
    return (
      <Row
        className="p-0 m-0"
        style={{
          backgroundImage: "linear-gradient(109deg, #39b1e8 0%, #0042c6 100%)",
          width: "100%",
          height: 165,
          overflow: "hidden"
        }}
      >
        <Col xs={2} md={4} className='d-flex  justify-content-center align-items-center'>
          <div className="d-flex justify-content-center mt-2" style={{marginRight:100}}>
            <img
              src={mobileBrand}
              className="img-responsive"
            />
          </div>
        </Col>
        <Col xs={4}  style={{marginTop:'3.8%'}}>
          <h4
            style={{
              color: "#ffffff",
              fontWeight: 400,
              marginRight: 30,
              fontFamily: "Noto Kufi Arabic",
              textAlign: "right"
            }}
          >
            {"حمل تطبيق متاجرنا"}
          </h4>
          <h4
            style={{
              color: "#ffffff",
              fontWeight: 400,
              marginRight: 30,
              fontFamily: "Noto Kufi Arabic",
              textAlign: "right"
            }}
          >
            {" على موبايلك"}
          </h4>
        </Col>
        <Col xs={6} md={4} className='d-flex  justify-content-start '  style={{marginTop:'3.8%'}}>
          <div>
            <img
              src={playstore}
              className="img-responsive"
              style={{ width: 158, height: 53 }}
            />
            <img
              src={appstore}
              className="img-responsive"
              style={{ width: 143, height: 39 }}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default BannerBottom;

/**
 * 
 *   <div className="container-fluid px-0 mt-4 mb-5">
          <div
            className="col-12 px-0 d-flex flex-row align-items-center  justify-content-center"
            style={{
              backgroundImage:
                "linear-gradient(109deg, #39b1e8 0%, #0042c6 100%)",
              width: "100%",
              height: 165,
              overflow: "hidden"
            }}
          >
            <div className="d-flex justify-content-center mt-2">
              <img src={mobileBrand} className='img-responsive' style={{ height: '150%' }} />
            </div>
            <div
              className="d-flex align-items-center"
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontWeight: 400,
                  marginRight: 30,
                  fontFamily:'Noto Kufi Arabic',
                  textAlign: "right"
                }}
              >
                {"حمل تطبيق متاجرنا على موبايلك"}
              </h3>
            </div>
            <div
              className="d-flex flex-row align-items-center"
              style={{ marginRight: 50 }}
            >
              <div>
                <img src={playstore} className='img-responsive' style={{ width: 158, height: 53 }} />
                <img src={appstore} className='img-responsive' style={{ width: 143, height: 39 }} />
              </div>
            </div>
          </div>
      </div>
 */
