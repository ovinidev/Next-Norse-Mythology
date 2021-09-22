import P from 'prop-types';
import { ReactNode } from 'react';
import { Container } from './styles';

export type MenuLinkProps = {
  children: ReactNode,
  link: string,
  newTab: boolean,
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
};
