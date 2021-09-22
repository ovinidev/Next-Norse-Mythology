import Image from 'next/image';
import { Container } from './styles';
import { Header } from '../Header';

export type LogoLinkProps = {
  text: string,
  srcImg?: string,
  link: string,
};

export const LogoLink = ({ text, srcImg = '', link }: LogoLinkProps) => {
  return (
    <Header size="small" uppercase colorDark>
      <Container href={link}>
        {!!srcImg && <Image src={srcImg} alt={text} />}
        {!srcImg && text}
      </Container>
    </Header>
  );
};
