import Image from 'next/image';
import { Container } from './styles';
import { Header } from '../Header';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  slug?: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text, srcImg = '', link, newTab = false,
}: LogoLinkProps) => {
  return (
    <Header size="small" uppercase colorDark>
      <Container href={link}>
        {!!srcImg && <Image src={srcImg} alt={text} />}
        {!srcImg && text}
      </Container>
    </Header>
  );
};
