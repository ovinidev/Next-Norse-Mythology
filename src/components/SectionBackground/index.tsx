import { ReactNode } from 'react';
import { Container } from './styles';
import { SectionContainer } from '../SectionContainer';

export type SectionBackgroundProps = {
  children: ReactNode,
  background: boolean,
  sectionId: string,
};

const random = () => `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  // eslint-disable-next-line no-unneeded-ternary
  const id = sectionId ? sectionId : random();

  return (
    <Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
