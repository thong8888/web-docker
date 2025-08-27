import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="jt-footer">
      <div className="jt-footer-main">
        <div className="jt-footer-logo">
          <img
            src="https://jt-express.vn/themes/jtexpress/assets/images/logo.svg"
            alt="J&T Express"
          />
          <div className="jt-footer-description">
            <a>CÔNG TY TNHH MỘT THÀNH VIÊN CHUYỂN PHÁT NHANH THUẬN PHONG</a>
            <p>
              Giấy CNĐKKD: 0313617136 - Ngày cấp: 13/01/2016, đăng ký thay đổi
              lần 06 ngày 25/09/2018 Cơ Quan Cấp: Phòng Đăng ký kinh doanh - Sở
              kế hoạch và đầu tư TP Hồ Chí Minh
            </p>
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
            <a href="https://play.google.com/store/apps/details?id=com.jtexpress.vn">
              <img
                src="https://jt-express.vn/themes/jtexpress/assets/images/icon-googleplay.svg"
                alt="Google Play"
              />
            </a>
            <a href="https://apps.apple.com/vn/app/j-t-express-vietnam/id1457279222">
              <img
                src="https://jt-express.vn/themes/jtexpress/assets/images/icon-appstore.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
        <div className="jt-footer-social">
          <h4>Kết nối với chúng tôi</h4>
          <a
            href="https://www.facebook.com/jtexpressvn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://jt-express.vn/themes/jtexpress/assets/images/icon-facebook.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCwQvQnQnQnQnQnQnQnQnQnQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://jt-express.vn/themes/jtexpress/assets/images/icon-youtube.svg"
              alt="YouTube"
            />
          </a>
          <a
            href="https://www.tiktok.com/@jtexpressvn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://jt-express.vn/themes/jtexpress/assets/images/icon-tiktok.svg"
              alt="TikTok"
            />
          </a>
        </div>
      </div>
      <div className="jt-footer-bottom">
        <p>&copy; 2025 J&T Express. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
