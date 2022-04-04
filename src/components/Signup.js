import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Signup.css';
export default function SignUpModal() {
  const [cancelModal, setCancelModal] = useState(false);
  const handelCancelModal = (e) => {
    if (e.currentTarget === e.target) {
      setCancelModal(!cancelModal);
    }
  };
  return (
    <>
      <Link to="/">
        <div
          className={cancelModal ? 'hide' : 'modal'}
          onClick={handelCancelModal}
        ></div>
      </Link>
      <div className="Login-container ">
        <div className="Login-content__header">
          <h2>Đăng nhập hoặc đăng ký</h2>
        </div>
        <div className="Login-content__body">
          <form>
            <h2 className="Login__header">Chào mừng bạn đến với Babul</h2>
            <div className="regist-nation form-group">
              <div className="regist-nation-wrap">
                <label htmlFor="nation">Quốc gia/Khu Vực</label>
                <select
                  name="nation"
                  className="nation"
                >
                  <option value="USA">Hoa Kỳ (+1)</option>
                  <option value="VN">Việt Nam(+84)</option>
                  <option value="UK">Vương Quốc Anh (+44)</option>
                </select>
              </div>
              <div className="regist-icon">
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
            <div className="regist-phoneNumber-form">
              <div className="regist-phoneNumber-form-wrap">
                <div className="regist-phoneNumber-text">Số điện thoại</div>
                <input
                  name="phoneInputphoneNumber"
                  placeholder="(XXX) XXX-XXXX"
                  className="regist-numberPhone"
                  id="phone-number"
                ></input>
              </div>
            </div>
            <div className="regist-policy">
              <p>
                Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện
                thoại. Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn.
                <a
                  href="/"
                  className="policy-link"
                >
                  Chính sách về quyền riêng tư
                </a>{' '}
              </p>
            </div>
            <button className="regist-btn">Tiếp tục</button>
          </form>
          <div className="Daiphancach">hoặc</div>
          <Button
            buttonStyle="btn-login"
            buttonSize="large"
            canceSignup
          >
            <i className="fab fa-facebook icon-fb"></i>
            <span>Tiếp tục với Facebook </span>
          </Button>
          <Button
            buttonStyle="btn-login"
            buttonSize="large"
            canceSignup
          >
            <i className="fab fa-google icon-gg"></i>
            <span>Tiếp tục với Google </span>
          </Button>
          <Button
            buttonStyle="btn-login"
            buttonSize="large"
            canceSignup
          >
            <i className="fab fa-apple icon-apple"></i>
            <span>Tiếp tục với Apple </span>
          </Button>

          <Button
            buttonStyle="btn-login"
            buttonSize="large"
            canceSignup
          >
            <i className="fas fa-envelope icon-email"></i>
            <span>Tiếp tục với Email </span>
          </Button>
          <a
            href="/"
            className="Need-help"
          >
            Need Help ?
          </a>
        </div>
      </div>
    </>
  );
}
