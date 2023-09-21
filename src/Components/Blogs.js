import React from "react";
import { AiFillSetting } from "react-icons/ai";
import avoideStroke from "../images/avoidStroke.jpeg";
import strokMind from "../images/strokMind.jpg";
import types from "../images/types.jpg";
const Blogs = () => {
  return (
    <section class="blogs" id="blogs">
      <h1 class="heading">
        our <span>blogs</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <div class="image">
            <img src={avoideStroke} alt="" />
          </div>
          <div class="content">
            <div class="icon"></div>
            <h3>How to avoid the stroke?</h3>
            <p>
              <AiFillSetting style={{ color: "#16a085" }} /> Choose healthy
              foods and drinks. Choosing healthy meal and snack options can help
              you prevent stroke
            </p>
            <p>
              <AiFillSetting style={{ color: "#16a085" }} /> Keep a healthy
              weight. Having overweight or obesity increases your risk for
              stroke
            </p>
            <p>
              <AiFillSetting style={{ color: "#16a085" }} /> Get regular
              physical activity.
            </p>
            <p>
              <AiFillSetting style={{ color: "#16a085" }} />
              Don't smoke
            </p>
            <p>
              <AiFillSetting style={{ color: "#16a085" }} />
              Limit alcohol.
            </p>
            <p>
              <AiFillSetting style={{ color: "#16a085" }} />
              Check cholesterol
            </p>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src={strokMind} alt="" />
          </div>
          <div class="content">
            <div class="icon"></div>
            <h3>how the strokes effect to the body?</h3>
            <p>
              A stroke, sometimes called a brain attack, occurs when something
              blocks blood supply to part of the brain or when a blood vessel in
              the brain bursts. In either case, parts of the brain become
              damaged or die. A stroke can cause lasting brain damage, long-term
              disability, or even death.
            </p>
            <p>
              The brain controls our movements, stores our memories, and is the
              source of our thoughts, emotions, and language. The brain also
              controls many functions of the body, like breathing and digestion
            </p>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src={types} alt="" />
          </div>
          <div class="content">
            <div class="icon"></div>
            <h3>Types of stroke</h3>
            <p>
              <b><ul> Ischemic stroke</ul> </b>
              <br />
                Most strokes are ischemic strokes.2 An ischemic stroke occurs
                when blood clots or other particles block the blood vessels to
                the brain. Fatty deposits called plaque can also cause blockages
                by building up in the blood vessels.
             
            </p>
            <p>
              <b> <ul> Hemorrhagic stroke</ul></b>
              <br />
                A hemorrhagic stroke happens when an artery in the brain leaks
                blood or ruptures (breaks open). The leaked blood puts too much
                pressure on brain cells, which damages them. High blood pressure
                and aneurysms—balloon-like bulges in an artery that can stretch
                and burst—are examples of conditions that can cause a
                hemorrhagic stroke.
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
