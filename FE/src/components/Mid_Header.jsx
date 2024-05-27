import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartFill } from "react-bootstrap-icons";
import logo from "../assets/images/logo.jpg";
import "../style/header.css";

const Mid_Header = ({ onChangeSearch, onCartClick }) => {
  return (
    <Container fluid className="bg-dark mid-header">
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center mt-4"
        >
          <div>
            <ul className="list-unstyled d-flex justify-content-between m-0">
              <li className="mr-4 d-flex  align-items-center ">
                <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
                  Trang chủ
                </Link>
              </li>
              <li className="mr-4 d-flex  align-items-center ">
                <Link
                  to="/gioi-thieu"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Giới thiệu
                </Link>
              </li>
              <li className="mr-4 d-flex  align-items-center ">
                <Link
                  to="/lien_he"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Liên hệ
                </Link>
              </li>
              <li className="mr-4 d-flex  align-items-center ">
                <Link to="/blog" style={{ color: "white", fontWeight: "bold" }}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-start align-items-center mt-3"
        >
          <img
            src={logo}
            width="60px"
            height="60px"
            alt="logo"
            style={{ borderRadius: "40px" }}
          />
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center mt-4"
        >
          <div>
            <ul className="list-unstyled d-flex justify-content-between m-0">
              <li className="mr-4 d-flex  align-items-center ">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  HOTLINE:{" "}
                  <strong style={{ color: "#f4ce39" }}> 0368286862 </strong>
                </span>
              </li>

              <li className="mr-4 d-flex  align-items-center ">
                <input
                  type="text"
                  placeholder="  Tìm kiếm...."
                  style={{ borderRadius: "10px" }}
                  onChange={(e) => onChangeSearch(e.target.value)}
                ></input>
              </li>
              <li
                className="mr-4 d-flex  align-items-center "
                onClick={onCartClick}
              >
                <CartFill style={{ color: "white", fontSize: "25px", cursor:'pointer' }} />
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Mid_Header;
