import React from "react";

const Blogs = () => {
  return (
    <section class="blogs" id="blogs">
      <h1 class="heading">
        our <span>blogs</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <div class="image">
            <img src="images/blog-1.jpg" alt="" />
          </div>
          <div class="content">
            <div class="icon">
              {/* <a href="#blogs">
                <i class="fas fa-calendar"></i> 1st may, 2021
              </a>
              <a href="#blogs">
                {" "}
                <i class="fas fa-user"></i> by admin{" "}
              </a> */}
            </div>
            <h3>blog title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            {/* <a href="#blogs" class="btn">
              learn more <span class="fas fa-chevron-right"></span>
            </a> */}
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="images/blog-2.jpg" alt="" />
          </div>
          <div class="content">
            <div class="icon">
              {/* <a href="#blogs">
                <i class="fas fa-calendar"></i> 1st may, 2021
              </a>
              <a href="#blogs">
                {" "}
                <i class="fas fa-user"></i> by admin{" "}
              </a> */}
            </div>
            <h3>blog title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            {/* <a href="#blogs" class="btn">
              learn more <span class="fas fa-chevron-right"></span>
            </a> */}
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="images/blog-3.jpg" alt="" />
          </div>
          <div class="content">
            <div class="icon">
              {/* <a href="#blogs">
                <i class="fas fa-calendar"></i> 1st may, 2021
              </a>
              <a href="#blogs">
                {" "}
                <i class="fas fa-user"></i> by admin{" "}
              </a> */}
            </div>
            <h3>blog title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            {/* <a href="#blogs" class="btn">
              learn more <span class="fas fa-chevron-right"></span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
