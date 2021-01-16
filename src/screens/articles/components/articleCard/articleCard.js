import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { t } from "services/translation/translate";
import { VerticalSpace } from "common/verticalSpace";
import { TitleBig } from "common/titleBig";
import { colorsPalette } from "services/styling/consts";
import { CardContent } from "./cardContent/cardContent";

export const ArticleCard = () => {
  return (
    <Container>
        <Image src="https://miro.medium.com/max/700/0*z--mIwe7OjCnx4Jz"/>
        <CardContent />
    </Container>
  );
};

const Container = styled.div`
background-color: ${colorsPalette.WHITE};
height: 500px; width: 300px;
box-shadow: rgba(0, 0, 0, 0.78) 0px 10px 10px;
border-bottom-right-radius: 50px; border-top-left-radius: 50px;
`;
const Image = styled.img` height: 40%; width: 100%; border-top-left-radius: 50px; `;
