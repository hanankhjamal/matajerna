import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./BannerBottom.css";
class BannerBottom extends Component {
  render() {
    return (
      <Row className="content-banner p-0 m-0">
        <Col
          xs={2}
          md={4}
          className="d-flex  justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-center mt-2 mr100">
            <img src={require('../../assets/images/banners/mobile-brand.png')} className="img-responsive" />
          </div>
        </Col>
        <Col xs={4} className="mt-5">
          <h4 className="h4-title">{"حمل تطبيق متاجرنا"}</h4>
          <h4 className="h4-title">{" على موبايلك"}</h4>
        </Col>
        <Col xs={6} md={4} className="d-flex  justify-content-start mt-5">
          <div>
            <img src={require('../../assets/images/banners/playstore.png')} className="img-responsive img-playstore" />
            <img src={require('../../assets/images/banners/appstore.png')} className="img-responsive img-appstore" />
          </div>
        </Col>
      </Row>
    );
  }
}
export default BannerBottom;