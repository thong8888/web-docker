import React, { useState } from "react";
import iconEmail from "../img/icon-email.07028736.svg";
import iconPhone from "../img/icon-phone.4716e344.svg";
import iconLocation from "../img/icon-location.35ba4e77.svg";
import appStore from "../img/app_store.898e5572.png";
import googlePlay from "../img/google_play.8b8e8458.png";
import qrCode from "../img/aboutUs_qrcode.617faa72.jpg";
import iconFacebook from "../img/zalo.45a1df46.svg";
import iconYoutube from "../img/Tiktok1.6fcb1ff8.svg";
import iconTiktok from "../img/Tiktok1.6fcb1ff8.svg";
import iconJT from "../img/j&t.c4156e1b.svg";
import icontiki from "../img/tiki.fa2cff71.svg";
import iconLazada from "../img/lazada.0c932936.svg";
import iconTheGioiDiDong from "../img/TheGioiDiDong6.5c7f9a11.svg";
import iconOppo from "../img/Oppo4bfe77ca4.svg";
import iconZalo from "../img/zalo.45a1df46.svg";
import iconPancake from "../img/pancake.3cda5a90.svg";
import iconSapo from "../img/Sapo.412a272d.svg";
import iconHaravan from "../img/haravan.af59c294.svg";
import iconKiotViet from "../img/KiotViet.3c426e8e.svg";
import loginbg from "../img/login_bg.9cffbfc1.png";
import "../styles/login.css";

const AboutUsPopup = ({ onClose }) => (
  <div className="aboutus-popup">
    <button className="aboutus-close" onClick={onClose}>
      ×
    </button>
    <div className="aboutus-content">
      <img src={iconJT} alt="J&T Express" className="aboutus-logo" />
      <h3>
        CÔNG TY TNHH MỘT THÀNH VIÊN
        <br />
        CHUYỂN PHÁT NHANH THUẬN PHONG
      </h3>
      <p>
        J&T Express là thương hiệu chuyển phát nhanh dựa trên sự phát triển của
        công nghệ và Internet...
      </p>
      <div className="aboutus-info">
        <p>
          <b>Giấy CNĐKKD:</b> 0313617136
        </p>
        <p>
          <b>Ngày cấp:</b> 13/01/2016, đăng ký thay đổi lần 06 ngày 25/09/2018
        </p>
        <p>
          <b>Cơ Quan Cấp:</b> Sở KHĐT TP Hồ Chí Minh
        </p>
      </div>
      <div className="aboutus-contact">
        <p>
          <img src={iconEmail} alt="Email" className="aboutus-icon" />
          <b>Email:</b> cskh@jtexpress.vn
        </p>
        <p>
          <img src={iconPhone} alt="Phone" className="aboutus-icon" />
          <b>Hotline:</b> 1900 1088
        </p>
        <p>
          <img src={iconLocation} alt="Location" className="aboutus-icon" />
          <b>Địa chỉ:</b> 10 Mai Chí Thọ, Thủ Thiêm, Tp. Thủ Đức, Tp. Hồ Chí
          Minh
        </p>
      </div>
      <div className="aboutus-apps">
        <h4>Tải ứng dụng</h4>
        <img src={qrCode} alt="QR" className="aboutus-qr" />
        <div>
          <a href="https://apps.apple.com/vn/app/j-t-express-vietnam/id1457279222">
            <img src={appStore} alt="App Store" className="aboutus-app-icon" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.jtexpress.vn">
            <img
              src={googlePlay}
              alt="Google Play"
              className="aboutus-app-icon"
            />
          </a>
        </div>
      </div>
      <div className="aboutus-social">
        <a href="https://facebook.com/jtexpressvn">
          <img src={iconFacebook} alt="Facebook" />
        </a>
        <a href="https://youtube.com">
          <img src={iconYoutube} alt="YouTube" />
        </a>
        <a href="https://tiktok.com">
          <img src={iconTiktok} alt="TikTok" />
        </a>
      </div>
      <div className="aboutus-policy">
        <p>Chính sách bảo mật</p>
        <p>Copyright © 2021 J&T Express. All rights reserved.</p>
      </div>
    </div>
  </div>
);
const Forgotpasword = ({ onClose }) => (
  <div className="forgotpassword-popup">
    <div className="header-overlay-forgotpassword">
      <div className="forgotpassword-header">
        <h3>Xác nhận thay đổi mật khẩu</h3>
        <button onClick={onClose}>×</button>{" "}
        {/* Nút đóng popup đổi thành hình svg */}
      </div>
    </div>
    <div className="forgotpassword-content">
      <label className="forgotpassword-text">
        Nhập số điện thoại/Mã khách hàng
      </label>
      <br />
      <input
        type="text"
        placeholder="Nhập số điện thoại/Mã khách hàng"
        className="forgotpassword-input"
      />
      <br />
    </div>
    <div className="forgotpassword-footer">
      <button className="forgotpassword-ok" onClick={onClose}>
        Gửi Yêu Cầu
      </button>
    </div>
  </div>
);
const Login = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  return (
    <div className="login_container">
      <header className="login-header">
        <img src={iconJT} alt="J&T Express" className="login-logo" />
      </header>
      <img src={loginbg} alt="Background" className="login-bg" />
      <div className="login-form-container">
        <form className="login-form">
          <section className="login-welcome">
            <div className="login-bt">
              <p className="title">Đăng nhập</p>
              <form className="login-form">
                <label>Số điện thoại / Mã khách hàng</label>
                <input
                  type="text"
                  placeholder="Số điện thoại / Mã khách hàng"
                />
                <div className="password-row">
                  <label>Mật khẩu</label>
                  <button
                    type="button"
                    className="forgot-btn"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Quên mật khẩu ?
                  </button>
                </div>

                <input type="password" placeholder="Nhập mật khẩu" />
                <button type="submit" className="login-btn">
                  Đăng nhập
                </button>
              </form>
              <div className="login-links">
                <p class="user_tips">
                  <span>Bạn chưa có tài khoản?</span>
                  <span>Đăng ký</span>
                </p>
              </div>
            </div>
            <div className="AboutUs">
              <button
                type="button"
                className="aboutus-btn"
                onClick={() => setShowAboutUs(true)}
              >
                Về chúng tôi
              </button>
            </div>
            <div className="swiper-container ">
              <div className="swiper-title">Khách hàng tiêu biểu</div>
              <div className="swiper-brands-container">
                {/* <!-- Nút qua trái --> */}
                {/* <svg
                  class="go-left svg-icon"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                >
                  <use xlinkhref="#icon-arrow-left"></use>
                </svg> */}

                {/* <!-- Swiper container --> */}
                <div class="swiper-container-swiper-brands">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src={iconTiktok} class="item-image" alt="Tiktok" />
                    </div>
                    <div class="swiper-slide">
                      <img src={icontiki} class="item-image" alt="Tiki" />
                    </div>
                    <div class="swiper-slide">
                      <img src={iconLazada} class="item-image" alt="Lazada" />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={iconTheGioiDiDong}
                        class="item-image"
                        alt="Thế Giới Di Động"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img src={iconOppo} class="item-image" alt="Oppo" />
                    </div>
                    <div class="swiper-slide">
                      <img src={iconZalo} class="item-image" alt="Zalo" />
                    </div>
                    <div class="swiper-slide">
                      <img src={iconPancake} class="item-image" alt="Pancake" />
                    </div>
                    <div class="swiper-slide">
                      <img src={iconSapo} class="item-image" alt="Sapo" />
                    </div>
                    <div class="swiper-slide">
                      <img src={iconHaravan} class="item-image" alt="Haravan" />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={iconKiotViet}
                        class="item-image"
                        alt="KiotViet"
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Nút qua phải --> */}
                {/* <svg
                  class="go-right svg-icon"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                >
                  <use xlinkhref="#icon-arrow-right"></use>
                </svg> */}
              </div>
            </div>
          </section>
        </form>
      </div>
      {showAboutUs && <AboutUsPopup onClose={() => setShowAboutUs(false)} />}
      {showForgotPassword && (
        <Forgotpasword onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
};

export default Login;
