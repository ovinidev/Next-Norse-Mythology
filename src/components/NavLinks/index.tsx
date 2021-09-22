import { MenuLink, MenuLinkProps } from '../MenuLink';
import { Container } from './styles';

export type NavLinksProps = {
  links: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};
