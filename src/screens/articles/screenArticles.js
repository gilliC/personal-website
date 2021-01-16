import React from "react";
import styled from "styled-components";
import { BackgroundGradientRow } from "common/backgroundGradientRow";
import { ScreenTitle } from "common/screenTitle";
import { t } from "services/translation/translate";
import { VerticalSpace } from "common/verticalSpace";
import { Header } from "./components/header";
import { ArticleCard } from "./components/articleCard/articleCard";

export const ScreenArticles = () => {
  return (
      <BackgroundGradientRow topComponent={<Header />}>
        <Container>
          <ArticleCard />
          <h1>ARTICLES</h1>
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
