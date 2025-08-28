import React, { useState } from "react";
import iconEmail from "../img/icon-email.07028736.svg";
import iconPhone from "../img/icon-phone.4716e344.svg";
import iconLocation from "../img/icon-location.35ba4e77.svg";
import appStore from "../img/app_store.898e5572.png";
import googlePlay from "../img/google_play.8b8e8458.png";
import qrCode from "../img/aboutUs_qrcode.617faa72.jpg";
import iconJT from "../img/j&t.c4156e1b.svg";
import loginbg from "../img/login_bg.9cffbfc1.png";
import "../styles/login.css";
import SocialLinks from "../components/SocialLinks";
import BrandSwiper from "../components/BrandSwiper";

const AboutUsPopup = ({ onClose }) => (
  <div className="aboutus-popup">
    <button className="aboutus-close" onClick={onClose} aria-label="Đóng">
      ×
    </button>
    <div className="aboutus-content">
      <div className="aboutus-header">
      <img src={iconJT} alt="J&T Express" className="aboutus-logo" />
        <h3> CÔNG TY TNHH MỘT THÀNH VIÊN CHUYỂN PHÁT NHANH THUẬN PHONG</h3>
        <p>
          J&T Express là thương hiệu chuyển phát nhanh dựa trên sự phát triển của
          công nghệ và Internet. Chúng tôi sở hữu mạng lưới rộng khắp, cung cấp
          dịch vụ chuyển phát nhanh cho nhiều ngành hàng trong nước.
        </p>
      </div>

      <div className="aboutus-section">
        <div className="aboutus-section-title">THÔNG TIN</div>
        <div className="aboutus-divider"></div>
        <div className="aboutus-info">
          <p>Giấy CNĐKKD: 0313617136</p>
          <p>Ngày cấp: 13/01/2016, đăng ký thay đổi lần 06 ngày 25/09/2018</p>
          <p>Cơ Quan Cấp: Sở KHĐT TP Hồ Chí Minh</p>
        </div>
      </div>

      <div className="aboutus-section">
        <div className="aboutus-section-title">LIÊN HỆ</div>
        <div className="aboutus-divider"></div>
      <div className="aboutus-contact">
        <p>
          <img src={iconEmail} alt="Email" className="aboutus-icon" />
            cskh@jtexpress.vn
        </p>
        <p>
          <img src={iconPhone} alt="Phone" className="aboutus-icon" />
            1900 1088
        </p>
        <p>
          <img src={iconLocation} alt="Location" className="aboutus-icon" />
            10 Mai Chí Thọ, Thủ Thiêm, Tp. Thủ Đức, Tp. Hồ Chí Minh
        </p>
        </div>
      </div>

      <div className="aboutus-section">
        <div className="aboutus-section-title">TẢI ỨNG DỤNG</div>
        <div className="aboutus-divider"></div>
      <div className="aboutus-apps">
        <img src={qrCode} alt="QR" className="aboutus-qr" />
          <div className="aboutus-badges">
          <a href="https://apps.apple.com/vn/app/j-t-express-vietnam/id1457279222">
            <img src={appStore} alt="App Store" className="aboutus-app-icon" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.jtexpress.vn">
              <img src={googlePlay} alt="Google Play" className="aboutus-app-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="aboutus-section">
        <div className="aboutus-section-title">KẾT NỐI</div>
        <div className="aboutus-divider"></div>
      <div className="aboutus-social">
        <SocialLinks />
        </div>
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
        <button onClick={onClose} aria-label="Đóng">×</button>{" "}
      </div>
    </div>
    <div className="forgotpassword-content">
      <label className="forgotpassword-text">
        Số điện thoại/ Mã khách hàng
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
        Gửi yêu cầu
      </button>
    </div>
  </div>
);
const Login = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [mode, setMode] = useState("login"); // login | register
  const [tinhSearch, setTinhSearch] = useState("");
  const [quanSearch, setQuanSearch] = useState("");
  const [phuongSearch, setPhuongSearch] = useState("");
  const [showTinhDropdown, setShowTinhDropdown] = useState(false);
  const [showQuanDropdown, setShowQuanDropdown] = useState(false);
  const [showPhuongDropdown, setShowPhuongDropdown] = useState(false);

  const tinhOptions = ["TP. Hồ Chí Minh", "TP. Hà Nội", "TP. Đà Nẵng", "TP. Cần Thơ", "TP. Hải Phòng"];
  const quanOptions = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5"];
  const phuongOptions = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"];

  return (
    <div className="login_container">
      <header className="login-header">
        <img src={iconJT} alt="J&T Express" className="login-logo" />
      </header>
      <img src={loginbg} alt="Background" className="login-bg" />
      <div className="login-form-container">
        <div className="right-panel">
          {mode === "login" && (
            <>
              <form className="login-form">
                <h2 className="title">Đăng nhập</h2>
                <label>Số điện thoại, mã khách hàng hoặc email</label>
                <input
                  type="text"
                  placeholder="Số điện thoại/ Mã khách hàng/ Email"
                />
                <div className="password-row">
                  <label>Mật khẩu:</label>
                  <button
                    type="button"
                    className="forgot-btn"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Quên mật khẩu
                  </button>
                </div>
                <div className="input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                <button type="submit" className="login-btn">
                  Đăng nhập
                </button>
                <div className="login-links">
                  <span>Bạn chưa có tài khoản?</span>{" "}
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setMode("register")}
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
              <div className="brands-card">
                <div className="brands-card-header">Khách hàng tiêu biểu</div>
                <div className="brands-card-body">
                  <BrandSwiper />
                </div>
              </div>
            </>
          )}

          {mode === "register" && (
            <>
              <form className="register-form">
                <h2 className="title">Đăng ký tài khoản</h2>
                <div className="register-grid">
                  <div className="field">
                    <label>Tên cửa hàng *</label>
                    <input placeholder="Nhập tên cửa hàng" />
                  </div>
                  <div className="field">
                    <label>Số điện thoại *</label>
                    <input placeholder="Nhập số điện thoại" />
                  </div>
                  <div className="field">
                    <label>Email *</label>
                    <input placeholder="Nhập email" />
                  </div>
                  <div className="field">
                    <label>Mã giới thiệu</label>
                    <input placeholder="Nhập mã" />
                  </div>
                  <div className="field">
                    <label>Mật khẩu *</label>
                    <div className="input-group">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Xác nhận mật khẩu *</label>
                    <input placeholder="Nhập xác nhận mật khẩu" />
                  </div>
                  <div className="field field-full">
                    <label>Địa chỉ chi tiết *</label>
                    <input placeholder="Nhập địa chỉ (Số nhà/ đường/ ngõ/ toà nhà...)" />
                  </div>
                  <div className="field">
                    <label>Tỉnh/Thành *</label>
                    <div className="searchable-select">
                      <input 
                        type="text" 
                        placeholder="Chọn Tỉnh/ Thành phố"
                        className="select-input"
                        onFocus={() => setShowTinhDropdown(true)}
                        onChange={(e) => setTinhSearch(e.target.value)}
                        value={tinhSearch}
                      />
                      {showTinhDropdown && (
                        <div className="dropdown-list">
                          {tinhOptions.filter(tinh => 
                            tinh.toLowerCase().includes(tinhSearch.toLowerCase())
                          ).map((tinh, index) => (
                            <div 
                              key={index} 
                              className="dropdown-item"
                              onClick={() => {
                                setTinhSearch(tinh);
                                setShowTinhDropdown(false);
                              }}
                            >
                              {tinh}
                            </div>
                          ))}
                        </div>
                      )}
              </div>
            </div>
                  <div className="field">
                    <label>Quận/ Huyện *</label>
                    <div className="searchable-select">
                      <input 
                        type="text" 
                        placeholder="Chọn Quận/ Huyện"
                        className="select-input"
                        onFocus={() => setShowQuanDropdown(true)}
                        onChange={(e) => setQuanSearch(e.target.value)}
                        value={quanSearch}
                      />
                      {showQuanDropdown && (
                        <div className="dropdown-list">
                          {quanOptions.filter(quan => 
                            quan.toLowerCase().includes(quanSearch.toLowerCase())
                          ).map((quan, index) => (
                            <div 
                              key={index} 
                              className="dropdown-item"
                              onClick={() => {
                                setQuanSearch(quan);
                                setShowQuanDropdown(false);
                              }}
                            >
                              {quan}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
            </div>
                  <div className="field">
                    <label>Khu vực *</label>
                    <div className="searchable-select">
                      <input 
                        type="text" 
                        placeholder="Chọn Phường/ Xã"
                        className="select-input"
                        onFocus={() => setShowPhuongDropdown(true)}
                        onChange={(e) => setPhuongSearch(e.target.value)}
                        value={phuongSearch}
                      />
                      {showPhuongDropdown && (
                        <div className="dropdown-list">
                          {phuongOptions.filter(phuong => 
                            phuong.toLowerCase().includes(phuongSearch.toLowerCase())
                          ).map((phuong, index) => (
                            <div 
                              key={index} 
                              className="dropdown-item"
                              onClick={() => {
                                setPhuongSearch(phuong);
                                setShowPhuongDropdown(false);
                              }}
                            >
                              {phuong}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="policy-row">
                  <input type="checkbox" id="agree" />
                  <label htmlFor="agree">
                    Tôi đã đọc và đồng ý với <span className="link">Chính sách bảo mật thông tin</span>
                  </label>
                </div>

                <button type="submit" className="login-btn">
                  Đăng ký ngay
                </button>
                <div className="login-links">
                  <span>Bạn đã có tài khoản</span>{" "}
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setMode("login")}
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
              <div className="brands-card">
                <div className="brands-card-header">Khách hàng tiêu biểu</div>
                <div className="brands-card-body">
                  <BrandSwiper />
                </div>
              </div>
            </>
          )}
            </div>
      </div>
      <button className="aboutus-tab" onClick={() => setShowAboutUs(true)} aria-label="Về chúng tôi">
        Về chúng tôi
      </button>
      {showAboutUs && (
        <>
          <div className="modal-overlay" onClick={() => setShowAboutUs(false)}></div>
          <AboutUsPopup onClose={() => setShowAboutUs(false)} />
        </>
      )}
      {showForgotPassword && (
        <>
          <div className="modal-overlay" onClick={() => setShowForgotPassword(false)}></div>
        <Forgotpasword onClose={() => setShowForgotPassword(false)} />
        </>
      )}
    </div>
  );
};

export default Login;
