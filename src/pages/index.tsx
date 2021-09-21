import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { GetStaticProps } from 'next';
import { mapData } from '../api/map-data';
import { SwitchContext } from '../context/SwitchContext';
import Home from '../templates/Home';
import { GlobalStyles } from '../styles/global-styles';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  const { theme } = useContext(SwitchContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home data={data} />
    </ThemeProvider>
  );
}

// Função mais poderosa do Next
export const getStaticProps: GetStaticProps = async () => {
  const raw = await fetch(
    'https://norse-mythology-project.herokuapp.com/pages/?slug=mitologia-nordica',
  );
  const json = await raw.json();

  const data = mapData(json);

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
