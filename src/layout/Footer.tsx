import React from 'react';

const Footer = () => {
  return (
    <footer className="foot_sec">
      <div className="foot_top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="foot_left">
                <img src="https://i.ibb.co/1GTcwmk/logo.png" alt="" />
                <p> WINDOW KING, PROFESSIONAL WINDOW CLEANING,</p>
                <p> COME BANK HOME AND GET HAPPINESS </p>
                <p> THAT BEEN IN BUSINESS SINCE 1998.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="foot_rt">
                <h3>CONTACTS</h3>
                <p>
                  <span>Address: </span>
                  29 Yet Kieu, Thong Nhat ward, Buon Ho town, DakLak province
                </p>
                <p>
                  <span>Phone: </span>
                  <a href="tel:#">(034) 999888</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot_btm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <a href="#"> Window King</a> © 2023. Allright Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Design and Development By <a href="#"> Baro</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
