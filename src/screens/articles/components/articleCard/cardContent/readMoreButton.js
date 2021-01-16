import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette } from "services/styling/consts";
import { TitleSmall } from "common/titleSmall";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReadMoreButton = () => {
  return (
    <Link href="https://medium.com/@gillicarmon/create-color-scheme-for-vim-335e842e29ea" target="_blank" rel="noopener noreferrer">
      <Text>Read More</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" color={colorsPalette.BLACK} />
    </Link>
  );
};

const Text = styled(TitleSmall)`
  font-size: min(1vw, 16px);
  text-decoration-line: none;
  margin-right: 20px;
`;
const Link = styled.a`
  text-decoration-line: none;
  display: flex;
  flex-direction: row;
`;
