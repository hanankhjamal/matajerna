import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Footer.css";

import facebook from "../../assets/images/social/facebook.png";
import whatsapp from "../../assets/images/social/whatsapp.png";
import email from "../../assets/images/social/email.png";
import youtube from "../../assets/images/social/youtube.png";
import instagram from "../../assets/images/social/instagram.png";
import twitter from "../../assets/images/social/twitter.png";
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
        <Row className="content-margin">
          <Col md={3}>
            <h3 className="h3-title">{"تاجركم"} </h3>
            <h3 className="h3-subtitle "> {"من نحن"}</h3>
            <h3 className="h3-subtitle "> {"أعلن عن متاجرنا"}</h3>
            <h3 className="h3-subtitle "> {"تواصل معنا"}</h3>
          </Col>

          <Col md={3}>
            <h3 className="h3-title ">{"تاجركم"} </h3>
            <h3 className="h3-subtitle "> {"من نحن"}</h3>
            <h3 className="h3-subtitle "> {"أعلن عن متاجرنا"}</h3>
            <h3 className="h3-subtitle "> {"تواصل معنا"}</h3>
          </Col>

          <Col md={3}>
            <h3 className="h3-title">{"معلومات"} </h3>
            <h3 className="h3-subtitle "> {"سياسة الخصوصية"}</h3>
            <h3 className="h3-subtitle "> {"شروط الاستخدام"}</h3>
          </Col>

          <Col md={3}>
            <h3 className="h3-title font18">{"مساعدة"} </h3>
            <h3 className="h3-subtitle "> {"من نحن"}</h3>
            <h3 className="h3-subtitle "> {"أعلن عن متاجرنا"}</h3>
            <h3 className="h3-subtitle "> {"تواصل معنا"}</h3>
          </Col>
        </Row>

        <div className="mt-4 mb-4 p-4 d-flex flex-row justify-content-center align-items-center social-margin">
          {this.state.social.map(item => (
            <div className="d-flex justify-content-center align-items-center circle-footer">
              <img src={item.src} className="img-responsive w20" />
            </div>
          ))}
        </div>

        <div className="mt-4 mb-4p-4 d-flex flex-row justify-content-center align-items-center">
          <a className="link-footer">{"صنع بحب"}</a>
          <a>
            <img
              src={require("../../assets/images/products/heart.png")}
              className="img-responsive"
            />
          </a>
          <a className="link-footer">{"Atomkit"}</a>
        </div>
        <div className="mt-2 pb-4 d-flex flex-row justify-content-center align-items-center">
          <a className="link-copyright">
            <strong>{"جميع الحقوق محفوظة"}</strong>
            {"  © 2019"}
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
