import React from "react";
import styled, { keyframes } from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconsRow = (props) => {
  return (
    <RowContainer>
      <IconLink href="https://play.google.com/store/apps/details?id=com.goalstracking" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGooglePlay} size="3x" color={colorsPalette.BLACK} />
      </IconLink>
      <IconLink href="https://github.com/gilliC/Achieving-Goals-Assistant" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x" color={colorsPalette.BLACK}/>
      </IconLink>
    </RowContainer>
  );
};

const colorIn = keyframes`
  from { font-size: 20 }
  to { font-size: 25}
`;

const colorOut = keyframes`
  from { font-size: 20 }
  to { font-size: 25}
`;

const RowContainer = styled.div`flex: 1; display: flex; flex-direction: row;`;
const IconLink = styled.a` flex: 1; align-self: center;
svg { animation: ${colorOut} 0.3s ease-in-out forwards; }
svg :hover { animation: ${colorIn} 0.3s ease-in-out forwards; }
`;
