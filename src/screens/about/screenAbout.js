import React from "react";
import styled from "styled-components";
import { BackgroundGradientRow } from "common/backgroundGradientRow";
import { TextContainer } from "./components/textCotainer";
import img from "assets/about_image.png";
import { ScreenTitle } from "common/screenTitle";
import { t } from "services/translation/translate";
import { Description } from "./components/description";
import { SocialMediaIcons } from "./components/socialMediaIcons";
import { VerticalSpace } from "common/verticalSpace";

export const ScreenAbout = () => {
  return (
    <BackgroundGradientRow>
      <Container>
        <TextContainer>
          <ScreenTitle>{t("aboutScreen.title")}</ScreenTitle>
          <Description />
          <VerticalSpace height={35} />
          <SocialMediaIcons />
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
