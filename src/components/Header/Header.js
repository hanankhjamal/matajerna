import React, { Component } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import "./Header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container mb-1 mt-1">
        <Row>
          <Col
            xs={3}
            md={2}
            className="d-flex align-items-center justify-content-center mt-1 mb-1"
          >
            <img
              className="img-responsive w90"
              src={require("../../assets/images/logo.png")}
            />
          </Col>

          <Col
            xs={5}
            md={3}
            className="d-flex flex-row align-items-center justify-content-center"
          >
            <div className="d-flex flex-row align-items-center div-search">
              <img
                src={require("../../assets/images/search.png")}
                alt="img"
                className="img-responsive mr-2 w8"
              />
              <Input
                className="search-input"
                type="text"
                placeholder="ابحث في متاجرنا"
              />
            </div>
          </Col>

          <Col
            xs={3}
            md={1}
            className="d-flex align-items-center justify-content-center bt-white  mt-2 mb-2 p-1"
          >
            <img
              src={require("../../assets/images/shop.png")}
              alt="img"
              className="img-responsive img-shop"
            />
            <h4 className="d-flex align-items-center bt-white-text mb-2 mt-2 mr-2 ">
              {" متاجر "}
            </h4>
          </Col>

          <Col
            xs={3}
            md={1}
            className="d-flex align-items-center justify-content-center bt-white mt-2 mb-2 mr-2"
          >
            <img
              src={require("../../assets/images/buy.png")}
              alt="img"
              className="img-responsive w30"
            />
            <h4 className="d-flex align-items-center mb-2 bt-white-text mt-2 mr-2">
              {" اشتري "}
            </h4>
          </Col>
          <Col
            xs={3}
            md={2}
            className="d-flex align-items-center justify-content-center bt-orange mt-2 mb-2 mr-2"
          >
            <img
              src={require("../../assets/images/camera.png")}
              alt="img"
              className="img-responsive h50"
            />
            <h4 className="d-flex align-items-center bt-orange-text mb-2 mt-2 mr-2 ">
              {" أضف عنوانك مجاناً "}
            </h4>
          </Col>

          <Col md={2} xs={2} className="d-flex flex-row  mr-2 p-0">
            <div className="d-flex align-items-center justify-content-start ">
              <img
                src={require("../../assets/images/big_pic.png")}
                alt="profile"
                className="img-responsive rounded-circle img-profile"
              />

              <span class="badge badge-notify notify" />
              <img
                src={require("../../assets/images/chat.png")}
                alt="notification"
                className="img-responsive ml10"
              />
            </div>
            <div className="d-flex align-items-center">
              <span class="badge badge-notify notify" />
              <img
                src={require("../../assets/images/notification.png")}
                alt="notification"
                className="img-responsive ml10"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
