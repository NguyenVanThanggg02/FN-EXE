import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Introduce from "./screen/Introduce";
import Header from "./components/Header";
import Mid_Header from "./components/Mid_Header";
import Footer from "./components/Footer";
import Contact from "./screen/Contact";
import Blog from "./screen/Blog";
import Payment from "./screen/Payment";
import CheckOut from "./screen/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gioi-thieu"
          element={
            <>
              <Header />
              <Mid_Header />
              <Introduce />
              <Footer />
            </>
          }
        />
        <Route path="/lien_he" element={<>
              <Header />
              <Mid_Header />
              <Contact />
              <Footer />
            </>} />
            <Route path="/blog" element={<>
              <Header />
              <Mid_Header />
              <Blog />
              <Footer />
            </>} />
            <Route path="/payment" element={<>
              <Header />
              <Mid_Header />
              <Payment />
              <Footer />
            </>} />
            <Route path="/checkout" element={<>
              <Header />
              <Mid_Header />
              <CheckOut />
              <Footer />
            </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
