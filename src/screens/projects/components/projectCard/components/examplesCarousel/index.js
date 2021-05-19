import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const ExamplesCarousel = ({ images }) => {
  if(!images) { return null; }
  const imagesItems = images.map((src) => {
    return <img src={src} alt="Example image" />;
  });
  return (
    <SideContainer>
      <Carousel
        className="carousel-style"
        showIndicators
        showThumbs={false}
        autoPlay={false}
        infiniteLoop
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
