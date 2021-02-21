import React, { Component } from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";

const slides = {
  imgs: [
    "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200",
    "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200",
    "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200",
    "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn1200",
  ],
  titles: [
    "HUBBLE MARKS 30 YEARS IN SPACE WITH TAPESTRY OF BLAZING",
    "LAGOON NEBULA (VISIBLE-LIGHT VIEW)",
    "HERBIG-HARO JET HH 24",
    "2014 HUBBLE WFC3/UVIS IMAGE OF M16",
  ],
  descriptions: [
    "A colorful image resembling a cosmic version of an undersea world teeming with stars is being released to commemorate the Hubble Space Telescope's 30 years of viewing the wonders of space.",
    "This colorful image, taken by NASA’s Hubble Space Telescope, celebrates the Earth-orbiting observatory’s 28th anniversary of viewing the heavens, giving us a window seat to the universe’s extraordinary tapestry of stellar birth and destruction.",
    "Just in time for the release of the movie ",
    "NASA's Hubble Space Telescope has photographed what looks like a cosmic, double-bladed lightsaber.",
    "NASA's Hubble Space Telescope has revisited the famous Pillars of Creation, revealing a sharper and wider view of the structures in this visible-light image",
  ],
};

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      maxSlide: slides.imgs.length,
      startSlideShow: false,
      interval: 3,
      intervalId: null,
    };
  }

  nextSlide = () => {
    this.setState((state) => {
      return { currentSlide: (state.currentSlide + 1) % state.maxSlide };
    });
  };

  prevSlide = () => {
    this.setState((state) => {
      return {
        currentSlide:
          (state.currentSlide - 1 + state.maxSlide) % state.maxSlide,
      };
    });
  };

  slideShow = () => {
    const { interval, startSlideShow, intervalId } = this.state;
    this.setState((state) => {
      return { startSlideShow: !state.startSlideShow };
    });

    if (startSlideShow) {
      clearInterval(intervalId);
      return;
    }

    const id = setInterval(() => {
      this.nextSlide();
    }, interval * 1000);

    this.setState({ intervalId: id });
  };

  handleChengeInterval = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { currentSlide, startSlideShow, interval } = this.state;
    return (
      <div className={styles.container}>
        <Slide
          img={slides.imgs[currentSlide]}
          title={slides.titles[currentSlide]}
          description={slides.descriptions[currentSlide]}
          nextSlide={this.nextSlide}
          prevSlide={this.prevSlide}
        />
        <button className={styles.slideShowBtn} onClick={this.slideShow}>
          {startSlideShow ? "Stop" : "Start"} slide show
        </button>
        <div className={styles.slideShowSettings}>
          Slide show speed: {interval}s 
          <input
            type="range"
            name="interval"
            min="3"
            max="15"
            step="1"
            value={interval}
            onChange={this.handleChengeInterval}
            disabled={startSlideShow}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
