import { ReactNode } from 'react';
import { Container } from './styles';

export type SectionContainerProps = {
  children: ReactNode,
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
