import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white} ;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 35px;
  width: 35px;
  margin-left: 1.5rem;
`;
