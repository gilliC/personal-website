import React from "react";
import styled, { keyframes } from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconsRow = (props) => {
  return (
    <RowContainer>
      <IconLink>
        <FontAwesomeIcon icon={faGooglePlay} size="3x" color={colorsPalette.BLACK} />
      </IconLink>
      <IconLink>
        <FontAwesomeIcon icon={faGithub} size="3x" color={colorsPalette.BLACK} />
      </IconLink>
    </RowContainer>
  );
};

const colorIn = keyframes`
  from { color: ${colorsPalette.BLACK}; filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0));}
  to { color: ${colorsPalette.MAIN_COLOR_TO}; filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));}
`;

const colorOut = keyframes`
  from { color: ${colorsPalette.MAIN_COLOR_TO}; filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));}
  to { color: ${colorsPalette.BLACK}; filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0));}
`;

const RowContainer = styled.div`flex: 1; display: flex; flex-direction: row;`;
const IconLink = styled.a` flex: 1; align-self: center;
svg { animation: ${colorOut} 0.3s ease-in-out forwards; }
:hover svg { animation: ${colorIn} 0.3s ease-in-out forwards; }
`;
