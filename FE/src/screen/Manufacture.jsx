import React from "react";
import { Container } from "react-bootstrap";

const Manufacture = () => {
  return (
    <Container fluid style={{ backgroundColor: "#EEEEEE" }}>
      <Container style={{paddingBottom:'100px'}}>
        <div className="text-center pt-4" style={{marginBottom:'80px'}}>
          <h2 style={{color:'#FF9900'}}>Quy Trình Sản Xuất Nếm Thơm</h2>
        </div>
        <div className="row row-75Gutter mt-4 text-center" >
          <div class="col-lg-2 col-md-6 col-12 col_process" style={{backgroundColor:'white', borderRadius:'20px', marginRight:'5px', marginTop:'5px'}}>
            <div class="box_process">
              <h3  style={{color:'#FF9900'}}>1</h3>
              <h6>Đun chảy sáp đậu nành.</h6>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 col_process" style={{backgroundColor:'white', borderRadius:'20px', marginRight:'5px', marginTop:'5px'}}>
            <div class="box_process">
              <h3  style={{color:'#FF9900'}}>2</h3>
              <h6>
                Dùng một chút sáp nóng chảy dán bấc nến vào đáy hộp thủy tinh.
              </h6>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 col_process" style={{backgroundColor:'white', borderRadius:'20px', marginRight:'5px', marginTop:'5px'}}>
            <div class="box_process">
              <h3  style={{color:'#FF9900'}}>3</h3>
              <h6>
                Thêm 10 giọt gỗ tuyết tùng, 15 giọt chanh và 15 giọt tinh dầu
                bưởi
                <br /> hoặc cam vào hỗn hợp sáp tan chảy và khuấy đều.
              </h6>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-12 col_process" style={{backgroundColor:'white', borderRadius:'20px', marginRight:'5px', marginTop:'5px'}}>
            <div class="box_process">
              <h3  style={{color:'#FF9900'}}>4</h3>
              <h6>
                Đổ hỗn hợp vào hộp thủy tinh và thưởng thức hương thơm.
              </h6>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Manufacture;
