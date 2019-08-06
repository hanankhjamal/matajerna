import React, { Component } from "react";
import banner3 from "../../assets/images/banners/banner-3.png";
import p1 from "../../assets/images/products/p-1.jpg";
import p2 from "../../assets/images/products/p-2.jpg";
import p3 from "../../assets/images/products/p-3.jpg";
import clock from "../../assets/images/products/clock.png";
import pin from "../../assets/images/products/map-pin.png";
import heart from "../../assets/images/products/heart.png";
import messageCircle from "../../assets/images/products/message-circle.png";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
class Products extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-4">
        <Row style={{}}>
          <Col className="d-flex justify-content-start" md={3}>
            <div>{"فلتر"}</div>
          </Col>
          <Col className="d-flex justify-content-start" md={3}>
            <div>{"فلتر"}</div>
          </Col>
        </Row>
        <Row className="d-flex flex-row mt-4 p-0">
          <Col md={2} className=" d-flex justify-content-start p-0">
            <img src={banner3} style={{ width: 150 }} />
          </Col>
          <Col md={10} className="d-flex justify-content-start p-0">
            <Col className="p-1" md={3}>
              <Card>
                <CardBody className="p-0">
                  <img
                    src={p1}
                    className="card-img-top"
                    style={{ height: 200, width: "100%" }}
                  />
                  <div className="d-flex flex-row mt-3">
                    <Col
                      md={7}
                      className=" d-flex justify-content-start d-flex align-items-center p-0 pr-2"
                      style={{ fontSize: 11, color: "#6d6d6d" }}
                    >
                      <img
                        src={clock}
                        style={{
                          width: 12,
                          height: 12,
                          paddingRight: 1,
                          paddingLeft: 2
                        }}
                      />
                      {" قبل 5 دقائق "} <span>{" | "}</span>
                      <img
                        src={pin}
                        style={{
                          width: 12,
                          height: 12,
                          paddingRight: 2,
                          paddingLeft: 1
                        }}
                      />
                      {" عمان "}
                    </Col>
                    <Col
                      md={5}
                      style={{
                        fontSize: 13,
                        color: "#ff9e00",
                        fontWeight: "700"
                      }}
                    >
                      {"30,000 د.أ"}
                    </Col>
                  </div>
                  <p
                    className="mt-2 p-0 pr-2"
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#3e3e3e",
                      textAlign: "right"
                    }}
                  >
                    {"عمارة استثمارية مميزة الجبيهة بالقرب من الجامعة الأردنية"}
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      top: "63%",
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                      borderRadius: 20,
                      backgroundColor: "#ffffff",
                      paddingLeft: 20,
                      paddingRight: 20,
                      marginRight: 6,
                      marginLeft: 6,
                      display: "flex",
                      flexDirection: "row", justifyContent:'center', alignItems:'center'
                    }}
                  >
                    <img
                      src={messageCircle}
                      style={{ width: 14, height: 13 }}
                    />
                    <div
                      style={{ paddingRight: 10
                      }}
                    >
                      <img
                        src={heart}
                        style={{
                          width: 14,
                          height: 13
                        }}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Products;
