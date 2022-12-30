import React from "react";

const Header = () => {
  return (
    <>
      <div className="top-header">
        <div className="left">
          <div className="icons">
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
          <div className="text">
            <ul>
              <li> 00-259 2587</li>
              <li>CONTACT US </li>
              <li>NEWSLETTER</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <a className="donate" href="/">
            DONATE
          </a>
          <a href="/">LOGIN</a>
          <a href="/">
            <i class="fa-solid fa-cart-shopping"></i>0
          </a>
        </div>
      </div>
      <div className="main-header">
        <div className="logo-menu">
          <img src="logo.svg" alt="" />
          <ul>
            <li>WHERE WE PLANT</li>
            <li>GET INVOLVED</li>
            <li>ABOUT US</li>
            <li>ABOUT US</li>
            <li>WHY TREES?</li>
            <li>STORIES</li>
            <li>GIFT TREES</li>
            <li>SHOP</li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
