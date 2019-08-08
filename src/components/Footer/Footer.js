import React, { Component } from "react";
import facebook from "../../assets/images/social/facebook.png";
import whatsapp from "../../assets/images/social/whatsapp.png";
import email from "../../assets/images/social/email.png";
import youtube from "../../assets/images/social/youtube.png";
import instagram from "../../assets/images/social/instagram.png";
import twitter from "../../assets/images/social/twitter.png";
import { Row, Col } from "reactstrap";
class Footer extends Component {
  state = {
    footer: [1, 2, 3, 4],
    social: [
      { src: email },
      { src: whatsapp },
      { src: youtube },
      { src: instagram },
      { src: twitter },
      { src: facebook }
    ]
  };
  render() {
    return (
      <div className="container">
        <Row
          style={{
            marginRight: "25%",
            marginLeft: "15%",
            marginTop: "5%",
            marginb: "5%"
          }}
        >
          <Col md={3}>
              <h3
                style={{
                  color: "#b5b5b5",
                  fontSize: 18,
                  textAlign: "right",
                  fontWeight: "200",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"تاجركم"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 15,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"من نحن"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"أعلن عن متاجرنا"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"تواصل معنا"}
              </h3>
            </Col>

            <Col md={3}>
              <h3
                style={{
                  color: "#b5b5b5",
                  fontSize: 18,
                  textAlign: "right",
                  fontWeight: "200",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"تاجركم"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 15,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"من نحن"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"أعلن عن متاجرنا"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"تواصل معنا"}
              </h3>
            </Col>


            <Col md={3}>
              <h3
                style={{
                  color: "#b5b5b5",
                  fontSize: 18,
                  textAlign: "right",
                  fontWeight: "200",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"معلومات"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 15,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"سياسة الخصوصية"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"شروط الاستخدام"}
              </h3>
            </Col>

            <Col md={3}>
              <h3
                style={{
                  color: "#b5b5b5",
                  fontSize: 18,
                  textAlign: "right",
                  fontWeight: "200",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"مساعدة"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 15,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"من نحن"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"أعلن عن متاجرنا"}
              </h3>
              <h3
                style={{
                  color: "#707070",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "right",
                  fontFamily: "Noto Kufi Arabic",
                  lineHeight: 1.8
                }}
              >
                {"تواصل معنا"}
              </h3>
            </Col>
        </Row>

        <div
          className="mt-4 mb-4 p-4 d-flex flex-row justify-content-center align-items-center"
          style={{ margin: 20, marginRight: "24%", marginLeft: "15%" }}
        >
          {this.state.social.map(item => (
            <div
              style={{
                borderRadius: 40,
                width: 50,
                height: 50,
                padding: 22,
                display: "flex",
                backgroundColor: "#ffffff",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: ".5rem"
              }}
            >
              <img
                src={item.src}
                className="img-responsive"
                style={{ width: 23, height: 23 }}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 mb-4p-4 d-flex flex-row justify-content-center align-items-center">
          <a
            style={{
              color: " #989898",
              fontSize: 16,
              fontWeight: 400,
              textDecoration: "underline",
              fontFamily: "Noto Kufi Arabic",
              paddingLeft:8
            }}
          >
            {"صنع بحب"}
          </a>
          <a>
            <img
              src={require("../../assets/images/products/heart.png")}
              className="img-responsive"
            />
          </a>
          <a
            style={{
              color: " #989898",
              fontSize: 16,
              fontWeight: 400,
              textDecoration: "underline",
              paddingRight:8
            }}
          >
            {'Atomkit'}
          </a>
        </div>
        <div className="mt-2 mb-4  d-flex flex-row justify-content-center align-items-center">
          <a
            style={{
              color: " #989898",
              fontSize: 18,
              fontFamily: "Noto Kufi Arabic",
              fontWeight: 400,
              textDecoration: "underline"
            }}
          >
            <strong>{'جميع الحقوق محفوظة'}</strong>
            {'  © 2019'}
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
