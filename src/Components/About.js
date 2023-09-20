import React from "react";
import about_img from "../images/about-img.png";

const About = () => {
  return (
    <section class="about" id="about">
      <h1 class="heading">
        <span>about</span> us
      </h1>

      <div class="row">
        <div class="image">
          <img src={about_img} alt="" />
        </div>

        <div class="content">
          <h3>we take care of your healthy life</h3>
          <p>
            Once The Patient Arrives At The Hospital With Suspected Stroke
            Symptoms, The First Step Is To Quickly Assess The Severity Of The
            Condition. Hospitals Have Established Stroke Teams Consisting Of
            Neurologists, Emergency Physicians, Nurses, And Other Healthcare
            Professionals Who Are Trained In Stroke Management. These Teams Work
            Together To Evaluate The Patient's Symptoms, Medical History, And
            Conduct Various Diagnostic Tests, Such As Brain Imaging Scans, To
            Determine The Type And Cause Of The Stroke.
          </p>
         
        
        </div>
      </div>
    </section>
  );
};

export default About;
