import React from "react";
import styled from "styled-components";
import { ContentCotainer } from "common/contentCotainer";

export const ScreenContainer = ({ children }) => {
  return <ContentCotainerStyled>{children}</ContentCotainerStyled>;
};

const ContentCotainerStyled = styled(ContentCotainer)`
  position: absolute; top: 30vh; right: 25%;
  width: 50%; height: 50%;
`;
