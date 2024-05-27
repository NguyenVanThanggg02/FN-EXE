import React from "react";
import "../style/header.css";
import { Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="header">
      <Row>
        <img
          src="//bizweb.dktcdn.net/100/472/304/themes/887048/assets/bee_header.png?1684115584822"
          alt="bee_header"
        />
        <p className=" mt-4">MIỄN PHÍ VẬN CHUYỂN TRÊN MỌI ĐƠN HÀNG </p>
      </Row>
    </Container>
  );
};

export default Header;
