import React from "react";
import "../styles/footer.css";
import iconJT from "../img/j&t.c4156e1b.svg";
import appStore from "../img/app_store.898e5572.png";
import googlePlay from "../img/google_play.8b8e8458.png";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="jt-footer">
      <div className="jt-footer-main">
        <div className="jt-footer-logo">
          <img src={iconJT} alt="J&T Express" className="login-logo" />
          <div className="jt-footer-description">
            <a>CÔNG TY TNHH MỘT THÀNH VIÊN CHUYỂN PHÁT NHANH THUẬN PHONG</a>
            <p>
              Giấy CNĐKKD: 0313617136 - Ngày cấp: 13/01/2016, đăng ký thay đổi
              lần 06 ngày 25/09/2018 Cơ Quan Cấp: Phòng Đăng ký kinh doanh - Sở
              kế hoạch và đầu tư TP Hồ Chí Minh
            </p>
          </div>
          <div className="jt-footer-certifications">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/dmca.png"
              alt="DMCA.com Protection Status"
              title="DMCA.com Protection Status"
              className="footer-certification-icon"
            />
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/bo-cong-thuong.png"
              alt="Bộ Công Thương"
              title="Bộ Công Thương"
              className="footer-certification-icon"
            />
          </div>
        </div>
        <div className="jt-footer-quick">
          <h4>Truy cập nhanh</h4>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/tracking">Tra cứu vận đơn</a>
            </li>
            <li>
              <a href="/service">Dịch vụ</a>
            </li>
            <li>
              <a href="/about-us">Giới thiệu</a>
            </li>
            <li>
              <a href="/contact">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className="jt-footer-contact">
          <h4>Thông tin liên hệ</h4>
          <p>
            Hotline: <a href="tel:19001088">1900 1088</a>
          </p>
          <p>
            Email: <a href="mailto:cskh@jtexpress.vn">cskh@jtexpress.vn</a>
          </p>
          <p>10 Mai Chí Thọ, P. Thủ Thiêm, Thành phố Thủ Đức, TP. HCM</p>
        </div>
        <div className="jt-footer-app">
          <h4>Tải ứng dụng</h4>
          <div className="jt-footer-app-links">
            <img
              src="https://quickchart.io/chart?chs=500x500&cht=qr&chl=https://jtexpress.vn/vi/download&choe=UTF-8"
              alt="J&T Express - Giao hàng Chuyển phát nhanh"
              title="Link to Download"
              className="QRcode"
            />

            <a href="https://play.google.com/store/apps/details?id=com.jtexpress.vn">
              <img
                src={googlePlay}
                alt="Google Play"
                className="aboutus-app-icon"
              />
            </a>
            <a href="https://apps.apple.com/vn/app/j-t-express-vietnam/id1457279222">
              <img
                src={appStore}
                alt="App Store"
                className="aboutus-app-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="jt-footer-bottom">
        <div className="jt-footer-social">
          <SocialLinks />
        </div>
        <p>&copy; Copyright © 2025 J&T Express. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
