import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    &:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    @media ${theme.media.lteMedium} {

    }
  `}
`;
