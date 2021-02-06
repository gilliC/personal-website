import React from "react";
import styled from "styled-components";
import { ArticleCard } from "./articleCard/articleCard";
import * as data from '../logic/articles.json';

export const ArticlesList = () => {
  const articlesCards = data.default.map(item=> <ArticleCard key={item.title} { ...item } /> );
  return (
    <Container>
      {articlesCards}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  position: absolute; top: 32.4vh;
`;
