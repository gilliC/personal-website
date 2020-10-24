import React from "react";
import { NavLink } from "react-router-dom";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import styled from "styled-components";

const activeStyle = {
    fontWeight: 600
}

export const Link = ({ label, to }) => {
  return (
    <StyledNavLink to={to} activeStyle={activeStyle} exact>
      {label}
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  font-family: ${MAIN_FONT};
  color: ${colorsPalette.BLACK};
  font-size: 16px;
  text-decoration: none;
  width: min(100vw, 100px);
  font-weight: 400;
`;
