import React from "react";
import styled from "styled-components";
import { BackgroundGradientRow } from "common/backgroundGradientRow";
import { ContentCotainer } from "common/contentCotainer";

export const ScreenContainer = ({ children }) => {
  return (
    <BackgroundGradientRow>
      <Container>
        <ContentCotainerStyled>
          {children}
        </ContentCotainerStyled>
      </Container>
    </BackgroundGradientRow>
  );
};

const ContentCotainerStyled = styled(ContentCotainer)`
display: flex; flex-direction: column; flex: 1;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;
