import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/checkout.css";
const CheckOut = () => {
  return (
    <Container fluid>
     
      <Container className="bg-light checkout_item">
        <Row className="mt-4 mb-4">
          <Col md={6} sm={6} xs={12}>
            <div class="billing-details pt-4">
              <div class="section-title">
                <h3 class="title pb-4 text-center">Billing address</h3>
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="text"
                  name="full-name"
                  placeholder="Full Name"
                />
              </div>

              <div class="form-group">
                <input
                  class="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="text"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="tel"
                  name="tel"
                  placeholder="Telephone"
                />
              </div>
            </div>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <div className="text-center pb-4">
              <h3 className="title">Your Order</h3>
            </div>
            <Row className="manager-order text-center">
              <Col md={5}>
                <div>
                  <strong>PRODUCT NAME</strong>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <strong>QUANTITY</strong>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <strong>TOTAL</strong>
                </div>
              </Col>
              <Col md={12} className="text-center  mt-auto">
                <Button
                  className="btn btn-danger"
                  style={{
                    borderRadius: "20px",
                    width: "50%",
                    marginTop: "80px",
                  }}
                >
                  PLACE ORDER
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CheckOut;
