import React from "react";
import styled from "styled-components";
import { BackgroundGradientRow } from "common/backgroundGradientRow";
import { TextContainer } from "./components/textCotainer";
import img from "assets/about_image.png";
import { ScreenTitle } from "common/screenTitle";

export const ScreenAbout = () => {
  return (
    <BackgroundGradientRow>
      <Container>
        <TextContainer>
          <ScreenTitle text="About Me" />
        </TextContainer>
        <img src={img} height={275} width={467} />
      </Container>
    </BackgroundGradientRow>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  height: 100%;
`;
