import P from 'prop-types';
import Image from 'next/image';
import * as Styled from './styles';
import { Header } from '../Header';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Header size="small" uppercase colorDark>
      <Styled.Container href={link}>
        {!!srcImg && <Image src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Header>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
