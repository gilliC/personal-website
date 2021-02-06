import React from "react";
import styled, { keyframes } from "styled-components";
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

const slideUpDown = keyframes`
  0% { transform: translateY(0px) rotate(-270deg) scale(1.5);}
  10% { transform: translateY(-10px) rotate(-270deg) scale(1.5);}
  70% { transform: translateY(10px) rotate(-270deg) scale(1.5); }
  100% { transform: translateY(0px) rotate(-270deg) scale(1.5); }
`;
const rotate = keyframes`
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(-270deg) scale(1.5); }
`;

const rotateOut = keyframes`
  from { transform: rotate(-270deg) scale(1.5); }
  to { transform: rotate(0deg) scale(1); }
`;

const Link = styled.a`
  text-decoration-line: none;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  align-items:center;
  .fa-arrow-right{
  animation: ${rotateOut} 0.5s linear forwards;
  }
  :hover .fa-arrow-right {
    animation-name: ${rotate}, ${slideUpDown};
    animation-duration: 0.5s, 2s;
    animation-delay: 0ms, 0.6s; /* add this */
    animation-timing-function: ease-in, linear;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards, none;
  }
`;
