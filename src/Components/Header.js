import React from "react";
const Header = () => {
  return (
    <header>
      <p class="logo">
        <i class="uil uil-heartbeat"></i>STROCK PREDICTION
      </p>
      <div id="menu-bar" class="uil uil-bars"></div>
      <nav class="navbar">
        <a href="#home">home</a>
        <a
          target="_blanck"
          href="https://www.canva.com/design/DAFvAH95Yyw/VAOn8MGL0lmhFS_q26UjeQ/edit"
        >
          presentation
        </a>
        <a href="#services">statistics</a>
        <a href="#about">about</a>
        <a href="#blogs">blogs</a>
        <a href="#doctors">team</a>
        <a href="#review">review</a>
      
      </nav>
    </header>
  );
};

export default Header;
