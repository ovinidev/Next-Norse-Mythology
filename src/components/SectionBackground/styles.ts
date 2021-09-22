import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.txt};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.txt};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;.
  `}
`;
