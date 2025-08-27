import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="jt-header">
      <div className="jt-header-top">
        <span>Copyright @J&T Express</span>
        <div className="jt-header-top-right">
          <span>#J&T Express</span>
          <span>#Promotion</span>
          <input
            className="jt-header-search"
            type="text"
            placeholder="Search"
          />
          <select className="jt-header-lang">
            <option>VI</option>
            <option>EN</option>
          </select>
        </div>
      </div>
      <div className="jt-header-main">
        <img
          src="https://jt-express.vn/themes/jtexpress/assets/images/logo.svg"
          alt="J&T Express"
          className="jt-header-logo"
        />
        <nav className="jt-header-nav">
          <Link to="/" className="active">
            Trang chủ
          </Link>
          <div className="jt-header-dropdown">
            <a href="../pages/about-us/About-Us.js">Giới thiệu &#9662;</a>
            <div className="jt-header-dropdown-menu">
              <a href="../pages/about-us/About-Us.js">Về Chúng Tôi</a>
              <a href="../pages/about-us/Commitment.js">Cam Kết</a>
            </div>
          </div>
          <div className="jt-header-dropdown">
            <a href="../pages/tracking/tariff.js">Tra cứu &#9662;</a>
            <div className="jt-header-dropdown-menu">
              <a href="../pages/tracking/tariff.js">Cước Vận Chuyển</a>
              <a href="../pages/tracking/office-point.js">Bưu Cục Gần Đây</a>
              <a href="../pages/tracking/track.js">Vận Đơn</a>
              <a href="../pages/tracking/price-list.js">Bản giá </a>
              <a href="../pages/tracking/prohibited-goods.js">
                Hàng Từ Chối Vận Chuyển
              </a>
              <a href="../pages/tracking/quy-cach-dong-goi-hang-hoa.js">
                Quy Cách Đóng Gói Hàng Hóa
              </a>
              <a href="../pages/tracking/phan-vung-tinh-cuoc.js">
                BẢNG PHÂN VÙNG TÍNH CƯỚC
              </a>
              <a href="../pages/tracking/quy-trinh-van-chuyen-hang-hoa.js">
                QUY TRÌNH VẬN CHUYỂN HÀNG HÓA
              </a>
            </div>
          </div>
          <div className="jt-header-dropdown">
            <a href="../pages/service/service.js">Dịch vụ &#9662;</a>
            <div className="jt-header-dropdown-menu">
              <a href="../pages/service/fresh-service.js">Dịch vụ tươi sống</a>
              <span className="jt-header-red">J&T Fresh</span>
              <a href="../pages/service/international-service.JS">
                Tuyến Vận Chuyển Quốc Tế
              </a>
              <span className="jt-header-red">J&T International</span>
              <a href="../pages/service/standard-service.js">
                Dịch vụ Chuyển Phát Tiêu Chuẩn
              </a>
              <span className="jt-header-red">J&T Standard</span>
              <a href="../pages/service/fast-service.js">Dịch Vụ Nhanh</a>
              <span className="jt-header-red">J&T Fast</span>
              <a href="../pages/service/super-service.js">
                Siêu Dịch Vụ Giao Hàng
              </a>
              <span className="jt-header-red">J&T Super</span>
              <a href="../pages/contact/contact.js">Dịch vụ Hậu Cần Đơn Hàng</a>
              <span className="jt-header-red">J&T Fulfillment</span>
            </div>
          </div>
          <a href="../pages/esg.js">Phát triển bền vững</a>
          <div className="jt-header-dropdown">
            <a href="../pages/tuyen-dung/tuyen-dung.js">Tuyển dụng &#9662;</a>
            <div className="jt-header-dropdown-menu">
              <a href="../pages/tuyen-dung/tuyen-dung.js">Tuyển Dụng</a>
              <a href="../pages/tuyen-dung/cuoc-song-jnt.js">Cuộc Sống J&T</a>
            </div>
          </div>
          <div className="jt-header-dropdown">
            <a href="../pages/blog/blog.js"> Blog &#9662;</a>
            <div className="jt-header-dropdown-menu">
              <a href="../pages/blog/magazine.js">J-Magazine</a>
              <a href="../pages/blog/news.js">Tin Tức Nỗi Bật</a>
            </div>
          </div>
          <div className="jt-header-dropdown">
            <a href="../pages/contact/contact.js">Tư vấn &#9662;</a>
            <div className="jt-header-dropdown-menu">
              <a href="../pages/contact/contact.js">Liên Hệ </a>
              <a href="../pages/contact/dang-ky-tu-van.js">Đăng Ký Tư Vấn</a>
            </div>
          </div>
        </nav>
        <Link to="/login" className="jt-header-btn">
          Đăng ký / Đăng nhập
        </Link>
      </div>
    </header>
  );
}

export default Header;
