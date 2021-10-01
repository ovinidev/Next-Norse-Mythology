import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    border-radius: 50%
  `}
`;
