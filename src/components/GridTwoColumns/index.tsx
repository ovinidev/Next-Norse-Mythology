import {
  Container, TextContainer, ImageContainer, Image,
} from './styles';
import { SectionBackground } from '../SectionBackground';
import { Header } from '../Header';
import { TextComponent } from '../TextComponent';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcImg: string;
  background: boolean;
  sectionId: string;
};

export const GridTwoColumns = ({
  title, text, srcImg, background = false, sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container background={background}>
        <TextContainer>
          <Header uppercase colorDark as="h2" size="huge">
            {title}
          </Header>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};
