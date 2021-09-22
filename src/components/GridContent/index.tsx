import { Header } from '../Header';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Container, Html } from './styles';

export type GridContentProps = {
  title: string,
  html: string,
  background: boolean,
  sectionId: string,
};

export const GridContent = ({
  title, html, background = false, sectionId = '',
}: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Header uppercase colorDark as="h2">
          {title}
        </Header>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};
