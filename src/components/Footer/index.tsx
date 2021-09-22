import { Container } from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Container>
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
    </Container>
  );
};
