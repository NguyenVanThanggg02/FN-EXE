import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/news.css";

const News = () => {
  return (
    <Container fluid style={{ backgroundColor: "#fffaef" }}>
      <Container className="pt-4">
        <div className="text-center">
          <h2 style={{ color: "#FF9900" }}>Blogs</h2>
        </div>
        <div className="pt-5 pb-5">
          <div
            className="grid mt-2 surface-ground p-3 surface-0 shadow-2"
            style={{ margin: 0 }}
          >
            <div className="row">
              <div className="col-md-4">
                <Link
                  to={"/blog"}
                  style={{ color: "#FF9966", textDecoration: "none" }}
                >
                  <Image
                    className="border-round-md"
                    src="https://firstsight.vn/wp-content/uploads/2021/11/z3859590475402_5ac4ee36ec154e88d7c751c353347237.jpg"
                    width="350"
                    alt="filter"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "5px 10px 10px 5px #C0C0C0",
                    }}
                  />
                  <div className="content_">
                    <h3 className="text-center pt-3">
                      Nến Thơm Handmade Adorable Hương Nước Hoa Sang Trọng
                    </h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to={"/blog"}
                  style={{ color: "#FF9966", textDecoration: "none" }}
                >
                  <Image
                    className="border-round-md"
                    src="https://media.loveitopcdn.com/6458/cach-lam-nen-thom-handmade-29.jpg"
                    width="350"
                    alt="filter"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "5px 10px 10px 5px #C0C0C0",
                    }}
                  />
                  <div className="content_">
                    <h3 className="text-center pt-3">
                      Mua Nến Thơm Tinh Dầu Làm Quà | An Toàn & Thư Giãn
                    </h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to={"/blog"}
                  style={{ color: "#FF9966", textDecoration: "none" }}
                >
                  <Image
                    className="border-round-md"
                    src="https://firstsight.vn/wp-content/uploads/2022/06/z3481777641647_2df310000eb0e476823267147baebf5f.jpg"
                    width="350"
                    alt="filter"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "5px 10px 10px 5px #C0C0C0",
                    }}
                  />
                  <div className="content_">
                    <h3 className="text-center pt-3">
                      Nến thơm handmade Him 7 tinh dầu cao cấp First Sight
                      Candle
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default News;
