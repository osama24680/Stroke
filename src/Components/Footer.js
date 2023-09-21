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
            <i class="fas fa-chevron-right"></i> statistics
          </a>
          <a href="#about">
            {" "}
            <i class="fas fa-chevron-right"></i> about{" "}
          </a>
          <a href="#doctors">
            {" "}
            <i class="fas fa-chevron-right"></i> team{" "}
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
          <h3>contact info</h3>
          <a href="https://wa.link/cn5178">
            {" "}
            <i class="fas fa-phone"></i> +20 110 129 8422{" "}
          </a>
          <a href="mayarmagdy609@gmail.com">
            <i class="fas fa-envelope"></i> mayarmagdy609@gmail.com
          </a>
        </div>

        <div class="box">
          <h3>follow us</h3>
          <a href="https://www.facebook.com/mayar.magdy.5872">facebook</a>

          <a href="https://www.linkedin.com/in/mayar-magdy-morkos-00a63022a/">
            <i class="fab fa-instagram"></i> linked in
          </a>
        </div>
      </div>

      <div class="credit">
        created by <span>ِM.M</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
