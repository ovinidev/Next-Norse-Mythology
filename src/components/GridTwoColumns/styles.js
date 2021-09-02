import styled, { css } from 'styled-components';
import { Title } from '../Header/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${background ? theme.colors.txt : theme.colors.white};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 8rem;

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      padding: 0;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 70%;  
  `}
`;
