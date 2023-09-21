import React from 'react'
import model1 from "../images/model1.jpeg"
import model2 from "../images/model2.jpg"
import model3 from "../images/model3.jpg"
const Riview = () => {
  return (
    <section class="review" id="review">
    <h1 class="heading">client's <span>review</span></h1>

    <div class="box-container">
      <div class="box">
        <img src={model1} alt="" />
        <h3>Flar Jackmen</h3>
       
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
          libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
          reiciendis consequuntur optio dolorem!
        </p>
      </div>

      <div class="box">
        <img src={model2} alt="" />
        <h3>Bella Aner</h3>
        
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
          libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
          reiciendis consequuntur optio dolorem!
        </p>
      </div>

      <div class="box">
        <img src={model3} alt="" />
        <h3>Max Neven</h3>
        
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
          libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
          reiciendis consequuntur optio dolorem!
        </p>
      </div>
    </div>
  </section>
  )
}

export default Riview