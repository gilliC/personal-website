import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "assets/projects/goal_tracker_1.jpg";
import img2 from "assets/projects/goal_tracker_2.gif";
import img3 from "assets/projects/goal_tracker_3.gif";
import img4 from "assets/projects/goal_tracker_4.gif";
import img5 from "assets/projects/goal_tracker_5.gif";

export const ExamplesCarousel = () => {
  const imagesArray = [img1, img2, img3, img4, img5];
  const imagesItems = imagesArray.map((src) => {
    return <img src={src} />;
  });
  return (
    <SideContainer>
      <Carousel
        className="carousel-style"
        showIndicators={true}
        showThumbs={false}
        autoPlay={false}
      >
        {imagesItems}
      </Carousel>
    </SideContainer>
  );
};

const SideContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  .carousel-style .carousel {
    height: 40vh;
    width: 25vh !important;
    align-self: center;
  }
`;
