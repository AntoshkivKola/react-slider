import React from "react";
import PropTypes from "prop-types";
import styles from "./Slide.module.scss"; 

function Slide(props) {
  const { img, title, description, prevSlide, nextSlide } = props;

  return (
    <div className={styles.slide}>
      <div>
        <div className={styles.imgWwrapper}>
          <button
            className={`${styles.btn} ${styles.btn_prev} `}
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <img src={img} alt={title} />
          <button
            className={`${styles.btn} ${styles.btn_next} `}
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
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
