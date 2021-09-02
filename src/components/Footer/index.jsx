import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
      <div>
        <a href="https://www.instagram.com/vinimedeiros13/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/vinimedeiros13/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=7zHfYLDQEvw" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
