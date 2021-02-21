import React from "react";
import PropTypes from "prop-types";

function Slide(props) {
  const { img, title, description, prevSlide, nextSlide } = props;

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

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  prevSlide: PropTypes.func,
  nextSlide: PropTypes.func,
};

export default Slide;
