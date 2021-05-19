import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "assets/projects/goal_tracker_1.jpg";
import img2 from "assets/projects/goal_tracker_2.gif";
import img3 from "assets/projects/goal_tracker_3.gif";
import img4 from "assets/projects/goal_tracker_4.gif";
import img5 from "assets/projects/goal_tracker_5.gif";

export const ExamplesCarousel = ({ images }) => {
  const imagesArray = [img1, img2, img3, img4, img5];
  if(!images) { return null; }
  const imagesItems = images.map((src) => {
    return <img src={src} alt="Example image" />;
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
  justify-content: center; align-items: center;
  .carousel-style .carousel { align-self: center; }
`;
