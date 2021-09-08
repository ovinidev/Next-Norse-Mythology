/* eslint-disable react/forbid-prop-types */
import P from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { mapData } from '../api/map-data';
import { SwitchContext } from '../context/SwitchContext';
import Home from '../templates/Home';
import { GlobalStyles } from '../styles/global-styles';

export default function Index({ data = null }) {
  const { theme } = useContext(SwitchContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home data={data} />
    </ThemeProvider>
  );
}

// Função mais poderosa do Next
export const getStaticProps = async () => {
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

Index.propTypes = {
  data: P.array,
};
