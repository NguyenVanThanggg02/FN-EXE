import React from "react";
import "../style/footer.css";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer class="footer pt-4">
      <div class="mid-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-12">
              <div class="widget-ft">
                <a href="/" class="blocklogo">
                  <img
                    src={logo}
                    width="60px"
                    height="60px"
                    alt="logo"
                    style={{ borderRadius: "40px" }}
                  />
                </a>
                <div class="content_contact">Đại Học FPT Hà Nội</div>
                <div class="content_contact">
                  <a href="tel:0368286862">0368286862</a>
                </div>
                <div class="content_contact">
                  <a href="mailto:hellocafein@gmail.com">thang@gmail.com</a>
                </div>
                <div class="content_contact">
                  <a href="#" title="Hệ thống chi nhánh">
                    Hệ thống chi nhánh
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-12 footer-click">
              <div class="widget-ft">
                <h4 class="title-menu clicked">Thông tin khách hàng</h4>
                <ul class="list-menu toggle-mn">
                  <li class="li_menu">
                    <a href="/" title="Trang chủ">
                      Trang chủ
                    </a>
                  </li>

                  <li class="li_menu">
                    <a href="/tin-tuc" title="Tin tức">
                      Tin tức
                    </a>
                  </li>

                  <li class="li_menu">
                    <a href="/lien-he" title="Liên hệ">
                      Liên hệ
                    </a>
                  </li>

                  <li class="li_menu">
                    <a href="/gioi-thieu" title="Giới thiệu">
                      Giới thiệu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-12 footer-click">
              <div class="widget-ft">
                <h4 class="title-menu clicked">Chính sách mua hàng</h4>
                <ul class="list-menu toggle-mn">
                  <li class="li_menu">
                    <a href="/" title="Trang chủ">
                      Trang chủ
                    </a>
                  </li>

                  <li class="li_menu">
                    <a href="/tin-tuc" title="Tin tức">
                      Tin tức
                    </a>
                  </li>

                  <li class="li_menu">
                    <a href="/lien-he" title="Liên hệ">
                      Liên hệ
                    </a>
                  </li>

                  <li class="li_menu">
                    <a href="/gioi-thieu" title="Giới thiệu">
                      Giới thiệu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-12">
              <h4 class="title-menu">Dịch vụ hỗ trợ</h4>
              <div class="payment">
                <img
                  src="//bizweb.dktcdn.net/100/472/304/themes/887048/assets/payment.png?1684115584822"
                  data-src="//bizweb.dktcdn.net/100/472/304/themes/887048/assets/payment.png?1684115584822"
                  class="lazyload loaded"
                  alt="Phương thức thanh toán"
                  data-was-processed="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright clearfix">
        <span class="wsp">
          <span class="mobile">
            Bản quyền thuộc về <b>Nguyen Van Thang</b>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
