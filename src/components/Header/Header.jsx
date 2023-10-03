import React from 'react';
import {
  GridContainer,
  HeaderContainer,
  NavList,
  NavigationLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <GridContainer>
        <NavList>
          <NavigationLink to="/" aria-current="page">
            Homepage
          </NavigationLink>
          <NavigationLink to="movies">Movies</NavigationLink>
        </NavList>
      </GridContainer>
    </HeaderContainer>
  );
};

export default Header;
