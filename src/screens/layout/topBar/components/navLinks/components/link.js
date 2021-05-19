import React from "react";
import { NavLink } from "react-router-dom";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import styled from "styled-components";

const activeStyle = { fontWeight: 800 };

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
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 10px;
  padding: 10px 15px;
  position: relative;
  z-index: 0;
  cursor: pointer;

  :before,
  :after {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 1px;
    background: ${colorsPalette.BLACK};
    content: "";
    opacity: 0;
    transition: all 0.3s;
  }

  :before {
    top: 0px;
    transform: translateY(-10px);
  }

  :after {
    bottom: 0px;
    transform: translateY(10px);
  }

  :hover:before,
  :hover:after {
    opacity: 1;
    transform: translateY(0px);
  }
`;
