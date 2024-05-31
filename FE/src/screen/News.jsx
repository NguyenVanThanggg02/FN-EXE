import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/news.css";
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"
import blog3 from "../assets/images/blog3.jpg"
import blog4 from "../assets/images/blog4.jpg"
import blog5 from "../assets/images/blog5.jpg"

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
                    src={blog1}
                    width="350"
                    alt="filter"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "5px 10px 10px 5px #C0C0C0",
                    }}
                  />
                  <div className="content_">
                    <h3 className="text-center pt-3">
                    The Feeling Tea
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
                    src={blog2}
                    width="350"
                    alt="filter"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "5px 10px 10px 5px #C0C0C0",
                    }}
                  />
                  <div className="content_">
                    <h3 className="text-center pt-3">
                    Sea Salt
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
                    src={blog5}
                    width="350"
                    alt="filter"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "5px 10px 10px 5px #C0C0C0",
                    }}
                  />
                  <div className="content_">
                    <h3 className="text-center pt-3">
                    CupCake Hương Dâu
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
