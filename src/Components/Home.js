import React from "react";
import home_img from "../images/home_img.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

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

        <Link class="btn">
          contact us
          <span>
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
