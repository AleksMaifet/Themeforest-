import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const HeaderContainer = styled.header`
  ${handleContainerStyles(theme.colors.Background, theme.spaces[8])}
`;

export const NavigationWrapper = styled.nav``;

export const NavLinkWrapper = styled(NavLink)`
  color: ${theme.colors.Grey};
  font-size: ${theme.textSize.sm}rem;

  :nth-child(n + 2) {
    margin-left: ${theme.spaces[5]}px;
  }

  &:hover {
    color: ${theme.colors.Primary};
  }

  &.active {
    color: ${theme.colors.Primary};
    text-decoration: underline;
  }
`;
