import React from "react";
import { Dialog } from "primereact/dialog";
import { Button, Col, Row } from "react-bootstrap";
import { Trash, WalletFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Cart = ({ visible, setVisible, cartItems, removeFromCart, setCartItems }) => {
  const handleCheckout = () => {
    setVisible(false);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: parseInt(newQuantity) } : item
      )
    );
  };

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <h5>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h5>
      </div>
      <Link to={"/payment"}>
        <Button className="btn btn-success" onClick={handleCheckout}>
          <WalletFill
            style={{ fontSize: "22px", color: "white", marginRight: "7px" }}
          />
          Check Out
        </Button>
      </Link>
    </div>
  );

  return (
    <div>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Cart Shop</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <Row>
              <Col className="text-center ">
                <div className="table-responsive">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th style={{ width: "15%" }}>Image</th>
                        <th style={{ width: "25%" }}>Product</th>
                        <th style={{ width: "15%" }}>Quantity</th>
                        <th style={{ width: "20%" }}>Price</th>
                        {/* <th style={{ width: "20%" }}>Size</th> */}
                        <th style={{ width: "25%" }}>Total</th>
                        <th style={{ width: "25%" }}>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item._id}>
                          <td style={{ display: "flex", textAlign: "center" }}>
                            <img
                              src={item.images[0]}
                              alt="image"
                              style={{
                                width: "100px",
                                height: "auto",
                                verticalAlign: "middle",
                              }}
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>{item.name}</td>
                          <td style={{ verticalAlign: "middle" }}>
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>{item.price}</td>
                          <td style={{ verticalAlign: "middle" }}>{item.price * item.quantity}</td>
                          <td style={{ verticalAlign: "middle" }}>
                            <Trash
                              style={{
                                color: "red",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => removeFromCart(item._id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Cart;
