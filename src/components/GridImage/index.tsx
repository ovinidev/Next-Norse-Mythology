import { Header } from '../Header';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import {
  Container, Grid, GridElement, Image,
} from './styles';

export type GridImageProps = {
  background: boolean;
  title: string;
  description: string;
  grid: [altText: string, srcImg: string];
  sectionId: string;
};

export const GridImage = ({
  title, description, grid, background = false, sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Header size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Header>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((el) => (
            <GridElement key={`${el.srcImg}${el.altText}`}>
              <Image src={el.srcImg} alt={el.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
