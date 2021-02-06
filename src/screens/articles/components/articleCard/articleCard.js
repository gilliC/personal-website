import React from "react";
import styled from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { CardContent } from "./cardContent/cardContent";

export const ArticleCard = (props) => {
  return (
    <Container>
        <Image src={props.img}/>
        <CardContent {...props} />
    </Container>
  );
};

const Container = styled.div`
background-color: ${colorsPalette.WHITE};
height: max(450px, 55vh); width: min(350px,22vw);
box-shadow: rgba(0, 0, 0, 0.78) 0px 10px 10px;
border-bottom-right-radius: 50px; border-top-left-radius: 50px;
`;
const Image = styled.img` height: 40%; width: 100%; border-top-left-radius: 50px; `;
