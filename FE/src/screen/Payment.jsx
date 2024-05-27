import React from "react";
import { Button, Container } from "react-bootstrap";
import payment from "../assets/images/payment.jpg";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <div
        class="bg-white p-5 rounded-lg"
        style={{ border: "solid 1px gray", borderRadius: "50px" }}
      >
        <h2 class="text-lg font-semibold mb-3">Thanh toán</h2>
        <img src={payment} alt="Payment QR Code" style={{ height: "500px" }} />
        <form class="mt-5">
          <div class="mb-4">
            <label
              class="block text-gray-700 font-semibold mb-2"
              for="cardNumber"
            >
              Lưu ý: Nhập đúng nội dung chuyển khoản: Số lượng + Tên sản phẩm +
              Địa chỉ + Số điện thoại
            </label>
            <p>Ví dụ: 2 - Nến thơm hương Rose Sóc Sơn_Hà Nội - 0123456789 </p>
            <p class="text-red-700">Nhớ Chụp Bill Nhé !!!</p>
          </div>
          <div class="flex justify-between">
            <Link to={"/"}>
              <Button className="btn btn-success">Trở về</Button>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Payment;
