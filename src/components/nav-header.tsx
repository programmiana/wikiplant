import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../global-style";
import { Link } from "react-router-dom";
import { Container } from "./container";

export const HeaderPrimaryCenter = styled.div`
  height: 10rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding-left: 5rem;
  color: ${Colors.brandGreen};
  font-family: "Roboto Bold";
  font-size: 3rem;
  font-weight: 900;
  text-decoration: none;
`;

export const NavHeader: FC = () => {
  return (
    <HeaderPrimaryCenter>
      <Container gap={20}>
        <StyledLink to="/">{"Wikiplants".toUpperCase()}</StyledLink>
      </Container>
    </HeaderPrimaryCenter>
  );
};
