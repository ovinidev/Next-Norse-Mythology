import { ReactNode } from 'react';
import { Container } from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type baseProps = {
  children: ReactNode;
  links: MenuLinkProps[];
  footerHtml: string;
  logoData: LogoLinkProps;
};

export const Base = ({
  links, logoData, footerHtml, children,
}: baseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
};
