import { Container, Grid, GridElement } from './styles';
import { SectionBackground } from '../SectionBackground';
import { Header } from '../Header';
import { TextComponent } from '../TextComponent';

export type GridElements = {
  title: string;
  description: string;
}

export type GridTextProps = {
  background: boolean;
  title: string;
  description: string;
  grid: GridElements[];
  sectionId: string;
  component?: string;
};

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Header size="huge" uppercase colorDark={background} as="h2">
          {title}
        </Header>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((el) => (
            <GridElement key={el.title}>
              <Header size="medium" colorDark={background} as="h3">
                {el.title}
              </Header>
              <TextComponent>{el.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
