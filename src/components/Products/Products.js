import React, { Component } from "react";
import banner3 from "../../assets/images/banners/banner-3.png";
import banner4 from "../../assets/images/banners/banner-pro.png";
import p1 from "../../assets/images/products/p-1.jpg";
import p2 from "../../assets/images/products/p-2.jpg";
import p3 from "../../assets/images/products/p-3.jpg";
import clock from "../../assets/images/products/clock.png";
import pin from "../../assets/images/products/map-pin.png";
import heart from "../../assets/images/products/heart.png";
import messageCircle from "../../assets/images/products/message-circle.png";
import { Row, Col, Card, Input, CardBody } from "reactstrap";
const options = [
  { value: "1", label: "عمان" },
  { value: "2", label: "اربد" },
  { value: "3", label: "العقبة" }
];
class Products extends Component {
  state = {
    selectedOption: null,
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
      },
    ],
    pagging: [1, 2, 3]
  };
  render() {
    return (
      <div className="container mt-4">
        <Row>
          <Col
            className="ml-2 mb-2"
            md={3}
            style={{
              borderRadius: 30,
              backgroundColor: "#ffffff",
              textAlign: "right"
            }}
          >
            <div className="pr-2">
              <p
                className="m-0 mt-1 p-0 "
                style={{
                  color: "#4d4d4d",
                  fontSize: 12,
                  fontFamily: "Noto Kufi Arabic"
                }}
              >
                {"المنطقة"}
              </p>
            </div>
            <div className="d-flex flex-row ">
              <Col md={6} className="pr-2">
                <p
                  className="m-0 mb-1 p-0 pb-1"
                  style={{
                    color: "#4d4d4d",
                    fontSize: 11,
                    fontWeight: "700",
                    lineHeight: 1,
                    fontFamily: "Noto Kufi Arabic"
                  }}
                >
                  {"عمان"}
                </p>
              </Col>
              <Col md={6} className="d-flex justify-content-end pl-1">
                <img
                  src={require("../../assets/images/down-arrow.png")}
                  className="img-responsive"
                  style={{ width: 11, height: 7 }}
                />
              </Col>
            </div>
          </Col>
          <Col
            className="ml-2 mb-2"
            md={3}
            style={{
              borderRadius: 30,
              backgroundColor: "#ffffff",
              textAlign: "right"
            }}
          >
            <div className="pr-2">
              <p
                className="m-0 mt-1 p-0 "
                style={{
                  color: "#4d4d4d",
                  fontSize: 12,
                  fontFamily: "Noto Kufi Arabic"
                }}
              >
                {"الترتيب حسب"}
              </p>
            </div>
            <div className="d-flex flex-row ">
              <Col md={6} className="pr-2">
                <p
                  className="m-0 mb-1 p-0 pb-1"
                  style={{
                    color: "#4d4d4d",
                    fontSize: 11,
                    fontWeight: "700",
                    lineHeight: 1,
                    fontFamily: "Noto Kufi Arabic"
                  }}
                >
                  {"السعر من الأعلى الى الأقل"}
                </p>
              </Col>
              <Col md={6} className="d-flex justify-content-end pl-1">
                <img
                  src={require("../../assets/images/down-arrow.png")}
                  className="img-responsive"
                  style={{ width: 11, height: 7 }}
                />
              </Col>
            </div>
          </Col>
          </Row>
        <Row className="d-flex flex-row mt-4 p-0">
          <Col md={2} xs={2} className=" d-flex justify-content-start p-0">
            <img
              src={banner3}
              className="img-responsive "
              style={{ overflow: "hidden", height: "40vw" }}
            />
          </Col>

          <Col xs={10}>
            <Row>
              {this.state.products.map(item => (
                <Col className="mb-3"  md={3}>
                  <Card
                    style={{
                      boxShadow: "0 17px 18px rgba(143, 143, 143, 0.17)",
                      borderRadius: "10px",
                      backgroundColor: "#ffffff"
                    }}
                  >
                    {item.banner ? (
                      <CardBody className="p-0">
                        <img
                          src={item.src}
                          className="card-img-top img-responsive "
                          style={{
                            borderRadius: "10px 10px 10px 10px",
                            height: 247
                          }}
                        />
                      </CardBody>
                    ) : (
                      <CardBody className="p-0">
                        <img
                          src={item.src}
                          className="card-img-top img-responsive "
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: 153
                          }}
                        />
                        <div
                          className="pr-2 pl-2 mr-2"
                          style={{
                            position: "absolute",
                            top: "55%",
                            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                            borderRadius: 20,
                            backgroundColor: "#ffffff",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          {item.flagChat ? (
                            <div
                              className="d-flex flex-row justify-content-center align-items-center pr-1 pl-1 mt-1 mb-1 "
                              style={{ backgroundColor: "#efefef", borderRadius: 14, marginTop:2,marginBottom:2,    height: 18 }}
                            >
                              <Input
                                className="form-control "
                                style={{
                                  width: 100,
                                  height: 14,
                                  borderRadius: 14,
                                  backgroundColor: "#f6f4f4",
                                  color: "#bbbbbb",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  backgroundColor: "#efefef",
                                  border: "none",
                                  outline: "none",
                                  fontFamily: "Noto Kufi Arabic"
                                }}
                                type="text"
                                placeholder="أرسل رسالة"
                              />
                              <img
                                src={messageCircle}
                                className="img-responsive p-1"
                                style={{width:20, height:22}}
                              />
                            </div>
                          ) : (
                            <img
                              src={messageCircle}
                              className="img-responsive p-1"
                              style={{width:20, height:22}}
                            />
                          )}

                          <div className="d-flex flex-row ">
                            {item.favText ? (
                              <p
                                className="m-0 pt-1"
                                style={{
                                  fontSize: 8.5,
                                  color: "#bbbbbb",
                                  fontFamily: "Noto Kufi Arabic"
                                }}
                              >
                                {" | " + item.favText}
                              </p>
                            ) : null}
                            <img src={heart} className="img-responsive p-1" style={{width:20, height:22}} />
                          </div>
                        </div>
                        <div className="d-flex flex-row mt-4">
                          <Col
                            md={7}
                            className=" d-flex justify-content-start align-items-center p-0 mr-2 "
                          >
                            <img src={clock} className="img-responsive "  style={{marginLeft: '.2rem'}}/>
                            <p
                              className="m-0 ml-1"
                              style={{
                                fontSize: 10,
                                color: "#6d6d6d",
                                fontFamily: "Noto Kufi Arabic"
                              }}
                            >
                              {" " + item.time}
                            </p>
                            <span
                              style={{
                                fontSize: 10,
                                color: "#6d6d6d",
                                fontFamily: "Noto Kufi Arabic",
                                marginLeft: '.2rem'
                              }}
                            >
                              {"|"}
                            </span>
                            <img src={pin} className="img-responsive " style={{marginLeft: '.2rem'}} />
                            <p
                              className="m-0"
                              style={{
                                fontSize: 10,
                                color: "#6d6d6d",
                                fontFamily: "Noto Kufi Arabic"
                              }}
                            >
                              {" " + item.city}
                            </p>
                          </Col>
                          <Col md={5}>
                            <p
                              className="m-0"
                              style={{
                                fontFamily: "Noto Kufi Arabic",
                                fontSize: 12,
                                color: "#ff9e00",
                                fontWeight: "700"
                              }}
                            >
                              {item.price + " د.أ"}
                            </p>
                          </Col>
                        </div>
                        <p
                          className="mt-2 p-0 pr-2"
                          style={{
                            fontSize: 11,
                            fontWeight: "600",
                            color: "#6d6d6d",
                            textAlign: "right",
                            fontFamily: "Noto Kufi Arabic"
                          }}
                        >
                          {item.text}
                        </p>
                      </CardBody>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="d-flex justify-content-end">
            {this.state.pagging.map(item => (
              <div
                className="d-flex justify-content-center align-items-center m-1 mt-4 mb-4"
                style={{
                  backgroundImage:
                    item == 1
                      ? "linear-gradient(180deg, #0092d5 0%, #20c3f3 100%)"
                      : "0 3px 6px rgba(0, 0, 0, 0.16)",
                  boxShadow: item != 1 ? "0 3px 6px rgba(0, 0, 0, 0.16)" : null,
                  width: 46,
                  backgroundColor: item != 1 ? "#fff" : null,
                  height: 46,
                  fontWeight: "700",
                  borderRadius: 28,
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
