import React, { Component } from "react";
import search from "../../assets/images/search.png";
import { Row, Col, Input, Button } from "reactstrap";
class Header extends Component {
  state = {};
  render() {
    return (
      <div
        className="container mb-1 mt-1"
        style={{ backgroundColor: '"#fff"' }}
      >
        <Row>
          <Col
            xs={3}
            md={2}
            className="d-flex align-items-center justify-content-center mt-1 mb-1"
          >
            <img
              className="img-responsive"
              src={require("../../assets/images/logo.png")}
              style={{ width: "90%" }}
            />
          </Col>

          <Col
            xs={5}
            md={3}
            className="d-flex flex-row align-items-center justify-content-center"
          >
            <div
              className="d-flex flex-row align-items-center"
              style={{
                backgroundColor: "#efefef",
                borderRadius: 28,
                padding: 8
              }}
            >
              <img
                src={require("../../assets/images/search.png")}
                alt="img"
                className="img-responsive mr-2"
                style={{ width: "8%", height: "8%" }}
              />
              <Input
                className="search-input"
                style={{
                  width: "95%",
                  backgroundColor: "#efefef",
                  color: "#bbbbbb",
                  fontFamily: "Noto Kufi Arabic",
                  fontSize: 10,
                  textAlign: "right",
                  fontWeight: "400",
                  backgroundColor: "#efefef",
                  border: "none",
                  outline: "none"
                }}
                type="text"
                placeholder="ابحث في متاجرنا"
              />
            </div>
          </Col>

          <Col
            xs={3}
            md={1}
            className="d-flex align-items-center justify-content-center  mt-2 mb-2 p-1"
            style={{
              backgroundImage:
                " linear-gradient(270deg, #ffffff 0%, #ffffff 100%)",
              boxShadow: "0 3px 6px rgba(136, 136, 136, 0.38)",
              borderRadius: 30
            }}
          >
            <img
              src={require("../../assets/images/shop.png")}
              alt="img"
              className="img-responsive"
              style={{ width: "28%", height: "50%" }}
            />
            <h4
              className="d-flex align-items-center mb-2 mt-2 mr-2 "
              style={{
                color: "#bbbbbb",
                fontSize: 13,
                fontWeight: "700",
                fontFamily: "Noto Kufi Arabic"
              }}
            >
              {" متاجر "}
            </h4>
          </Col>

          <Col
            xs={3}
            md={1}
            className="d-flex align-items-center justify-content-center  mt-2 mb-2 mr-2"
            style={{
              backgroundImage:
                " linear-gradient(270deg, #ffffff 0%, #ffffff 100%)",
              boxShadow: "0 3px 6px rgba(136, 136, 136, 0.38)",
              borderRadius: 30
            }}
          >
            <img
              src={require("../../assets/images/buy.png")}
              alt="img"
              className="img-responsive"
              style={{ width: "32%" }}
            />
            <h4
              className="d-flex align-items-center mb-2 mt-2 mr-2 "
              style={{
                color: "#bbbbbb",
                fontSize: 13,
                fontWeight: "700",
                fontFamily: "Noto Kufi Arabic"
              }}
            >
              {" اشتري "}
            </h4>
          </Col>
          <Col
            xs={3}
            md={2}
            className="d-flex align-items-center justify-content-center mt-2 mb-2 mr-2"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #ffbd43 0%, #ffa92f 100%)",
              boxShadow: "0 3px 6px rgba(255, 185, 63, 0.38)",
              borderRadius: 30,
              color: "#fff"
            }}
          >
            <img
              src={require("../../assets/images/camera.png")}
              alt="img"
              className="img-responsive"
              style={{
                height: "50%"
              }}
            />
            <h4
              className="d-flex align-items-center mb-2 mt-2 mr-2 "
              style={{
                color: "#fff",
                fontSize: 13,
                fontWeight: "700",
                fontFamily: "Noto Kufi Arabic"
              }}
            >
              {" أضف عنوانك مجاناً "}
            </h4>
          </Col>

          <Col md={2} xs={2} className="d-flex flex-row  mr-2 p-0">
            <div className="d-flex align-items-center justify-content-start ">
              <img
                src={require("../../assets/images/big_pic.png")}
                alt="notification"
                style={{ width: 40, height: 40, marginLeft: 10 }}
                className="img-responsive rounded-circle"
              />

              <span
                class="badge badge-notify"
                style={{
                  backgroundColor: " #ff3f55",
                  position: "relative",
                  right: 1,
                  top: -12,
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  display: "inline-block"
                }}
              />
              <img
                src={require("../../assets/images/chat.png")}
                alt="notification"
                className="img-responsive"
                style={{ marginLeft: 10  }}
              />
            </div>
            <div className="d-flex align-items-center">
              <span
                class="badge badge-notify"
                style={{
                  backgroundColor: " #ff3f55",
                  position: "relative",
                  right: 1,
                  top: -12,
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  display: "inline-block"
                }}
              />
              <img
                src={require("../../assets/images/notification.png")}
                alt="notification"
                className="img-responsive"
                style={{ marginLeft: 10 }}
              />
            </div>
          </Col>
        </Row>
      </div>
      // <div
      //   className="container mt-3 mb-3 header"
      //   style={{
      //     display: "flex",
      //     flexDirection: "row",
      //     backgroundColor: "#fff"
      //   }}
      // >
      //   <div>
      //     <img
      //       className="img-responsive"
      //       src={require("../../assets/images/logo.png")}
      //     />
      //   </div>

      //   <div className="mr-4 ml-2 d-flex align-items-center">
      //     <Input
      //       className="search-input"
      //       style={{
      //         width: "30vw",
      //         padding: "6%",
      //         paddingRight: "3vw",
      //         backgroundImage: `url(${search})`,
      //         backgroundRepeat: "no-repeat",
      //         backgroundPosition: "95% 50%",
      //         color: "#bbbbbb",
      //         fontSize: '14vm',
      //         fontWeight: "400",
      //         backgroundColor: "#efefef",
      //         border: "none",
      //         borderRadius: 28,
      //         outline: "none"
      //       }}
      //       type="text"
      //       placeholder="ابحث في متاجرنا"
      //     />
      //   </div>

      //   <button
      //     className="d-flex flex-row btn btn-default pr-4 pl-4 pt-1 pb-1"
      //     style={{
      //       backgroundImage:
      //         " linear-gradient(270deg, #ffffff 0%, #ffffff 100%)",
      //       boxShadow: "0 3px 6px rgba(136, 136, 136, 0.38)",
      //       borderRadius: 30,
      //       color: "#bbbbbb",
      //       fontSize: 13,
      //       fontWeight: "700"
      //     }}
      //   >
      //     <img
      //       src={require("../../assets/images/shop.png")}
      //       alt="img"
      //       className="img-responsive"
      //     />
      //     <p className="d-flex align-items-center mb-0 mt-1 mr-2 ">
      //       {" متاجر "}
      //     </p>
      //   </button>

      //   <button
      //     className="d-flex flex-row btn btn-default pr-4 pl-4 mr-2 pt-1 pb-1"
      //     style={{
      //       backgroundImage:
      //         " linear-gradient(270deg, #ffffff 0%, #ffffff 100%)",
      //       boxShadow: "0 3px 6px rgba(136, 136, 136, 0.38)",
      //       borderRadius: 30,
      //       color: "#bbbbbb",
      //       fontSize: 13,
      //       fontWeight: "700"
      //     }}
      //   >
      //     <img
      //       src={require("../../assets/images/buy.png")}
      //       alt="img"
      //       className="img-responsive"
      //     />
      //     <p className="d-flex align-items-center mb-0 mt-1 mr-1 ">
      //       {" اشتري "}
      //     </p>
      //   </button>
      //   <button
      //     className="d-flex flex-row btn btn-default pr-4 pl-4 mr-2 pt-1 pb-1"
      //     style={{
      //       backgroundImage:
      //         "linear-gradient(270deg, #ffbd43 0%, #ffa92f 100%)",
      //       boxShadow: "0 3px 6px rgba(255, 185, 63, 0.38)",
      //       borderRadius: 30,
      //       color: "#fff",
      //       fontSize: 14,
      //       fontWeight: "700"
      //     }}
      //   >
      //     <img
      //       src={require("../../assets/images/camera.png")}
      //       alt="img"
      //       className="img-responsive"
      //     />
      //     <p className="d-flex align-items-center mb-0 mt-1 mr-1 ">
      //       {" أضف عنوانك مجاناً "}
      //     </p>
      //   </button>
      //   <div className="d-flex align-items-center mr-1">
      //     <span
      //       class="badge badge-notify"
      //       style={{
      //         backgroundColor: " #ff3f55",
      //         position: "relative",
      //         right: 1,
      //         top: -12,
      //         height: 10,
      //         width: 10,
      //         borderRadius: 50,
      //         display: "inline-block"
      //       }}
      //     />
      //     <img
      //       src={require("../../assets/images/chat.png")}
      //       alt="chat"
      //       className="img-responsive"
      //     />
      //   </div>
      //   <div className="d-flex align-items-center mr-1">
      //     <span
      //       class="badge badge-notify"
      //       style={{
      //         backgroundColor: " #ff3f55",
      //         position: "relative",
      //         right: 1,
      //         top: -12,
      //         height: 10,
      //         width: 10,
      //         borderRadius: 50,
      //         display: "inline-block"
      //       }}
      //     />
      //     <img
      //       src={require("../../assets/images/notification.png")}
      //       alt="notification"
      //       className="img-responsive"
      //     />
      //   </div>
      // </div>
    );
  }
}

export default Header;
