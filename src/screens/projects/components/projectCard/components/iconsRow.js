import React from "react";
import styled, { keyframes } from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconsRow = ({ links }) => {
  if(!links){ return null;}
  const linksComponents = links.map((item) => {
    return (
      <IconLink href={item.href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={item.icon}
          size="3x"
          color={colorsPalette.BLACK}
        />
      </IconLink>
    );
  });
  return <RowContainer>{linksComponents}</RowContainer>;
};

const colorIn = keyframes`
  from { font-size: 20 }
  to { font-size: 25}
`;

const colorOut = keyframes`
  from { font-size: 20 }
  to { font-size: 25}
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const IconLink = styled.a`
  flex: 1;
  align-self: center;
  svg {
    animation: ${colorOut} 0.3s ease-in-out forwards;
  }
  svg :hover {
    animation: ${colorIn} 0.3s ease-in-out forwards;
  }
`;
