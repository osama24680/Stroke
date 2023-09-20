import React from "react";
// import { Link } from "react-router-dom";
import { AiFillPushpin, AiFillSetting } from "react-icons/ai";
const Services = () => {
  return (
    <section class="services" id="services">
      <h1 class="heading">
        <span>brief</span>
      </h1>
      <div className="box_allContainer">
        <div class="box-container">
          <div class="box">
            <i class="uil uil-file-medical"></i>
            <h3>Observations.</h3>
            <p>
              {" "}
              <AiFillSetting />
              There is a positive trend of patients who have had a Stroke as
              they have a high BMI.{" "}
            </p>
            <p>
              {" "}
              <AiFillSetting />
              There are no data from patients who smoke, have a high BMI and
              have a Stroke.{" "}
            </p>
            <p>
              {" "}
              <AiFillSetting />
              The patients who smoked and who have a high BMI, 7% have had a
              Stroke.{" "}
            </p>
            <p>
              {" "}
              <AiFillSetting />
              The patients who have never smoked but have a high BMI 5% have had
              a Stroke.{" "}
            </p>
            <p>
              {" "}
              <AiFillSetting />
              The percentage of patients with Stroke with a high BMI between
              those who smoked and those who did not smoke is very similar.{" "}
            </p>
          </div>

          <div class="box">
            <i class="uil uil-heartbeat"></i>
            <h3>Conclusions</h3>
            <p>
              {" "}
              <AiFillPushpin />
              The assumption has not been possible to verify, there are no data
              from patients who smoke with a high BMI and have a stroke.
            </p>
            <p>
              {" "}
              <AiFillPushpin />
              It is recommended that these patients decrease their BMI level
              since it is a strong factor to suffer from a Stroke.
            </p>
          </div>
        </div>
        {/* **************************************************************** */}
        {/* **************************************************************** */}
        {/* **************************************************************** */}

        <div class="box-container">
          <div class="box">
            <i class="uil uil-file-medical"></i>
            <h3>Observations.</h3>
            <p>
              {" "}
              <AiFillSetting />
              5.2% of patients at an age between 46 and 65 have had a Stroke.{" "}
            </p>
            <p>
              {" "}
              <AiFillSetting />
              Patients over 65 have had 13.9% of stroke cases.{" "}
            </p>
            <p>
              {" "}
              <AiFillSetting />
              Most of the "adulthouse" and "Old Age" patients have a high BMI.{" "}
            </p>
          </div>

          <div class="box">
            <i class="uil uil-heartbeat"></i>
            <h3>Conclusions</h3>
            <p>
              {" "}
              <AiFillPushpin />
              Asuncion was fulfilled, age and BMI is a risk factor to have a
              stroke.
            </p>
            <p>
              {" "}
              <AiFillPushpin />
              Patients over 46 should improve their BMI since most of those who
              at that age have a stroke have a high BMI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
