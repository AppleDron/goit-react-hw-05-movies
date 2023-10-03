import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const HeaderContainer = styled.div`
  background-color: #fff;
  padding-block: 1em;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5em;
`;

export const NavigationLink = styled(NavLink)`
  color: inherit;
  display: block;
  padding-inline: 1em;
  text-decoration: none;

  &.active {
    background-color: #000;
    border-radius: 999em;
    color: #fff;
  }
`;

export const GridContainer = styled.div`
  inline-size: 90%;
  margin-inline: auto;
  max-inline-size: 48em;
`;
