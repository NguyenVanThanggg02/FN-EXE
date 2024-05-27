import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartDashFill } from "react-bootstrap-icons";
import axios from "axios";

const ListProduct = ({ onProductSelect, search, onAddToCart }) => {
  const [listProduct, setListProduct] = useState([]);

  const fetchData = async () => {
    try {
      let response;
      if (search) {
        response = await axios.get(
          `http://localhost:9999/products/search/${search}`
        );
      } else {
        response = await axios.get("http://localhost:9999/products");
      }
      setListProduct(response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API lấy danh sách sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <Container>
      <Row className="new-products" style={{marginBottom:'80px'}}>
        <h3 style={{color:'#FF9900'}}>Danh Sách Sản Phẩm</h3>
      </Row>
      <Row className=" new-products-item d-flex justify-content-between">
        {listProduct.map((p) => (
          <Col key={p._id} md={4} sm={6} xs={12}>
            <Card
              style={{
                height: "100%",
                boxShadow: "5px 10px 10px 5px #C0C0C0",
                borderRadius: "20px",
              }}
            >
              <div
                onClick={() => onProductSelect(p._id)}
                className="text-dark"
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={p.images[0]}
                  style={{ borderRadius: "20px", height: "300px" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Title>{p.price}</Card.Title>
                </Card.Body>
              </div>
              <Card.Footer className="text-center">
                <Button 
                  className="btn btn-danger" 
                  onClick={() => onAddToCart(p)}
                >
                  <CartDashFill style={{ color: "white", fontSize: "30px" }} />
                  Thêm vào giỏ Hàng
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListProduct;
