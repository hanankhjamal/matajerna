import React, { Component } from "react";
import { Row, Col, Card, Input, CardBody } from "reactstrap";
import { Animated } from "react-animated-css";
import "./Products.css";

import banner4 from "../../assets/images/banners/banner-pro.png";
import p1 from "../../assets/images/products/p-1.jpg";
import p2 from "../../assets/images/products/p-2.jpg";
import p3 from "../../assets/images/products/p-3.jpg";
class Products extends Component {
  state = {
    products: [
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p2,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية",
        flagChat: true
      },
      {
        src: p3,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية",
        favText: "تم إضافة هذا الإعلان الى المفضلة"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: banner4,
        banner: true
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      },
      {
        src: p1,
        time: "قبل 5 دقائق",
        city: "عمان",
        price: "30,000",
        text: "عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"
      }
    ],
    pagging: [1, 2, 3]
  };
  render() {
    return (
      <div className="container mt-4">
        <Row>
          <Col md={3} className="frounded ml-2 mb-2">
            <div className="pr-2">
              <p className="f-header m-0 mt-1 p-0 ">{"المنطقة"}</p>
            </div>
            <div className="d-flex flex-row ">
              <Col md={6} className="pr-2">
                <p className="f-darkHeader m-0 mb-1 p-0 pb-1">{"عمان"}</p>
              </Col>
              <Col md={6} className="d-flex justify-content-end pl-1">
                <img
                  src={require("../../assets/images/down-arrow.png")}
                  className="img-responsive i-down-arrow"
                />
              </Col>
            </div>
          </Col>
          <Col md={3} className="frounded ml-2 mb-2">
            <div className="pr-2">
              <p className="f-header m-0 mt-1 p-0 ">{"الترتيب حسب"}</p>
            </div>
            <div className="d-flex flex-row ">
              <Col md={8} className="pr-2">
                <p className="f-darkHeader m-0 mb-1 p-0 pb-1">
                  {"السعر من الأعلى الى الأقل"}
                </p>
              </Col>
              <Col md={4} className="d-flex justify-content-end pl-1">
                <img
                  src={require("../../assets/images/down-arrow.png")}
                  className="img-responsive i-down-arrow"
                />
              </Col>
            </div>
          </Col>
        </Row>
        <Animated
          animationIn="swing"
          animationInDelay={700}
          isVisible={true}
        ><Row className="d-flex flex-row mt-4 p-0">
            <Col md={2} xs={2} className=" d-flex justify-content-start p-0">
              <img
                src={require("../../assets/images/banners/banner-3.png")}
                alt="banner-3"
                className="img-responsive banner-3"
              />
            </Col>

            <Col xs={10}>
              <Row>
                {this.state.products.map(item => (
                  <Col className="mb-3" md={3}>
                    <Card className="p-card">
                      {item.banner ? (
                        <CardBody className="p-0">
                          <img
                            src={item.src}
                            alt="p-full-image"
                            className="card-img-top img-responsive p-full-image"
                          />
                        </CardBody>
                      ) : (
                          <CardBody className="p-0">
                            <img
                              src={item.src}
                              alt="p-image"
                              className="card-img-top img-responsive p-image"
                            />
                            <div className="content-abs d-flex flex-row justify-content-center align-items-center pr-2 pl-2 mr-2">
                              {item.flagChat ? (
                                <div className="d-flex flex-row justify-content-center align-items-center fav-rounder pr-1 pl-1 mt-1 mb-1 ">
                                  <Input
                                    className="form-control chat-input"
                                    type="text"
                                    placeholder="أرسل رسالة"
                                  />
                                  <img
                                    src={require("../../assets/images/products/message-circle.png")}
                                    alt="message-circle"
                                    className="img-responsive p-1  image-abs"
                                  />
                                </div>
                              ) : (
                                  <img
                                    src={require("../../assets/images/products/message-circle.png")}
                                    className="img-responsive p-1 image-abs"
                                  />
                                )}

                              <div className="d-flex flex-row ">
                                {item.favText ? (
                                  <p className="fav-text m-0 pt-1">
                                    {" | " + item.favText}
                                  </p>
                                ) : null}
                                <img
                                  src={require("../../assets/images/products/heart.png")}
                                  alt="heart"
                                  className="img-responsive p-1 image-abs"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-row mt-4">
                              <Col
                                md={7}
                                className=" d-flex justify-content-start align-items-center p-0 mr-2 "
                              >
                                <img
                                  src={require("../../assets/images/products/clock.png")}
                                  className="img-responsive i-ml"
                                />
                                <p className="font10 m-0 ml-1">{" " + item.time}</p>
                                <span className="font10 i-ml">{"|"}</span>
                                <img
                                  src={require("../../assets/images/products/map-pin.png")}
                                  alt="pin"
                                  className="img-responsive i-ml"
                                />
                                <p className="font10 m-0">{" " + item.city}</p>
                              </Col>
                              <Col md={5}>
                                <p className="font12 m-0">{item.price + " د.أ"}</p>
                              </Col>
                            </div>
                            <p className="p-text mt-2 p-0 pr-2">{item.text}</p>
                          </CardBody>
                        )}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Animated>

        <Row>
          <Col md={12} className="d-flex justify-content-end">
            {this.state.pagging.map(item => (
              <div
                className="d-flex justify-content-center align-items-center pagging m-1 mt-4 mb-4"
                style={{
                  backgroundImage:
                    item == 1
                      ? "linear-gradient(180deg, #0092d5 0%, #20c3f3 100%)"
                      : "0 3px 6px rgba(0, 0, 0, 0.16)",
                  boxShadow: item != 1 ? "0 3px 6px rgba(0, 0, 0, 0.16)" : null,
                  backgroundColor: item != 1 ? "#fff" : null,
                  color: item == 1 ? "#fff" : "#4d4d4d"
                }}
              >
                {item}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Products;
