import React, { useState } from "react";
import Header from "../components/Header";
import Mid_Header from "../components/Mid_Header";
import { Container } from "react-bootstrap";
import Infor from "../components/Infor";
import Produc from "../model/Produc"; // Importing Produc component
import Manufacture from "../screen/Manufacture";
import News from "../screen/News";
import Footer from "../components/Footer";
import ListProduct from "../model/ListProduct";
import Cart from "../screen/Cart";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const defaultProductId = "6653e6ef6e7d80aecc9d52c9";
  const [selectedProductId, setSelectedProductId] = useState(defaultProductId);
  const [search, setSearch] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  const handleSearch = (name) => {
    setSearch(name);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        const updatedItems = prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedItems);
        // Display success toast message
        toast.success("Số lượng sản phẩm đã được cập nhật trong giỏ hàng!");
        return updatedItems;
      } else {
        // If the item is not in the cart, add it with quantity 1
        const newCartItems = [...prevItems, { ...product, quantity: 1 }];
        setCartItems(newCartItems);
        // Display success toast message
        toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
        return newCartItems;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  return (
    <Container fluid className="p-0">
      <Header />
      <Mid_Header
        onChangeSearch={handleSearch}
        onCartClick={() => setCartVisible(true)}
      />
      {!search && <Infor />}
      {!search && (
        <Produc
          productId={selectedProductId}
          onAddToCart={handleAddToCart} // Pass onAddToCart function to Produc component
        />
      )}
      <ListProduct
        onProductSelect={handleProductSelect}
        search={search}
        onAddToCart={handleAddToCart}
      />
      <Manufacture />
      <News />
      <Footer />
      {cartVisible && (
        <Cart
          cartItems={cartItems}
          visible={cartVisible}
          setVisible={setCartVisible}
          setCartItems={setCartItems}
          removeFromCart={removeFromCart}
        />
      )}
      <ToastContainer />
    </Container>
  );
};

export default Home;
