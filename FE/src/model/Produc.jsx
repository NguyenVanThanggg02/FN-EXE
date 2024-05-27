import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Galleria } from "primereact/galleria";
import "../style/product.css";
import axios from "axios";
import { CartFill, CashCoin } from "react-bootstrap-icons";

const Produc = ({ productId, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity to 1
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:9999/products/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [productId]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      // Ensure quantity never goes below 1
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const productToAdd = { ...product, quantity }; // Include quantity in product object
      onAddToCart(productToAdd);
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: "#fffaef" }}>
      <Container className="pb-3">
        <Row>
          <Col
            md={6}
            className="bg-light mt-4"
            style={{ borderRadius: "30px" }}
          >
            {product.images && (
              <Galleria
                value={product.images}
                numVisible={5}
                style={{ maxWidth: "640px", padding: "10px 0px" }}
                item={(item) => (
                  <img
                    src={item}
                    alt="image"
                    style={{ width: "100%", height: "500px" }}
                  />
                )}
                thumbnail={(item) => (
                  <img
                    src={item}
                    alt="image"
                    style={{ width: "100%", height: "140px" }}
                  />
                )}
              />
            )}
          </Col>
          <Col md={1}></Col>
          <Col
            md={5}
            className="bg-light mt-4 "
            style={{ borderRadius: "30px" }}
          >
            <h4 className="text-center p-2">{product.name}</h4>
            <hr />
            <div className="price-box clearfix">
              
              <span className="save-price">
                <h4 className="price product-price-save">
                 <CashCoin style={{color:'yellow', fontSize:'36px'}}/> {product.price}
                </h4>
              </span>
            </div>
            <hr />
            <p>{product.description}</p>
            <hr />
            <div className="mt-4">
              <h5>Kích Thước</h5>
              {product.sizes &&
                product.sizes.map((s, index) => (
                  <Button key={index} className="btn btn-warning mr-2">
                    {s.size}
                  </Button>
                ))}
            </div>
            <div className="mt-4">
              <h5>Số Lượng</h5>
              <div>
                <button onClick={handleDecrement} style={{ border: "none" }}>
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  style={{
                    borderRadius: "20px",
                    textAlign: "center",
                    width: "100px",
                  }}
                />
                <button onClick={handleIncrement} style={{ border: "none" }}>
                  +
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center buy mt-4 ">
              <Button
                className="btn btn-danger d-block text-center"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ Hàng
              </Button>
              <Button className="btn btn-success d-block text-center">
                Mua ngay
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Produc;
