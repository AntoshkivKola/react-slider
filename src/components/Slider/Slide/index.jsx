import React, { Component } from "react";


function Slide (props) {
  
  const {img, title, description,prevSlide, nextSlide} = props;


    return (
      <>
        <div>
          <button onClick={prevSlide}>{"<"}</button>
          <img src={img} alt={title} />
          <button onClick={nextSlide}>{">"}</button>
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </>
    );
  
}

export default Slide;
