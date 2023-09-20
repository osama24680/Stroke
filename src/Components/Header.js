import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#" class="logo">
        <i class="uil uil-heartbeat"></i>STROCK PREDICTION
      </a>
      <div id="menu-bar" class="uil uil-bars"></div>
      <nav class="navbar">
        <a href="#home">home</a>
        <a
          target="_blanck"
          href="https://studentaast-my.sharepoint.com/:p:/g/personal/o_m_mohamed1_student_aast_edu/EYhv8ZGJyxBAsOfOPwccpjcBQQq6le_IJ_Z2rji-AGTsSg?e=zW1dkK"
        >
          presentation
        </a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
      </nav>
    </header>
  );
};

export default Header;
