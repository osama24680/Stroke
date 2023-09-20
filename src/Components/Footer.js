import React from "react";

const Footer = () => {
  return (
    <section class="footer" id="footer">
      <div class="box-container">
        <div class="box">
          <h3>quick links</h3>
          <a href="#home">
            {" "}
            <i class="fas fa-chevron-right"></i> home{" "}
          </a>
          <a href="#services">
            <i class="fas fa-chevron-right"></i> services
          </a>
          <a href="#about">
            {" "}
            <i class="fas fa-chevron-right"></i> about{" "}
          </a>
          <a href="#doctors">
            {" "}
            <i class="fas fa-chevron-right"></i> doctors{" "}
          </a>
          <a href="#book">
            {" "}
            <i class="fas fa-chevron-right"></i> book{" "}
          </a>
          <a href="#review">
            {" "}
            <i class="fas fa-chevron-right"></i> review{" "}
          </a>
          <a href="#blogs">
            {" "}
            <i class="fas fa-chevron-right"></i> blogs{" "}
          </a>
        </div>

        <div class="box">
          <h3>our services</h3>
          <a href="#footer">
            <i class="fas fa-chevron-right"></i> dental care
          </a>
          <a href="#footer">
            <i class="fas fa-chevron-right"></i> message therapy
          </a>
          <a href="#footer">
            <i class="fas fa-chevron-right"></i> cardioloty
          </a>
          <a href="#footer">
            {" "}
            <i class="fas fa-chevron-right"></i> diagnosis{" "}
          </a>
          <a href="#footer">
            <i class="fas fa-chevron-right"></i> ambulance service
          </a>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i class="fas fa-phone"></i> +20 110 129 8422{" "}
          </a>
          <a href="A.h1932232@gmail.com">
            <i class="fas fa-envelope"></i> A.h1932232@gmail.com
          </a>
          <a href="#">
            <i class="fas fa-map-marker-alt"></i> Eg, Alex - Asafra
          </a>
        </div>

        <div class="box">
          <h3>follow us</h3>
          <a href="https://www.facebook.com/profile.php?id=100005745556269">
            <i class="fab fa-facebook-f"></i> facebook
          </a>
          <a href="#">
            {" "}
            <i class="fab fa-github"></i> github{" "}
          </a>
          <a href="https://www.instagram.com/ahmed.hesham2232/">
            <i class="fab fa-instagram"></i> instagram
          </a>
        </div>
      </div>

      <div class="credit">
        created by <span>ِD.T</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
