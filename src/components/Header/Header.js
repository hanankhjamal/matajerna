import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import chat from "../../assets/images/chat.png";
import notification from "../../assets/images/notification.png";
import camera from "../../assets/images/camera.png";
import shop from "../../assets/images/shop.png";
import buy from "../../assets/images/buy.png";
import { Row, Col, Input, Button } from "reactstrap";
class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="mt-3 mb-3 "
        style={{
          flex: 1,
          height: 45,
          backgroundColor: "#eee",
          flexDirection: "row",
          display: "flex",
          marginRight: "8%",
          marginLeft: "8%"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <img src={logo} />
        </div>
        {/* <Row>
          <Col
            md={12}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              padding: 0
            }}
          >
            <div
              style={{
                width: "10%",
                fontSize: 20,
                fontWeight: "700",
                color: "#0097d0",
                marginLeft: "1%"
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: 45,
                  height: 25
                }}
              />
              {"متاجرنا"}
            </div>
            <div
              style={{
                width: "40%",
                borderRadius: 28,
                backgroundColor: "#efefef",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 20,
                marginLeft: "1%"
              }}
            >
              <img
                src={search}
                alt="search"
                style={{ width: 13, height: 14 }}
              />
              <Input
                style={{
                  color: "#bbbbbb",
                  fontSize: 14,
                  height: 45,

                  fontWeight: "400",
                  backgroundColor: "#efefef",
                  border: "none",
                  borderRadius: 28,
                  outline: "none"
                }}
                type="text"
                placeholder="ابحث في متاجرنا"
              />
            </div>
            <button
              className="btn btn-default"
              style={{
                backgroundImage:
                  " linear-gradient(270deg, #ffffff 0%, #ffffff 100%)",
                height: 40,
                boxShadow: "0 3px 6px rgba(136, 136, 136, 0.38)",
                borderRadius: 30,
                color: "#bbbbbb",
                fontSize: 13,
                fontWeight: "700",
                width: "8%",
                paddingRight: 5,
                paddingLeft: 5,
                marginLeft: "1%"
              }}
            >
              <img src={shop} alt="img" style={{ width: 20, height: 20 }} />
              {" متاجر "}
            </button>
            <button
              className="btn btn-default"
              style={{
                backgroundImage:
                  " linear-gradient(270deg, #ffffff 0%, #ffffff 100%)",
                height: 40,
                boxShadow: "0 3px 6px rgba(136, 136, 136, 0.38)",
                borderRadius: 30,
                color: "#bbbbbb",
                fontSize: 13,
                fontWeight: "700",
                width: "8%",
                paddingRight: 5,
                paddingLeft: 5,
                marginLeft: "1%"
              }}
            >
              <img src={Logo} alt="img" style={{ width: 22, height: 22 }} />
              {"اشتري"}
            </button>

            <button
              className="btn btn-default"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #ffbd43 0%, #ffa92f 100%)",
                boxShadow: "0 3px 6px rgba(255, 185, 63, 0.38)",
                borderRadius: 30,
                color: "#fff",
                fontSize: 13,
                fontWeight: "700",
                height: 40,
                textAlign: "center",
                width: "15%",
                marginLeft: "1%"
              }}
            >
              <img
                src={camera}
                alt="img"
                style={{ width: 16, height: 14, marginLeft: 3 }}
              />
              {" اضف عنوانك مجانا "}
            </button>

            <div
              style={{
                width: "4%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "1%"
              }}
            >
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
              <img src={chat} alt="chat" style={{ width: 22, height: 23 }} />
            </div>
            <div
              style={{
                width: "4%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "1%"
              }}
            >
              <span
                className="badge badge-notify"
                style={{
                  backgroundColor: " #ff3f55",
                  position: "relative",
                  right: 1,
                  top: -12,
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                  display: "inline-block",
                }}
              />
              <img
                src={notification}
                alt="chat"
                style={{ width: 22, height: 23 }}
              />
            </div>
          </Col>
        </Row> */}
      </header>
    );
  }
}

export default Header;
