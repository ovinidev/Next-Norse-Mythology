import styled, { css, DefaultTheme } from 'styled-components';

type Background = {
  background?: boolean;
}

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.txt};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.txt};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;.
  `}
`;
