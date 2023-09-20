import React from "react";
import {Link} from "react-router-dom"
const Services = () => {
  return (
    <section class="services" id="services">
      <h1 class="heading">
        our <span>services</span>
      </h1>
      <div class="box-container">
        <div class="box">
          <i class="uil uil-file-medical"></i>
          <h3>fre checkups</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis!
          </p>
          <Link class="btn">
            learn more <span class="uil uil-arrow-right"></span>
          </Link>
        </div>
        <div class="box">
          <i class="uil uil-ambulance"></i>
          <h3>24/7 ambulance</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis!
          </p>
          <Link class="btn">
            learn more <span class="uil uil-arrow-right"></span>
          </Link>
        </div>
        <div class="box">
          <i class="uil uil-user-md"></i>
          <h3>bed facility</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis!
          </p>
          <Link class="btn">
            learn more <span class="uil uil-arrow-right"></span>
          </Link>
        </div>
        <div class="box">
          <i class="uil uil-capsule"></i>
          <h3>first aid</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis!
          </p>
          <Link class="btn">
            learn more <span class="uil uil-arrow-right"></span>
          </Link>
        </div>
        <div class="box">
          <i class="uil uil-heartbeat"></i>
          <h3>total care</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis!
          </p>
          <Link class="btn">
            learn more <span class="uil uil-arrow-right"></span>
          </Link>
        </div>
        <div class="box">
          <i class="uil uil-heartbeat"></i>
          <h3>Safety System</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis!
          </p>
          <Link class="btn">
            learn more <span class="uil uil-arrow-right"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
