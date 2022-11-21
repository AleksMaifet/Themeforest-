import styled from 'styled-components';

import theme from '@/theme';

import { PrimaryButtonWrapperType, StyleOptionsType } from './types';

export const ButtonWrapper = styled.button<PrimaryButtonWrapperType<StyleOptionsType>>`
  display: inline-flex;
  justify-content: ${({ flex }) => (flex ? 'space-evenly' : 'center')};
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  width: ${({ styleOptions }) => styleOptions?.width || theme.spaces[13] * 2}px;
  padding: ${({ styleOptions }) => styleOptions?.padding || theme.spaces[2]}px 0;
  background-color: ${({ styleOptions }) =>
    styleOptions?.backGroundColor || theme.colors.Primary};
  font-family: ${theme.fontFamily[0]};
  border-radius: ${theme.spaces[1]}px;
  cursor: pointer;
  box-shadow: ${({ boxShadow }) => (boxShadow ? theme.boxShadows[0] : 'none')};
  transition: ease 0.3s;
  margin: ${({ styleOptions }) => styleOptions?.margin || theme.spaces[0]}px 0;

  span {
    font-size: ${theme.textSize.sm}rem;
    color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Tertiary};
  }

  svg {
    fill: ${({ styleOptions }) => styleOptions?.color || theme.colors.Tertiary};
  }

  &:hover {
    opacity: ${theme.opacity.opacity50};
  }

  &:disabled {
    background-color: ${theme.colors.Grey};
    opacity: ${theme.opacity.opacity50};
  }
`;
