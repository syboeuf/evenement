import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ picturesArray }) => (
  <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={1500}
    infinite={true}
    arrows={false}
    keyBoardControl={false}
  >
    {picturesArray.map((picture, index) => (
      <div style={{ textAlign: "center" }} key={index}>
        <img
          src={picture}
          alt={`${index}`}
          style={{ width: 180, height: 300 }}
        />
      </div>
    ))}
  </Carousel>
);

export default Slide;
