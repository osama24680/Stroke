import React from 'react'
import {AiFillFacebook,AiFillLinkedin} from "react-icons/ai"
import mayar from "../images/mayar.jpg"
import naser from "../images/naser.jpeg"
import fady from "../images/fady.jpeg"
import hussine from "../images/hussine.jpeg"
const Team = () => {
  return (
    <section class="doctors" id="doctors">
      <h1 class="heading">our <span>team</span></h1>

      <div class="box-container">
        <div class="box">
          <img src={naser} alt="" />
          <h3>Eng. Ahmed Abd-Elnasser</h3>
          <span>(Facilitator)</span>
          <div class="share">
           <a href="https://www.linkedin.com/in/ahmed-abdelnasser-sayed/"><AiFillLinkedin /></a>
          </div>
        </div>

  
        <div class="box">
          <img src={mayar} alt="" />
          <h3>Mayar Magdy</h3>
          <span>(Student)</span>
          <div class="share">
           <a href="https://www.facebook.com/mayar.magdy.5872"><AiFillFacebook /></a>
           <a href="https://www.linkedin.com/in/mayar-magdy-morkos-00a63022a/"><AiFillLinkedin /></a>
          </div>
        </div>

        <div class="box">
          <img src={fady} alt="" />
          <h3>Fady Sherief</h3>
          <span>(Student)</span>
          <div class="share">
           <a href="https://www.facebook.com/fadyelkessaleb/"><AiFillFacebook /></a>
           <a href="https://www.linkedin.com/in/fady-sherif-113527233/"><AiFillLinkedin /></a>
          </div>
        </div>

        <div class="box">
          <img src={hussine} alt="" />
          <h3>Ahmed Hussine</h3>
          <span>(Student)</span>
          <div class="share">
           <a href="https://www.linkedin.com/in/ahmed-hussein-aa3512196/"><AiFillLinkedin /></a>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default Team