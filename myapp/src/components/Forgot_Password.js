import React, { useState } from "react";
import "../styles/Forgot_Password.css";

function Forgot_Password() {
  const [showPopup, setShowPopup] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleForgotPasswordClick}>Quên Mật Khẩu</button>

      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <h2>Khôi phục mật khẩu</h2>
            <p>Vui lòng nhập email của bạn để đặt lại mật khẩu.</p>
            <input type="email" placeholder="Email" className="input" />
            <div className="button-container">
              <button className="button">Gửi</button>
              <button className="button" onClick={handleClosePopup}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forgot_Password;
