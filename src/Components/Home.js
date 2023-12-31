import React from "react";
import home_img from "../images/home_img.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <section class="home" id="home">

      <div class="image">
        <img src={home_img} alt="" />
      </div>

      <div class="content">
        <h3>stay safe, stay healthy</h3>
        <p>
          Suffering from a stroke can have life-changing effects on people and
          their families. You can rely on a personal nurse to support you.
        </p>

        <a href="#ContactUs" class="btn">
          contact us
          <span>
            <AiOutlineArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Home;
