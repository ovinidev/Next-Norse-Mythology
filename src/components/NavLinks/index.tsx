import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import { Container } from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ).isRequired,
};
